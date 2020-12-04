'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ReviewReactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references: { model: 'Reviews' },
      },
      reaction: {
        type: Sequelize.STRING,
        references: { model: 'Reactions', key: 'reaction' },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ReviewReactions');
  },
};
