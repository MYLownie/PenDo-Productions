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
					<img src="./assets/${type}.png" alt="${title}">
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
        color: #512DA8;
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