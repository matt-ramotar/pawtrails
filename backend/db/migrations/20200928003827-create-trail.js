'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      uri: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.TEXT,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      elevationGain: {
        type: Sequelize.INTEGER,
      },
      routeType: {
        type: Sequelize.STRING,
        references: { model: 'RouteTypes', key: 'type' },
      },
      difficulty: {
        type: Sequelize.ENUM('Easy', 'Moderate', 'Hard'),
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: { model: 'Cities' },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trails');
  },
};
