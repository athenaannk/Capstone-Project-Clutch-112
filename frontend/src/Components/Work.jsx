
 

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
      title: "Create Shopping List",
      text: "Found a recipe you like? Print out ingredients you need to complete the recipe!",
    },
    {
      image: Sale,
      title: "Connect to Your Local Grocery Store",
      text: "Search your local grocery store fliers to find the ingredients you need at their cheapest prices!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <h2 className="primary-subheading">Work</h2> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
         Three. Simple. Steps. </p>
         <p className="primary-text">Enter ingredients you have. Create a shopping list of ingredients you need. Explore local grocery store fliers to find them at their cheapest prices!
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
    