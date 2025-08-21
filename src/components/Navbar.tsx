import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Lumen App</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/Gallery">Gallery</a>
      </div>
    </nav>
  );
};

export default Navbar;
