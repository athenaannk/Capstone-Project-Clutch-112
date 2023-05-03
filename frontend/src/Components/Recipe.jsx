import React from "react";
import ShoppingList from "./ShoppingList";



import { useRecipesContext } from "../Context/RecipesContext";

const Recipes = () => {
  const { recipes } = useRecipesContext();
  console.log(recipes)

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
      <li

        key={recipe + index}
        title={recipe.label}
        image={recipe.image}
        ingredients={recipe.ingredients}>


        <div className="recipecard mx-auto column" style={{border: '1px solid black'}}>
          <h1 className="recipecard-title">{`${recipe.label}`}</h1>

          <figure className="px-10 pt-10">
            <img src={`${recipe.image}`} alt="recipeimage" />
          </figure>
          <div className="recipecard-body">
            <div className="recipecard-ingredients">
              <ol>
                <h2>Ingredients</h2>
                {recipe.ingredients.map(ingredient => (<ul className="checkbox"><input type="checkbox" />{ingredient.text}</ul>))}
              </ol>
            </div>
            <div>
              <button className="shoppingbutton mx-auto" >Add to Shopping List</button>
            </div>
            <div className="recipecard-actions">
              <a href={`${recipe.url}`} className="url" target="_blank" rel="noreferrer">Recipe Link</a>

            </div>


          </div>

        </div>
      </li>
    )
    )


  return (


    <div className="">

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