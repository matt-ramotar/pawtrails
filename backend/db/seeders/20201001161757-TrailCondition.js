'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TrailConditions', [
      { condition: 'Great!', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Blowdown', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Bridge out', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Bugs', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Closed', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Fee', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Flooded', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Icy', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Muddy', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'No shade', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Off trail', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Over grown', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Private property', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Rocky', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Scramble', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Snow', createdAt: new Date(), updatedAt: new Date() },
      { condition: 'Washed out', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TrailConditions', null, {});
  },
};
