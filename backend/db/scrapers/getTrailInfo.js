const puppeteer = require('puppeteer-extra');
const fs = require('fs');
const https = require('https');
const selectors = require('./selectors/trail');

const getTrailInfo = async trail => {
  const url = `https://alltrails.com${trail.allTrailsURI}`;

  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(selectors.TAG_CLOUD);

  const details = await page.evaluate(selectors => {
    const location = document
      .querySelector(selectors.LOCATION)
      .getAttribute('href')
      .match(/(?<=\/)[\d-,.]+/g)[0]
      .split(',');

    const lat = location[0];
    const lng = location[1];

    const overview = document
      .querySelector(selectors.OVERVIEW)
      .innerText.trim();

    const difficulty = document
      .querySelector(selectors.DIFFICULTY)
      .innerText.trim();

    const length = document.querySelector(selectors.LENGTH).innerText.trim();

    const elevationGain = document
      .querySelector(selectors.ELEVATION_GAIN)
      .innerText.trim();

    let routeType;

    try {
      routeType = document.querySelector(selectors.LOOP)
        ? document.querySelector(selectors.LOOP).innerText
        : document.querySelector(selectors.OUT_AND_BACK)
        ? document.querySelector(selectors.OUT_AND_BACK).innerText
        : document.querySelector(selectors.POINT_TO_POINT).innerText;
    } catch (e) {
      console.log(e);
    }

    return {
      overview,
      lat,
      lng,
      difficulty,
      length,
      elevationGain,
      routeType,
    };
  }, selectors);

  const tags = [];

  const numOfTags = await page.evaluate(sel => {
    return document.querySelector(sel).children.length;
  }, selectors.TAG_CLOUD);

  for (let i = 1; i <= numOfTags; i++) {
    const tag = await page.evaluate(
      (i, sel) => {
        return document.querySelector(sel.replace(/INDEX/, i)).innerText.trim();
      },
      i,
      selectors.TAG
    );
    tags.push(tag);
  }

  await page.goto(`${url}/photos`);

  console.log(`${url}/photos`);

  await page.waitForSelector(selectors.PHOTO_FEED);

  const images = await page.evaluate(() =>
    Array.from(document.querySelectorAll('img.trail-photo'))
      .map(img => img.src)
      .filter(src => src)
  );

  console.log(await images);

  browser.close();
  return {
    details,
    tags,
    images,
  };
};

const download = (url, destination) =>
  new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);

    https
      .get(url, response => {
        response.pipe(file);

        file.on('finish', () => {
          file.close(resolve(true));
        });
      })
      .on('error', error => {
        fs.unlink(destination);

        reject(error.message);
      });
  });

module.exports = {
  getTrailInfo,
};
