'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER SEQUENCE "UserTrails_id_seq" RESTART WITH 1');

    return queryInterface.bulkInsert('UserTrails', [
      { userId: 1, trailId: 1, listId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, trailId: 1, listId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, trailId: 1, listId: 3, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserTrails', null, {});
  },
};
