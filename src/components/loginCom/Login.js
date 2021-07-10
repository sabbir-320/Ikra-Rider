import React from "react";
import "./loginPage.css";
import Navbar from "../sharedCom/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-section container">
      <Navbar></Navbar>
      <div className="login-container row justify-content-center align-items-center">
        <div className="login-content">
          <form action="">
            <span>Login</span>
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />
            <div className="row justify-content-between">
                <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Remember Me</label>
                </div>
              <a href="">forgot password?</a>
            </div>
            <input type="submit" value="login" />
            <p>Don’t have an account? <Link to="/signup"><a href=""> Create an account</a></Link></p>
          </form>
          <div className="optional-login">
            <p>Or</p>
            <button className="google">Continue with Google</button>
            <button className="fb">Continue with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}
