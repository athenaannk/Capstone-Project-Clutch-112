import React from "react";



import { useRecipesContext } from "../Context/RecipesContext";

const Recipes = () => {
  const { recipes } = useRecipesContext();


  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (

      // <div className="about-section-container">

        /* < className="about-section-text-container"> */

          <div className="card w-96 bg-base-100 shadow-xl">
          
            <figure className="px-10 pt-10">
            <img src={`${recipe.image}`} />
            </figure>
            <div className="recipecard-body">
              <h2 className="recipecard-title">{`${recipe.label}`}</h2>
              <div className="recipecard-actions justify-end">
                <button className="secondary-button">Full Recipe</button>

              </div>
            </div>
       
        </div>
   
    )
    )



  return (


<div className="about-section-container">
<div className="about-section-image-container">
        <img className="about"  alt="" />
      </div>

<div className="about-section-text-container">
  {/* <h2 className="primary-subheading">About</h2> */}
  <h1 className="primary-heading">
    I Got Beans Greens Potatoes Tomatoes You Name It!
  </h1>
  <p className="primary-text">
Check it out!  </p>



    <div className="">

{!mappedRecipes ? (
  <div className="primary-text">
  </div>
) : (
  mappedRecipes
)}
  </div>
  </div>
</div>




  )
}






export default Recipes