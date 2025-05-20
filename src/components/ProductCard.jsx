import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../assets/styles/ProductCard.css"

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card mx-2 pt-2 card-layout">
    <Link to={`/product/${product.id}`}>
    <img src={product.image} className="card-img-top img-fluid rounded px-1" alt={product.title} 
    style={{height: "190px", objectFit: "contain"}}/>
  </Link>
  <div className="card-body d-flex flex-column justify-content-between" style={{ height: "100%" }}>
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
      <h5 className="card-title text-truncate" title={product.title}>{product.title}</h5>
    </Link>
    <p className="card-text">₹ {(product.price*45).toFixed(2)}</p>
    <button className="btn btn-success  mt-auto" onClick={() => addToCart(product)}>
      Add to Cart </button>
  </div>
</div>
  );
};
