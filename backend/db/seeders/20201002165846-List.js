'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER SEQUENCE "Lists_id_seq" RESTART WITH 1');

    return queryInterface.bulkInsert('Lists', [
      { name: 'My Favorites', createdAt: new Date(), updatedAt: new Date() },
      { name: 'My Favorites', createdAt: new Date(), updatedAt: new Date() },
      { name: 'My Favorites', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lists', null, {});
  },
};
