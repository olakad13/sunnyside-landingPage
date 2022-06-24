// selecting elements from the html documennt
let navCard = document.getElementsByClassName("nav-links-container");
let menu = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");
let clickCount = 0;
let descriptionImage = document.getElementsByClassName("description-image");
let descriptionText = document.getElementsByClassName("product-description-texts");

// Adding an event listner to the hamburger menu and the close menu
menu.addEventListener("click", displayNavCard);
closeBtn.addEventListener("click", closeNavCard);
window.addEventListener('orientationchange', orientationChange);


// checking if the screen width is less than or equal to
// 390 px , if true the image width is set to the descriptionText container
if (screen.width <= 390) {
    descriptionImage[0].style.height = descriptionText[0].offsetHeight + "px"
    descriptionImage[1].style.height = descriptionText[0].offsetHeight + "px"
}



// navigation card display function
function displayNavCard() {
    navCard[0].style.display = "flex";
    clickCount++;
    console.log(clickCount);
    if (clickCount === 2) {
        navCard[0].removeEventListener("click",displayNavCard);
        navCard[0].style.display = "none";
        clickCount = 0;
    }
}

// navigation card close function
function closeNavCard() {
    navCard[0].style.display = "none"
}
function orientationChange() {
    descriptionImage[0].style.height = descriptionText[0].offsetHeight + "px"
    descriptionImage[1].style.height = descriptionText[0].offsetHeight + "px"
}