'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      List.belongsToMany(models.Trail, {
        through: models.User,
        foreignKey: 'listId',
        otherKey: 'trailId',
      });

      List.belongsToMany(models.User, {
        through: models.User,
        foreignKey: 'listId',
        otherKey: 'userId',
      });
    }
  }
  List.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'List',
    }
  );
  return List;
};