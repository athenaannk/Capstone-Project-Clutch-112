import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/backgroundimage.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
    
        <div className="home-text-section">
          <h1 className="primary-heading">
Broke & Hungry?          </h1>
          <p className="primary-text">
Minimal ingredients and even less funds?
          </p>
          <Link to="/register"><button className="primary-button1">
            Sign Up! <FiArrowRight />
          </button></Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;