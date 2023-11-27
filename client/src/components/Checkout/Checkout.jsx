import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import "./Checkout.scss"
import { useNavigate } from 'react-router-dom';




const Checkout = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteItem = (productId) => {
    dispatch(removeItem(productId)); 
  };

  const token = localStorage.getItem('token');

  const handlePaymentClick = () => {
    if (token) {
      navigate("/Payment"); // Nếu đã đăng nhập, chuyển hướng đến trang Payment
    } else {
      navigate("/login"); // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    }
  };

  return (
    <div className="Checkout">
      <div className="CheckoutHeader">
        <h1>Your Order</h1>
      </div>
      <div className="ItemContainer">
        {cartProducts.map((item) => (
          <div key={item.id} className="CartItem">
            <img src={item.img} alt={item.title} />
            <div className="ItemDetails">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>Price: {item.newPrice}.000VMD</p>
              <p>Quantity: {item.quantity}</p>
              <button className="DeleteButton"
               onClick={() => handleDeleteItem(item.id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="Total">
        <h2>Total</h2>
        <p>
          
          {cartProducts.reduce(
            (total, item) => total + item.quantity * item.newPrice,
            0
          )}.000VND
        </p>
      </div>
      <button className="CheckoutButton" onClick={handlePaymentClick}>Payment</button>
    </div>
  );
};

export default Checkout;
