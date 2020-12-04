const asyncHandler = require('express-async-handler');
const express = require('express');

const { Trail, Photo, Tag, City, Review, ReviewTrailCondition, ReviewReaction } = require('../../db/models');

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { userId, trailId, date, rating, body, photos, userTags, reactions, trailConditions } = req.body;

    const review = await Review.create({
      trailId,
      userId,
      rating,
      body,
      date,
    });

    const trailConditionsToAdd = Object.keys(trailConditions);

    for (const trailCondition of trailConditionsToAdd) {
      await ReviewTrailCondition.create({ reviewId: review.id, trailCondition });
    }

    const reactionsToAdd = Object.keys(reactions);

    for (const reaction of reactionsToAdd) {
      await ReviewReaction.create({ reviewId: review.id, reaction });
    }

    return res.json(true);
  })
);

module.exports = router;
