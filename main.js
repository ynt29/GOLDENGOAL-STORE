window.onscroll = function() {scrollFunc()};
var mainHeader = document.getElementById("headerMain")
var headerSticky = document.getElementById("headerSticky");
var sticky = headerSticky.offsetTop;
function scrollFunc() {
  if (window.pageYOffset >= sticky) {
    mainHeader.classList.remove("sticky")
    headerSticky.classList.add("sticky")
  } 
  else {
    headerSticky.classList.remove("sticky")
    mainHeader.classList.add;
  }
}