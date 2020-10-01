'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewTrailCondition = sequelize.define('ReviewTrailCondition', {
    reviewId: DataTypes.INTEGER,
    trailCondition: DataTypes.STRING
  }, {});
  ReviewTrailCondition.associate = function(models) {
    // associations can be defined here
  };
  return ReviewTrailCondition;
};