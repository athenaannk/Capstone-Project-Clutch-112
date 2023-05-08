
 

import React from "react";
import Search from "../Assets/search.jpg";
import List from "../Assets/list.jpg";
import Sale from "../Assets/sale.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: Search,
      title: "Search Recipes",
      text: "Enter ingredients you have on hand to find recipes containing all or most of what you have!",
    },
    {
      image: List,
      title: "Bookmark",
      text: "Found a recipe you like? Bookmark it and save it!",
    },
    {
      image: Sale,
      title: "Connect to Your Local Kroger",
      text: "Search ingredients at your local grocery Kroger to check current prices and promotions!",
    }
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <h2 className="primary-subheading">Work</h2> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
         Three. Simple. Steps. </p>
         <p className="primary-text">Enter ingredients you have! Bookmark your favorite recipes! Explore local Kroger store to find current pricing and promotions on ingredients you need!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
    
      
    </div>
</div>
  )
        }

        export default Work
    