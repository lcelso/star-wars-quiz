const DataLoader = require('dataloader');
const Scraper = require('images-scraper');

module.exports = () => new DataLoader(async (name) => {
  const google = new Scraper();
  const results = await google.scrape(name, 1);

  return [results[0].url];
});
