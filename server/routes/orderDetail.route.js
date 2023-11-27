const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const orderDetailController = require('../controllers/orderDetailController')

route
.param('id',orderDetailController.checkId)

route
.route("/")
.get(orderDetailController.getAllOrderDetail)
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderDetailController.createNewOrderDetail)

route
.route("/:id")
.get(orderDetailController.getOrderDetail)
.patch(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderDetailController.updateOrderDetail)
.delete(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    orderDetailController.deleteOrderDetail)



module.exports = route