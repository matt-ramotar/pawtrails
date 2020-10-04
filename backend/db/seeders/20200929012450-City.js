'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER SEQUENCE "Cities_id_seq" RESTART WITH 1');
    return await queryInterface.bulkInsert('Cities', [
      {
        name: 'Atlanta',
        state: 'Georgia',
        lat: 33.749,
        lng: -84.388,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Austin',
        state: 'Texas',
        lat: 30.2672,
        lng: -97.7431,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baltimore',
        state: 'Maryland',
        lat: 39.2904,
        lng: -76.6122,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boise',
        state: 'Idaho',
        lat: 43.615,
        lng: -116.2023,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boston',
        state: 'Massachusetts',
        lat: 42.3601,
        lng: -71.0589,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boulder',
        state: 'Colorado',
        lat: 40.015,
        lng: -105.2705,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicago',
        state: 'Illinois',
        lat: 41.8781,
        lng: -87.6298,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Denver',
        state: 'Colorado',
        lat: 39.7392,
        lng: -104.9903,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Los Angeles',
        state: 'California',
        lat: 34.0522,
        lng: -118.2437,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New York City',
        state: 'New York',
        lat: 40.7128,
        lng: -74.006,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Philadelphia',
        state: 'Pennsylvania',
        lat: 39.9526,
        lng: -75.1652,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Portland',
        state: 'Oregon',
        lat: 45.5051,
        lng: 122.675,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salt Lake City',
        state: 'Utah',
        lat: 40.7608,
        lng: -111.891,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'San Francisco',
        state: 'California',
        lat: 37.7749,
        lng: -122.4194,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Seattle',
        state: 'Washington',
        lat: 47.6062,
        lng: -122.3321,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Cities', null, {});
  },
};
