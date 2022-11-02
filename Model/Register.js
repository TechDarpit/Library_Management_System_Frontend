const Sequelize = require('sequelize');
const sequelize = require('../Database/connection');

const Register = sequelize.define(
  'register',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    UserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    book_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    createdAt: 'issue_date',
    updatedAt: 'modified_at',
    deletedAt: 'return_at',
  }
);

Register.sync();

module.exports = Register;
