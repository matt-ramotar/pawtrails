'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE "Cities_id_seq" RESTART WITH 1'
    );
    return await queryInterface.bulkInsert('Cities', [
      {
        name: 'atlanta',
        state: 'georgia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'austin',
        state: 'texas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'baltimore',
        state: 'maryland',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'boise',
        state: 'idaho',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'boston',
        state: 'massachusetts',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'boulder',
        state: 'colorado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chicago',
        state: 'illinois',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'denver',
        state: 'colorado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'los-angeles',
        state: 'california',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'new-york-city',
        state: 'new-york',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'philadelphia',
        state: 'pennsylvania',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'portland',
        state: 'oregon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'salt-lake-city',
        state: 'utah',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'san-francisco',
        state: 'california',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'seattle',
        state: 'washington',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Cities', null, {});
  },
};
