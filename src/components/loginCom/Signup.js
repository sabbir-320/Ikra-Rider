import React from 'react'
import "./loginPage.css";
import Navbar from '../sharedCom/Navbar'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="login-section container">
        <Navbar></Navbar>
        <div className="login-container row justify-content-center align-items-center">
          <div className="login-content">
            <form action="">
              <span>Create an account</span>
              <input type="text" name="" id="" placeholder="Name" />
              <input type="email" name="" id="" placeholder="Username or Email" />
              <input type="password" name="" id="" placeholder="Password" />
              <input type="password" name="" id="" placeholder="Confirm Password" />
              <input type="submit" value="login" />
              <p>Already have an account?<Link to="/login"><a href="">Login</a></Link></p>
            </form>
            <div className="optional-login">
              <p>Or</p>
              <button className="google">Continue with Google</button>
              <button className="fb">Continue with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    )
}
