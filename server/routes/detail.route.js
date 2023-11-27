const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const detailController = require('../controllers/detailController')

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const uploadImage = upload.single("image");

route
.param('id',detailController.checkId)
//.param('gender',detailController.checkGender)

route
.route("/")
.get(detailController.getAllDetail)
.post(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    uploadImage,
    detailController.createNewDetail)

route
.route("/:id")
.get(detailController.getDetail)
.patch(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    detailController.updateDetail)
.delete(
    // authController.protect,
    // authController.restrictTo(StaticData.AUTH.Role.admin),
    detailController.deleteDetail)


route
.route("/men")
.get(detailController.getAllDetailMen)

route
.route("/women")
.get(detailController.getAllDetailMen)

module.exports = route