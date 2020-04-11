const gql = require('graphql-tag');

module.exports = gql`
  type Pages {
    next: String
    previous: String
  }

  type CharacterItem {
    id: Int
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
  }

  type ListNames {
    id: Int
    name: String
  }

  type Characters {
    characters: [CharacterItem]
    pages: [Pages]
  }

  type Char {
    characters: [CharacterItem]
  }

  type Names {
    characters: [ListNames]
  }

  extend type Query {
    allCharacters(page: Int): Characters
    char(page: Int): Char
    charsNames(page: Int): Names
  }
`;
