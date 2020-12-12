const asyncHandler = require('express-async-handler');
const router = require('express').Router();

const { List, User, Trail, TrailList } = require('../../db/models');

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
  '/:id',
  asyncHandler(async (req, res, next) => {
    const { trailId, userId } = req.body;
    console.log(trailId, userId, req.params.id);
    const list = await List.findByPk(req.params.id);
    const trailAddedToList = await TrailList.create({ trailId, listId: req.params.id });
    const user = await User.findByPk(userId, {
      include: [{ model: List, include: [{ model: Trail }] }],
    });
    res.json(user.Lists);
  })
);

router.delete(
  '/:listId/:trailId',
  asyncHandler(async (req, res, next) => {
    const { userId } = req.body;

    await TrailList.destroy({
      where: {
        trailId: req.params.trailId,
        listId: req.params.listId,
      },
    });
    const user = await User.findByPk(userId, {
      include: [{ model: List, include: [{ model: Trail }] }],
    });
    res.json(user.Lists);
  })
);

module.exports = router;
