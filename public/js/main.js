const presentationScreen = document.querySelector(".presentation-screen");
const portfolioContainer = document.querySelector(".portfolio-container");
const headerNavContainer = document.querySelector(".header-menu-container");

const serviceItems = document.querySelectorAll(".service-item-container");
const serviceItemTitle = document.querySelectorAll(".service-item-title");
const serviceItemTitle2 = document.querySelectorAll(".service-item-title-2");

addListenersToServiceItems();

document.addEventListener("scroll", function () {
    if (document.querySelector(".header-menu-container").getBoundingClientRect().y < -22) {
        document.querySelector(".scroll-top-icon-container").style.display = "flex";
    } else {
        document.querySelector(".scroll-top-icon-container").style.display = "none";
    }
});

setTimeout(function () {
    portfolioContainer.style.height = "100vh";
}, 100); //2300

setTimeout(function () {
    portfolioContainer.style.height = "auto";
}, 200); //3800

window.addEventListener("scroll", function () {
    console.log(headerNavContainer.offsetHeight);
    console.log(window.window.scrollY);
    console.log(document.body.clientHeight);
});

function addListenersToServiceItems() {
    console.log(serviceItems);
    serviceItems.forEach((element, index) => {
        element.addEventListener("mouseover", function () {
            // document.querySelector(".service-item-title").style.animation = "text-out 1s";
            serviceItemTitle[index].style.display = "none";
            serviceItemTitle2[index].style.display = "block";
        });

        element.addEventListener("mouseout", function () {
            serviceItemTitle[index].style.display = "block";
            serviceItemTitle2[index].style.display = "none";
        });
    });
}
