import React from "react";
import Slide from "../../components/Slide/Slide";
import ProductFeatures from "../../components/ProductFeatures/ProductFeatures";
import Categories from "../../components/Categories/Categories";

import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div className="home">
      <Slide />
      <ProductFeatures type={"Feature"} />
      <Categories />
      <ProductFeatures type={"Trending"} />
    </motion.div>
  );
};

export default Home;
