//Hidden Burger Menu appear and disappear function
const menuAppear = () => {

  //selects the burger svg and the hidden menu element
  const burger = document.getElementById('burger');
  const hiddenMenu = document.getElementsByClassName('hidden-menu');
  const hidmenu_but = document.getElementsByClassName('hidmenu_but')
  const visible_but = document.getElementsByClassName('visible_but')


  //uses a loop because the hidden menu is an array
  //toggles a new "burger-active" class to the buttons when burger is clicked
  burger.addEventListener('click',()=>{
      for (a = 0; a < hiddenMenu.length; a++) {
          hiddenMenu[a].classList.toggle('burger-active');
          hidmenu_but[a].classList.toggle('visible_but')
          hidmenu_but[a+1].classList.toggle('visible_but')
      }
  });
}

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


//function must be called
menuAppear();

//BUTTON RIPPLE EFFECT
function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    console.log(event.clientX, button.offsetLeft, circle.style.left);
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
//Setting Max # of Pages to be = to amount of items with class name Pages
const sliderMax = document.getElementsByClassName('pages').length -1;
let slider = document.getElementById('slider');

slider.max = sliderMax;

//SetBubble function - creates page counter bubble under slider
const allRanges = document.querySelectorAll(".pv-range-wrap");

allRanges.forEach(wrap => {
  const range = wrap.querySelector(".slider");
  const bubble = wrap.querySelector(".bubble");
  
  range.addEventListener("input", () => {
    setBubble(range, bubble);
    setPage(range);
  });
  setBubble(range, bubble);
});
  
function setBubble(range, bubble) {
  const fill = document.getElementById('fill');
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;
    
  
  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  fill.style.width = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
};

//BUTTON AFFECTING THE SLIDER FUNCTION
function setSliderValue(value) {
  const range = document.getElementById("slider");
  const bubble = document.getElementById("bubble");
  range.value = parseInt(range.value) + parseInt(value);
  
  setBubble(range, bubble);
};

//Page turning
//grab the main view container, the div that holds imgs, and imgs
const pages = document.getElementsByClassName('pages');
const pageSlider = document.getElementsByClassName('pv-carousel-slide');
const viewBox = document.getElementsByClassName('pv-carousel-container');

//grab btns
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const invprevBtn = document.getElementById('inv-leftbtn');
const invnextBtn = document.getElementById('inv-rightbtn');

//counter - should eventually pull from the slider value
let counter = 0;
const size = pages[0].offsetWidth;

//set width of viewBox based on width of pages
viewBox[0].style.width = (size) + 'px';

//Event Listener to change page with buttons
nextBtn.addEventListener('click', () => {
   if(counter >= pages.length -1) return;
   pageSlider[0].style.transition = "transform 0.4s ease-in-out";
   counter++
   pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
 });

prevBtn.addEventListener('click', () => {
  if(counter <=0) return;
  pageSlider[0].style.transition = "transform 0.4s ease-in-out";
  counter--
  pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
});

invnextBtn.addEventListener('click', () => {
  if(counter >= pages.length -1) return;
  pageSlider[0].style.transition = "transform 0.4s ease-in-out";
  counter++
  pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
});

invprevBtn.addEventListener('click', () => {
 if(counter <=0) return;
 pageSlider[0].style.transition = "transform 0.4s ease-in-out";
 counter--
 pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
});



function setPage(range) {
  counter = range.value;
  pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
  pageSlider[0].style.transition = "transform 0.4s ease-in-out";
};

// RETURN TO TOP BTN
var returnToTopBtn = document.getElementById('pv_rtt')
var rootElement = document.documentElement

function returnToTop() {
  rootElement.scrollTo({
    top: 0,
    behaviour: "smooth"
  })
}

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal) > 0.02 ) {
    returnToTopBtn.classList.add("showBtn")
  } else {
    returnToTopBtn.classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)

var pvBtn = document.getElementById("pv-btn")
var footerGap = document.getElementById("pv_btn_gap")
var pageView = document.getElementById("page-viewer")

function setView() {
  if (pageView.classList.contains("click-nav")) {
    pageView.classList.remove("click-nav")
    pageView.classList.add("scroll-nav")
    pvBtn.innerHTML = "CLICK"
    footerGap.style.display = "block";
  } else {
    pageView.classList.remove("scroll-nav")
    pageView.classList.add("click-nav")
    pvBtn.innerHTML = "SCROLL"
    footerGap.style.display = "none";
  }
}