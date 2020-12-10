const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { List, User, TrailList } = require('../../db/models');

// lists/favorites
// get favorite list
// add trail to list

router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { userId, listName } = req.body;

    // get userTrail where userId trailId and listId name attribute equals 'My favorites'
    const list = await List.create({ name: listName, userId });

    return res.json(list);
  })
);

router.post(
  '/favorites',
  asyncHandler(async (req, res, next) => {
    const { trailId, userId } = req.body;
    console.log(trailId, userId);

    // get userTrail where userId trailId and listId name attribute equals 'My favorites'
    try {
      const userFavTrailsId = (
        await List.findOne({
          where: {
            name: 'My Favorites',
          },
          include: [
            {
              model: User,
              where: {
                id: userId,
              },
            },
          ],
        })
      ).dataValues.id;

      console.log(userFavTrailsId);

      const newFavoriteTrail = await TrailList.create({ trailId, listId: userFavTrailsId });
      return res.json(newFavoriteTrail);
    } catch (e) {
      console.log(e);
    }
  })
);

module.exports = router;
