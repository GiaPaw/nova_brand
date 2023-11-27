'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
      ProductDetail.hasMany(models.Size, {
        foreignKey: 'productDetail_id'
      });
      ProductDetail.hasMany(models.Color, {
        foreignKey: 'productDetail_id'
      });
      ProductDetail.hasMany(models.Image, {
        foreignKey: 'productDetail_id'
      });
    }
  }
  ProductDetail.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT, 
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};