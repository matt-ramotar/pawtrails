const asyncHandler = require('express-async-handler');
const express = require('express');

const {
  Trail,
  Photo,
  Tag,
  City,
  Review,
  ReviewTrailCondition,
  ReviewReaction,
  TrailSummary,
} = require('../../db/models');

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

    const trail = await Trail.findByPk(trailId, {
      include: { all: true, nested: true },
    });
    const trailSummaryId = trail.TrailSummary.id;

    const trailSummary = await TrailSummary.findByPk(trailSummaryId);

    const { summary } = trailSummary;
    console.log(summary);

    summary['counts']['stars']['_total']++;
    summary['counts']['stars'][rating]++;
    summary['counts']['reviews']['_total']++;

    const trailConditionsToAdd = Object.keys(trailConditions);

    for (const trailCondition of trailConditionsToAdd) {
      await ReviewTrailCondition.create({ reviewId: review.id, trailCondition });

      summary['counts']['trailConditions'][trailCondition] = summary['counts']['trailConditions'][trailCondition]
        ? summary['counts']['trailConditions'][trailCondition] + 1
        : 1;

      console.log(summary);
    }

    const reactionsToAdd = Object.keys(reactions);

    for (const reaction of reactionsToAdd) {
      await ReviewReaction.create({ reviewId: review.id, reaction });

      summary['counts']['reactions'][reaction] = summary['counts']['reactions'][reaction]
        ? summary['counts']['reactions'][reaction] + 1
        : 1;

      console.log(summary);
    }

    trailSummary.summary = summary;
    trailSummary.changed('summary', true);
    await trailSummary.save();

    return res.json(true);
  })
);

module.exports = router;
