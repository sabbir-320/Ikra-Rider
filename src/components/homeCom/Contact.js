import React from "react";
import "./homePage.css";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h3>contact</h3>
          </div>
        </div>
        <div className="row">
          <div class="contact-cart">
            <div class="cart">
              <div class="cart-body">
                <i class="fas fa-phone"></i>
                <span>Phone</span>
                <p>+880 170000000</p>
              </div>
            </div>
          </div>
          <div class="contact-cart row">
            <div class="cart">
              <div class="cart-body">
                <i class="fas fa-envelope"></i>
                <span>Email</span>
                <p>urban@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="contact-cart row">
            <div class="cart">
              <div class="cart-body">
                <i class="fas fa-map-marker-alt"></i>
                <span>Address</span>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="contact-content row">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
            </form>
          </div>
          <div class="contact-content row">
            <textarea placeholder="Your Massage"></textarea>
          </div>
        </div>
      </div>
      <footer>
          <div className="container">
              <div className="row">
                  <div className="section-title">
                  <h3>&copy; urban</h3>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}
