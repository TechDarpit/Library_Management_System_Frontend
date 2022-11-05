'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issued_Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Issued_Books.belongsTo(models.User, { foreignKey: 'user_id' });
      Issued_Books.belongsTo(models.Book, { foreignKey: 'book_id' });
    }
  }
  Issued_Books.init(
    {
      book_id: { type: DataTypes.INTEGER, allowNull: false },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      issue_date: { type: DataTypes.DATE, allowNull: false },
      return_date: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'Issued_Books',
    }
  );
  return Issued_Books;
};
