
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}




/*function loadStudy(id, imageSrc) {
  // Store the image source in localStorage to be accessed in the template page
  localStorage.setItem('imageSrc', imageSrc);
  localStorage.setItem('studyId', id);
  console.log("I am working");
}

function updateImage() {
  // Retrieve the image source and ID from localStorage
  var imageSrc = localStorage.getItem('imageSrc');
  var studyId = localStorage.getItem('studyId');

  // Check if imageSrc and studyId are not null
  if (imageSrc !== null && studyId !== null) {
      // Update the image source
      document.getElementById("bibleStudyImgTemplate").src = imageSrc;
      // Clear the localStorage to prevent the image from being loaded again
      localStorage.removeItem('imageSrc');
      localStorage.removeItem('studyId');
  }
}

window.onload = updateImage; */