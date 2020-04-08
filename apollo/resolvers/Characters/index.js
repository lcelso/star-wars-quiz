const dtos = require('../../dtos/Characters');
const mock = require('../../utils/mock');

module.exports = {
  Query: {
    allCharacters: async (_, { page }, { dataLoaders }) => {
      const response = await dataLoaders.charactersLoader.load(page);

      if (response === 404) return dtos.characters(mock.default);

      return dtos.characters(response);
    },
  },
};
