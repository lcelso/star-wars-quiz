const dtos = require('../../../apollo/dtos/Characters');
const mock = require('../../../apollo/utils/chars-mock');

describe('DTO - Chars list', () => {
  test('Should return correct char object', () => {
    const mockFinal = {
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
        },
        {
          id: 2,
          name: 'C-3PO',
          height: '167',
          mass: '75',
          hair_color: 'n/a',
          skin_color: 'gold',
          eye_color: 'yellow',
          birth_year: '112BBY',
          gender: 'n/a',
          starships: [],
          url: 'https://swapi.co/api/people/2/'
        },
        {
          id: 3,
          name: 'R2-D2',
          height: '96',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, blue',
          eye_color: 'red',
          birth_year: '33BBY',
          gender: 'n/a',
          starships: [],
          url: 'https://swapi.co/api/people/3/'
        },
        {
          id: 4,
          name: 'Darth Vader',
          height: '202',
          mass: '136',
          hair_color: 'none',
          skin_color: 'white',
          eye_color: 'yellow',
          birth_year: '41.9BBY',
          gender: 'male',
          starships: [ 'https://swapi.co/api/starships/13/' ],
          url: 'https://swapi.co/api/people/4/'
        },
        {
          id: 5,
          name: 'Leia Organa',
          height: '150',
          mass: '49',
          hair_color: 'brown',
          skin_color: 'light',
          eye_color: 'brown',
          birth_year: '19BBY',
          gender: 'female',
          starships: [],
          url: 'https://swapi.co/api/people/5/'
        },
        {
          id: 6,
          name: 'Owen Lars',
          height: '178',
          mass: '120',
          hair_color: 'brown, grey',
          skin_color: 'light',
          eye_color: 'blue',
          birth_year: '52BBY',
          gender: 'male',
          starships: [],
          url: 'https://swapi.co/api/people/6/'
        },
        {
          id: 7,
          name: 'Beru Whitesun lars',
          height: '165',
          mass: '75',
          hair_color: 'brown',
          skin_color: 'light',
          eye_color: 'blue',
          birth_year: '47BBY',
          gender: 'female',
          starships: [],
          url: 'https://swapi.co/api/people/7/'
        },
        {
          id: 8,
          name: 'R5-D4',
          height: '97',
          mass: '32',
          hair_color: 'n/a',
          skin_color: 'white, red',
          eye_color: 'red',
          birth_year: 'unknown',
          gender: 'n/a',
          starships: [],
          url: 'https://swapi.co/api/people/8/'
        },
        {
          id: 9,
          name: 'Biggs Darklighter',
          height: '183',
          mass: '84',
          hair_color: 'black',
          skin_color: 'light',
          eye_color: 'brown',
          birth_year: '24BBY',
          gender: 'male',
          starships: [ 'https://swapi.co/api/starships/12/' ],
          url: 'https://swapi.co/api/people/9/'
        },
        {
          id: 10,
          name: 'Obi-Wan Kenobi',
          height: '182',
          mass: '77',
          hair_color: 'auburn, white',
          skin_color: 'fair',
          eye_color: 'blue-gray',
          birth_year: '57BBY',
          gender: 'male',
          starships: [
            'https://swapi.co/api/starships/48/',
            'https://swapi.co/api/starships/59/',
            'https://swapi.co/api/starships/64/',
            'https://swapi.co/api/starships/65/',
            'https://swapi.co/api/starships/74/'
          ],
          url: 'https://swapi.co/api/people/10/'
        }
      ],
      pages: [ { next: undefined, previous: undefined } ]
    }
    
    expect(dtos.characters(mock.default)).toEqual(mockFinal);
  });
});

