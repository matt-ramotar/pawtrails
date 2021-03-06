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
    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: { all: true, nested: true },
    });
    res.json({ city });
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const trail = await Trail.findByPk(req.params.id, { include: { all: true, nested: true } });
    res.json(trail);
  })
);

router.get(
  '/trail/:id',
  asyncHandler(async (req, res) => {
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
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${apiKey}`
    );

    return res.json(weather.data);
  })
);

router.get(
  '/:id/reviews',
  asyncHandler(async (req, res) => {
    const trailId = req.params.id;

    const reviews = await Review.findAll({
      where: {
        trailId: {
          [Op.eq]: trailId,
        },
      },
    });

    return res.json(reviews);
  })
);

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const trails = await Trail.findAll({
      include: [{ model: Photo }, { model: Tag }, { model: City }],
    });

    const tags = await Tag.findAll();

    res.json({ trails });
  })
);

module.exports = router;
