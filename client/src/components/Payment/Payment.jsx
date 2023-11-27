import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Payment.scss";
import { useDispatch, useSelector } from 'react-redux';


import { resetCart } from '../../redux/cartReducer';
import { setOrderData } from '../../redux/actions';

const Payment = () => {
  const [customerInfo, setCustomerInfo] = useState({
    fullname: '',
    adress: '',
    phone: '',
  });
  const cartProducts = useSelector((state) => state.cart.products);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };
  const dispatch = useDispatch();

  const handleConfirmPayment = async () => {
    try {
      
      // Tạo đơn hàng
      const orderResponse = await axios.post("http://localhost:3001/api-order", {
        total_price: calculateTotalPrice(cartProducts), // Tính tổng giá
        status: 'Đã thanh toán',
        user_id: getUserIdFromToken(), // Lấy user_id từ token
      });

      // Lưu thông tin đơn hàng vào Redux store
      dispatch(setOrderData(cartProducts));

      // Tạo chi tiết đơn hàng cho từng sản phẩm
      await Promise.all(
        cartProducts.map(item =>
          axios.post("http://localhost:3001/api-orderDetail", {
            order_id:1,
            product_id: 1, // Thay thế bằng ID thực tế của sản phẩm
            price: item.newPrice,
            quantity: item.quantity,
          })
          
        )
      );

      // Đặt lại giỏ hàng
      dispatch(resetCart());

      // Hiển thị thông báo thành công
      alert("Thanh toán thành công!");

    } catch (error) {
      console.error("Xác nhận thanh toán thất bại:", error);
    }

  };
  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(atob(token.split(".")[1])).id;
    }
    return null;
  };

  // Tính tổng giá
  const calculateTotalPrice = (cartProducts) => {
    return cartProducts.reduce((total, item) => total + item.newPrice * item.quantity, 0);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 // id người dùng được lưu trong JWT token dưới dạng payload.userId
 const userId = JSON.parse(atob(token.split(".")[1])).id;
      axios
        .get(`http://localhost:3001/api-user/${userId}`) // Change the API endpoint
        .then((response) => {
          const userData = response.data.data.user; // Assuming response.data contains user data
          setCustomerInfo({
            fullname: userData.fullname,
            adress: userData.adress,
            phone: userData.phone,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
    }
  }, []);

  return (
    <div className="Checkout">
      <h1>Confirm Your Order</h1>
      <div className='layout'>
        <div className="customer-info">
          <h2>Customer Information</h2>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={customerInfo.fullname}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={customerInfo.adress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={customerInfo.phone}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div className="payment-methods">
          <h2>Payment Methods</h2>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={selectedPaymentMethod === 'cash'}
              onChange={() => handlePaymentMethodSelect('cash')}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={selectedPaymentMethod === 'creditCard'}
              onChange={() => handlePaymentMethodSelect('creditCard')}
            />
            Credit Card
          </label>
        </div>
      </div>
      <button className="ConfirmButton" onClick={handleConfirmPayment}>Confirm Payment</button>


    </div>
  );
};

export default Payment;
