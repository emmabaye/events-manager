const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    firstName: 'AdminName',
    lastName: 'AdminSurname',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('password', parseInt(process.env.SALT, 10)),
    role: 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }, {
    firstName: 'Abaye',
    lastName: 'Emmanuel',
    email: 'emmanuel.nonye.abaye@gmail.com',
    password: bcrypt.hashSync('password', parseInt(process.env.SALT, 10)),
    role: 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User'),
};
