import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import axios from "axios";


const New = ({title}) => {
  const [newProductCategory, setNewProductCategory] = useState({
    name: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductCategory({
      ...newProductCategory,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api-category",
        newProductCategory // Send the newProductCategory object
      );

      console.log("Loại sản phẩm đã được tạo thành công:", response.data);
      // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công,
      // ví dụ: hiển thị thông báo hoặc chuyển hướng người dùng.

      // Reset the form after successful submission
      setNewProductCategory({ name: "" });
    } catch (error) {
      console.error("Lỗi khi tạo loại sản phẩm:", error);
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
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên loại sản phẩm"
                  name="name"
                  value={newProductCategory.name}
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
