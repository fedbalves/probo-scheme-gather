import dotenv from "dotenv";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { execute, GraphQLObjectType, GraphQLSchema, subscribe } from "graphql";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { nodeField } from "../../core/Node/component";
import GithubProvider from "../../providers/Github/component";
import DebugHandler from "../../utils/Debug/component";
import FetchHandler from "../../utils/Fetch/component";
import { ProjectQueries } from '../Repositories/actions';
import appSettings from "./props";

dotenv.config();

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...ProjectQueries,
    node: nodeField,
  },
});
  
// const MutationType = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {},
// });

export const schema = new GraphQLSchema({
  query: QueryType,
  // mutation: MutationType,
});
  
const app = express();

const debug = new DebugHandler({ service: "client:application" });
const fetcher = new FetchHandler({ debugger: debug });

app.use(
    appSettings.endpoint,
    graphqlHTTP({
      schema,
      context: {
          Debug: debug,
          Fetcher: fetcher,
          GithubProvider: new GithubProvider({ debugger: debug }),
      },
      graphiql: {
        headerEditorEnabled: true,
      },
    })
  );

  const ws = createServer(app);

ws.listen(appSettings.port, () =>
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server: ws,
      path: appSettings.subscriptionEndpoint,
    }
  )
);

export { app, ws };
