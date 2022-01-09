const form = document.querySelector("#form-contact");
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastname");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const telephone = document.querySelector("#telephone");
const telephoneError = document.querySelector("#telephoneError");
const formValid = document.querySelector("#form-validation");
const successMessage = document.querySelector("#form-validation");
const textarea = document.querySelector("#message");
const textareaError = document.querySelector("#textareaError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError")
const button = document.querySelector("#button");

function formConfirmation(event) {
    event.preventDefault();

    let validationPassed = true

    if (lengthChecker(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        validationPassed = false;
    }

    if (emailConfirmation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(telephone.value, 8) === true) {
        telephoneError.style.display = "none";
    } else {
        telephoneError.style.display = "block";
        validationPassed = false;
    }

    if (lengthChecker(textarea.value, 10) === true) {
        textareaError.style.display = "none";
    } else {
        textareaError.style.display = "block";
        validationPassed = false;
    }

    if (validationPassed) {
		successMessage.style.display = "block";
	} else {
		successMessage.style.display = "none";
	}

}

form.addEventListener("submit", formConfirmation);