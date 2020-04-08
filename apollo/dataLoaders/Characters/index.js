const DataLoader = require('dataloader');
const api = require('../../utils/api');

module.exports = () => new DataLoader(async (page) => {
  /**
   * @todo
   * Refatorar este ponto e deixar mais modularizado
   */
  const filterUrl = `?page=${page}`;
  const url = `${process.env.API_URL}${filterUrl}`;
  const headers = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await api.get(url, headers);
  return [response];
});
