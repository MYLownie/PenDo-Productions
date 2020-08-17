src="https://code.jquery.com/jquery-2.2.3.min.js";
//For Navigation Burger Drop Down
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    
    burger.addEventListener('click',()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`; 
            }
           
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    
    });
}
navSlide();

//For Chapter Navigation Dropdown Menu
//when user click on dropdown, toggle btween hiding and showing the dropdown content
function chapDropdown() {
    document.getElementById("chapterDrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //SAME FUNCTION AS ^^ just using the Image button instead of the Chapter 1 button.
function miniDropdown() {
  var miniMenu = document.getElementById("menuDrop");
  miniMenu.classList.toggle("appear")  
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dragonbtn')) {
      var dropdowns = document.getElementsByClassName("miniDrop-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('appear')) {
          openDropdown.classList.remove('appear');
        }
      }
    }
  }




  //FOR STICK chapNAV
  window.onscroll = function() {stickyNav()};

  var navbar = document.getElementById("chapNav");
  var sticky = navbar.offsetTop; //sets sticky to the distance of the chapNav from the top of it's parent node
  var logo = document.getElementsByClassName("dragonbtn");
  var contentbar = document.getElementById("menuDrop");
  console.log(contentbar);

  function stickyNav() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
          logo[0].classList.add("active");
      } else {
          navbar.classList.remove("sticky");
          logo[0].classList.remove("active");
          contentbar.classList.remove("appear");
      }
  }
  

//My master piece of changing page and chapters
  var pc = 1; //Counts the pages
  var min = 6; //Amount of pages -1
  var max = 7; //Amount of pages
  var nc= max+1; //This countrols the chapter update at end of chapter
  var maxC = 3; //Update with newest Chapter amount
  var ct =true; //Checks if click to turn is on
    function changeImage() {
      if(pc<=min){
        pc++;
        document.getElementById("ci").src = "Chapter"+cc+"/page"+pc+".jpg";
        if(ct==true){//This updates the Page number
          document.getElementById("pgn").textContent = pc;
        }
        //window.open("Chapter2.html","_self");
      }else if(pc>=max){
        pc++;
        cc++;
      }
      if(pc>=nc){
          if(cc>=maxC){
              cc=1;
          }
        document.getElementById("ci").onclick = chapterChange();
      }
}
function chapterChange(){
  //document.getElementById("ci").src = "Chapter1/EndOfChapter"+pc+".jpg";
  window.open("chap"+ cc + ".html", "_self");
}



//be scroll mode when checked and click mode when unchecked
const vm = document.getElementById('scrollvsclick');
var scrollMode = document.getElementById('ib');
console.log(scrollMode);
var clickMode = document.getElementById('ic');
vm.addEventListener('change', function(e) {
  if(vm.checked){
    //Click enabled
    scrollMode.style.display = "none";
    clickMode.style.display = "block";
    scroll(0,0);
    ct =true; // if Click is set, ct is true
  } else {
    //Scroll enabled
    scrollMode.style.display = "block";
    clickMode.style.display = "none";
    ct =false; // check if its on scroll to change the Page counter
  }
  
});

//Storing Data in Local Storage

