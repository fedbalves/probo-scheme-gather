import { GraphQLList } from "graphql";
import { TAppContext } from "../App/types";
import { ProjectVendorType } from "./relay";

export const ProjectQueries = {
  allProjects: {
    type: new GraphQLList(ProjectVendorType),
    args: {},
    resolve: async (_: any, __: any, ctx: TAppContext) => {
      const { data } = await ctx.GithubProvider.send({
          method: 'GET',
          url: '/orgs/Captalys/repos',
      });

      return data;
    },
  },
};
