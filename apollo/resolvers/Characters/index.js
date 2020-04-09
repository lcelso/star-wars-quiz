const dtos = require('../../dtos/Characters');
const dtosChar = require('../../dtos/Characters/char');
const chars = require('../../utils/chars-mock');

module.exports = {
  Query: {
    allCharacters: async (_, { page }, { dataLoaders }) => {
      const response = await dataLoaders.charactersLoader.load(page);
      
      if (response === 404) return dtos.characters(chars.default);
      
      return dtos.characters(response);
    },
    char: async (_, { page }, { dataLoaders }) => {
      chars.default.page = page;
      const response = await dataLoaders.charactersLoader.load(page);

      if (response === 404) return dtosChar.characters(chars.default);

      return dtos.characters(response);
    },
  },
};
