const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const productController = require('../controllers/productController')

route
.param('id',productController.checkId)

route
.route("/")
.get(productController.getAllProduct)
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    productController.createNewProduct)

route
.route("/:id")
.get(productController.getProduct)
.patch(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    productController.updateProduct)
.delete(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    productController.deleteProduct)



module.exports = route
