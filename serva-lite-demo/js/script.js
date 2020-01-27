// Main nav menu
(function() {
    document.querySelector('.burger').addEventListener('click',
    function(){
        document.querySelector('.burger').classList.toggle('is-active');
        document.querySelector('#'+document.querySelector('.burger').dataset.target).classList.toggle('is-active');
    });
})();

// Ask a question form
// When the user clicks the button, open the modal 
document.querySelector(".button").onclick = function() {
    document.querySelector(".modal").style.display = "block";
}

// When the user clicks on X, close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    document.querySelector(".modal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.querySelector(".modal")) {
    document.querySelector(".modal").style.display = "none";
  }
}

bulmaCarousel.attach(document.querySelector(".carousel"), {
	slidesToScroll: 1,
	slidesToShow: 3,
	pagination: false,
	enableSwipeNavigation: true,
	autoplay: false,
});
  

bulmaCarousel.attach(document.querySelector(".carousel-one"), {
	slidesToScroll: 1,
	slidesToShow: 1,
	pagination: false,
	enableSwipeNavigation: true,
	autoplay: false,
});