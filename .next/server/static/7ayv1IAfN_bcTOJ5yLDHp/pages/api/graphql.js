module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/vle":
/***/ (function(module, exports) {

module.exports = {
  Query: {
    picture: async (_, {
      name
    }, {
      dataLoaders
    }) => {
      const response = await dataLoaders.pictureCharsLoader.load(name);
      return response;
    }
  }
};

/***/ }),

/***/ "/wYz":
/***/ (function(module, exports, __webpack_require__) {

const dtos = __webpack_require__("zRQe");

const dtosChar = __webpack_require__("2eqF");

const dtosListChar = __webpack_require__("3RVt");

const chars = __webpack_require__("hXxt");

module.exports = {
  Query: {
    allCharacters: async (_, {
      page
    }, {
      dataLoaders
    }) => {
      const response = await dataLoaders.charactersLoader.load(page);
      if (response === 404) return dtos.characters(chars.default);
      return dtos.characters(response);
    },
    char: async (_, {
      page
    }, {
      dataLoaders
    }) => {
      chars.default.page = page;
      const response = await dataLoaders.charactersLoader.load(page);
      if (response === 404) return dtosChar.characters(chars.default);
      return dtos.characters(response);
    },
    charsNames: async (_, {
      page
    }, {
      dataLoaders
    }) => {
      chars.default.page = page;
      const response = await dataLoaders.charactersLoader.load(page);
      if (response === 404) return dtosListChar.characters(chars.default);
      return dtos.characters(response);
    }
  }
};

/***/ }),

/***/ "1g2s":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

const characters = __webpack_require__("IGPf");

const pictureChars = __webpack_require__("QPaK");

const typeDefs = gql`
  type Query{
    _empty: String
  }
  ${characters}
  ${pictureChars}
`;
module.exports = [typeDefs];

/***/ }),

/***/ "1j7F":
/***/ (function(module, exports, __webpack_require__) {

const DataLoader = __webpack_require__("Cz0l");

const Scraper = __webpack_require__("I0D3");

module.exports = () => new DataLoader(async name => {
  const google = new Scraper();
  const results = await google.scrape(name, 1);
  return [results[0].url];
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dCYn");


/***/ }),

/***/ "2eqF":
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  characters: ({
    page,
    results
  }) => {
    const char = results.filter((item, index) => index + 1 === page);
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
    return _objectSpread({}, charactersInfo);
  }
};

/***/ }),

/***/ "3RVt":
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  characters: ({
    results
  }) => {
    let characters = [];
    results.forEach((item, index) => {
      characters.push({
        id: index + 1,
        name: item.name
      });
    });
    const charactersInfo = {
      characters
    };
    return _objectSpread({}, charactersInfo);
  }
};

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "9OSe":
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),

/***/ "Cz0l":
/***/ (function(module, exports) {

module.exports = require("dataloader");

/***/ }),

/***/ "I0D3":
/***/ (function(module, exports) {

module.exports = require("images-scraper");

/***/ }),

/***/ "IGPf":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

module.exports = gql`
  type Pages {
    next: String
    previous: String
  }

  type CharacterItem {
    id: Int
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    title_partners: String
    birth_year: String
    gender: String
    homeworld: String
    starships: [
      String
    ]
  }

  type ListNames {
    id: Int
    name: String
  }

  type Characters {
    characters: [CharacterItem]
    pages: [Pages]
  }

  type Char {
    characters: [CharacterItem]
  }

  type Names {
    characters: [ListNames]
  }

  extend type Query {
    allCharacters(page: Int): Characters
    char(page: Int): Char
    charsNames(page: Int): Names
  }
`;

/***/ }),

/***/ "NUh8":
/***/ (function(module, exports, __webpack_require__) {

const {
  makeExecutableSchema
} = __webpack_require__("9OSe");

const typeDefs = __webpack_require__("1g2s");

const resolvers = __webpack_require__("c2lU");

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});

/***/ }),

/***/ "Nrfx":
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__("4vsW");

module.exports = {
  get: (url, params = {}) => fetch(url, params).then(response => (params.raw ? response : response.json()).catch(err => 404))
};

/***/ }),

/***/ "QPaK":
/***/ (function(module, exports, __webpack_require__) {

const gql = __webpack_require__("txk1");

module.exports = gql`
  type Picture {
    image: String
  }

  extend type Query {
    picture(name: String): String
  }
`;

/***/ }),

/***/ "YC4S":
/***/ (function(module, exports, __webpack_require__) {

const characters = __webpack_require__("ioOQ");

const pictureChars = __webpack_require__("1j7F");

module.exports = {
  CharactersLoader: characters,
  PictureCharsLoader: pictureChars
};

/***/ }),

