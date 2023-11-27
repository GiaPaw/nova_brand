const CategoryDAO = require("../DAOs/categoryDaos");

exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        const category = await CategoryDAO.getCategory(id);
        if (!category) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy danh mục với ID ${id}`,
            });
        }
        req.category = category;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
    next();
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryDAO.getAllCategory(req.query);
        res.status(200).json({
            code: 200,
            msg: 'Thành công',
            data: {
                categories
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

exports.getCategory = async (req, res) => {
    try {
        const category = req.category;
        res.status(200).json({
            code: 200,
            msg: 'Thành công',
            data: { category }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.createNewCategory = async (req, res) => {
    try {
        const category = req.body;
        await CategoryDAO.createCategory(category);
        res.status(200).json({
            code: 200,
            msg: 'Tạo mới danh mục thành công',
            data: { category }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await CategoryDAO.updateCategoryData(id, data);
        const category = CategoryDAO.getCategory(id);
        res.status(200).json({
            code: 200,
            msg: 'Cập nhật thông tin danh mục thành công',
            data: { category }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await CategoryDAO.deleteCategory(id);
        res.status(200).json({
            code: 200,
            msg: 'Xóa danh mục thành công',
            data: { category }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString()
        });
    }
}
