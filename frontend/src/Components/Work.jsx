
 

import React from "react";
import Search from "../Assets/search.png";
import Bookmark from "../Assets/bookmark.png";
import Sale from "../Assets/sale.png";

const Work = () => {
  const workInfoData = [
    {
      image: Search,
      title: "Search Recipes",
      text: "Enter ingredients to find recipes containing all or most of what you have!",
    },
    {
      image: Bookmark,
      title: "Bookmark",
      text: "Found a recipe you like? Bookmark and save it!",
    },
    {
      image: Sale,
      title: "Kroger",
      text: "Check prices and promotions at your local Kroger!",
    }
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <h2 className="primary-subheading">Work</h2> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
         Three. Simple. Steps. </p>
         <p className="primary-text">Enter ingredients you have! Bookmark your favorite recipes! Explore your local Kroger store to find current pricing and promotions on the ingredients you need!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2 className="worktitle">{data.title}</h2>
            <p className="worktext">{data.text}</p>
          </div>
        ))}
    
      
    </div>
</div>
  )
        }

        export default Work
    