import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Banner.css";
import caroImage1 from "../assets/images/caroImage1.jpg";
import caroImage2 from "../assets/images/caroImage2.jpg";
import caroImage3 from "../assets/images/caroImage3.jpg";
import caroImage4 from "../assets/images/caroImage4.jpg";
import caroImage5 from "../assets/images/caroImage5.jpg";
import caroImage6 from "../assets/images/caroImage6.jpg";
import caroImage7 from "../assets/images/caroImage7.jpg";

const images = [caroImage1, caroImage2, caroImage3, caroImage4, caroImage5, caroImage6, caroImage7];

 const Banner =() => {
  const [current, setCurrent] = useState(0);
 
  useEffect(() => {
    const slide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slide);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
  <div style={{ position: "relative", width: "100vw", height: "95vh", overflow: "hidden" }}>
    <div className="pt-5 mt-5 mb-3 d-flex flex-column justify-content-center align-items-center text-center">
    <h1>Welcome to <span className="text-info fw-bold" >Fyndo</span></h1>
    <p>Grab the best deals before they're gone!</p> 
    <Link to={'/products'}>
    <button className="shop-btn">Shop Now</button>
    </Link>
    </div>
    <img className="caro-image" src={images[current]} alt={`img-${current}`}/>
    <button className="prev-slider fs-5" onClick={prevSlide}>pRev</button>
    <button className="next-slider fs-5" onClick={nextSlide}>neXt</button>
  </div>
  );
};

export default Banner;
