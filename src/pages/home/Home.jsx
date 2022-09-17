import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import BG from "../../assets/images/bg-img.png";
import Header from "../../components/header1/Header";
import Sponsor from "../../components/sponsorLogo/Sponsor";
import ABOUTBG from "../../assets/images/about-bg.png";
import Livestock from "../../assets/svgs/livestock.svg";
import Veterinary from "../../assets/svgs/veterinary.svg";
import Frozenfood from "../../assets/svgs/frozenfood.svg";
import Investment from "../../assets/svgs/investment.svg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header src={BG} />
      <Sponsor />

      <article>
        <div className="about_container">
          <div className="about_img-container">
            <img src={ABOUTBG} alt="backgroundimage" className="bgImage" />
          </div>
          <div className="about-overlay">
            <div className="about-heading">
              <h2>About Us</h2>
              <div class="text_illustration">
                <div className="about-text">
                  <p>
                    We are a professional multi-species livestock marketing and
                    frozen food company owned by farmers. We offer veterinary
                    and consulting services for farmers as well as sell
                    livestock throughout Nigeria and invest for those who want
                    to own livestock but lack the time to keep track of it
                  </p>

                  <p className="mid-text">
                    Since our founding three years ago, we have built a
                    trustworthy network of more than 4,000 Nigerian farmers
                    across the country. Through these connections, we facilitate
                    livestock trade along the whole Nigerian supply chain, from
                    the breeder to the processor.
                  </p>

                  <p>
                    We are a trusted partner to our clients because of this
                    experience.
                  </p>

                  <div className="about_readmore-btn">
                    <button>Read More</button>
                  </div>
                </div>

                <div className="about-illustrations">
                  <div className="ilustration-container">
                    <div className="ilustration-text">
                      <div className="illustration-img">
                        <img src={Livestock} alt="" />
                      </div>
                      <h6>Livestock Sales</h6>
                      <p>
                        We are a professional multi-species livestock marketing
                        and frozen food company owned by farmers.
                      </p>
                    </div>
                  </div>

                  <div className="ilustration-container">
                    <div className="ilustration-text">
                      <div className="illustration-img">
                        <img src={Livestock} alt="" />
                      </div>
                      <h6>Livestock Sales</h6>
                      <p>
                        We are a professional multi-species livestock marketing
                        and frozen food company owned by farmers.
                      </p>
                    </div>
                  </div>

                  <div className="ilustration-container">
                    <div className="ilustration-text">
                      <div className="illustration-img">
                        <img src={Livestock} alt="" />
                      </div>
                      <h6>Livestock Sales</h6>
                      <p>
                        We are a professional multi-species livestock marketing
                        and frozen food company owned by farmers.
                      </p>
                    </div>
                  </div>

                  <div className="ilustration-container">
                    <div className="ilustration-text">
                      <div className="illustration-img">
                        <img src={Livestock} alt="" />
                      </div>
                      <h6>Livestock Sales</h6>
                      <p>
                        We are a professional multi-species livestock marketing
                        and frozen food company owned by farmers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Home;

// {/* <form class="example" action="action_page.php">
//                 <input type="text" placeholder="Search..." name="search" />
//                 <button type="submit">
//                   <i class="fa fa-search"></i>
//                 </button>
//               </form> */}
