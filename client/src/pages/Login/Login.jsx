import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho useHistory

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    try {
      await loginUser(user, dispatch, navigate);
      // if (response.data.token) {
      //   // Kiểm tra xem phản hồi có token không
      //   const token = response.data.token;
      //   console.log("success");
      //   localStorage.setItem("token", token);
      //   navigate("/"); // Chỉ chuyển hướng nếu thành công
      // } else {
      //   setError("Invalid username or password");
      // }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth">
      <h1>Welcome to Our ShoppingPage</h1>
      <h3>Please Login</h3>
      <form onSubmit={handleEmailLogin}>
        <div className="mb-2 input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-2 input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="email-button">
            Login
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <span>
          If you don't have an Account <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
