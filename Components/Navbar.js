import React from "react";
import './Navbar.css';
function Navbar() {
    return (
      <div className="navbar">
        <div className="logo">Reverse</div>
        <div className="nav-buttons">
          <button className="nav-button">Ticket</button>
          <button className="nav-button">Contact us</button>
        </div>
        <div className="auth-buttons">
          <button className="auth-button login">Login</button>
          <button className="auth-button register">Register</button>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  