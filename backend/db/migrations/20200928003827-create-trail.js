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
        type: Sequelize.DECIMAL,
      },
      elevationGain: {
        type: Sequelize.DECIMAL,
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
      lat: {
        type: Sequelize.DECIMAL,
      },
      lng: {
        type: Sequelize.DECIMAL,
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
