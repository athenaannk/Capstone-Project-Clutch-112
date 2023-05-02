// create an empty shopping list
let shoppingList = [];

// ask the user to enter items to add to the list
let item = prompt("Enter an item for your shopping list (or type 'done' when finished):");

while (item !== "done") {
  shoppingList.push(item);
  item = prompt("Enter another item (or type 'done' when finished):");
}

// display the final shopping list
console.log("Your shopping list:");
for (let i = 0; i < shoppingList.length; i++) {
  console.log("- " + shoppingList[i]);
}

// ask the user if they want to remove any items from the list
let removeItem = prompt("Do you want to remove any items from your shopping list? (yes or no)");

while (removeItem === "yes") {
  let itemToRemove = prompt("Enter the name of the item you want to remove:");
  let indexToRemove = shoppingList.indexOf(itemToRemove);
  if (indexToRemove === -1) {
    console.log("Item not found in shopping list.");
  } else {
    shoppingList.splice(indexToRemove, 1);
    console.log(itemToRemove + " removed from shopping list.");
  }
  removeItem = prompt("Do you want to remove another item? (yes or no)");
}

// display the final shopping list with removed items
console.log("Your updated shopping list:");
for (let i = 0; i < shoppingList.length; i++) {
  console.log("- " + shoppingList[i]);
}