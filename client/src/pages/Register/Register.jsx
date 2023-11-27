import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { regisUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    if (password.length > 6) {
      return password;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrorMessages = {};

    if (!inputs.username) {
      newErrorMessages.username = "Username is required.";
    }

    if (!inputs.email) {
      newErrorMessages.email = "Email is required.";
    } else if (!validateEmail(inputs.email)) {
      newErrorMessages.email = "Please enter a valid email address.";
    }

    if (!inputs.password) {
      newErrorMessages.password = "Password is required.";
    } else if (!validatePassword(inputs.password)) {
      newErrorMessages.password = "Password is not enough word.";
    }

    if (!inputs.repeatPassword) {
      newErrorMessages.repeatPassword = "Repeat Password is required.";
    }

    if (inputs.password !== inputs.repeatPassword) {
      newErrorMessages.repeatPassword = "Passwords do not match.";
    }

    const hasErrors = Object.values(newErrorMessages).some(
      (errorMsg) => errorMsg !== ""
    );

    if (hasErrors) {
      setErrorMessages(newErrorMessages);
      setSuccessMessage("");
      return;
    }

    setErrorMessages({});

    try {
      const res = await regisUser(inputs, dispatch, navigate);
      console.log(res);
      setIsSubmitting(false);
      setSuccessMessage("Registration successful!");
      setInputs({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setSuccessMessage("");
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          {errorMessages.username && (
            <p className="error-message">{errorMessages.username}</p>
          )}
        </div>
        <div className="mb-2">
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errorMessages.email && (
            <p className="error-message">{errorMessages.email}</p>
          )}
        </div>
        <div className="mb-2">
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errorMessages.password && (
            <p className="error-message">{errorMessages.password}</p>
          )}
        </div>
        <div className="mb-2">
          <input
            required
            type="password"
            placeholder="Re-Password"
            name="repeatPassword"
            onChange={handleChange}
          />
          {errorMessages.repeatPassword && (
            <p className="error-message">{errorMessages.repeatPassword}</p>
          )}
        </div>

        <button type="submit" className="regis-button" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <span>
          If you have an Account <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
