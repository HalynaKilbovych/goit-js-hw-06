const categoriesList = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categoriesList.length}`);


// console.log(`Category: ${categoriesList[0].firstElementChild.textContent}`)

// console.log(`Elements: ${categoriesList[0].lastElementChild.children.length}`)

// console.log(`Category: ${categoriesList[1].firstElementChild.textContent}`)

// console.log(`Elements: ${categoriesList[1].lastElementChild.children.length}`)

// console.log(`Category: ${categoriesList[2].firstElementChild.textContent}`)

// console.log(`Elements: ${categoriesList[2].lastElementChild.children.length}`)


categoriesList.forEach( function(category) { 
    
    const title = category.firstElementChild;

    console.log (`Category: ${title.textContent}`);

    const element = category.lastElementChild.children; 

    console.log (`Elements: ${element.length}`);
})