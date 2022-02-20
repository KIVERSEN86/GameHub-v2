const productInfo = document.querySelector(".productLeft");
const productParagraph = document.querySelector(".paragraph-product")
const infoCont = document.querySelector(".container-info");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://noroffiversen.no/Game-Hub/wp-json/wc/store/products/" + id;

async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        createHtml(details);
    }
    catch (error) {
        resultsCont.innerHTML = errorFunction();
    }
}
fetchProduct();

function createHtml(details) {
    productInfo.innerHTML += `
                                <h1>${details.name}</h1>
                                <img class="prod-img" src="${details.images[0].src}">
                                `
    productParagraph.innerHTML += `${details.description}`
    
    infoCont.innerHTML += `     <h2>${details.name}</h2>
                                 <ul>
                                 <li>Age limit: 12</li>
                                 <li>Platform: Nintendo 64</li>
                                 <li>Genre: Action-adventure</li>
                                 <li>Condition: Used</li>
                                 </ul>
                                 <div class="container-price">
                                 <p class="product-price">$${details.prices.price}</p>
                                 <div>
                                 <a href="#" class="cta-add">Add to cart</a>
                               </div> `
}











