import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { TAppContext } from '../../components/App/types';
import { regTypes } from './props';

export const { nodeField, nodeInterface } = nodeDefinitions(
  (globalId, ctx: TAppContext) => {
    const { id } = fromGlobalId(globalId);
    console.log(id);
    // return ctx.GitlabProvider.pick<TGroupsVendorResponse>(id, { path: '/groups' });
    return [];
  },
  // @ts-ignore
  object => regTypes[object.constructor.name] || null
);
