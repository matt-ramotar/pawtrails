'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTrail = sequelize.define('UserTrail', {
    userId: DataTypes.INTEGER,
    trailId: DataTypes.INTEGER,
    listId: DataTypes.INTEGER,
    isFavorite: DataTypes.BOOLEAN
  }, {});
  UserTrail.associate = function(models) {
    // associations can be defined here
  };
  return UserTrail;
};