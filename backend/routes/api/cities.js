const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const {
  City,
  Trail,
  Review,
  Photo,
  Tag,
  TrailCondition,
  Reaction,
  TrailTag,
  ReviewReaction,
  ReviewTrailCondition,
  sequelize,
} = require('../../db/models');

router.get(
  '/:city',
  asyncHandler(async (req, res, next) => {
    console.log(req.params.city);

    const city = await City.findOne({
      where: sequelize.where(sequelize.fn('lower', sequelize.col('name')), req.params.city),
      include: [
        {
          model: Trail,
          include: [
            { model: Tag },
            { model: Photo },
            { model: Review, include: [{ model: TrailCondition }, { model: Reaction }] },
          ],
        },
      ],
    });
    console.log(city);
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
