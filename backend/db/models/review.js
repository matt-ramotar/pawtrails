'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      trailId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      date: DataTypes.DATE,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsToMany(models.TrailCondition, {
      through: models.ReviewTrailCondition,
      foreignKey: 'reviewId',
      otherKey: 'trailCondition',
    });

    Review.belongsToMany(models.Reaction, {
      through: models.ReviewReaction,
      foreignKey: 'reviewId',
      otherKey: 'reaction',
    });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Trail, { foreignKey: 'trailId' });
  };
  return Review;
};
