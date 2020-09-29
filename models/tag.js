'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.belongsToMany(models.Trail, {
        through: models.TrailTag,
        foreignKey: 'tag',
        otherKey: 'trailId',
      });
    }
  }
  Tag.init(
    {
      tag: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'Tag',
    }
  );
  return Tag;
};
