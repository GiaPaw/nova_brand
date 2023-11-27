const DetailDAO = require("../DAOs/detailDaos");
const ImgDAO = require("../DAOs/imgDaos");
const SizeDAO = require("../DAOs/sizeDaos");
const ColorDAO = require("../DAOs/colorDaos");



// exports.checkGender = async (req, res, next, gen) => {
//     try {
//       const gender = gen;
//       const genders = await DetailDAO.getAllDetailGender(gender);
  
//       if (!genders || genders.length === 0) {
//         return res.status(404).json({
//           code: 404,
//           msg: `Không tìm thấy chi tiết sản phẩm với giới tính ${gender}`,
//         });
//       }
  
//       req.genders = genders;
//       next();
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({
//         code: 500,
//         msg: error.toString(),
//       });
//     }
//   };
  
  

exports.checkId = async (req, res, next, val) => {
    try {
        const id = val;
        const detail = await DetailDAO.getDetail(id);
        if (!detail) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy chi tiết sản phẩm với id ${id}`,
            });
        }
        req.detail = detail;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
    next();
}

exports.checkGender = async (req, res, next, val) => {
    try {
        const gender = val;
        const details = await DetailDAO.getDetailByGender(gender);
        if (!details) {
            return res.status(404).json({
                code: 404,
                msg: `Không tìm thấy chi tiết sản phẩm với gender ${gender}`,
            });
        }
        req.details = details;
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
    next();
}




exports.createNewDetail = async (req, res) => {
    const detail = req.body;
    try {
      // Create the product detail
      await DetailDAO.createDetail(detail);
      
      // Retrieve the created product detail
      const prodetail = await DetailDAO.getDetailByName(detail.name);
  
      // Add sizes if provided
      if (detail.sizes && detail.sizes.length > 0) {
        for (const size of detail.sizes) {
          await SizeDAO.addSizeIfNotExisted(prodetail.id, size);
        }
      }


      // Add images if provided
      if (detail.images && detail.images.length > 0) {
        for (const image of detail.images) {
            await ImgDAO.addImageIfNotExisted(prodetail.id, image);
        }
      }   
  
      // Add colors if provided
      if (detail.colors && detail.colors.length > 0) {
        for (const color of detail.colors) {
          await ColorDAO.addColorIfNotExisted(prodetail.id, color.color, color.code_color);
        }
      }
  
      // Update the retrieved product detail with additional information
      const updatedProdetail = await DetailDAO.getDetail(prodetail.id);
  
      res.status(200).json({
        code: 200,
        msg: 'OK',
        data: { prodetail: updatedProdetail }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        code: 500,
        msg: error.toString(),
      });
    }
};

exports.getAllDetail = async (req, res) => {
    try {
        const details = await DetailDAO.getAllDetail();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                details
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

exports.getAllDetailMen = async (req, res) => {
    try {
        const details = await DetailDAO.getAllDetailMen();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                details
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

exports.getAllDetailWomen = async (req, res) => {
    try {
        const details = await DetailDAO.getAllDetailMen();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                details
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

exports.getDetail = async (req, res) => {
    try {
        const detail = req.detail;
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { detail }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.getProductsByGender = async (req, res) => {
    try {
      
        const genders = req.genders;
  
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { genders }
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.updateDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await DetailDAO.updateDetailData(id, data);
        const detail = await DetailDAO.getDetail(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: { detail }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}

exports.deleteDetail = async (req, res) => {
    try {
        const id = req.params.id;
        await SizeDAO.deleteSize(id);
        await ColorDAO.deleteColor(id);
        await ImgDAO.deleteImage(id);
        await DetailDAO.deleteDetail(id);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {}
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            msg: error.toString(),
        });
    }
}
