'use strict';
const StaticData = require('../utils/StaticData')
const bcrypt =require ('bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username:'admin',
      password: await bcrypt.hash('123456', 10),
      fullname: 'Admin',
      email: 'admin@example.com',
      roles: StaticData.AUTH.Role.admin,
      phone:'0123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
