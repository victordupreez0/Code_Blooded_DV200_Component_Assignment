import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <div className="circle-logo"></div>
        CIRCLE
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && (
        <div className="dropdown">
          <a href="#card-container">Products</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
