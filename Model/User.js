const Sequelize = require('sequelize');

const sequelize = require('../Database/connection');

const User = sequelize.define(
  'User',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    first_name: { type: Sequelize.STRING, allowNull: false },
    last_name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    mobile_number: Sequelize.BIGINT,
    gender: Sequelize.STRING,
    birth_date: Sequelize.DATE,
    role: {
      type: Sequelize.INTEGER,
      defaultValue: 2,
    },
    status: {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    createdAt: 'created-at',
    updatedAt: 'modified_at',
    paranoid: true,
  }
);

User.sync();

module.exports = User;
