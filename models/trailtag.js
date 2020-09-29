'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrailTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TrailTag.init({
    trailId: DataTypes.INTEGER,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TrailTag',
  });
  return TrailTag;
};