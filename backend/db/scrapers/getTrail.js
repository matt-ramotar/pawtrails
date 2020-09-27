const fs = require('fs').promises;

const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');

puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: '463c02eedcbb6ed46d6aae3f3c89815f',
      visualFeedback: true,
    },
  })
);
const baseUrl = 'https://www.alltrails.com/us';
const cities = [
  '/oregon/portland',
  '/massachusetts/boston',
  '/new-york',
  '/new-york/new-york-city',
  '/texas/austin',
  '/maryland/baltimore',
  '/pennsylvania/philadelphia',
  '/washington/seattle',
  '/utah/salt-lake-city',
  '/colorado/denver',
  '/colorado/boulder',
  '/california',
  '/oregon',
  '/massachusetts/boston',
  '/california/los-angeles',
  '/california/san-francisco',
  '/illinois/chicago',
  '/georgia/atlanta',
  '/maine',
];

const url = `${baseUrl}${cities[cities.length - 1]}`;

const getTrail = async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  //const url = 'https://www.alltrails.com/us/massachussetts/boston';
  await page.goto(url);

  // const SEL_SEARCH_BAR_INPUT =
  //   '#marketing-features > section.visual > div.search-form-block > div > div.search-form-holder > div > div > div.inputs-holder > div > form > input.styles-module__input___28bDf';
  // // click on sign in

  // const SEL_SEARCH_BAR_BUTTON =
  //   '#marketing-features > section.visual > div.search-form-block > div > div.search-form-holder > div > div > div.inputs-holder > div > form > input.styles-module__btn___I-OkD';

  // const SEARCH_INPUT = 'portland, or';

  const SEL_RESULTS =
    '#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__container___3h0Z6 > div.styles-module__results___24LBd';

  const SEL_RESULT = `#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__container___3h0Z6 > div.styles-module__results___24LBd > div:nth-child${1}`;

  await page.waitForSelector(SEL_RESULTS);

  await page.click('#sticky-bar > div > div > div:nth-child(6) > button');

  await page.click(
    '#spring-popper > div > div > div:nth-child(5) > div.styles-module__body___WqqYd > span > div > div > div:nth-child(1)'
  );

  let numOfTrails = await page.evaluate(
    () =>
      document
        .querySelector(
          '#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__showMore___2Bhtr > div > div'
        )
        .innerText.match(/\d+$/)[0]
  );

  numOfTrails = numOfTrails > 100 ? 100 : numOfTrails;

  const SEL_MORE_TRAILS_BUTTON =
    '#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__showMore___2Bhtr > div > button';

  let moreTrailsCounter = Math.ceil(numOfTrails / 10);

  console.log(moreTrailsCounter);
  console.log(numOfTrails);

  for (let i = 0; i < moreTrailsCounter; i++) {
    await page.click(SEL_MORE_TRAILS_BUTTON);
    console.log(i);
  }

  for (let i = 1; i <= numOfTrails; i++) {
    let res = [];
    try {
      const details = await page.evaluate(i => {
        const href = document
          .querySelector(
            `#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__container___3h0Z6 > div.styles-module__results___24LBd > div:nth-child(${i}) > a`
          )
          .getAttribute('href');

        const name = document
          .querySelector(
            `#stick-bar-parent > div.styles-module__section___20Yip > div.styles-module__container___3h0Z6 > div.styles-module__results___24LBd > div:nth-child(${i}) > div.styles-module__content___1eARw.styles-module__content___3dWXB.styles-module__descriptive___3ATWV > div.xlate-none.styles-module__name___3T41O.undefined`
          )
          .innerText.match(/[a-zA-Z]+/g)
          .join(' ');

        return { name, href };
      }, i);
      res.push(details);
    } catch (e) {}
    console.log(res);
  }

  // await page.click(SEL_LINK_SIGN_IN);
  // await page.waitForSelector(SEL_USERNAME);

  // await page.click(SEL_USERNAME);
  // await page.keyboard.type(username);
  // await page.click(SEL_PASSWORD);
  // await page.keyboard.type(pw);
  // await page.click(SEL_BTN_SIGN_IN);
  // await page.solveRecaptchas();

  // await page.waitForSelector(SEL_OL);

  // const instructions = await page.evaluate(
  //   (sel, exerciseId) => {
  //     const res = [];
  //     const items = document.querySelector(sel).children;
  //     for (item of items) {
  //       res.push({
  //         instruction: item.innerText,
  //         exerciseId: exerciseId,
  //       });
  //     }
  //     return res;
  //   },
  //   SEL_OL,
  //   exerciseId
  // );
  browser.close();
};

getTrail();
