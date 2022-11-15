const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

inputEl.addEventListener(`input`, handleInputChange); 

function handleInputChange(event) { 
    console.log (event.currentTarget.value)
    console.dir(textEl);
    textEl.style.fontSize  = event.currentTarget.value +'px'; 
}