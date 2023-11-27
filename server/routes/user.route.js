const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const userController = require("../controllers/userController") 
const authController = require("../controllers/authController") 


route.post('/signup',authController.signup)
route.post('/login',authController.login)

route
.param('id',userController.checkId)

route
.route("/")
.get(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    userController.getAllUser
    )
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    userController.createUser
    )

route
.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)



module.exports = route
