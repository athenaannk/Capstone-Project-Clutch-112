import React from 'react'
import RecipeProvider from '../Context/RecipesContext'
import IngredientsProvider from '../Context/IngredientsContext'
import IngredientSearch from '../Components/IngredientSearch'
import Recipes from '../Components/Recipe'
const EnterIngredients = () => {
  return (
    <RecipeProvider>
    <IngredientsProvider>
        <IngredientSearch/>
        <Recipes/>
    </IngredientsProvider>
    </RecipeProvider>

  )
}

export default EnterIngredients