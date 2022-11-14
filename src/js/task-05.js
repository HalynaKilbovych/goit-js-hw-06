const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output")

inputEl.addEventListener(`input`, handleInputChange)

function handleInputChange (event) { 
    // console.log(event.currentTarget.value);
    if (event.currentTarget.value === "") { 
        outputEl.textContent = "Anonymous";
    } else { 
        outputEl.textContent = event.currentTarget.value;
    } 
}

