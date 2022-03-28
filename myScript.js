function buttenWrk(evt, aboutButten) {
  var i, btn1, faqbtn1;
  btn1 = document.getElementsByClassName("btn1");
  for (i = 0; i < btn1.length; i++) {
    btn1[i].style.display = "none";
  }
  faqbtn1 = document.getElementsByClassName("faqbtn1");
  for (i = 0; i < faqbtn1.length; i++) {
    faqbtn1[i].className = faqbtn1[i].className.replace(" active", "");
  }
  document.getElementById(aboutButten).style.display = "block";
  evt.currentTarget.className += " active";
}
// FOR EXPRIMENT ONLY
// 'use strict';

/*
 *   @constructorDisclosureButton
 *
 *
 */
class DisclosureButton {
  constructor(buttonNode) {
    this.buttonNode = buttonNode;
    this.controlledNode = false;

    var id = this.buttonNode.getAttribute('aria-controls');

    if (id) {
      this.controlledNode = document.getElementById(id);
    }

    this.buttonNode.setAttribute('aria-expanded', 'false');
    this.hideContent();

    this.buttonNode.addEventListener('click', this.onClick.bind(this));
    this.buttonNode.addEventListener('focus', this.onFocus.bind(this));
    this.buttonNode.addEventListener('blur', this.onBlur.bind(this));
  }

  showContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = 'block';
    }
  }

  hideContent() {
    if (this.controlledNode) {
      this.controlledNode.style.display = 'none';
    }
  }

  toggleExpand() {
    if (this.buttonNode.getAttribute('aria-expanded') === 'true') {
      this.buttonNode.setAttribute('aria-expanded', 'false');
      this.hideContent();
    } else {
      this.buttonNode.setAttribute('aria-expanded', 'true');
      this.showContent();
    }
  }

  /* EVENT HANDLERS */

  onClick() {
    this.toggleExpand();
  }

  onFocus() {
    this.buttonNode.classList.add('focus');
  }

  onBlur() {
    this.buttonNode.classList.remove('focus');
  }
}

/* Initialize Hide/Show Buttons */

window.addEventListener(
  'load',
  function () {
    var buttons = document.querySelectorAll(
      'button[aria-expanded][aria-controls]'
    );

    for (var i = 0; i < buttons.length; i++) {
      new DisclosureButton(buttons[i]);
    }
  },
  false
);




// navbar
window.onscroll = function () { scrollFunction() };
// var navbar = document.getElementsByClassName("nav");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    // console.log(document.getElementsByClassName("navcontant"))
    // var classVariable =  document.getElementsByClassName("navcontant");

    document.getElementsByClassName("navcontant")[0].classList.add('navListNew');
    



  } else {

    document.getElementsByClassName("navcontant")[0].classList.remove('navListNew');
    
    


  }

//   var classVariable = document.getElementsByClassName("navLists");
//   for (i = 1; i < classVariable.length; i++) {

//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       document.getElementsByClassName("classVariable")[0].classList.add('listColor');

// console.log("12345")

//     } else {

//       document.getElementsByClassName("classVariable")[0].classList.remove('listColor');
//       console.log("0000")
//     }
//   }
}
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
  console.log("gassfdyga")
}



var screenWith= screen.width;

function showFooterNav(elementid){
  if(screenWith < 860){
    var element= document.getElementById(elementid);

    if (element.style.display == "block"){
    
        // document.getElementById('showContent');
        element.style.display="none";
    
    } else {
        element.style.display="block";
    }
  }
}
