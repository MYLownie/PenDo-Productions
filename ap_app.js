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
//function must be called
menuAppear();


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('ap_activetb')
    })
    tabs.forEach(tab => {
      tab.classList.remove('ap_activetb')
    })
    tab.classList.add('ap_activetb')
    target.classList.add('ap_activetb')
  });
});

const cards = document.querySelectorAll('.ap_activeChara');

		const toggleExpansion = (element, to, duration = 300) => {
		  return new Promise((res) => {
		    element.animate([
		      {
			top: to.top,
			left: to.left,
			width: to.width,
			height: to.height
		      }
		    ], {duration, fill: 'forwards', ease: 'ease-in'})
		    setTimeout(res, duration);
		  })
		}

		const fadeContent = (element, opacity, duration = 120) => {
			return new Promise(res => {
				[...element.children].forEach((child) => {
					requestAnimationFrame(() => {
						child.style.transition = `opacity ${duration}ms linear`;
						child.style.opacity = opacity;
					});
				})
				setTimeout(res, duration);
			})
		}

		const getCardContent = (title, type) => {
      // under the img src will be the path to where the character card pngs are saved
      // should be saved with a name which is listed in the infopage html under data-type
			return `
				<div class="card-content">
					<h2>${title}</h2>
					<img src="img/${type}.png" alt="${title}">
				</div>
			`;
		}

		const onCardClick = async (e) => {
			const card = e.currentTarget;
			// clone the card
			const cardClone = card.cloneNode(true);
			// get the location of the card in the view
			const {top, left, width, height} = card.getBoundingClientRect();
			// position the clone on top of the original
			cardClone.style.position = 'absolute';
			cardClone.style.top = top + 'px';
			cardClone.style.left = left + 'px';
			cardClone.style.width = width + 'px';
			cardClone.style.height = height + 'px';
			// hide the original card with opacity
			card.style.opacity = '0';
			// add card to the same container
			card.parentNode.appendChild(cardClone);
			// create a close button to handle the undo
			const closeButton = document.createElement('I');
      closeButton.className = "im im-x-mark-circle-o";
			// position the close button top corner
			closeButton.style = `
				position: absolute;
				z-index: 10000;
				top: 35px;
				right: 35px;
				width: 35px;
				height: 35px;
        		font-size: 3.5rem;
        		opacity: 80%;
        		color: #8b61d3;
			`;
			// attach click event to the close button
			closeButton.addEventListener('click', async () => {
				// remove the button on close
				closeButton.remove();
				// remove the display style so the original content is displayed right
				cardClone.style.removeProperty('display');
				cardClone.style.removeProperty('padding');
				// show original card content
				[...cardClone.children].forEach(child => child.style.removeProperty('display'));
				fadeContent(cardClone, '0');
				// shrink the card back to the original position and size
				await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
				// show the original card again
				card.style.removeProperty('opacity');
				// remove the clone card
				cardClone.remove();
			});
			// fade the content away
			fadeContent(cardClone, '0')
				.then(() => {
					[...cardClone.children].forEach(child => child.style.display = 'none');
				});
			// expand the clone card
			await toggleExpansion(cardClone, {top: '229px', left: 0, width: '100vw', height: '100vh', margin: '25%'});
			const content = getCardContent(card.textContent, card.dataset.type)
			// set the display block so the content will follow the normal flow in case the original card is not display block
			cardClone.style.display = 'block';
			cardClone.style.padding = '0';
			// append the close button after the expansion is done
			cardClone.appendChild(closeButton);
			cardClone.insertAdjacentHTML('afterbegin', content);
		};

		cards.forEach(card => card.addEventListener('click', onCardClick));

// MOBILE ONLY FUNCTIONS

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

// This is the important part!

function collapseSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;
	
	// temporarily disable all css transitions
	var elementTransition = element.style.transition;
	element.style.transition = '';
	
	// on the next frame (as soon as the previous style change has taken effect),
	// explicitly set the element's height to its current pixel height, so we 
	// aren't transitioning out of 'auto'
	requestAnimationFrame(function() {
	  element.style.height = sectionHeight + 'px';
	  element.style.transition = elementTransition;
	  
	  // on the next frame (as soon as the previous style change has taken effect),
	  // have the element transition to height: 0
	  requestAnimationFrame(function() {
		element.style.height = 115 + 'px';
	  });
	});
	
	// mark the section as "currently collapsed"
	element.setAttribute('data-collapsed', 'true');
  }
  
  function expandSection(element) {
	// get the height of the element's inner content, regardless of its actual size
	var sectionHeight = element.scrollHeight;
	
	// have the element transition to the height of its inner content
	element.style.height = sectionHeight + 'px';
  
	// when the next css transition finishes (which should be the one we just triggered)
	element.addEventListener('transitionend', function(e) {
	  // remove this event listener so it only gets triggered once
	  element.removeEventListener('transitionend', arguments.callee);
	  
	  // remove "height" from the element's inline styles, so it can return to its initial value
	  element.style.height = null;
	});
	
	// mark the section as "currently not collapsed"
	element.setAttribute('data-collapsed', 'false');
  }


  //EXPAND AND SHRINK OVERVIEW SECTION
  document.querySelector('#toggle-button').addEventListener('click', function(e) {
	var section = document.querySelector('.section.collapsible');
	var isCollapsed = section.getAttribute('data-collapsed') === 'true';
	var collapseBtn = document.getElementById('toggle-button');
	  
	if(isCollapsed) {
	  expandSection(section)
	  section.setAttribute('data-collapsed', 'false')
	  collapseBtn.style.transform = "rotate(180deg)"
	} else {
	  collapseSection(section)
	  collapseBtn.style.transform = "rotate(0deg)"
	}
  });

  //CHARACTER POPUPS
  //pop ups disappearing
  var popupArray = ['charaModal_1', 'charaModal_2', 'charaModal_3']
  window.addEventListener('mouseup', function(event){

	for(var i = 0; i < popupArray.length; i++) {
		var popup = document.getElementById(popupArray[i]);
		if(event.target != popup && event.target.parentNode != popup) {
			popup.style.transform = 'translateY(35vh)'
		}
	}
  })

  

  var section = document.querySelector('.section.collapsible');
  collapseSection(section);

  //GALLERY OPENING FN FOR MOBILE
  var galleryBar = document.getElementsByClassName("ap_gallery_bar")
  var galleryWindow = document.getElementById("ap_gallery_mobile")

  for(var i = 0; i < galleryBar.length; i++) {
	  galleryBar[i].addEventListener("click", galleryOpen(i));
  }

  function galleryOpen(i) {
	  return function() {
		  galleryWindow.classList.toggle("open_gallery");
	  };
  }

  //POP OUT IMAGES GALLERY MOBILE

//   var galleryImgs = document.getElementsByClassName("gallery_img");
//   var background = document.getElementById("expanded_view");
//   var galleryClose = document.getElementById("close_btn");

//   for(var i = 0; i < galleryImgs.length; i++) {
// 	  galleryImgs[i].addEventListener("click", imgExpand(i));
//   }

//   function imgExpand(i) {
// 	  return function() {
// 		background.style.opacity = "100%";
// 		background.style.pointerEvents = "all";
// 		galleryImgs[i].id = "img_expand"
// 		galleryWindow.style.overflowY = "hidden"
// 		galleryBar[1].style.pointerEvents = "none"
// 	  }
//   }

//   galleryClose.addEventListener("click", imgShrink(i));

//   function imgShrink(i) {
// 	return function() {
// 		background.style.opacity = "0%";
// 		galleryImgs[i].removeAttribute('id')
// 		galleryWindow.style.overflowY = "scroll"
// 		galleryBar[1].style.pointerEvents = "all"
// 	  }
//   }




