import React from "react";
import "./veterinary.css";
import Navbar from "../../components/navbar/Navbar";
import BG_VETERINARY from "../../assets/images/veterinary-bg-img.png";
import Header from "../../components/header2/Header2";

const Veterinary = () => {
  return (
    <>
      <Navbar />
      <Header
        src={BG_VETERINARY}
        heading="Veterinary"
        text="Consult us for the well beign of your farm animal, we specialise on giving your farm animal the best   "
      />
    </>
  );
};

export default Veterinary;
