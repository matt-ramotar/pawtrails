'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReviewReaction = sequelize.define('ReviewReaction', {
    reviewId: DataTypes.INTEGER,
    reaction: DataTypes.STRING
  }, {});
  ReviewReaction.associate = function(models) {
    // associations can be defined here
  };
  return ReviewReaction;
};