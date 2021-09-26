const presentationScreen = document.querySelector(".presentation-screen");
const portfolioContainer = document.querySelector(".portfolio-container");
const headerNavContainer = document.querySelector(".header-menu-container");

setTimeout(function () {
    portfolioContainer.style.height = "100vh";
}, 300); //2300

setTimeout(function () {
    portfolioContainer.style.height = "auto";
}, 400); //3800

window.addEventListener("scroll", function () {
    console.log(headerNavContainer.offsetHeight);
    console.log(window.window.scrollY);
    console.log(document.body.clientHeight);
});
