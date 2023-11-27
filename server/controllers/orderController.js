const { or } = require("sequelize");
const OrderDAO = require("../DAOs/orderDaos");

exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        const order = await OrderDAO.getOrder(id);
        if (!order) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy đơn hàng với id ${id}`,
            });
        }
        req.order = order;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
    next();
}

exports.getAllOrder = async (req, res) => {
    try {
        const orders = await OrderDAO.getAllOrder();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                orders
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = req.order;
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { order },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.createNewOrder = async (req, res) => {
    try {
        const order = req.body;
        await OrderDAO.createOrder(order);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { order },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await OrderDAO.updateOrderData(id, data);
        const order = await OrderDAO.getOrder(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { order },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;
        await OrderDAO.deleteOrder(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: null,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}
