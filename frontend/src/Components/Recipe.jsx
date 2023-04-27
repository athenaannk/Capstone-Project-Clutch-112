import React from "react";
import { useRecipesContext } from "../Context/RecipesContext";

const Recipes = () => {
  const { recipes } = useRecipesContext();



  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
        <li
          key={recipe.label + index}
          className="flex flex-col items-center border-solid border-2 border-slate-200 rounded-lg shadow-md bg-slate-200 p-2 w-full md:w-[200px]"
        >
          <h1 className="font-bold text-lg text-indigo-500 text-center ">
            {recipe.label}
          </h1>
          <div>
            <div className="flex flex-row gap-5 items-center">
              <a href={`${recipe.url}`} target="_blank" rel="noreferrer">
                Recipe Link
              </a>
    
            </div>
          </div>
          <img
            className="w-40"
            src={`${recipe.image}`}
            alt={`${recipe.label}`}
          />
        </li>
    ));

  return (
    <div className="border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-2 lg:max-w-[1260px]">
      <h2 className="font-bold text-lg text-center">Recipes</h2>
 
      <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-2 max-h-[400px] overflow-y-scroll">

        {!mappedRecipes ? (
          <div className="italic">
            Search for recipes by clicking "Search Recipes"!
          </div>
        ) : (
          mappedRecipes
        )}
      </ul>
    </div>
  );
        
        }    
export default Recipes