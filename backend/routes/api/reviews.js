const asyncHandler = require('express-async-handler');
const express = require('express');

const { Trail, Photo, Tag, City, Review, ReviewTrailCondition } = require('../../db/models');

const router = express.Router();

router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { trailId, userId, rating, body, date, trailConditions } = req.body;
    console.log('post api/reviews');
    console.log(req);

    // create review

    const review = await Review.create({
      trailId,
      userId,
      rating,
      body,
      date,
    });

    // add ReviewTrailCondition

    for (const trailCondition of trailConditions) {
      await ReviewTrailCondition.create({
        reviewId: review.id,
        trailCondition,
      });
    }

    return res.json({ review });
  })
);

module.exports = router;
