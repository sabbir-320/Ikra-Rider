import React from "react";
import "../components/contactCom/contactPage.css"
import ContactItem from "../components/contactCom/ContactItem";
import Navbar from "../components/sharedCom/Navbar";
export default function Contact() {
  return (
    <div className="container contact-section-container">
        <Navbar></Navbar>
      <div className="contact-section-container-top">
        <ContactItem></ContactItem>
      </div>
    </div>
  );
}
