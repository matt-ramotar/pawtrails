const asyncHandler = require('express-async-handler');
const axios = require('axios');
const bcrypt = require('bcryptjs');
const router = require('express').Router();
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

const { Trail, Photo, Tag, City, Review, sequelize } = require('../../db/models');
const { restoreUser, generateToken } = require('../util/auth');

router.get(
  '/us/:city',
  asyncHandler(async (req, res) => {
    console.log(req.params.city.replace(/-/g, ' '));
    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: { all: true, nested: true },
    });
    // console.log(city);

    // const trails = city.Trails;
    // console.log(trails);

    res.json({ city });
  })
);

router.get(
  '/trail/:id',
  asyncHandler(async (req, res) => {
    console.log('/:id');
    const trail = await Trail.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.json(trail);
  })
);

router.get(
  '/weather/:coords',
  asyncHandler(async (req, res) => {
    const lat = Number(req.params.coords.match(/(?<=lat=)[\d.+-]+/).join(''));
    const lng = Number(req.params.coords.match(/(?<=lng=)[\d.+-]+/).join(''));
    console.log(lat, lng);
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    console.log(apiKey);
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}`
    );
    console.log(weather);
    return res.json(weather.data);
  })
);

router.get(
  '/trail/:id/reviews',
  asyncHandler(async (req, res) => {
    const trailId = req.params.id;

    const reviews = await Review.findAll({
      where: {
        trailId: {
          [Op.eq]: trailId,
        },
      },
    });

    console.log(reviews);

    return res.json(reviews);
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    console.log('/');
    const trails = await Trail.findAll({
      include: [{ model: Photo }, { model: Tag }, { model: City }],
    });

    const tags = await Tag.findAll();

    res.json({ trails });
  })
);

// router.post('/', asyncHandler(async (req, res) => {
//   const trails = await Trail.findAll
// }))

module.exports = router;
