const fs = require('fs').promises;
const puppeteer = require('puppeteer-extra');

const { cities } = require('../data/cities');
const selectors = require('./selectors/trails');

const getTrailHeaders = async city => {
  const url = `https://www.alltrails.com/us/${city.state}/${city.city}`;
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(selectors.RESULTS);

  const numOfTrails = await page.evaluate(sel => {
    return document.querySelector(sel).innerText.match(/\d+$/)[0];
  }, selectors.NUM_OF_TRAILS);

  const trailsToGet = numOfTrails > 100 ? 100 : numOfTrails;

  await page.waitForSelector(selectors.MORE_TRAILS_BUTTON);

  const res = [];

  for (let i = 1; i <= trailsToGet; i++) {
    try {
      if (i % 10 === 0) await page.click(selectors.MORE_TRAILS_BUTTON);
      const info = await page.evaluate(
        (i, selectors, city) => {
          const href = document
            .querySelector(selectors.HREF.replace(/INDEX/, i))
            .getAttribute('href');

          const name = document
            .querySelector(selectors.NAME.replace(/INDEX/, i))
            .innerText.match(/[a-zA-Z]+/g)
            .join(' ');

          return {
            name,
            allTrailsURI: href,
            city,
          };
        },
        i,
        selectors,
        city
      );
      res.push(info);
    } catch (e) {
      fs.appendFile(
        '../errors/trailHeaders.json',
        JSON.stringify(`Trail ${i}, ${city.city}`),
        'utf-8',
        err => console.error(err)
      );
    }
  }

  browser.close();

  return res;
};

(async () => {
  const trailsWithoutIds = [];

  for (let city of cities) {
    const cityTrails = await getTrailHeaders(city);
    trailsWithoutIds.push(...cityTrails);
  }

  const trails = trailsWithoutIds.map((trail, i) => ({
    id: i + 1,
    ...trail,
  }));

  fs.appendFile(
    '../data/trailHeaders.json',
    JSON.stringify(trails),
    'utf-8',
    err => console.error(err)
  );
})();
