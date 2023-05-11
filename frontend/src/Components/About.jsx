import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../Assets/background.jpeg";
import { FiArrowRight } from "react-icons/fi";


const About = () => {

  
  return (
    <div className="about-section-container">
  
      <div className="about-section-image-container">
        <img className="about" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        {/* <h2 className="primary-subheading">About</h2> */}
        <h1 className="primary-heading">
          Grocery Bills are Up and Food Prices are Continuing to Rise. 
        </h1>
        <p className="primary-text">
         This site is dedicated to find you recipes within your pantry items no matter how few you have all while saving you money!
        </p>
        <p className="primary-text">
       Connect to your local grocery stores to find the items you need at their lowest price!
        </p>
        <div className="about-buttons-container">
          <Link to="/register"><button className="primary-button1">Sign Up! <FiArrowRight /></button></Link>
     
        </div>
      </div>
    </div>
  );
};

export default About;