'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Issued_Books, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING(255),
        set(val) {
          this.setDataValue('email', val.toLowerCase());
        },
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      mobile_number: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
      },
      birth_date: { type: DataTypes.DATE },
      status: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1,
      },
      role: {
        type: DataTypes.INTEGER(20).UNSIGNED,
        defaultValue: 2,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
