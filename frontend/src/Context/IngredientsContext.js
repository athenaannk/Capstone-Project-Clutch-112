import React, { createContext, useContext, useState } from "react";

const IngredientsContext = createContext();

export const useIngredientsContext = () => useContext(IngredientsContext);

 const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredient] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredient([...ingredients, ingredient]);
  };

  const removeIngredient = (input) => {
    const newIngredientList = ingredients.filter(
      (ingredient) => ingredient !== input
    );
    setIngredient(newIngredientList);
  };

  return (
    <IngredientsContext.Provider
      value={{ ingredients, addIngredient, removeIngredient }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};

export default IngredientsProvider