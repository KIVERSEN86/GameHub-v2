const hamburgerMenu = document.querySelector(".icon-burger");

hamburgerMenu.onclick = function () {

    event.target.classList.toggle("rotate90");
}

const buttonRotate = document.querySelector(".cta-cart");

buttonRotate.onClick = function () {
    console.log(event);
}