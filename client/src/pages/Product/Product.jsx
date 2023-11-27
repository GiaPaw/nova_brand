import React, { useState, useEffect } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Button, Grid, TextField, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [selecQuantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const { id } = useParams(); // Lấy id sản phẩm từ URL
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api-detail/${id}`)
      .then((response) => {
        setProduct(response.data.data.detail);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (selectedSize && selectedColor && selecQuantity > 0) {
      const cartItem = {
        id: product.id,
        title: product.name,
        img: product.images[0], // You can modify this to get the correct image
        newPrice: product.price,
        quantity: selecQuantity,
      };

      dispatch(addToCart(cartItem));

      setSelectedSize("");
      setSelectedColor("");
      setQuantity(1); // Reset quantity to default
    } else {
      alert("Please select size, color, and quantity before adding to cart.");
    }
  };

  if (!product) {
    return <p>Loading product data...</p>;
  }

  return (
    <div className="productDetails">
      <div className="left">
        <div className="images">
          <img
            src={product.images[0]}
            alt=""
            onClick={(e) => setSelectImg(0)}
          />
          <img
            src={product.images[1]}
            alt=""
            onClick={(e) => setSelectImg(1)}
          />
          <img
            src={product.images[2]}
            alt=""
            onClick={(e) => setSelectImg(2)}
          />
          <img
            src={product.images[3]}
            alt=""
            onClick={(e) => setSelectImg(3)}
          />
        </div>
        <div className="mainImg">
          <img src={product.images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>{product.name}</h2>
        <span className="price">{product.price}.000 $</span>
        <p>{product.description}</p>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              select
              label="Size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              fullWidth
            >
              {product.sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <div className="color-buttons">
              {product.colors.map((color) => (
                <Button
                  key={color.name}
                  className={`color-button ${
                    selectedColor === color.name ? "active" : ""
                  }`}
                  style={{ backgroundColor: color.color_code }}
                  onClick={() => setSelectedColor(color.color)}
                ></Button>
              ))}
            </div>
            <div className="color-name">
              {selectedColor && `Selected: ${selectedColor}`}
            </div>
          </Grid>
        </Grid>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {selecQuantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add" onClick={handleAddToCart}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          {/* <span>Vendor: {product.vendor}</span>
          <span>Product Type: {product.productType}</span>
          <span>Tag: {product.tags.join(", ")}</span> */}
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
