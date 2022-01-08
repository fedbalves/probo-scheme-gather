import {
  GraphQLBoolean,
  GraphQLFieldConfigArgumentMap,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
  
export const forwardConnectionArgs: GraphQLFieldConfigArgumentMap = {
  after: {
    type: GraphQLString
  },
  first: {
    type: GraphQLInt
  }
};

export const backwardConnectionArgs: GraphQLFieldConfigArgumentMap = {
  before: {
    type: GraphQLString
  },
  last: {
    type: GraphQLInt
  }
};

export const connectionArgs: GraphQLFieldConfigArgumentMap = {
  ...forwardConnectionArgs,
  ...backwardConnectionArgs
};

export const pageInfoType = new GraphQLObjectType({
  name: 'PageInfoExtended',
  description: 'Information about pagination in a connection.',
  fields: () => ({
    hasNextPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'When paginating forwards, are there more items?'
    },
    hasPreviousPage: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'When paginating backwards, are there more items?'
    },
    startCursor: {
      type: GraphQLString,
      description: 'When paginating backwards, the cursor to continue.'
    },
    endCursor: {
      type: GraphQLString,
      description: 'When paginating forwards, the cursor to continue.'
    },
    totalCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: connection => connection.edges.length,
      description: `A count of the total number of objects in this connection, ignoring pagination.
This allows a client to fetch the first five objects by passing "5" as the
argument to "first", then fetch the total count so it could display "5 of 83",
for example.`
    },
    startCursorOffset: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Offset from start'
    },
    endCursorOffset: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Offset till end'
    }
  })
});

