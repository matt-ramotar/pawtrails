'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define(
    'Trail',
    {
      name: DataTypes.STRING,
      allTrailsURI: DataTypes.STRING,
      overview: DataTypes.TEXT,
      length: DataTypes.INTEGER,
      elevationGain: DataTypes.INTEGER,
      routeType: DataTypes.ENUM('Loop', 'Point to Point', 'Out & Back'),
      difficulty: DataTypes.ENUM('easy', 'moderate', 'hard'),
      cityId: DataTypes.INTEGER,
      lat: DataTypes.DECIMAL,
      lng: DataTypes.DECIMAL,
    },
    {}
  );
  Trail.associate = function (models) {
    Trail.belongsTo(models.City, { foreignKey: 'cityId' });

    Trail.belongsToMany(models.Tag, {
      through: models.TrailTag,
      foreignKey: 'trailId',
      otherKey: 'tag',
    });

    Trail.belongsToMany(models.User, {
      through: models.UserTrail,
      foreignKey: 'trailId',
      otherKey: 'userId',
    });

    Trail.belongsToMany(models.List, {
      through: models.UserTrail,
      foreignKey: 'trailId',
      otherKey: 'listId',
    });

    Trail.hasMany(models.Photo, { foreignKey: 'trailId' });
    Trail.hasMany(models.Review, { foreignKey: 'trailId' });
    Trail.hasOne(models.TrailSummary, { foreignKey: 'trailId' });
  };
  return Trail;
};
