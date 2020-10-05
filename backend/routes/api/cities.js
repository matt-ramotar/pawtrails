const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { City, Trail } = require('../../db/models');

router.get(
  '/:city',
  asyncHandler(async (req, res, next) => {
    const nameOfCity = req.params.city;
    const cities = await City.findAll();
    console.log(cities);
    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: { all: true, nested: true },
    });
    console.log('city', await city);

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
