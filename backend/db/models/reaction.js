'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reaction = sequelize.define(
    'Reaction',
    {
      reaction: DataTypes.STRING,
      primaryKey: true,
    },
    {}
  );
  Reaction.associate = function (models) {
    Reaction.belongsToMany(models.Review, {
      through: models.ReviewReaction,
      foreignKey: 'reaction',
      otherKey: 'reviewId',
    });
  };
  return Reaction;
};
