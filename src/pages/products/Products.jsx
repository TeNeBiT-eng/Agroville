import React from "react";
import "./products.css";
import Navbar from "../../components/navbar/Navbar";
import BG from "../../assets/images/bg-img.png";
import Header from "../../components/header1/Header";

const Products = () => {
  return (
    <>
      <Navbar />
      <Header src={BG} />
    </>
  );
};

export default Products;
