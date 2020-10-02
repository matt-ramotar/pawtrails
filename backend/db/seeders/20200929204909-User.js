'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1');

    return queryInterface.bulkInsert('Users', [
      r({
        firstName: 'demo-first-1',
        lastName: 'demo-last-1',
        username: 'Demo-lition',
        email: 'demo@example.com',
        hashedPassword: createPassword(),
      }),
      r({
        firstName: 'demo-first-2',
        lastName: 'demo-last-2',
        username: 'Yusuke',
        email: 'yusuke@example.com',
        hashedPassword: createPassword(),
      }),
      r({
        firstName: 'demo-first-3',
        lastName: 'demo-last-3',
        username: 'Peta',
        email: 'petra@example.com',
        hashedPassword: createPassword(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  },
};
