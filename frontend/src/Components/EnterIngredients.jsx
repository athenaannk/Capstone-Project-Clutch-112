import React from 'react'
import RecipeProvider from '../Context/RecipesContext'
import IngredientsProvider from '../Context/IngredientsContext'
import IngredientSearch from './IngredientSearch'
import Recipes from './Recipe'
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