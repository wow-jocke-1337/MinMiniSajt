window.onscroll = function() {scrollFunction()};

function scrollFunction() {  //stylar om navbaren när man scrollar ner
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".nav-container").style.height = "15vh";
    document.querySelector(".Logobar").style.top = "7vh";
    document.getElementById("logoimage").style.height = "15vh";
    document.getElementById("logoimage").style.left = "45%";
    document.querySelector(".nav-buttons-div").style.top = "0vh";
    document.getElementById("nav-right").style.top = "2vh";
    document.querySelector(".dropdown").style.marginTop = "4%"; 

  } 
  else {
    document.querySelector(".nav-container").style.height = "25vh";
    document.querySelector(".Logobar").style.top = "12vh";
    document.getElementById("logoimage").style.height = "25vh";
    document.getElementById("logoimage").style.left = "42%";
    document.querySelector(".nav-buttons-div").style.top = "4vh";
    document.getElementById("nav-right").style.top = "6vh";
    document.querySelector(".dropdown").style.marginTop = "6%"; 
  }
} 


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  function dropdownclickfunktion() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#baricon')) {
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