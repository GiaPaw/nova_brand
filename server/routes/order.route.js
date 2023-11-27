const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const orderController = require('../controllers/orderController')

route
.param('id',orderController.checkId)

route
.route("/")
.get(orderController.getAllOrder)
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderController.createNewOrder)

route
.route("/:id")
.get(orderController.getOrder)
.patch(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderController.updateOrder)
.delete(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderController.deleteOrder)



module.exports = route