'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailTag = sequelize.define('TrailTag', {
    trailId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {});
  TrailTag.associate = function(models) {
    // associations can be defined here
  };
  return TrailTag;
};