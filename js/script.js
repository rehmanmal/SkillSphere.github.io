// Get the required elements
var navLinks = document.getElementById("navLinks");
var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");

// Define the functions
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Add event listeners
menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);