'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        set(val) {
          this.setDataValue('email', val.toLowerCase());
        },
        allowNull: false,
      },
      mobile_number: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.STRING,
      },
      birth_date: { type: Sequelize.DATE },
      status: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1,
        comment: '0 => Inactive, 1 => Active, 2 => Deleted',
      },
      role_id: {
        type: Sequelize.INTEGER(20).UNSIGNED,
        defaultValue: 2,
        comment: '1 => Admin, 2 => User',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
