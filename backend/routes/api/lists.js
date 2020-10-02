const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { List, UserTrail, User, Trail } = require('../../db/models');

// lists/favorites
// get favorite list
// add trail to list

router.post(
  '/new',
  asyncHandler(async (req, res, next) => {
    const { userId, listName } = req.body;

    // get userTrail where userId trailId and listId name attribute equals 'My favorites'
    const list = await List.create({ name: listName });

    const userTrail = await UserTrail.create({ userId, listId: list.id });
    return res.json(userTrail);
  })
);

router.post(
  '/favorites',
  asyncHandler(async (req, res, next) => {
    const { trailId, userId } = req.body;

    // get userTrail where userId trailId and listId name attribute equals 'My favorites'
    const userFavTrailsId = (
      await UserTrail.findOne({
        attributes: ['listId'],
        where: {
          userId,
          trailId,
        },
        include: [
          {
            model: List,
            where: {
              name: 'My Favorites',
            },
          },
        ],
      })
    ).Lists[0].id;

    const newFavoriteTrail = await UserTrail.create({ trailId, userId, listId: userFavTrailsId });
    return res.json(userTrail);
  })
);
