const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./Mutation');
const Query = require('./Query');

const db = require('./db');

const createServer = () => new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: {
        Mutation,
        Query
    },
    resolverValidationOptions: {
        requireResolversForResolveType: false
    },
    context: req => ({ ...req, db })
})
module.exports = createServer;
