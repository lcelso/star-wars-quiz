const { ApolloServer } = require('apollo-server-micro');

const schema = require('../../apollo/utils/schema');
const dataLoaders = require('../../apollo/dataLoaders');

const context = () => ({
  dataLoaders: {
    charactersLoader: dataLoaders.CharactersLoader(),
  },
});

const apolloServer = new ApolloServer({
  schema,
  context,
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })