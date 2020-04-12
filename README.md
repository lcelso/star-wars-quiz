![Logo of the project](./public/images/logo.png)

# Star Wars - Quiz &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)
>

Quiz with the characters of Star Wars.

## Installing / Getting started

To do the installation follow the steps below:

```shell
git clone https://github.com/lcelso/star-wars-quiz
cd star-wars-quiz
npm install

or

yarn
```


## Developing

### Built With
This project used: Next.js: v9.3.4, Apollo Client: 2.6.8, React: 16.13.1, Styled Components: 5.1.0, Graphql: 15.0.0


### Setting up Dev

```shell
npm dev

or

yarn dev
```

Access url: http://localhost:3000 to access the application and http://localhost:3000/api/graphql to access the graphql Playground.


## Building

```shell
yarn build

or

npm build
```

### Prod
It is necessary to have already performed the build.

```shell
yarn start

or

npm start
```


## Tests

```shell
yarn test 
yarn test:watch
yarn test:coverage
```

## Api Reference

Using the api: https://swapi.co/, but the same is off the air.

Currently the application is using a mock, which can be found in the folder.

```shel
apollo/utils/chars-mock.js
```

## Licensing

MIT