import React, { useState } from "react";
import pan from "../Assets/pan.jpeg"
import Navbar from "./Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { useIngredientsContext } from "../Context/IngredientsContext";
import { useRecipesContext } from "../Context/RecipesContext";
import { cuisines, meals, health } from "../Api/api";
import Button from 'react-bootstrap/Button';

import apiQuery from "../Api/api";

const Ingredients = () => {
  const [newIngredientEntry, setNewIngredientEntry] = useState("");
  const [cuisineEntry, setCuisineEntry] = useState("");
  const [mealTypeEntry, setMealTypeEntry] = useState("");
  const [healthEntry, setHealthEntry] = useState("");

  const { ingredients, addIngredient, removeIngredient } = useIngredientsContext();
  const { recipes, setRecipes } = useRecipesContext();

  const apiCall = async (e) => {
    e.preventDefault();
    let getRecipes = await apiQuery(
      ingredients,
      healthEntry,
      cuisineEntry,
      mealTypeEntry
    );
    setRecipes(getRecipes);
  };
  //airhandle
  const handleInputChange = (e) => {
    e.preventDefault();
    if (newIngredientEntry === "") {
      return;
    } else if (ingredients.includes(newIngredientEntry)) {
      return;
    } else {
      addIngredient(newIngredientEntry.toLowerCase());
      setNewIngredientEntry("");
    }
  };
  //targe this is a method that notes for change in state of a react component. takes event as parameter and does something and changes state.
  const handleIngredientEntry = (e) => {
    const { target } = e;
    const inputValue = target.value;

    setNewIngredientEntry(inputValue);
  };

  const changeCuisine = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setCuisineEntry(selectValue);
  };

  const changeMeal = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setMealTypeEntry(selectValue);
  };

  const changeHealth = (e) => {
    const { target } = e;
    const selectValue = target.value;
    setHealthEntry(selectValue);
  };


  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container1">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Whatcha Cooking, Good Looking?  </h1>
          <p className="primary-text">
            Add ingredients you have in your pantry to find recipes that contain them!           </p>
        </div>
        <div className="home-image-section">
          <img src={pan} alt="" />
        </div>
      </div>


      <form>
        <input
          className="ingredientinput"
          type="text"
          placeholder="Ingredients"
          onChange={handleIngredientEntry}
          value={newIngredientEntry}
        />
</form>
<form>
        <Button className="addbutton" onClick={handleInputChange} type="submit" size="lg">
          Add
        </Button>{' '}
      </form>

      <form className="listing">
        {ingredients.map((ingredient) => (
          <li className="listing"
            key={ingredient}
            value={ingredient}
        
          >
            <p className="">{ingredient.toLowerCase()}</p>{" "}
            <AiOutlineClose
              className="hover:cursor-pointer hover:scale-125 hover:rotate-180 transition-all"
              onClick={() => removeIngredient(ingredient)}
            />
          </li>
        ))}
      </form>
      <form>
        <h4>Select Cuisine Type</h4>
      </form>
      <form>
        <select onChange={changeCuisine}>
          <option
            value="Cuisine Type"
            defaultValue="Cuisine Type"
            disabled
            hidden
          >
            Cuisine Type
          </option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine.toLowerCase()}>
              {cuisine}
            </option>
          ))}
        </select>
      </form>
      <form>
        <h4>Select Meal Type</h4>
      </form>
      <form>
        <select onChange={changeMeal}>
          <option value="Meal Type" defaultValue="Meal Type" disabled hidden>
            Meal Type
          </option>
          {meals.map((meal) => (
            <option key={meal} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </select>
      </form>
      <form>
        <h4>Select Health or Allergy Concern</h4>
      </form>
      <form>
        <select onChange={changeHealth} >
          <option
            value="Health Concerns"
            defaultValue="Health Concerns"
            disabled
            hidden
          >
            Health Concerns
          </option>
          {health.map((type) => (
            <option key={type} value={type.toLowerCase()}>
              {type}
            </option>
          ))}
        </select>
      </form>
      <form>
        <button
          type="submit"
          className="secondary-button3"
          onClick={apiCall}
        >Search
        </button>
      </form>
    </div>
    

    

  )
}

export default Ingredients