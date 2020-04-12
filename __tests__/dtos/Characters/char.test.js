const dtos = require('../../../apollo/dtos/Characters/char');
const mock = require('../../../apollo/utils/chars-mock');

describe('DTO - Char', () => {
  test('Should return correct char object', () => {
    mock.default.page = 1;
    const mockChar = {
      characters: [
        {
          id: 1,
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          starships: [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/'
          ],
          url: 'https://swapi.co/api/people/1/'
        }
      ]
    };

    expect(dtos.characters(mock.default)).toEqual(mockChar);
  });
});

