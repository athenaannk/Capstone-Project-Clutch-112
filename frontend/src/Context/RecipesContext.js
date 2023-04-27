import React, { createContext, useContext, useState } from "react";

const RecipesContext = createContext();

export const useRecipesContext = () => useContext(RecipesContext);

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState();

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipeProvider