import { data } from "./constants/data.js";

const container = document.querySelector(".content-container");
const weeklyContainer = document.querySelector(".weekly-container");

const content = (data) => {
  const game = data;

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <div class="weekly-item">
    <img class="front-img" src="images/Image-2.jpg" />
    <p class="price-name">${game[i].title}</p>
    <p>$${game[i].price}</p>
    <a href="index.html" class="cta-cart cta-default">Buy</a>
    </div>`;

    weeklyContainer.innerHTML += `
    <div class="weekly-item">
    <img class="front-img" src="images/Image-2.jpg" />
    <p class="price-name">${game[i].title}</p>
    <p>$${game[i].price}</p>
    <a href="index.html" class="cta-cart cta-default">Buy</a>
    </div>`;
  }
};
content(data);
