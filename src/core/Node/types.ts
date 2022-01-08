import { GraphQLObjectType } from 'graphql';

export type RegisteredTypes = {
  [key: string]: GraphQLObjectType | Promise<GraphQLObjectType>;
};
