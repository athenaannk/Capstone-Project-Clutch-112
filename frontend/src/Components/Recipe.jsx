import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



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

      <div className="recipecard w-96 bg-base-100 shadow-xl column">

        <figure className="px-10 pt-10">
          <img src={`${recipe.image}`} alt="recipeimage" />
        </figure>
        <div className="recipecard-body">
          <div className="recipecard-ingredients">
            <ol>
            <h2 className="recipecard-title">{`${recipe.label}`}</h2>

              {recipe.ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
            </ol>
          </div>
   
          <div className="recipecard-actions justify-end">
            <a href={`${recipe.url}`} target="_blank" rel="noreferrer">Recipe Link</a>

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