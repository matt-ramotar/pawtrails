'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailList = sequelize.define('TrailList', {
    trailId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER
  }, {});
  TrailList.associate = function(models) {
    // associations can be defined here
  };
  return TrailList;
};