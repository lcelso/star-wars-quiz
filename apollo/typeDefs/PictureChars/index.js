const gql = require('graphql-tag');

module.exports = gql`
  type Picture {
    image: String
  }

  extend type Query {
    picture(name: String): String
  }
`;
