console.log("form validator is here");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
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


function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.add("success");
}

function showError(input, msg) {
        const formGroup = input.parentElement;
    formGroup.classList.add("error");
    const warningMsg = formGroup.querySelector("small");
    warningMsg.innerText = msg;

}