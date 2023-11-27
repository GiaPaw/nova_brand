import React, { useEffect, useState } from "react";
import "./ProductFeatures.scss";
import Card from "../Card/Card.jsx";
import axios from "axios";

const ProductFeatures = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api-detail")
      .then((response) => {
        setData(response.data.data.details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [type]);
  const displayedData = data.slice(0, 4); // Chỉ lấy 4 sản phẩm đầu tiên
  useEffect(() => {});
  return (
    <div className="productFeature">
      <div className="top">
        <h1>{type} product</h1>
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
          labore etdolore.
        </p>
      </div>
      <div className="bottom">
        {displayedData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
