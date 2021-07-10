import React from "react";
import "./shared.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  function handleMenuBtn(){
    
  }
  return (
    <nav className="navbar">
      <div className="row align-items-center justify-content-between">
        <div className="logo">
          <Link to="/">
            <span>Ikra Rider</span>
          </Link>
        </div>
        <div className="menu-item row align-items-center">
          <Link to="/">
            <a href="">Home</a>
          </Link>
          <Link to="/destination">
            <a href="#destination">Destination</a>
          </Link>
          <Link to="/blog">
            <a href="#blog">Blog</a>
          </Link>
          <Link to="/contact">
            <a href="#contact">Contact</a>
          </Link>
          <a href="#login" className="login">
            <Link to="/login">Login</Link>
          </a>
        </div>
        <div className="menuBtn" onClick={handleMenuBtn()}>
          <span></span>
        {/* &times; */}
        </div>
      </div>
    </nav>
  );
}
