module.exports = ({
  characters: ({
    results
  }) => {
    let characters = [];

    results.forEach((item, index) => {
      characters.push({
        id: index + 1,
        name: item.name,
      });
    });

    const charactersInfo = {
      characters
    };

    return {
      ...charactersInfo,
    };
  },
});
