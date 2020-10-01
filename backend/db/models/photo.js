'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    'Photo',
    {
      trailId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      url: DataTypes.STRING,
    },
    {}
  );
  Photo.associate = function (models) {
    Photo.belongsTo(models.Trail, { foreignKey: 'trailId' });
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Photo;
};
