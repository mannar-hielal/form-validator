const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

function checkRequired(inputArr) {
    inputArr.forEach(input=> {
        input.value.trim() !== "" ? showSuccess(input) : showError(input, `${input.id} should not be empty!`);
    })
}

function checkLength(input, min, max) {
    input.value.length >= min && input.value.length <=max ? showSuccess(input) :  showError(input, `${input.id} length should be between ${min} and ${max}!`);
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(input.value) ? showSuccess(input) : showError(input, `${input.id} should not be a valid email address!`);
}

function checkPasswordsMatch(input1, input2) {
    input1.value === input2.value ? showSuccess (input2) :  showError(input2, `${input2.id} should be identical with password!`);
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


form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form to be submitted
    checkRequired([username, email, password, password2]);
    checkLength(username, 5, 25);
    checkLength(password, 8, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})