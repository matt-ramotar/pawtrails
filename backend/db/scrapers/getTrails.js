const fs = require('fs').promises;
const puppeteer = require('puppeteer-extra');

const { cities } = require('../data/cities');
const selectors = require('./selectors/trails');

const getTrails = async city => {
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
      const details = await page.evaluate(
        (i, selectors) => {
          const href = document
            .querySelector(selectors.HREF.replace(/INDEX/, i))
            .getAttribute('href');

          const name = document
            .querySelector(selectors.NAME.replace(/INDEX/, i))
            .innerText.match(/[a-zA-Z]+/g)
            .join(' ');

          return {
            name,
            href,
          };
        },
        i,
        selectors
      );
      res.push(details);
    } catch (e) {
      fs.appendFile(
        '../errors/getTrails.json',
        JSON.stringify(`Trail ${i}, ${city.city}`),
        'utf-8',
        err => console.error(err)
      );
    }
  }

  fs.appendFile('../data/getTrails.json', JSON.stringify(res), 'utf-8', err =>
    console.error(err)
  );

  browser.close();
};

(async () => {
  for (let city of cities) {
    await getTrails(city);
  }
})();
