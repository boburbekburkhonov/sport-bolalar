const elHambuger = document.querySelector(".header__hamburger");

const elHeader = document.querySelector(".header");

elHambuger.addEventListener("click", () => {
    elHeader.classList.toggle("header--open")
})