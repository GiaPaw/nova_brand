import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./List.scss";
import axios from "axios";
const List = () => {
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
  }, []);

  return (
    <div className="list">
      <div className="imgage">
        <img
          src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk2dxpc4wVVZbCyOFNZc0CSIBu2-BQ6bsUI1zKfGsuHZ-wIFMrwSLFPef6gYVRYB9CuCY&usqp=CAU"
          alt=""
        />
      </div>
      <div className="case">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
