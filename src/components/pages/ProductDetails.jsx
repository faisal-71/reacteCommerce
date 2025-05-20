import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams(); 
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-5 pt-5">Loading...</div>;

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
                <div className="col-md-6 text-center">
          <img src={product.image} alt={product.title} style={{ maxWidth: "100%", maxHeight: "400px" }} />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success">₹ {(product.price*45).toFixed(2)}</h4>
          <p>{product.description}</p>

          <button className="btn btn-primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
