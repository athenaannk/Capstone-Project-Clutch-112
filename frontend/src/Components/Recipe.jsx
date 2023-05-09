import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  useFirebaseApp,
  useUser,
  useFirestoreDocData,
  useFirestore,
} from "reactfire";
import { useRecipesContext } from "../Context/RecipesContext";

const Bookmark = ({ recipe }) => {
  const user = useUser();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const bookmarkRef = useFirestore()
    .collection("bookmarks")
    .doc(user.uid)
    .collection("recipes")
    .doc(recipe.id);

  const handleBookmark = async () => {
    if (!user) {
      alert("Please sign in to bookmark recipes.");
      return;
    }

    try {
      // Check if the recipe is already bookmarked
      const bookmarkDoc = await bookmarkRef.get();
      if (bookmarkDoc.exists) {
        setIsBookmarked(true);
        return;
      }

      // Add the recipe to the user's bookmarks
      await bookmarkRef.set(recipe);
      setIsBookmarked(true);
    } catch (error) {
      console.error(error);
      alert("Failed to bookmark recipe.");
    }
  };

  useFirestoreDocData(bookmarkRef).subscribe((doc) => {
    setIsBookmarked(!!doc);
  });
  return (
    <button className="book" onClick={handleBookmark} disabled={isBookmarked}>
      {isBookmarked ? "Bookmarked!" : "Bookmark"}
    </button>
  );
};

const Recipes = () => {
  const { recipes } = useRecipesContext();
  console.log(recipes);



 

  const mappedRecipes = !recipes
    ? ""
    : recipes.map((recipe, index) => (
        <div>
          <ul>
            <li
              key={recipe + index}
              title={recipe.label}
              image={recipe.image}
              ingredients={recipe.ingredients}
            >
              <div className="recipecard d-flex" style={{ border: "1px solid black" }}>
                <div className="d-flex">
                  <Link to={`${recipe.url}`}>
                    <img className="recipeimg" src={`${recipe.image}`} alt="recipeimage" />
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
                    <Bookmark recipe={recipe} />
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
          <p className="primary-text">Click the image to see more recipe information!</p>
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

export default Recipes