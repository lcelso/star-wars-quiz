const fetch = require('node-fetch');

module.exports = {
  get: (url, params = {}) => fetch(url, params)
    .then((response) => (params.raw ? response : response.json())),
};
