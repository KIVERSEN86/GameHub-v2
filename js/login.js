const form = document.querySelector("#login-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const newPassword = document.querySelector("#newpassword");
const newPasswordError = document.querySelector("#newpassworderror");

function formConfirmation(event) {
    event.preventDefault();

    let validationPassed = true

    if (emailConfirmation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(password.value, 8) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        validationPassed = false;
    }

    if (emailConfirmation(newPassword.value) === true) {
        newpasswordError.style.display = "none";
    } else {
        newPasswordError.style.display = "block";
        validationPassed = false;
    }

}

form.addEventListener("submit", formConfirmation);