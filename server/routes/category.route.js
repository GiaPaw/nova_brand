const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const categoryController = require("../controllers/categoryController");


route
.param('id',categoryController.checkId)

route
.route("/")
.get(categoryController.getAllCategory)
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    categoryController.createNewCategory)

route
.route("/:id")
.get(categoryController.getCategory)
.patch(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    categoryController.updateCategory)
.delete(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    categoryController.deleteCategory)

module.exports = route