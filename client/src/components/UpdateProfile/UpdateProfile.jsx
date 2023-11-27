import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailed } from "../../redux/authSlice"; // Import action creators
import "./UpdateProfile.scss"; // Import tệp SCSS cho component này

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    adress: "",
    gender: "",
    birth: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const userId = JSON.parse(atob(token.split(".")[1])).id;

      axios
        .get(`http://localhost:3001/api-user/${userId}`)
        .then((response) => {
          dispatch(loginSuccess(response.data));
          const user = response.data.data.user;
          setFormData({
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            adress: user.adress,
            gender: user.gender,
            birth: user.birth,
          });
        })
        .catch((error) => {
          console.error("Failed to authenticate user:", error);
          localStorage.removeItem("token");
          dispatch(loginFailed());
        });
    }
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const userId = JSON.parse(atob(token.split(".")[1])).id;
    try {
      const response = await axios.patch(
        `http://localhost:3001/api-user/${userId}`,
        formData
      );

      if (response.status === 200) {
        alert("Profile updated successfully!");
      } else {
        alert("Failed to update profile. Please try again later.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(
        "An error occurred while updating profile. Please try again later."
      );
    }
  };

  return (
    <div className="update-profile">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adress">Address</label>
          <textarea
            id="adress"
            name="adress"
            value={formData.adress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="birth">Birthdate</label>
          <input
            type="date"
            id="birth"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
