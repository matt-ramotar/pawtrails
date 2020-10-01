'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    'Tag',
    {
      tag: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.Trail, {
      through: models.TrailTag,
      foreignKey: 'tag',
      otherKey: 'trailId',
    });
  };
  return Tag;
};
