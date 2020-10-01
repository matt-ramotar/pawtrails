const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const express = require('express');
const { validationResult } = require('express-validator');

const { Trail, Photo, Tag, City } = require('../../db/models');

const { restoreUser, generateToken } = require('../util/auth');

const router = express.Router();

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

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const trail = await Trail.findByPk(req.params.id, {
      include: [{ model: Photo }, { model: Tag }, { model: City }],
    });
    res.json(trail);
  })
);

// router.post('/', asyncHandler(async (req, res) => {
//   const trails = await Trail.findAll
// }))

module.exports = router;
