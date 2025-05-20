import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export default function OrderSuccess() {
  const { clearCart, cartTotal } = useCart();

  const [paidTotal, setPaidTotal] = React.useState(0);

  React.useEffect(() => {
    setPaidTotal(cartTotal);
    clearCart();
  }, []);

  return (
    <div className="container text-center mt-5 pt-5">
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success" width="100" className="mb-3"/>
      <h2 className="text-success">Order Placed Successfully!</h2>
      <p className="lead">Thank you for shopping with us.</p>

      <div className="border rounded p-3 my-4">
        <h4>Total Paid: ₹ {paidTotal.toFixed(2)}</h4>
        <p className="text-muted">Your items will be delivered soon 🚚</p>
      </div>

      <Link to="/" className="btn btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
}
