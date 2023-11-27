import React from "react";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Về chúng tôi</h2>
      <p>
        Chúng tôi là một đội ngũ đam mê và sáng tạo, luôn tận tâm với công việc
        của mình.
      </p>
      <p>
        Chúng tôi cam kết mang đến những sản phẩm chất lượng và dịch vụ tốt nhất
        cho khách hàng của mình.
      </p>
      <p>Hãy cùng chúng tôi trải nghiệm những sản phẩm tuyệt vời và độc đáo.</p>
    </motion.div>
  );
};

export default About;
