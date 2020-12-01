const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { Tag } = require('../../db/models');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const tags = await Tag.findAll({});
    res.json({ tags });
  })
);

module.exports = router;
