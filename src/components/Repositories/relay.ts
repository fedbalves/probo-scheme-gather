import {
  GraphQLFieldConfig, GraphQLInt,
  GraphQLNonNull, GraphQLObjectType, GraphQLOutputType, GraphQLString
} from "graphql";
import { registerType } from "../../core/Node/props";
import repositoriesProps from "./props";
import { TRepositoriesVendorResponse } from "./types";

export const ProjectVendorType: GraphQLOutputType = registerType(
  new GraphQLObjectType({
    name: `Vendor_${repositoriesProps.resource}`,
    fields: (): {
      [key in keyof TRepositoriesVendorResponse]: GraphQLFieldConfig<{}, {}>;
    } => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      html_url: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      node_id: { type: new GraphQLNonNull(GraphQLString) },
    }),
  })
);

