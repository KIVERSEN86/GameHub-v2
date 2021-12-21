const hamburgerMenu = document.querySelector(".icon-burger");

hamburgerMenu.onclick = function () {

    event.target.classList.toggle("rotate90");
}

const button = document.querySelector(".cta-cart");

button.onClick = function () {
    console.log(event);
}