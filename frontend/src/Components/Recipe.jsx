import React from "react";
import ShoppingList from "./ShoppingList";
import { Link } from "react-router-dom";



import { useRecipesContext } from "../Context/RecipesContext";

const Recipes = () => {
  const { recipes } = useRecipesContext();
  console.log(recipes)

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (

      <div className="mx-auto">

        <ul >
          <li

            key={recipe + index}
            title={recipe.label}
            image={recipe.image}
            ingredients={recipe.ingredients}>


            <div className="recipecard d-flex" style={{ border: '1px solid black' }}>

              <div className="d-flex">
                <Link to={`${recipe.url}`} >
                  <img className="recipeimg" src={`${recipe.image}`} alt="recipeimage" />
                </Link>
              </div>
              <div className="recipecard-body">
                <div className="recipecard-ingredients">
                  <ol>
                    <h1 className="recipecard-title">{`${recipe.label}`}</h1>

                    <h2>Ingredients</h2>
                    {recipe.ingredients.map(ingredient => (<ul className="checkbox"><input type="checkbox" />{ingredient.text}</ul>))}
                  </ol>
                </div>
                <div>
                  <button className="shoppingbutton mx-auto" >Add to Shopping List</button>
                </div>
                <div className="recipecard-actions">
                  <button className="bookbutton mx-auto" >Bookmark Recipe</button>

                </div>


              </div>

            </div>
          </li>
        </ul>
      </div>
    )
    )


  return (


    <div className="cardcard">
      <div className="about-section-container">

        <div className="about-section-image-container">
          <img className="about" src="" alt="" />
        </div>
        <div className="about-section-text-container">

          <h1 className="primary-heading">
            Check Out Your Recipe Cards
          </h1>
          <p className="primary-text">
            Click the image to see more recipe information!
          </p>
        </div>
      </div>


      {!mappedRecipes ? (
        <div className="primary-text">
        </div>
      ) : (
        mappedRecipes
      )}


    </div>





  )
}






export default Recipes