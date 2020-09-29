'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Photo, { foreignKey: 'userId' });

      User.belongsToMany(models.Trail, {
        through: models.UserTrail,
        foreignKey: 'userId',
        otherKey: 'trailId',
      });

      User.belongsToMany(models.List, {
        through: models.UserTrail,
        foreignKey: 'userId',
        otherKey: 'listId',
      });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
