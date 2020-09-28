
//LIGHT MODE || DARK MODE
//toggles between two diff stylesheets when sun svg is clicked

//grabs the sun svg and the stylesheet link
const sunBtn = document.querySelector("#sun");

const theme = document.querySelector("#theme-link");

const logo = document.getElementById('dragon');


//if the sun is clicked and the the stylesheet link's href is already light theme, set to dark, else set to light
sunBtn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "light-theme.css") {
        theme.href = "dark-theme.css";
        logo.src = 'img/InvLogoMaster.png';
    } else {
        theme.href = "light-theme.css";
        logo.src = 'img/LogoMaster.png'
    }
});

//Hidden Burger Menu appear and disappear function
const menuAppear = () => {

    //selects the burger svg and the hidden menu element
    const burger = document.getElementById('burger');
    const hiddenMenu = document.getElementsByClassName('hidden-menu');

    //uses a loop because the hidden menu is an array
    //toggles a new "burger-active" class to the buttons when burger is clicked
    burger.addEventListener('click',()=>{
        for (a = 0; a < hiddenMenu.length; a++) {
            hiddenMenu[a].classList.toggle('burger-active');
        }
    });
}
//function must be called
menuAppear();

//SCROLL TO TOP ON DESKTOP
//two different values, top for Safari, bottom for others (chrome etc.)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


