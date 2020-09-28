const puppeteer = require('puppeteer-extra');
const fs = require('fs');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const https = require('https');

const { trails } = require('../data/trails');
const selectors = require('./selectors/trail');

console.log(trails);
let trail = trails[300];
let base = 'https://alltrails.com';
const url = base + trail.uri;
console.log(url);

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

const getTrail = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector(selectors.TAG_CLOUD);

  // GET STATS
  // =================================

  const stats = await page.evaluate(selectors => {
    const overview = document
      .querySelector(selectors.OVERVIEW)
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
      length,
      elevationGain,
      routeType,
    };
  }, selectors);

  // GET TAGS
  // =================================
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

  // GET PHOTOS
  // =================================

  const photos = [];

  await page.goto(`${url}/photos`);

  await page.waitForSelector(selectors.PHOTO_FEED);

  const images = await page.evaluate(() =>
    Array.from(document.images, img => img.src)
  );

  let result;

  for (let i = 0; i < images.length; i++) {
    result = await download(images[i], `trail-${trail.id}_img-${i}.jpg`);

    if (result === true) {
      console.log(`Success: Image ${i} downloaded.`);
    } else {
      console.log(`Error: Image ${i} was not downloaded.`);
      console.error(result);
    }
  }

  console.log({
    stats,
    tags,
  });

  browser.close();
};

getTrail();
