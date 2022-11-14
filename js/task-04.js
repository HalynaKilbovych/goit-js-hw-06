const counterEl = document.querySelector("#counter")
const counterValue = document.querySelector("#value")

// кнопка - 
// console.log(counterEl.firstElementChild);

// кнопка + 
// console.log(counterEl.lastElementChild);
// const counter = { 
//     value: 0, 
//     increment() { 
//         this.value +=1;
//         // console.log("+1");
//     },
//     decrement() { 
//         this.value -=1; 
//         // console.log("-1");
//     }
// }
// counterEl.firstElementChild.addEventListener("click", function() {
//     counter.decrement();
//     counterValue.textContent = counter.value; 
// }); 


// counterEl.lastElementChild.addEventListener("click", function() { 
//     counter.increment();
//     counterValue.textContent = counter.value;
// }); 

let counter = 0;

function handleBtnDecrement(event) { 
    counter -=1;
    event.currentTarget.value = counter;
    counterValue.textContent = event.currentTarget.value; 
}

function handleBtnIncrement(event) { 
    counter +=1;
    event.currentTarget.value = counter;
    counterValue.textContent = event.currentTarget.value; 
}

counterEl.firstElementChild.addEventListener("click", handleBtnDecrement); 

counterEl.lastElementChild.addEventListener("click", handleBtnIncrement); 