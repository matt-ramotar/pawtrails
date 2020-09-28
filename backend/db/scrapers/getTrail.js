const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');

const { trails } = require('../data/trails');
const selectors = require('./selectors/trail');

let trail = trails[300];
let base = 'https://alltrails.com';
const url = base + trail.uri;
console.log(url);

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
  console.log({
    stats,
    tags,
  });

  browser.close();
};

getTrail();
