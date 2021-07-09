window.onscroll = function() {myFunction()};

var header1 = document.getElementById("myHeader1");
var sticky = header1.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header1.classList.add("sticky");
  } else {
    header1.classList.remove("sticky");
  }
}
