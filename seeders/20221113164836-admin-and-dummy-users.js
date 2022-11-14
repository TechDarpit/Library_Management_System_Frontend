'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          first_name: 'Admin',
          last_name: 'LMS',
          email: 'admin.lms@mailinator.com',
          password: await bcrypt.hashSync('Admin@1234', 12),
          mobile_number: 8320840189,
          status: 1,
          role: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'User',
          last_name: '1',
          email: 'lms.user1@mailinator.com',
          password: await bcrypt.hashSync('test@1234', 12),
          mobile_number: 1234567890,
          status: 1,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'User',
          last_name: '2',
          email: 'lms.user2@mailinator.com',
          password: await bcrypt.hashSync('test@1234', 12),
          mobile_number: 1234567890,
          status: 1,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'User',
          last_name: '3',
          email: 'lms.user3@mailinator.com',
          password: await bcrypt.hashSync('test@1234', 12),
          mobile_number: 1234567890,
          status: 1,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'User',
          last_name: '4',
          email: 'lms.user4@mailinator.com',
          password: await bcrypt.hashSync('test@1234', 12),
          mobile_number: 1234567890,
          status: 1,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'User',
          last_name: '5',
          email: 'lms.user5@mailinator.com',
          password: await bcrypt.hashSync('test@1234', 12),
          mobile_number: 1234567890,
          status: 1,
          role: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
