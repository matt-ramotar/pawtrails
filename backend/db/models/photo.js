'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photo.belongsTo(models.Trail, { foreignKey: 'trailId' });
      Photo.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Photo.init(
    {
      trailId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
