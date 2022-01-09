const hamburgerMenu = document.querySelector(".icon-burger");

hamburgerMenu.onclick = function () {

    event.target.classList.toggle("rotate90");
}

const buttonRotate = document.querySelector(".cta-cart");

buttonRotate.onClick = function () {
    console.log(event);
}

function lengthChecker(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function emailConfirmation(email) {
	const regEx = /\S+@\S+\.\S+/;
	const correctMatch = regEx.test(email);
	return correctMatch;
}
