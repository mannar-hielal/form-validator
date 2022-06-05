const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

function checkRequired(input) {
        input.value.trim() !== "" ? showSuccess(input) : showError(input, `${captalizeFirstLetter(input.id)} should not be empty!`);
}

function checkAllRequired(inputArr) {
    inputArr.forEach(input=> {
        input.value.trim() !== "" ? showSuccess(input) : showError(input, `${captalizeFirstLetter(input.id)} should not be empty!`);
    })
}

function checkLength(input, min, max) {
    input.value.length >= min && input.value.length <=max ? showSuccess(input) :  showError(input, `${captalizeFirstLetter(input.id)} length should be between ${min} and ${max}!`);
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    re.test(input.value) ? showSuccess(input) : showError(input, `${captalizeFirstLetter(input.id)} should not be a valid email address!`);
}

function checkPasswordsMatch(input1, input2) {
    input1.value !== "" && input1.value === input2.value ? showSuccess (input2) :  showError(input2, `Confirmed password should be identical with password!`);
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group form-group-js label--animated success";
    const warningMsg = formGroup.querySelector("small");
    warningMsg.innerText = "";
}

function showError(input, msg) {
        const formGroup = input.parentElement;
    formGroup.className = "form-group label--animated error";
    const warningMsg = formGroup.querySelector("small");
    warningMsg.innerText = msg;
}

function captalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}


form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the form to be submitted
    checkAllRequired([username, email, password, password2]);
    checkLength(username, 5, 25);
    checkLength(password, 8, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});

username.addEventListener("blur", function () {
    checkRequired(this);
    checkLength(this, 5, 25);
});

email.addEventListener("blur", function () {
    checkEmail(this);
});

password.addEventListener("blur", function () {
    checkLength(this, 8, 20);
});

password2.addEventListener("blur", function () {
    checkPasswordsMatch(password, password2);
});