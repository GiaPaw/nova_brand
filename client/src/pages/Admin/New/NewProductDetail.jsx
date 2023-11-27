import React, { useState, useEffect } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";

const New = ({ title }) => {
  const [file, setFile] = useState(null);
  const [productList, setProductList] = useState([]);
  const [newProductDetail, setNewProductDetail] = useState({
    name: "",
    price: "",
    description: "",
    sizes: [],
    images: [],
    colors: [],
    quantity: 0,
    product_id: 1,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api-product")
      .then((response) => {
        setProductList(response.data.data.products);
      })
      .catch((error) => {
        console.error("Error fetching product list:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductDetail({
      ...newProductDetail,
      [name]: value,
    });
  };

  const handleSizesChange = (e) => {
    const sizesInput = e.target.value;
    const sizesArray = sizesInput.split(",").map((size) => size.trim());
    setNewProductDetail({
      ...newProductDetail,
      sizes: sizesArray,
    });
  };

  const handleColorsChange = (e) => {
    const colorsInput = e.target.value;
    const lines = colorsInput.split("\n");
    const colorsArray = lines.map((colorLine) => {
      const match = colorLine.match(/^(.*?)\s*\((.*?)\)$/); // Tìm tên và mã màu trong dòng văn bản
      if (match) {
        const color = match[1].trim();
        const code_color = match[2].trim();
        return { color, code_color };
      }
      return null;
    });

    // Loại bỏ các phần tử null (không phù hợp)
    const validColorsArray = colorsArray.filter((color) => color !== null);

    setNewProductDetail({
      ...newProductDetail,
      colors: validColorsArray,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api-detail",
        newProductDetail
      );
      console.log(
        "Chi tiết sản phẩm đã được tạo thành công:",
        response.data.data
      );
      setNewProductDetail({
        name: "",
        price: "",
        description: "",
        sizes: [],
        images: [],
        colors: [],
        quantity: 0,
        product_id: null,
      });
    } catch (error) {
      console.error("Lỗi khi tạo chi tiết sản phẩm:", error);
    }
  };

  return (
    <div className="new">
      <SidebarAdmin />
      <div className="newContainer">
        <NavbarAdmin />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên chi tiết sản phẩm"
                  name="name"
                  value={newProductDetail.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={newProductDetail.price}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Mô tả"
                  name="description"
                  value={newProductDetail.description}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Sizes</label>
                <input
                  type="text"
                  placeholder="Sizes"
                  name="sizes"
                  value={newProductDetail.sizes.join(", ")}
                  onChange={handleSizesChange}
                />
              </div>

              <div className="formInput">
                <label>Colors</label>
                <textarea
                  placeholder="Enter colors (e.g. Red (#FF0000))"
                  name="colors"
                  value={newProductDetail.colors
                    .map((color) => `${color.color} (${color.code_color})`)
                    .join("\n")}
                  onChange={handleColorsChange}
                />
              </div>

              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={newProductDetail.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Product Name</label>
                <select
                  name="product_id"
                  value={newProductDetail.product_id || ""}
                  onChange={handleChange}
                >
                  <option value="">Select a product</option>
                  {productList.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name} - {product.gender}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
