import React, { useState } from "react";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">○ CIRCLE</div>
      <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        MENU {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && (
        <div className="dropdown">
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
          <a href="#">Link 1</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;