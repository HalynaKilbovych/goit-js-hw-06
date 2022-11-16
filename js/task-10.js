function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]"); 
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");


createBtn.addEventListener("click", getAmount); 
destroyBtn.addEventListener("click", handleBtnDestroyBoxes); 

function getAmount() { 
  const amount = inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let baseSize = 30
  const boxArray = []
  for (let i = 0; i < amount; i += 1) {
  baseSize += 10
  const newBox = document.createElement('div')
  newBox.style.background = getRandomHexColor()
  newBox.style.height = baseSize + 'px'
  newBox.style.width = baseSize + 'px'
  boxArray.push(newBox)
  }
  boxes.append(...boxArray)
 } 

function handleBtnDestroyBoxes() {
  boxes.innerHTML = "";
}

