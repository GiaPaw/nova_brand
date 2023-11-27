import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";


const New = ({title}) => {
  const [file, setFile] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    adress: "",
    roles: "",
    birth: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("image", file);
    formData.append("user", JSON.stringify(newUser));

    try {
      const response = await axios.post(
        "http://localhost:3001/api-user",
        formData
      );
      console.log("User đã được tạo thành công:", response.data);
      // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công,
      // ví dụ: chuyển hướng người dùng đến trang hiển thị danh sách sản phẩm.
    } catch (error) {
      console.error("Lỗi khi tạo user:", error);
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
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  value={newUser.username}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="adress"
                  name="adress"
                  value={newUser.adress}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Role</label>
                <input
                  type="text"
                  placeholder="roles"
                  name="roles"
                  value={newUser.roles}
                  onChange={handleChange}
                />
              </div>
              <div className="formInput">
                <label>Birth</label>
                <input
                  type="date"
                  placeholder="birth"
                  name="birth"
                  value={newUser.birth}
                  onChange={handleChange}
                />
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
