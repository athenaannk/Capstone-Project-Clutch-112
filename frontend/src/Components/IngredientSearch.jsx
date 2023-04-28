import React, { useState } from "react";
import Navbar from "./Navbar";
import Cone from "../Assets/cone.png";
import Donut from"../Assets/donut.png";
import Grape from "../Assets/grape.png";
import Lemon from "../Assets/lemon.png";
import Straw from "../Assets/straw.png"
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

  const { ingredients, addIngredient } = useIngredientsContext();
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
    <div className="home-text-section">
      <Navbar />

      <h3 className="primary-heading">
        Whatcha Cooking, Good Looking?  </h3>
      <p className="primary-text">
        Add ingredients you have in your pantry to find recipes that contain them!           </p>

      <form className="ingredientform">

        <input
          className="ingredientinput"
          type="text"
          placeholder="Ingredients"
          onChange={handleIngredientEntry}
          value={newIngredientEntry}
        />
        <Button className="addbutton" onClick={handleInputChange} type="submit" size="lg">
          Add
        </Button>{' '}
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
          className="secondary-button"
          onClick={apiCall}
        >Search
        </button>
      </form>

      <carousel id="carouselExampleSlidesOnly" className="mx-auto home-image-section2" data-mdb-ride="carousel">
        <carousel className="home-banner-container">
          <carousel className="home-bannerImage-container">
            <img src= {Cone} className="d-block w-100" alt="Wild Landscape" />
          </carousel>
          <carousel class="carousel-item">
            <img src= {Donut} className="d-block w-100" alt="Camera" />
          </carousel>
          <carousel class="carousel-item">
            <img src= {Grape} className="d-block w-100" alt="Exotic Fruits" />
          </carousel>
          <carousel class="carousel-item">
            <img src= {Lemon} className="d-block w-100" alt="Exotic Fruits" />
          </carousel>
          <carousel class="carousel-item">
            <img src= {Straw} className="d-block w-100" alt="Exotic Fruits" />
          </carousel>
        </carousel>
        </carousel>


    </div>)
}

export default Ingredients