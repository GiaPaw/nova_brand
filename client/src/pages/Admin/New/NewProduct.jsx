import React, { useState, useEffect } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import axios from "axios";

const New = ({ title }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    gender: "",
    type: "",
    category_id: 1,
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories from the server
    axios
      .get("http://localhost:3001/api-category")
      .then((response) => {
        setCategories(response.data.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api-product",
        newProduct // Send the newProductCategory object
      );

      console.log("Sản phẩm đã được tạo thành công:", response.data.data);
      // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công,
      // ví dụ: hiển thị thông báo hoặc chuyển hướng người dùng.

      // Reset the form after successful submission
      setNewProduct({
        name: "",
        gender: "",
        type: "",
        category_id: 1,
      });
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
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
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Category</label>
                <select
                  name="category_id"
                  value={newProduct.category_id}
                  onChange={handleChange}
                >
                  {categories &&
                    Array.isArray(categories) &&
                    categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên sản phẩm"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="gender"
                  name="gender"
                  value={newProduct.gender}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Type</label>
                <input
                  type="text"
                  placeholder="type"
                  name="type"
                  value={newProduct.type}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
