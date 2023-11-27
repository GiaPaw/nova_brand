
const express = require('express')
const router = express.Router()
const productDao = require('../DAOs/productDaos')

exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        const product = await productDao.getProduct(id);
        if (!product) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy sản phẩm với ID ${id}`,
            });
        }
        req.product = product;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
    next();
}

exports.getAllProduct = async (req, res) => {
    try {
        const products = await productDao.getAllProduct();
        res.status(200).json({
            code: 200,
            msg: 'Thành công',
            data: {
                products
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = req.product;
        res.status(200).json({
            code: 200,
            msg: 'Thành công',
            data: { product }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.createNewProduct = async (req, res) => {
    try {
        const product = req.body;
        await productDao.createProduct(product);
        res.status(200).json({
            code: 200,
            msg: 'Tạo sản phẩm mới thành công',
            data: { product }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await productDao.updateProductData(id, data);
        const product = productDao.getProduct(id);
        res.status(200).json({
            code: 200,
            msg: 'Cập nhật thông tin sản phẩm thành công',
            data: { product }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productDao.deleteProduct(id);
        res.status(200).json({
            code: 200,
            msg: 'Xóa sản phẩm thành công',
            data: { product }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}