import React from "react";
import Footer from "../components/Footer.jsx";
import HeaderProfile from "../components/HeaderProfile.jsx";
import CompCart from "../components/CompCart";


export default function Cart() {
  return (
    <div className="wrapper">
      <HeaderProfile />
      <CompCart />
      <Footer />
    </div>
  );
}
