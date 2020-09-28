'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RouteType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RouteType.hasMany(models.Trail, { foreignKey: 'routeType' });
    }
  }
  RouteType.init(
    {
      type: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'RouteType',
    }
  );
  return RouteType;
};
