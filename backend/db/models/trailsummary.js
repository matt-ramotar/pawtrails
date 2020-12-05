'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailSummary = sequelize.define(
    'TrailSummary',
    {
      summary: DataTypes.JSON,
      trailId: DataTypes.INTEGER,
    },
    {}
  );
  TrailSummary.associate = function (models) {
    TrailSummary.belongsTo(models.Trail, { foreignKey: 'trailId' });
  };
  return TrailSummary;
};
