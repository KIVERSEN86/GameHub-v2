const button = document.querySelector(".cta-add");
const updateCart = document.querySelector(".addtocart");



function addToCart() {

    updateCart.style.display = "block";
    
    updateCart.innerHTML += "1";

}

button.addEventListener("click", addToCart);