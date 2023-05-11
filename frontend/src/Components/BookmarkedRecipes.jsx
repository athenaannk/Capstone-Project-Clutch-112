import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import Navbar from "./Navbar";

const BookmarkedRecipe = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;

    // Exit early if the user isn't authenticated
    if (!user) return;

    const bookmarksRef = ref(database, `users/${user.uid}/bookmarks`);
    onValue(bookmarksRef, (snapshot) => {
      const bookmarksData = snapshot.val();
      console.log(bookmarksData)
      if (!bookmarksData) {
        // Reset bookmarks state if there are no bookmarks
        setBookmarks([]);
        return;
      }
      // Convert the bookmarks data into an array and set it as state
      const bookmarksArray = Object.entries(bookmarksData).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      setBookmarks(bookmarksArray);
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <h1>Bookmarked Recipes</h1>
      {bookmarks.length === 0 && <p>No bookmarks yet!</p>}
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>
          <h2>{bookmark.title}</h2>
          <img src={bookmark.image} alt={bookmark.title} />
          <h3>Ingredients</h3>
          <ul>
            {bookmark.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Total Nutrients</h3>
          <ul>
            {Object.entries(bookmark.totalNutrients).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookmarkedRecipe;
