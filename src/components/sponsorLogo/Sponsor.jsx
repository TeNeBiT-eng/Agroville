import React from "react";
import "./sponsor.css"
import SP1 from "../../assets/svgs/farmfoods.svg";
import SP2 from "../../assets/svgs/dairyfarm.svg";
import SP3 from "../../assets/svgs/a2_Milk.svg";
import SP4 from "../../assets/svgs/aquarius.svg";
import SP5 from "../../assets/svgs/pepperidge.svg";
import SP6 from "../../assets/svgs/Farm-51-Logo.svg";

const Sponsor = () => {
  return (
    <div className="sponsorLogo">
      <div className="sponsorLogoImage">
        <img src={SP1} alt="" />
      </div>
      <div className="sponsorLogoImage">
        <img src={SP2} alt="" />
      </div>
      <div className="sponsorLogoImage">
        <img src={SP3} alt="" />
      </div>
      <div className="sponsorLogoImage">
        <img src={SP4} alt="" />
      </div>
      <div className="sponsorLogoImage">
        <img src={SP5} alt="" />
      </div>
      <div className="sponsorLogoImage">
        <img src={SP6} alt="" />
      </div>
    </div>
  );
};

export default Sponsor;
