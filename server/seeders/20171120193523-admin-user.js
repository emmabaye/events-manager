'use strict';
let bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'AdminName',
        lastName: 'AdminSurname',
        email: 'Admin@Admin.com',
        password: bcrypt.hashSync('password', 7),
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }]);

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User');
  }
};
