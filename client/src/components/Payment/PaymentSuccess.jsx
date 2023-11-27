import React from 'react';

const PaymentSucces = ({ orderData }) => {
  return (
    <div className="OrderSuccess">
      <h1>Đặt Hàng Thành Công</h1>
      <p>Thông tin đơn hàng:</p>
      <ul>
        {orderData.map((item, index) => (
          <li key={index}>
            Sản phẩm: {item.productName}, Số lượng: {item.quantity}, Giá: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentSucces;
