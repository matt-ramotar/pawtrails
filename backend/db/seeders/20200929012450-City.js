'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER SEQUENCE "Cities_id_seq" RESTART WITH 1');
    return await queryInterface.bulkInsert('Cities', [
      {
        name: 'Atlanta',
        state: 'Georgia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Austin',
        state: 'Texas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baltimore',
        state: 'Maryland',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boise',
        state: 'Idaho',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boston',
        state: 'Massachusetts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Boulder',
        state: 'Colorado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicago',
        state: 'Illinois',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Denver',
        state: 'Colorado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Los Angeles',
        state: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New York City',
        state: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Philadelphia',
        state: 'Pennsylvania',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Portland',
        state: 'Oregon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salt Lake City',
        state: 'Utah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'San Francisco',
        state: 'California',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Seattle',
        state: 'Washington',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Cities', null, {});
  },
};
