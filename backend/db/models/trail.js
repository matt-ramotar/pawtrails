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
      Trail.belongsTo(models.RouteType, { foreignKey: 'routeType' });

      Trail.belongsToMany(models.Tag, {
        through: models.TrailTag,
        foreignKey: 'trailId',
        otherKey: 'tag',
      });

      Trail.belongsToMany(models.User, {
        through: models.User,
        foreignKey: 'trailId',
        otherKey: 'userId',
      });

      Trail.belongsToMany(models.List, {
        through: models.User,
        foreignKey: 'trailId',
        otherKey: 'listId',
      });
    }
  }
  Trail.init(
    {
      name: DataTypes.STRING,
      uri: DataTypes.STRING,
      overview: DataTypes.TEXT,
      length: DataTypes.INTEGER,
      elevationGain: DataTypes.INTEGER,
      routeType: DataTypes.STRING,
      difficulty: DataTypes.ENUM('Easy', 'Moderate', 'Hard'),
      cityId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Trail',
    }
  );
  return Trail;
};
