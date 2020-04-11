const dtos = require('../../dtos/Characters');
const dtosChar = require('../../dtos/Characters/char');
const dtosListChar = require('../../dtos/Characters/list-chars');
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
    charsNames: async (_, { page }, { dataLoaders }) => {
      chars.default.page = page;
      const response = await dataLoaders.charactersLoader.load(page);

      if (response === 404) return dtosListChar.characters(chars.default);

      return dtos.characters(response);
    }
  },
};
