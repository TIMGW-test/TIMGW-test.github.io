
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
// JavaScript to handle click event on the caret icon
// document.getElementById('caretIcon').addEventListener('click', function(event) {
//   // Prevent the default behavior of the caret icon (i.e., following the link)
//   event.preventDefault();
//   // Get the dropdown content
//   var dropdownContent = document.querySelector('.curriculum-dropdown');
//   // Set the display to "none" to hide the dropdown content
//   dropdownContent.style.display = "none";
// });

function toggleCaret(dropdownId) {
  // Check if the screen width is below 768px (indicating mobile)
  if (window.innerWidth < 768) {
    const dropdownContent = document.getElementById(dropdownId);

    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block"; 
    } else {
      dropdownContent.style.display = "none"; 
    }
    console.log("am I called?");
  }
}




