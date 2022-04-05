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



var screenWith = screen.width;

function showFooterNav(elementid) {
  if (screenWith < 860) {
    var element = document.getElementById(elementid);

    if (element.style.display == "block") {

      // document.getElementById('showContent');
      element.style.display = "none";

    } else {
      element.style.display = "block";
    }
  }
}
// function swap1() {
//   var data1 = document.getElementById("from").value;
//   var data2 = document.getElementById("to").value;
//   document.getElementById("from").value = data2;
//   document.getElementById("to").value = data1;
//   document.getElementById("swap").onclcik = function () {swap2()};
// }
// function swap2() {
//   var data1 = document.getElementById("to").value;
//   var data2 = document.getElementById("from").value;
//   document.getElementById("to").value = data2;
//   document.getElementById("to").value = data1;
//   document.getElementById("swap").onclcik = function () {swap2()};
// }
function swap1() {

  var tmp = document.getElementById('from').value;
  document.getElementById('from').value = document.getElementById('to').value;
  document.getElementById('to').value = tmp;
};
// }


function dateValidation() {

  // var obj = document.getElementById("date");
  // var day = obj.value.split("/")[0];

  // var month = obj.value.split("/")[1];
  // var year = obj.value.split("/")[2];

  // if ((day<2 || day >31) || (month<1&&month>12)&&(year.length != 4))
  // {

  // alert("Invalid Format");return false;
  // }

  // else

  // {

  // var dt = new Date(year, month-1, day);
  // var today = new Date();

  // if((dt.getDate() != day) || (dt.getMonth() != month-1) || (dt.getFullYear()!=year) || (dt>today))
  // {

  // alert("Invalid Date");return false;
  // }

  // }
  // var date = new Date();
  // var tdate = date.getDate();
  // var month = date.getMonth() + 1;
  // if (tdate < 10) {
  //   tdate = '0' + tdate;
  // }
  // if (month < 10) {
  //   month = '0' + month;
  // }
  // var year = date.getFullYear();
  // var minDate = year + "-" + month + "-" + tdate;
  // document.getElementById("date").setAttribute("min", minDate)
  // console.log(minDate);
  document.getElementById('date').setAttribute('min', new Date().toISOString().split('T')[0])
  // document.getElementById('date').setAttribute('max', new Date().toISOString().split('T')[0])

}


function myTicketFunction() {
  // document.getElementById("submitButton").addEventListener("click", function(event){
  //   event.preventDefault()
  // });
  var bookingFrom = document.getElementById("from").value;
  document.getElementById("from").value = "";
  var bookingTo = document.getElementById("to").value;
  document.getElementById("to").value = "";
  var bookingDate = document.getElementById("date").value;
  document.getElementById("date").value = "";
  var reservationClass = document.getElementById("class").value;
  document.getElementById("class").value = "";
  var quota = document.getElementById("general").value;
  document.getElementById("general").value = "";
  var time = document.getElementById("appt").value;


  var booking = true;
  if (bookingFrom == null || bookingFrom == '') {
    alert("Not valiud Please enter the vacant place")
    booking = false;
  } else if (bookingTo == null || bookingTo == '') {
    alert("Not valiud Please enter the vacant place")
    booking = false;
  } else if (bookingDate == null || bookingDate == '') {
    alert("date is not fill")
    booking = false;
  } else if (reservationClass == null || reservationClass == '') {
    alert("Please selecte your reservation Class")
    booking = false;
  } else if (quota == null || quota == '') {
    alert("Please selecte your reservation Quota")
    booking = false;
  } else if (time == null || time == '') {
    alert("selecte your time")
    booking = false;
  }
  if (bookingFrom == bookingTo) {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    booking = false;
    alert("both text are same please enter different text")
  }

  if (booking == true) {
  //   var get = JSON.parse(localStorage.getItem('user'));
  //   console.log(get);
  //   var ticketPrint = [];
  //   console.log(ticketPrint);
  //   if (get!=null){
  //     ticketPrint.push(get);
  // }
  // console.log(ticketPrint, '2');

  
  //   let bookingData = {
  //     bookingFrom: bookingFrom,
  //     bookingTo: bookingTo,
  //     bookingDate: bookingDate,
  //     reservationClass: reservationClass,
  //     quota: quota,
  //     time: time,
  //   }
  //   ticketPrint.push(bookingData);

  //   console.log(ticketPrint, '3');
  //   // localStorage.setItem('bookingData', JSON.stringify(bookingData));
  //   localStorage.setItem('user', JSON.stringify(ticketPrint));
  
  var bookingDone = JSON.parse(localStorage.getItem("allEntries"));
  if(bookingDone == null) bookingDone = [];
  let bookingData = {
        bookingFrom: bookingFrom,
        bookingTo: bookingTo,
        bookingDate: bookingDate,
        reservationClass: reservationClass,
        quota: quota,
        time: time,
      }
  localStorage.setItem("entry", JSON.stringify(bookingData));
  
  bookingDone.push(bookingData);
  localStorage.setItem("allEntries", JSON.stringify(bookingDone));


    document.getElementById("fromPlace").innerHTML = bookingFrom;
    document.getElementById("toPlace").innerHTML = bookingTo;
    document.getElementById("bookongDate").innerHTML = bookingDate;
    document.getElementById("bookingClass").innerHTML = reservationClass;
    document.getElementById("ReservationQuota").innerHTML = quota;
    document.getElementById("ReservationTime").innerHTML = time;
    window.open('./images/bookingInfo.html')

  }


}

// const usernameEl = document.querySelector('#from');
// const emailEl = document.querySelector('#to');
// const passwordEl = document.querySelector('#date');
// const confirmPasswordEl = document.querySelector('#class');

// const form = document.querySelector('#general');


// form.addEventListener('submit', function (e) {
//   const isRequired = value => value === '' ? false : true;
//   e.preventDefault();

// });
// function dateInput(){
//   var inputDate = document.getElementById("date").valu;
//   document.getElementById('date').setAttribute('min', new Date().toISOString().split('T')[0])
//   if(inputDate == ){

//   }
// }