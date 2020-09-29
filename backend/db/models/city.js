'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {}
  );
  City.associate = function (models) {
    City.hasMany(models.Trail, { foreignKey: 'cityId' });
  };
  return City;
};
