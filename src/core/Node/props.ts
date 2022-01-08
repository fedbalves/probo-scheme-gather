
   
import { GraphQLObjectType } from 'graphql';

import { RegisteredTypes } from './types';

export const regTypes: RegisteredTypes = {};

export function registerType(type: GraphQLObjectType): GraphQLObjectType {
  regTypes[type.name] = type;
  return type;
}