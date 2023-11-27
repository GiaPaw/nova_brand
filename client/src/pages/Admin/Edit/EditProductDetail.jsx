import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";

const EditProductDetail = () => {
  const { id } = useParams();
  // const [file, setFile] = useState(null);

  const [productDetail, setProductDetail] = useState({
    name: "",
    price: "",
    description: "",
    // sizes: [],
    // images: [],
    // colors: [],
    quantity: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api-detail/${id}`)
      .then((response) => {
        setProductDetail(response.data.data.detail);
      })
      .catch((error) => {
        console.error("Error fetching detail:", error);
      });
  }, [id]);

  // const handleColorsChange = (e) => {
  //   const colorsInput = e.target.value;
  //   const lines = colorsInput.split("\n");
  //   const colorsArray = lines.map((colorLine) => {
  //     const match = colorLine.match(/^(.*?)\s*\((.*?)\)$/); // Tìm tên và mã màu trong dòng văn bản
  //     if (match) {
  //       const color = match[1].trim();
  //       const code_color = match[2].trim();
  //       return { color, code_color };
  //     }
  //     return null;
  //   });

  //   // Loại bỏ các phần tử null (không phù hợp)
  //   const validColorsArray = colorsArray.filter((color) => color !== null);

  //   setProductDetail({
  //     ...productDetail,
  //     colors: validColorsArray,
  //   });
  // };
  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetail({
      ...productDetail,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/api-detail/${id}`, productDetail)
      .then((response) => {
        // Handle successful update, redirect, or show a success message
        setProductDetail(response.data.data.detail);
        console.log("update thành công !!!");
        console.log(response.data.data.detail);
      })
      .catch((error) => {
        console.error("Error updating detail:", error);
      });
  };

  return (
    <div className="new">
      <SidebarAdmin />
      <div className="newContainer">
        <NavbarAdmin />
        <div className="top"></div>
        <div className="bottom">
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
            <form onSubmit={handleUpdate}>
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div> */}

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên chi tiết sản phẩm"
                  name="name"
                  value={productDetail.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={productDetail.price}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Mô tả"
                  name="description"
                  value={productDetail.description}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="formInput">
                <label>Sizes</label>
                <input
                  type="text"
                  placeholder="Sizes"
                  name="sizes"
                  value={productDetail.sizes.join(", ")}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Colors</label>
                <textarea
                  type="text"
                  placeholder="Colors"
                  name="colors"
                  value={productDetail.colors
                    .map((color) => `${color.color} (${color.code_color})`)
                    .join(", ")}
                  onChange={handleColorsChange}
                />
              </div> */}

              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={productDetail.quantity}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductDetail;
