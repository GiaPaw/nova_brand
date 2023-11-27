'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        unique:true,
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        validator: function (val){
          return val.lenghth > 5 && val.lenghth < 200;
        },
      },
      fullname: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      email: {
        unique: true,
        type: Sequelize.STRING,
        validator:  function (val) {
          return String(val)
              .toLowerCase()
              .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        },
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      birth: {
        type: Sequelize.DATEONLY
      },
      phone: {
        type: Sequelize.DECIMAL
      },
      adress: {
        type: Sequelize.STRING
      },
      roles: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};