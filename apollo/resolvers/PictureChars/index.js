module.exports = {
  Query: {
    picture: async (_, { name }, { dataLoaders }) => {
      const response = await dataLoaders.pictureCharsLoader.load(name);
      return response;
    },
  },
};