/***/ "c2lU":
/***/ (function(module, exports, __webpack_require__) {

const characters = __webpack_require__("/wYz");

const pictureChars = __webpack_require__("/vle");

module.exports = [characters, pictureChars];

/***/ }),

/***/ "dCYn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const {
  ApolloServer
} = __webpack_require__("re1k");

const schema = __webpack_require__("NUh8");

const dataLoaders = __webpack_require__("YC4S");

const context = () => ({
  dataLoaders: {
    charactersLoader: dataLoaders.CharactersLoader(),
    pictureCharsLoader: dataLoaders.PictureCharsLoader()
  }
});

const apolloServer = new ApolloServer({
  schema,
  context
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (apolloServer.createHandler({
  path: '/api/graphql'
}));

/***/ }),

/***/ "hXxt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stars = {
  results: [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: ['https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/'],
    starships: ['https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.co/api/people/1/'
  }, {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://swapi.co/api/people/2/'
  }, {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
    homeworld: 'https://swapi.co/api/planets/8/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'],
    species: ['https://swapi.co/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:11:50.376000Z',
    edited: '2014-12-20T21:17:50.311000Z',
    url: 'https://swapi.co/api/people/3/'
  }, {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [],
    starships: ['https://swapi.co/api/starships/13/'],
    created: '2014-12-10T15:18:20.704000Z',
    edited: '2014-12-20T21:17:50.313000Z',
    url: 'https://swapi.co/api/people/4/'
  }, {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
    homeworld: 'https://swapi.co/api/planets/2/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/', 'https://swapi.co/api/films/7/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: ['https://swapi.co/api/vehicles/30/'],
    starships: [],
    created: '2014-12-10T15:20:09.791000Z',
    edited: '2014-12-20T21:17:50.315000Z',
    url: 'https://swapi.co/api/people/5/'
  }, {
    name: 'Owen Lars',
    height: '178',
    mass: '120',
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:52:14.024000Z',
    edited: '2014-12-20T21:17:50.317000Z',
    url: 'https://swapi.co/api/people/6/'
  }, {
    name: 'Beru Whitesun lars',
    height: '165',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/5/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:53:41.121000Z',
    edited: '2014-12-20T21:17:50.319000Z',
    url: 'https://swapi.co/api/people/7/'
  }, {
    name: 'R5-D4',
    height: '97',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/2/'],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:57:50.959000Z',
    edited: '2014-12-20T21:17:50.321000Z',
    url: 'https://swapi.co/api/people/8/'
  }, {
    name: 'Biggs Darklighter',
    height: '183',
    mass: '84',
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/1/',
    films: ['https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: [],
    starships: ['https://swapi.co/api/starships/12/'],
    created: '2014-12-10T15:59:50.509000Z',
    edited: '2014-12-20T21:17:50.323000Z',
    url: 'https://swapi.co/api/people/9/'
  }, {
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 'https://swapi.co/api/planets/20/',
    films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/', 'https://swapi.co/api/films/4/', 'https://swapi.co/api/films/6/', 'https://swapi.co/api/films/3/', 'https://swapi.co/api/films/1/'],
    species: ['https://swapi.co/api/species/1/'],
    vehicles: ['https://swapi.co/api/vehicles/38/'],
    starships: ['https://swapi.co/api/starships/48/', 'https://swapi.co/api/starships/59/', 'https://swapi.co/api/starships/64/', 'https://swapi.co/api/starships/65/', 'https://swapi.co/api/starships/74/'],
    created: '2014-12-10T16:16:29.192000Z',
    edited: '2014-12-20T21:17:50.325000Z',
    url: 'https://swapi.co/api/people/10/'
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (stars);

/***/ }),

/***/ "ioOQ":
/***/ (function(module, exports, __webpack_require__) {

const DataLoader = __webpack_require__("Cz0l");

const api = __webpack_require__("Nrfx");

module.exports = () => new DataLoader(async page => {
  /**
   * @todo
   * Refatorar este ponto e deixar mais modularizado
   */
  const filterUrl = `?page=${page}`;
  const url = `${process.env.API_URL}${filterUrl}`;
  const headers = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await api.get(url, headers);
  return [response];
});

/***/ }),

/***/ "re1k":
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "zRQe":
/***/ (function(module, exports) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  characters: ({
    next,
    previous,
    results
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
        previous: previous
      }]
    };
    return _objectSpread({}, charactersInfo);
  }
};

/***/ })

/******/ });