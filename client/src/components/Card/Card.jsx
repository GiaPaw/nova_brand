import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="image">
          <img src={item.images[0]} className="mainImg" alt="" />
          <img src={item.images[1]} className="secondImg" alt="" />
        </div>
        <h2>{item.name}</h2>
        <div className="prices">
          <h3 className="oldPrice"></h3>
          <h3>{item.price}.000$</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
