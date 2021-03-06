module.exports = ({
  characters: ({
    next,
    previous,
    results,
  }) => {
    let characters = [];

    results.forEach((item, index) => {
      characters.push({
        id: index + 1,
        name: item.name,
        height: item.height,
        mass: item.mass,
        hair_color: item.hair_color,
        skin_color: item.skin_color,
        eye_color: item.eye_color,
        birth_year: item.birth_year,
        gender: item.gender,
        starships: item.starships,
        url: item.url
      });
    });

    const charactersInfo = {
      characters,
      pages: [{
        next: next,
        previous:  previous,
      }]
    };

    return {
      ...charactersInfo,
    };
  },
});
