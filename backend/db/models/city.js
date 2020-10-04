'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    },
    {}
  );
  City.associate = function (models) {
    City.hasMany(models.Trail, { foreignKey: 'cityId' });
  };
  return City;
};
