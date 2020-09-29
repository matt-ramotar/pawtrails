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
      allTrailsURI: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.TEXT,
      },
      length: {
        type: Sequelize.STRING,
      },
      elevationGain: {
        type: Sequelize.STRING,
      },
      routeType: {
        type: Sequelize.ENUM('Loop', 'Point to Point', 'Out & Back'),
      },
      difficulty: {
        type: Sequelize.ENUM('easy', 'moderate', 'hard'),
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
