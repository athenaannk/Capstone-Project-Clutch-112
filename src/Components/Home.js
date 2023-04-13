import React from "react";
import BannerImage from "../Assets/backgroundimage.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={Circle} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
Broke and Hungry?          </h1>
          <p className="primary-text">
Minimal ingredients and even less funds?
          </p>
          <button className="secondary-button">
            Sign Up Now! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;