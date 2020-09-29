'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    'List',
    {
      name: DataTypes.STRING,
    },
    {}
  );
  List.associate = function (models) {
    List.belongsToMany(models.Trail, {
      through: models.UserTrail,
      foreignKey: 'listId',
      otherKey: 'trailId',
    });

    List.belongsToMany(models.User, {
      through: models.UserTrail,
      foreignKey: 'listId',
      otherKey: 'userId',
    });
  };
  return List;
};
