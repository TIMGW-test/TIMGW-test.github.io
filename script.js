

// Toggles the navigation menu
function toggleMenu() {
  var navbar = document.querySelector(".navbar");
  var open = document.querySelector(".navIconOpen");
  var close = document.querySelector(".navIconClose");


  if (navbar.style.display === "none" || navbar.style.display === "") {
    navbar.style.display = "block"; 
    close.style.display = "block";
    open.style.display = "none";

  } else {
    navbar.style.display = "none"; 
    open.style.display = "block";
    close.style.display = "none";

  }
}

function openPopUp(){
  var popUpDownloadDiv = document.getElementById("popUpDownloadDiv");
  popUpDownloadDiv.style.display = "block"; 
}

function closePopUp(){
  var popUpDownloadDiv = document.getElementById("popUpDownloadDiv");
  popUpDownloadDiv.style.display = "none"; 
}

function closeDownloadBox(){
  var downloadBox = document.getElementById("popUpDownloadDiv");
  downloadBox.style.display = "none";

}

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

// do i need below code? test to find out

// JavaScript to handle click event on the caret icon
document.getElementById('caretIcon').addEventListener('click', function() {
  // Toggle the display of the dropdown content
  var dropdownContent = document.querySelector('.curriculum-dropdown');
  dropdownContent.classList.toggle('show');
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#caretIcon')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
