/* Toggle between adding and removing the "responsive" class to header-right 
when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-right") {
      x.className += "responsive";
    } else {
      x.className = "header-right";
    }
  }