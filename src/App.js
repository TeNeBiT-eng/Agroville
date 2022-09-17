import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Investments from "./pages/investments/Investments";
import Veterinary from "./pages/veterinary/Veterinary";
import Contactus from "./pages/contactus/Contactus";
import Signup from "./pages/signup/Signup";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="investments" element={<Investments />} />
        <Route path="veterinary" element={<Veterinary />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
