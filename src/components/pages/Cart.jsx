import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cartItems, incrementQty, decrementQty, removeFromCart, clearCart } = useCart();

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + (item.price*45) * item.qty, 0 );

  return (
    <div className="container my-5 pt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty... <Link to="/products">Find your Products</Link>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th>Items you selected</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="d-flex align-items-center gap-2">
                      <img src={item.image} alt={item.title} width="50" />
                      <span style={{ maxWidth: "200px" }}>{item.title}</span>
                    </td>
                    <td>₹ {(item.price * 45).toFixed(2)}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary"
                          onClick={() => decrementQty(item.id)} disabled={item.qty === 1} >
                          - </button>
                        <span>{item.qty}</span>
                        <button className="btn btn-sm btn-outline-secondary"
                          onClick={() => incrementQty(item.id)} >
                          + </button>
                      </div>
                    </td>
                    <td>₹ {(item.price * 45 * item.qty).toFixed(2)}</td>
                    <td>
                      <button className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)} >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-2">
            <h4>Total Amount: ₹ {cartTotal.toFixed(2)}</h4>
            <div className="d-flex gap-2">
              <Link to="/Products" className="btn btn-info text-dark" >Add more Products</Link>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/order-success" className="btn btn-success">
                Place Order
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
