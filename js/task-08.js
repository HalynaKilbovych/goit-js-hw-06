const formEl = document.querySelector(".login-form"); 

formEl.addEventListener ("submit", handleFormSubmit)

const massage = { 

}

function handleFormSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }

    const massage = { 
      Email: email.value, 
      Password: password.value
    }
    console.log(massage);
  event.currentTarget.reset();
}
