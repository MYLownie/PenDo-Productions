
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


  //FOR STICK chapNAV
  window.onscroll = function() {stickyNav()};

  var navbar = document.getElementById("chapNav");
  var sticky = navbar.offsetTop; //sets sticky to the distance of the chapNav from the top of it's parent node

  function stickyNav() {
      if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
      } else {
          navbar.classList.remove("sticky");
      }
  }
//My master piece of changing page and chapters
  var pc = 1;
  /*for chapters, naming Chap#page#.png. for changing chapter. check next page for naming. and if naming is 
  EndOfChapter#, go into a different if statement loop, to update chapter. first thing to check is
  if(document.getElementById("ci").src == "EndOfChapter#.png"){}*/
    function changeImage() {
      if(pc<=6){
        pc++;
        document.getElementById("ci").src = "Chapter"+cc+"/page"+pc+".jpg";
        //window.open("Chapter2.html","_self");
      }else if(pc>=7){
        pc++;
        cc++;
      }
      if(pc>=8){
          if(cc>=3){
              cc=1;
          }
        document.getElementById("ci").onclick = chapterChange();
      }
}
function chapterChange(){
  //document.getElementById("ci").src = "Chapter1/EndOfChapter"+pc+".jpg";
  window.open("chap"+ cc + ".html", "_self");
}

//be scroll when checked
// const scrollMode = document.querySelector('#mI')