const gql = require('graphql-tag');

const characters = require('./Characters');
const pictureChars = require('./PictureChars');

const typeDefs = gql`
  type Query{
    _empty: String
  }
  ${characters}
  ${pictureChars}
`;

module.exports = [
  typeDefs
];