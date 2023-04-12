import React from "react";
import AboutBackground from "../Assets/background.jpeg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" /> */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
         This site is dedicated to find you recipes within your pantry items no matter how few you have all while saving you money!
        </p>
        <p className="primary-text">
       Connect to your local grocery stores to find the items you need at their lowest price!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Sign Up!</button>
     
        </div>
      </div>
    </div>
  );
};

export default About;