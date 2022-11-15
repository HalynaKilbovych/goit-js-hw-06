function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

buttonEl.addEventListener ("click", handleBtnChangeColor); 


function handleBtnChangeColor(event) { 
  document.body.style.backgroundColor = getRandomHexColor(); 
  colorEl.textContent = document.body.style.backgroundColor
}; 