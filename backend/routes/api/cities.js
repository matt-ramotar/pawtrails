const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { City } = require('../../db/models');

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
