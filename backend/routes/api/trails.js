const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const express = require('express');
const { validationResult } = require('express-validator');

const { Trail, Photo, Tag, City, sequelize } = require('../../db/models');

const { restoreUser, generateToken } = require('../util/auth');

const router = express.Router();

router.get(
  '/us/:city',
  asyncHandler(async (req, res) => {
    console.log(req.params.city.replace(/-/g, ' '));
    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: { all: true, nested: true },
    });
    console.log(city);

    const trails = city.Trails;

    res.json(trails);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    console.log('/:id');
    const trail = await Trail.findByPk(req.params.id, {
      include: [{ model: Photo }, { model: Tag }, { model: City }],
    });
    res.json(trail);
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
