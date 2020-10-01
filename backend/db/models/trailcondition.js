'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailCondition = sequelize.define(
    'TrailCondition',
    {
      condition: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {}
  );
  TrailCondition.associate = function (models) {
    TrailCondition.belongsToMany(models.Review, {
      through: models.ReviewTrailCondition,
      foreignKey: 'trailCondition',
      otherKey: 'reviewId',
    });
  };
  return TrailCondition;
};
