module.exports = ({
  characters: ({
    page,
    results
  }) => {
    const char = results.filter((item, index) => index+1 === page);
    let characters = [];

    char.forEach((item, index) => {
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
      characters
    };

    return {
      ...charactersInfo,
    };
  },
});
