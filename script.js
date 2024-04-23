
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}




//window.onload = function () {
//  closeMenu();
//}; 

// Toggles the navigation menu
function toggleMenu() {
  var navbar = document.querySelector(".navbar");
  var links = document.getElementById("links");

  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block"; 
  } else {
    navbar.style.display = "none"; 
  }
}


// Closes the navigation menu
// // function closeMenu() {
// //   var links = document.getElementById("links");
// //   var navbar = document.querySelector(".navbar");
// //   if (links.style.display === "block") {
// //       links.style.display = "none";
// //       navbar.style.display = "none";
// //   }
// // }


function openPopUp(){
  var popUpDownloadDiv = document.getElementById("popUpDownloadDiv");
  popUpDownloadDiv.style.display = "block"; 

}

function closePopUp(){
  var popUpDownloadDiv = document.getElementById("popUpDownloadDiv");
  popUpDownloadDiv.style.display = "none"; 

}

