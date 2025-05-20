import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Cart from "./components/pages/Cart";
import OrderSuccess from "./components/pages/OrderSuccess";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
      <Footer/>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
