import React from "react";
import "./homePage.css";
import Navbar from "../sharedCom/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-container container">
        <Navbar></Navbar>
        <section className="rider-section">
          <div className="row">
            <div className="rider-item">
              <Link to="/search">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/bike.png" alt="bike" />
                    <h3>Bike</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="rider-item">
              <Link to="/search">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/bus.png" alt="bus" />
                    <h3>Bus</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="rider-item">
              <Link to="/search">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/car.png" alt="car" />
                    <h3>car</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="rider-item">
              <Link to="/search">
                <div className="cart">
                  <div className="cart-body">
                    <img src="images/train.png" alt="train" />
                    <h3>train</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
