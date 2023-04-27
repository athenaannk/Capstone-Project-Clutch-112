import axios from "axios";

var api_id = "b32e19cc";
var api_key = "3ffa0c39dc608a75d262981ddd7f3e2b";

const ingredientCheck = (arr) => {
  let ingredientEntry = [arr[0]];
  if (arr.length < 1) {
    return;
  } else {
    for (let i = 1; i < arr.length; i++) {
      ingredientEntry.push(`%${arr[i]}`);
    }
  }
  return ingredientEntry.join("");
};

const healthEntry = (input) => {
  if (input === "" || input === "any" || input === "health type") {
    return "";
  } else {
    return `&health=${input}`;
  }
};

const cuisineEntry = (input) => {
  if (input === "" || input === "any" || input === "select cuisine") {
    return "";
  } else if (input.split(" ").length > 1) {
    return `&cuisineType=${input.split(" ").join("%20")}`;
  } else {
    return `&cuisineType=${input}`;
  }
};

const mealTypeEntry = (input) => {
  if (input === "" || input === "any" || input === "meal type") {
    return "";
  } else {
    return `&mealType=${input}`;
  }
};


const apiQuery = async (queryIngredients, health, cuisine, meal) => {

  var apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientCheck(
    queryIngredients
  )}&app_id=${api_id}&app_key=${api_key}${healthEntry(health)}${cuisineEntry(
    cuisine
  )}${mealTypeEntry(meal)}`;
  const response = await axios.get(apiUrl);
  const recipesResponse = response.data.hits;
  const recipeInfo = recipesResponse.map((recipe) => {
    return recipe.recipe;
  });

  return recipeInfo;
};

//lists key words from edamam api
export const cuisines = [
    "Select Cuisine",
    "Any",
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian",
  ];
  
  export const meals = [
    "Meal type",
    "Any",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
  ];
  
  export const health = [
    "Health type",
    "Any",
    "Alcohol-cocktail",
    "Alcohol-free",
    "Celery-free",
    "Crustacean-free",
    "Dairy-free",
    "DASH",
    "Egg-free",
    "Fish-free",
    "Fodmap-free",
    "Gluten-free",
    "Immuno-supportive",
    "Keto-friendly",
    "Kidney-friendly",
    "Kosher",
    "Low-fat-abs",
    "Low-potassium",
    "Low-sugar",
    "Lupine-free",
    "Mollusk-free",
    "Mustard-free",
    "No-oil-added",
    "Paleo",
    "Peanut-free",
    "Pescatarian",
    "Pork-free",
    "Red-meat-free",
    "Sesame-free",
    "Shellfish-free",
    "Soy-free",
    "Sugar-conscious",
    "Sulfite-free",
    "Tree-nut-free",
    "Vegan",
    "Vegetarian",
    "Wheat-free",
  ];
export default apiQuery;