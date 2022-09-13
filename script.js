const productImg = document.querySelector(".card-img");
const productTitle = document.querySelector(".card-title");
const redColor = document.querySelector(".red");
const whiteColor = document.querySelector(".white");
const addToCart = document.querySelector(".add-to-cart");
const cartAdded = document.querySelector(".cart-added");

redColor.addEventListener("click", () => {
    productTitle.innerHTML = "Red Mercedes-Benz 2022";
    productTitle.style.color = "red";
    addToCart.style.backgroundColor = "red";
    addToCart.style.color = "white";
    addToCart.style.border = "1px solid red";
    productImg.style.backgroundImage = "url('./img/benz-red.jpeg')";
})

whiteColor.addEventListener("click", () => {
    productTitle.innerHTML = "White Mercedes-Benz 2022";
    productTitle.style.color = "black";
    addToCart.style.backgroundColor = "white";
    addToCart.style.color = "black";
    addToCart.style.border = "1px solid black";
    productImg.style.backgroundImage = "url('./img/benz-white.jpeg')";
})

addToCart.addEventListener("click", () => {
    addToCart.style.display = "none";
    cartAdded.style.display = "block";
})