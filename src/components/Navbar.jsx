import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "../assets/styles/Navbar.css";

export default function Navbar() {
  const { cartItems } = useCart();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand pe-5 me-5 text-style" to="/">Fyndo.in</Link>
        <form className="d-flex my-2" role="search">
        <input className="form-control rounded-start-3 rounded-end-0 input-area" type="search" placeholder="Search products..."
          aria-label="Search"/>
        <button className="btn btn-outline-light bg-primary rounded-start-0 rounded-end-3" type="submit">Search</button>
      </form>
        <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed} aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={handleNavCollapse}>Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavCollapse}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavCollapse}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart" onClick={handleNavCollapse}>
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};
