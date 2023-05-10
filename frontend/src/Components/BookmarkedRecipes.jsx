import { React } from "react";
import { Link } from "react-router-dom";
import { useUser, useFirestoreCollectionData, useFirestore } from "reactfire";
import { useRecipesContext } from "../Context/RecipesContext";

const BookmarkedRecipes = () => {
  const user = useUser();
  const bookmarksRef = useFirestore()
    .collection("bookmarks")
    .doc(user.uid)
    .collection("recipes");
  const { data: bookmarks } = useFirestoreCollectionData(
    bookmarksRef.orderBy("label")
  );

  return (
    <div>
      <h1>My Bookmarked Recipes</h1>
      {!bookmarks ? (
        <p>No bookmarked recipes found.</p>
      ) : (
        <ul>
          {bookmarks.map((bookmark) => (
            <li key={bookmark.id}>
              <Link to={`/recipes/${bookmark.id}`}>{bookmark.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarkedRecipes;
