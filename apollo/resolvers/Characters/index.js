const dtos = require('../../dtos/Characters');

module.exports = {
  Query: {
    allCharacters: async (_, { page }, { dataLoaders }) => {
      const response = await dataLoaders.charactersLoader.load(page);

      return dtos.characters(response);
    },
  },
};
