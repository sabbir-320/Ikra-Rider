import React from "react";
import "../components/blogCom/blogPage.css";
import Navbar from "../components/sharedCom/Navbar";
import BlogItem from "../components/blogCom/BlogItem";

export default function Blog() {
  return (
    <div className="blog-container container">
      <Navbar></Navbar>
      <div className="blog-section-margin-top">
        <BlogItem></BlogItem>
      </div>
    </div>
  );
}
