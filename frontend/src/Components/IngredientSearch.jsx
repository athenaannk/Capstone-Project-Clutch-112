import React, { useState } from "react";
import { useIngredientsContext } from "../Context/IngredientsContext";
import { useRecipesContext } from "../Context/RecipesContext";
import { cuisines, meals, health } from "../Api/api";
import apiQuery from "../Api/api";

const Ingredients = () => {
  const [newIngredientEntry, setNewIngredientEntry] = useState("");
  const [cuisineEntry, setCuisineEntry] = useState("");
  const [mealTypeEntry, setMealTypeEntry] = useState("");
  const [healthEntry, setHealthEntry] = useState("");

  const { ingredients, addIngredient } = useIngredientsContext() ;
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

   
return(<div className="flex flex-col gap-3 md:w-5/6 lg:w-3/6 border-solid border-2 border-slate-200 rounded-md bg-slate-100 shadow-md p-5">
<h3 className="formtext">
  Whatcha cooking with? Type in the ingredient and click "Add" to enter any other ingredients you have in your pantry to find recipes that contain them!

</h3>
<form className="ingredientform">
  <input
    className="ingredientinput"
    type="text"
    placeholder="Ingredients"
    onChange={handleIngredientEntry}
    value={newIngredientEntry}
  />
  <button
    onClick={handleInputChange}
    type="submit"
    className="addingredientbutton"
  >
    <p className=" text-md">+</p>
  </button>

  <select onChange={changeCuisine} className="flex-ro">
    <option
      value="Cuisine type"
      defaultValue="Cuisine type"
      disabled
      hidden
    >
      Cuisine type
    </option>
    {cuisines.map((cuisine) => (
      <option key={cuisine} value={cuisine.toLowerCase()}>
        {cuisine}
      </option>
    ))}
  </select>

  <select onChange={changeMeal} className="h-[35px] rounded pl-1">
    <option value="Meal type" defaultValue="Meal type" disabled hidden>
      Meal Type
    </option>
    {meals.map((meal) => (
      <option key={meal} value={meal.toLowerCase()}>
        {meal}
      </option>
    ))}
  </select>

  <select onChange={changeHealth} className="h-[35px] rounded pl-1">
    <option
      value="Health type"
      defaultValue="Health type"
      disabled
      hidden
    >
      Health Type
    </option>
    {health.map((type) => (
      <option key={type} value={type.toLowerCase()}>
        {type}
      </option>
    ))}
  </select>

  <button
    type="submit"
    className="ingredientsearchbutton"
    onClick={apiCall}
  >Search
  </button>
</form>
</div>)
}

export default Ingredients