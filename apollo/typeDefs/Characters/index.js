const gql = require('graphql-tag');

module.exports = gql`
  type Pages {
    next: String
    previous: String
  }

  type CharacterItem {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    title_partners: String
    birth_year: String
    gender: String
    homeworld: String
    starships: [
      String
    ]
    picture_chars: String
  }

  type Characters {
    characters: [CharacterItem]
    pages: [Pages]
  }

  extend type Query {
    allCharacters(page: Int): Characters
  }
`;
