const Sequelize = require('sequelize');
const sequelize = require('../Database/connection');

const Books = sequelize.define(
  'books',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    author_name: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    total_qauntity: {
      type: Sequelize.INTEGER,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.STRING,
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

Books.sync();

module.exports = Books;
