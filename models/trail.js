'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trail.belongsTo(models.City, { foreignKey: 'cityId' });

      Trail.belongsToMany(models.Tag, {
        through: models.TrailTag,
        foreignKey: 'trailId',
        otherKey: 'tag',
      });

      Trail.belongsToMany(models.User, {
        through: models.UserTrail,
        foreignKey: 'trailId',
        otherKey: 'userId',
      });

      Trail.belongsToMany(models.List, {
        through: models.UserTrail,
        foreignKey: 'trailId',
        otherKey: 'listId',
      });

      Trail.hasMany(models.Photo, { foreignKey: 'trailId' });
    }
  }
  Trail.init(
    {
      name: DataTypes.STRING,
      allTrailsURI: DataTypes.STRING,
      overview: DataTypes.TEXT,
      length: DataTypes.STRING,
      elevationGain: DataTypes.STRING,
      routeType: DataTypes.ENUM('Loop', 'Point to Point', 'Out & Back'),
      difficulty: DataTypes.ENUM('easy', 'moderate', 'hard'),
      cityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Trail',
    }
  );
  return Trail;
};
