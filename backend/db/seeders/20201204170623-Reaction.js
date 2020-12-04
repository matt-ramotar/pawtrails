'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reactions', [
      { reaction: '🐾', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '💯', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🆒', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌄', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌋', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌞', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌇', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🏔️', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌊', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌌', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🚵', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌼', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🎉', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '😫', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🍺', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🐕', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🔥', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '⛺', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌡️', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🙌', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '👍', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '💩', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🗑️', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🦝', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🥴', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🐺', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🐻', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🦌', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🌲', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '❤️', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '💪', createdAt: new Date(), updatedAt: new Date() },
      { reaction: '🏃', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reactions', null, {});
  },
};
