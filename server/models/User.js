'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, {
        foreignKey: 'roles'
      });
      User.hasMany(models.Order, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Feedback, {
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    img: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.BOOLEAN,
    birth: DataTypes.DATEONLY,
    phone: DataTypes.DECIMAL,
    adress: DataTypes.STRING,
    roles: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};