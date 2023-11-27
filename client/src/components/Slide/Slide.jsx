import { useState, useEffect } from "react";
import React from "react";
import "./Slide.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const data = [
    "/img/banner/img_banner_01.jpg",
    "/img/banner/img_banner_02.jpg",
    "/img/banner/img_banner_03.jpg",
    "/img/banner/img_banner_04.jpg",
    "/img/banner/img_banner_05.jpg",
    "/img/banner/img_banner_06.jpg",
  ];

  const preSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 1);
    }, 1000); // Mỗi giây tăng currentTime lên 1 đơn vị

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (currentTime >= 5) {
      // Chuyển slide sau mỗi 5 giây
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
      setCurrentTime(0); // Reset thời gian
    }
  }, [currentTime, data.length]);

  return (
    <div className="slider">
      <div
        className="contain"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={preSlide}>
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slide;
