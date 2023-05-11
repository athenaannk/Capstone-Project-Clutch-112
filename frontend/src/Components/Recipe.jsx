import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecipesContext } from "../Context/RecipesContext";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";

const Recipes = () => {
  const { recipes } = useRecipesContext();

  const database = getDatabase();
  const auth = getAuth();
  const [isBookmarked, setIsBookmarked] = useState(false); // add state for message

  const handleBookmarkClick = async (event, recipe) => {
    event.preventDefault();

    const { label, image, ingredients, url } = recipe;

    const user = auth.currentUser;
    const uid = user.uid;

    const dbRef = ref(database, `users/${uid}/bookmarks`);

    const totalNutrients = { ...recipe.totalNutrients };

    // Replace dots in keys with underscores
    Object.keys(totalNutrients).forEach((key) => {
      const newKey = key.replace(/\./g, "_");
      if (newKey !== key) {
        totalNutrients[newKey] = totalNutrients[key];
        delete totalNutrients[key];
      }
    });

    try {
      const newBookmarkRef = push(dbRef);
      await set(newBookmarkRef, {
        title: label,
        image: image,
        ingredients: ingredients,
        totalNutrients: totalNutrients,
        url: url
      });
      setIsBookmarked(true); // update state when bookmark is added
      console.log("Bookmark added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
        <div>
          <ul>
            <li
              key={recipe.id + index}
              title={recipe.label}
              image={recipe.image}
              ingredients={recipe.ingredients}
            >
              <div
                className="recipecard d-flex"
                style={{ border: "1px solid black" }}
              >
                <div className="d-flex">
                  <Link to={`${recipe.url}`}>
                    <img
                      className="recipeimg"
                      src={`${recipe.image}`}
                      alt="recipeimage"
                    />
                  </Link>
                </div>
                <div className="recipecard-body">
                  <div className="recipecard-ingredients">
                    <ol>
                      <h1 className="recipecard-title">{`${recipe.label}`}</h1>

                      <h2>Ingredients</h2>
                      {recipe.ingredients.map((ingredient) => (
                        <ul className="checkbox">
                          <input type="checkbox" />
                          {ingredient.text}
                        </ul>
                      ))}
                    </ol>
                  </div>

                  <div className="recipecard-actions">
                    <button
                      className="bookbutton mx-auto"
                      onClick={(event) => handleBookmarkClick(event, recipe)}
                    >
                      Bookmark Recipe
                    </button>
                    {isBookmarked && (
                      <span className="bookmark-message">Recipe bookmarked!</span>)}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ));

  return (
    <div className="cardcard">
      <div className="about-section-container">
        <div className="about-section-image-container">
          <img className="about" src="" alt="" />
        </div>
        <div className="about-section-text-container">
          <h1 className="primary-heading">Check Out Your Recipe Cards</h1>
          <p className="primary-text">
            Click the image to see more recipe information!
          </p>
        </div>
      </div>

      {!mappedRecipes ? (
        <div className="primary-text"></div>
      ) : (
        mappedRecipes
      )}
    </div>
  );
};

export default Recipes;
