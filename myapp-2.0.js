
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


//Mobile Burger menu appear function
const mobileBurg = document.getElementById('burger');
const mobileHidMenu = document.getElementsByClassName('hidden-menu-mobile');
const backScrim = document.getElementsByClassName('scrim');
const body = document.getElementsByTagName("BODY");


//open the side drawer
const mobileDrawer = () => {
burger.addEventListener('click', ()=>{
    for (a = 0; a <mobileHidMenu.length; a++) {
        mobileHidMenu[a].classList.toggle('is-open');
        backScrim[a].classList.toggle('closed-scrim');
        body[0].classList.toggle('locked-scroll');
    }
});
}
mobileDrawer();


const storyOp1 = document.getElementsByClassName('story1');
const storyOp2 = document.getElementsByClassName('story2');
const story1Menu = document.getElementsByClassName ('story1-menu-mobile');
const story2Menu = document.getElementsByClassName ('story2-menu-mobile');


const story1Drawer = () => {
    storyOp1[0].addEventListener('click', ()=>{
        for(a = 0; a < story1Menu.length; a++)  {
            story1Menu[a].classList.add('open-drawer');
        }
    });
}
story1Drawer();

const story2Drawer = () => {
    storyOp2[0].addEventListener('click', ()=> {
        for(i = 0; i < story2Menu.length; i++)  {
            story2Menu[i].classList.add("open-drawer");
        }
    });
}
story2Drawer();

var backBtn = document.getElementsByClassName('drawer-back');

const goBack = () => {
    backBtn[0].addEventListener('click', () => {
        story1Menu[0].classList.remove('open-drawer');
    });
    backBtn[1].addEventListener('click', () => {
        story2Menu[0].classList.remove('open-drawer');
    });
}
goBack();

const drawerShut = () => {
    backScrim[0].addEventListener('click', ()=>{
    for (a = 0; a <mobileHidMenu.length; a++) {
        if (story1Menu[0].classList.contains('open-drawer') || story2Menu[0].classList.contains('open-drawer')) {
            pass
        } else {
            mobileHidMenu[a].classList.toggle('is-open');
            backScrim[a].classList.toggle('closed-scrim');
            body[0].classList.toggle('locked-scroll');
        }   
    }
});
}
drawerShut();

const coverOne = document.getElementById('comic-one');
const popUp = document.getElementsByClassName('firstcomic-popup')

const coverPopup = () => {
    coverOne.addEventListener('click', () => {
        popUp[0].classList.toggle('open');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}
coverPopup();