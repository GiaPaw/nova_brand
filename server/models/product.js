'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Product.hasMany(models.ProductDetail, {
        foreignKey: 'product_id'
      });
      Product.hasMany(models.Feedback, {
        foreignKey: 'product_id'
      });
      Product.hasMany(models.OrderDetail, {
        foreignKey: 'product_id'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};