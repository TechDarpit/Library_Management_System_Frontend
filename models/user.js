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
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue('email', val.toLowerCase());
        },
        allowNull: false,
      },
      mobile_number: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.STRING,
      },
      birth_date: { type: DataTypes.DATE },
      status: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1,
      },
      role_id: {
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
