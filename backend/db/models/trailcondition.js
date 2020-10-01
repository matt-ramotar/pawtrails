'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailCondition = sequelize.define('TrailCondition', {
    condition: DataTypes.STRING
  }, {});
  TrailCondition.associate = function(models) {
    // associations can be defined here
  };
  return TrailCondition;
};