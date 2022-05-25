console.log("form validator is here");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");
const msgs = document.querySelectorAll("small");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 25);
})

function checkRequired(inputArr) {
    inputArr.forEach(input=> {
        if (input.value.trim() !== "") {
            showSuccess(input);
        } else {
            showError(input, `${input.id} should not be empty!`);
        }
    })
}

function checkLength(input, min, max) {
    if(input.value.length >= min && input.value.length <=max) {
        showSuccess(input);
    } else {
        showError(input, `${input.id} length should be between ${min} and ${max}!`);
    }
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group label--animated success";
    const warningMsg = formGroup.querySelector("small");
    warningMsg.innerText = "";
}

function showError(input, msg) {
        const formGroup = input.parentElement;
    formGroup.className = "form-group label--animated error";
    const warningMsg = formGroup.querySelector("small");
    warningMsg.innerText = msg;
}
