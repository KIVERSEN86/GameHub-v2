const baseUrl = "https://noroffiversen.no/Game-Hub/wp-json/wc/store/products?featured=true";
const detailsCont = document.querySelector(".weekly-container");

async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        detailsCont.innerHTML +=   `<div class="weekly-new weekly-item"">
                                    <img class="front-img" src="${product.images[0].src}">
                                    <p class="price-name">${product.name}</p>
                                    <p class="price">$${product.prices.price}</p>
                                    <a href="product.html?id=${product.id}" class="cta-cart">Buy</a>
                                    </div>`
    })
}
getProducts(baseUrl);

const specialUrl = "https://noroffiversen.no/Game-Hub/wp-json/wc/store/products?category=18";
const specialCont = document.querySelector(".weekly-container-used");

async function getSpecial(url) {
    const response = await fetch(url);
    const special = await response.json();
    special.forEach(function(product){
        specialCont.innerHTML += `<div class="weekly-new weekly-item"">
        <img class="front-img" src="${product.images[0].src}">
        <p class="price-name">${product.name}</p>
        <p class="price">$${product.prices.price}</p>
        <a href="product.html?id=${product.id}" class="cta-cart">Buy</a>
        </div>`
    })
}
getSpecial(specialUrl);