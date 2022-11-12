const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

// const ingredientsEl = ingredients.map(ingredient => { 
//   const ingredientsItem = document.createElement("li");
//   ingredientsItem.classList.add("item")
//   ingredientsItem.textContent = ingredient;

//   return ingredientsItem;
// });



// list.append(...ingredientsEl)


const makeList = (ingredients) => { 
  return ingredients.map(ingredient => { 
      const ingredientsItem = document.createElement("li");
      ingredientsItem.classList.add("item")
      ingredientsItem.textContent = ingredient;
    
      return ingredientsItem;
    });
}

const listEl = makeList(ingredients); 
list.append(...listEl)