import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId)); // Sử dụng action removeFromCart
  };

  return (
    <div className="Cart">
      <h1>Prodcuts in your Cart</h1>
      {cartProducts.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x {item.newPrice}.000{" "}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => handleRemoveFromCart(item.id)}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>
          {cartProducts.reduce(
            (total, item) => total + item.quantity * item.newPrice,
            0
          )}
          .000$
        </span>
      </div>
      <Link to="/Checkout" className="link">
        <button>PROCEED CHECKOUT</button>
      </Link>
      
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
