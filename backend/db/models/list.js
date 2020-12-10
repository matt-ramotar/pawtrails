'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define(
    'List',
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  List.associate = function (models) {
    List.belongsToMany(models.Trail, {
      through: models.TrailList,
      foreignKey: 'listId',
      otherKey: 'trailId',
    });

    List.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return List;
};
