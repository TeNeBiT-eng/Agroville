import React from "react";
import "./investments.css";
import Navbar from "../../components/navbar/Navbar";
import BG_INVESTMENT from "../../assets/images/investment-bg-img.png";
import Header from "../../components/header2/Header2";

const Investments = () => {
  return (
    <>
      <Navbar />
      <Header
        src={BG_INVESTMENT}
        heading="Investments"
        text="Rare and own a livestock that gives you egde on financial stability without being a farmer "
      />
    </>
  );
};

export default Investments;
