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
      <row className="mx-auto">
      <ul >
      <li 

        key={recipe + index}
        title={recipe.label}
        image={recipe.image}
        ingredients={recipe.ingredients}>


        <div className="recipecard mx-auto" style={{border: '1px solid black'}}>

          <div className="">
           <Link to={`${recipe.url}`} >
           <img src={`${recipe.image}`} alt="recipeimage" />
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
      </row>
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