import React from "react";
import Header from "../components/homeCom/Header";
import BlogItem from "../components/blogCom/BlogItem";
import ContactItem from "../components/contactCom/ContactItem";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <BlogItem></BlogItem>
      <ContactItem></ContactItem>
    </div>
  );
}
