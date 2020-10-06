const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { City, Trail, sequelize } = require('../../db/models');

router.get(
  '/map/:coords',
  asyncHandler(async (req, res, next) => {
    const lat = Number(req.params.coords.match(/(?<=lat=)[\d.+-]+/).join(''));
    const lng = Number(req.params.coords.match(/(?<=lng=)[\d.+-]+/).join(''));
    const config = { key: process.env.GOOGLE_API_KEY, lat, lng };
    return res.json(config);
  })
);
router.get(
  '/:city',
  asyncHandler(async (req, res, next) => {
    console.log('location/city');
    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: { all: true, nested: true },
    });
    return res.json(city);
  })
);

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const cities = await City.findAll();
    console.log(cities);
    return res.json(cities);
  })
);

router.post('/', async (req, res) => {
  console.log(req.body);
});

module.exports = router;
