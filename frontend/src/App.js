import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import Register from "./Components/Register";
import Login from "./Components/Login";
import EnterIngredients from "./Components/EnterIngredients";
import SaleSearch from "./Components/SaleSearch";
import BookmarkedRecipes from "./Components/BookmarkedRecipes";

function App() {
  return (
   
    <div className="App">

     
        <Routes>
          <Route children path="/" element={<HomePage />} />
          <Route children path="/register" element={<Register />} />
          <Route children path="/login" element={<Login />} />
          <Route children path="/enteringredients" element={<EnterIngredients />} />
          <Route children path="/salesearch" element={<SaleSearch />} />
          <Route children path="/bookmarkedrecipes" element={<BookmarkedRecipes />} />
        </Routes>
   
    </div>
  
  );
}

export default App;