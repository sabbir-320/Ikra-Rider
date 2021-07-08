import React from "react";
import "./homePage.css";

export default function Header() {
  return (
    <section className="header-section">
      <div className="container">
        <div className="header-container">
            {/* navigation */}
          <nav className="navbar">
            <div className="row align-items-center justify-content-between">
              <div className="logo">
                <a href="index.html">Ikra Rider</a>
              </div>
              <div className="menu-item row align-items-center">
                <a href="#index.html">Home</a>
                <a href="">Destination</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
                <a href="" className="login">
                  Login
                </a>
              </div>
            </div>
          </nav>
            {/* rider section */}
          <section className="rider-section">
            <div className="row">
              <div className="rider-item">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/bike.png" alt="bike" />
                    <h3>Bike</h3>
                  </div>
                </div>
              </div>
              <div className="rider-item">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/bus.png" alt="bus" />
                    <h3>Bus</h3>
                  </div>
                </div>
              </div>
              <div className="rider-item">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/car.png" alt="car" />
                    <h3>car</h3>
                  </div>
                </div>
              </div>
              <div className="rider-item">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/train.png" alt="train" />
                    <h3>train</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
