const form = document.querySelector("#form-signup");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullNameError");
const userName = document.querySelector("#username");
const userNameError = document.querySelector("#userNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");
const passwordConfirm = document.querySelector("#passwordConfirm");
const passwordConfirmError = document.querySelector("#passwordConfirmError");
const buttonCreate = document.querySelector(".cta-create");
const successMessage = document.querySelector("#form-validation");

function formConfirmation(event) {
    event.preventDefault();

    let validationPassed = true

    if (lengthChecker(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(userName.value, 2) === true) {
        userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
        validationPassed = false;
    }

    if (emailConfirmation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (passwordValidation(password.value) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(passwordConfirm.value, 8) === true) {
        passwordConfirmError.style.display = "none";
    } else {
        passwordConfirmError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
		successMessage.style.display = "block";
	} else {
		successMessage.style.display = "none";
	}
}

form.addEventListener("submit", formConfirmation);


function passwordValidation(password) {
	const regEx = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;
	const correctMatch = regEx.test(password);
	return correctMatch;
}