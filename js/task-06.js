const inputEl = document.querySelector(`#validation-input[data-length="6"]`);

inputEl.addEventListener(`blur`, handleCheckInput); 

function handleCheckInput(event) { 
    if(event.currentTarget.value.length === 6) { 
        inputEl.classList.add("valid")
    } else { 
        inputEl.classList.add("invalid")
    }
}