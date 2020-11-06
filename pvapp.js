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
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
  
  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
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

function setPage(range) {
  counter = range.value;
  pageSlider[0].style.transform = 'translateX(' +(-size * counter) + 'px)';
  pageSlider[0].style.transition = "transform 0.4s ease-in-out";
};

console.log(sliderMax);