import React, { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import "./App.css";


import Recipes from "./Components/Recipe";
import RecipeProvider from "./Context/RecipesContext";
import SaleSearch from "./Components/SaleSearch";
import StoreSearch from "./Components/StoreSearch";
import HomePage from "./Views/Home";
import EnterIngredients from "./Views/EnterIngredients";

import Footer from "./Components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">

<EnterIngredients/>  
    
    </div>
  );
}

export default App;