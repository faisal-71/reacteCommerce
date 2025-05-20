import React from "react";
import "../../assets/styles/About.css";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/Logo.png';


export default function About() {
  return (
    <div className="about-container pt-5">
      <h2 className="small-screen">About <span>Fyndo</span></h2>
      <div className="about-content">
        <div className="about-image">
        <img src={Logo} alt="Fyndo Logo" width="200" />
        <p className="bg-black text-white mt-2">Welcome to Fyndo, your one-stop shop for everything you love!</p>
        </div>
        <div className="about-text">
          <h4>Who We Are</h4>
          <p>
            Welcome to <strong></strong>, your trusted online shopping destination.
            We bring you quality products with fast delivery, secure payments, and top-notch service.
          </p>
          <p>
            Whether you're hunting for the latest trends or daily essentials, we've got you covered!
          </p>
          <Link to={"/products"}>
          <button className="about-btn">Explore Products</button>
          </Link>
        </div>
      </div>

      <div className="about-boxes">
        <div className="box">
          <h5>Our Mission</h5>
          <p>To make shopping easy, affordable, and delightful for everyone.</p>
        </div>
        <div className="box">
          <h5>Our Vision</h5>
          <p>To be your #1 choice with value, variety, and customer care.</p>
        </div>
        <div className="box">
          <h5>Why Choose Us?</h5>
          <p>Fast delivery 🚚, quality products ⭐, and 24/7 support 📞.</p>
        </div>
      </div>
    </div>
  );
};
