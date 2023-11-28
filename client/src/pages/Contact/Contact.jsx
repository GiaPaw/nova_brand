import React from "react";
import "./Contact.scss";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Liên hệ chúng tôi</h2>
      <p>
        Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, hãy liên hệ với chúng tôi
        qua thông tin dưới đây:
      </p>
      <div className="contact-details">
        <div className="contact-info">
          <h3>Thông tin liên hệ</h3>
          <p>Email:huynhngocgiabao1610@gmail.com</p>
          <p>Số điện thoại: 0125423669</p>
          <p>Địa chỉ: 68 DangThuyTram Q.BinhThanh TP.HCM</p>
        </div>
        <div className="contact-form">
          <h3>Gửi tin nhắn</h3>
          <form>
            <label htmlFor="name">Họ và tên</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Tin nhắn</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
