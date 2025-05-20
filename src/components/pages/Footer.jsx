import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h1 className="text-primary">Fyndo</h1>
            <p>Your trusted online store for quality products at best prices. Shop easy, shop smart!</p>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/offers" className="text-light text-decoration-none">Offers</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@fyndo.in</p>
            <p>Phone: +91 9747123455</p>
          </div>
        </div>
        <hr className="border-light" />
        <p className="text-center mb-0 pb-3">&copy; {new Date().getFullYear()} Fyndo. All rights reserved.</p>
      </div>
    </footer>
  );
};
