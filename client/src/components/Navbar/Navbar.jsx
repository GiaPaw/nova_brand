import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Use the useSelector hook to access the cart items array from Redux store
  const cartItems = useSelector((state) => state.cart.products);

  // Calculate the total items count by summing the quantities of all items in the cart
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    if (openDropdown) {
      window.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  // const userIsLoggedIn = useSelector(
  //   (state) => state.auth.login.currenUser !== null
  // ); // Lấy thông tin trạng thái đăng nhập từ Redux state

  const userIsLoggedIn = localStorage.getItem("token");

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="icons">
            <GTranslateOutlinedIcon />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/men">
              {" "}
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/women">
              {" "}
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products">
              {" "}
              Colection
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="item">
            <Link className="link" to="/">
              Shopping time
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              {" "}
              Home Page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              {" "}
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              {" "}
              Contact
            </Link>
          </div>
          <div className="icons">
            <SearchIcon onClick={() => setSearchOpen(!searchOpen)} />
            {searchOpen && (
              <div className="search-bar">
                <input type="text" placeholder="Tìm kiếm..." />
                <Link to="/search-results">
                  <button>Tìm kiếm</button>
                </Link>
              </div>
            )}
            {userIsLoggedIn ? (
              <Link className="link" to="/Account">
                <PersonOutlineIcon />
              </Link>
            ) : (
              <PersonOutlineIcon
                onClick={() => setOpenDropdown(!openDropdown)}
              />
            )}
            <div
              ref={dropdownRef}
              className={`dropdown-menu ${openDropdown ? "active" : ""}`}
            >
              <Link className="dropdown-link" to="/register">
                Đăng ký
              </Link>
              <Link className="dropdown-link" to="/login">
                Đăng nhập
              </Link>
            </div>
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{cartItemsCount}</span>
            </div>
            {open && <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
