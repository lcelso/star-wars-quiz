const gql = require('graphql-tag');

const characters = require('./Characters');

const typeDefs = gql`
  type Query{
    _empty: String
  }
  ${characters}
`;

module.exports = [
  typeDefs
];