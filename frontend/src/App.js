import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register"
import AuthDetails from "./Components/Auth/AuthDetails";
import Recipes from "./Components/Recipe";
import IngredientSearch from "./Components/IngredientSearch"
import IngredientsProvider from "./Context/IngredientsContext";
import RecipeProvider from "./Context/RecipesContext";
import ShoppingList from "./Components/ShoppingList";
import Home from "./Components/Home";
import About from "./Components/About"
import Work from "./Components/Work";
import Footer from "./Components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
<Home/>
<RecipeProvider>
  <IngredientsProvider>
    <IngredientSearch/>
    <Recipes/>
  </IngredientsProvider>
</RecipeProvider>


    
    
    </div>
  );
}

export default App;