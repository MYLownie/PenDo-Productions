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

//Get the modals
var modals = document.getElementsByClassName('ap_ismodal');

//Get buttons that open modal
var charcs = document.getElementsByClassName('ap_character') 

function setDataIndex() {
  for (i = 0; i < modals.length; i++) {
    charcs[i].setAttribute('data-index', i);
    modals[i].setAttribute('data-index', i);
  }
}

setDataIndex();


for (i = 0; i < charcs.length; i++) {
  charcs[i].onclick = function() {
    var elementIndex = this.getAttribute('data-index', i);
    modals[elementIndex].classList.add('ap_modalActive');
  }
}

window.onclick = function(event) {
  for (i = 0; i < modals.length; i++) {
    var elementIndex = this.getAttribute('data-index', i);
    if (event.target == modal[i]) {
      modal[i].classList.remove('ap_modalActive');
    }
  }
}


console.log(modals[0].getAttribute('data-index'));

// var modalparent = document.getElementsByClassName("ap_ismodal");

// // Get the button that opens the modal

// var modal_btn_multi = document.getElementsByClassName("ap_character");

// // Get the <span> element that closes the modal
// var span_close_multi = document.getElementsByClassName("ap_isclose");

// // When the user clicks the button, open the modal
// function setDataIndex() {

//     for (i = 0; i < modal_btn_multi.length; i++)
//     {
//         modal_btn_multi[i].setAttribute('data-index', i);
//         modalparent[i].setAttribute('data-index', i);
//         span_close_multi[i].setAttribute('data-index', i);
//     }
// }



// for (i = 0; i < modal_btn_multi.length; i++)
// {
//     modal_btn_multi[i].onclick = function() {
//         var ElementIndex = this.getAttribute('data-index');
//         modalparent[ElementIndex].style.display = "block";
//     };

//     // When the user clicks on <span> (x), close the modal
//     span_close_multi[i].onclick = function() {
//         var ElementIndex = this.getAttribute('data-index');
//         modalparent[ElementIndex].style.display = "none";
//     };

// }

// window.onload = function() {

//     setDataIndex();
// };

// window.onclick = function(event) {
//     if (event.target === modalparent[event.target.getAttribute('data-index')]) {
//         modalparent[event.target.getAttribute('data-index')].style.display = "none";
//     }
//   };