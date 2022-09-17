import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/svgs/agroville-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
      <div className="nav">
        <nav className="navBar">
          <div className="logoContainer">
            <img src={Logo} alt="agroville-logo" />
          </div>
          <div className={`navItems ${isOpen && "open"}`}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/investments">Investments</Link>
            <Link to="/veterinary">Veterinary</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/signup" className="btn-signup">
              <button>Sign up</button>
            </Link>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bars"></div>
          </div>
        </nav>
      </div>
    
  );
};
// {/* <Link to="/expense">Expenses</Link> */}

export default Navbar;
