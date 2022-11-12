
// 1. Cтворю змінну для загального списку
// 2. Cтворю змінну кількості категорій 
// 3. Вивожу в консоль 

const categoriesList = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesList.length}`);

// Перший список 
console.log(`Category: ${categoriesList[0].firstElementChild.textContent}`)

console.log(`Elements: ${categoriesList[0].lastElementChild.children.length}`)

// Другий список 
console.log(`Category: ${categoriesList[1].firstElementChild.textContent}`)

console.log(`Elements: ${categoriesList[1].lastElementChild.children.length}`)

// Третій список 
console.log(`Category: ${categoriesList[2].firstElementChild.textContent}`)

console.log(`Elements: ${categoriesList[2].lastElementChild.children.length}`)
