import React from 'react';

function ShoppingList(props) {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;