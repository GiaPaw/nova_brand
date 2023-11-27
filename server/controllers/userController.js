const express = require('express');
const userDao = require('../DAOs/userDaos');

// Middleware: Check Id
exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        let user = await userDao.getUserInfoById(id);
        if (!user) {
            return res.status(404).json({
                code: 404,
                msg: `Not found user with id ${id}`,
            });
        }
        req.user = user;
        next();
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = req.body;
        await userDao.createNewUser(user);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { user },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const users = await userDao.getAllUser();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { users },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { user },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await userDao.updateUserData(id, data);
        const user = await userDao.getUserInfoById(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { user },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userDao.deleteUserById(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { user },
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            code: 500,
            msg: e.toString(),
        });
    }
};
