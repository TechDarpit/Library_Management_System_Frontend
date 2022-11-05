'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.hasMany(models.Issued_Books, { foreignKey: 'book_id' });
    }
  }
  Book.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      author_name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
      image: { type: DataTypes.STRING },
      total_quantity: { type: DataTypes.INTEGER, allowNull: false },
      available_quantity: { type: DataTypes.INTEGER },
      status: { type: DataTypes.TINYINT(1), defaultValue: 1 },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
