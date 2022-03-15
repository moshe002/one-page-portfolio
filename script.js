window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("text-header").style.fontSize = "20px";
        document.getElementById("div-header").style.height = "8rem";
        document.getElementById("profile").style.maxHeight = "50px";
        document.getElementById("profile").style.maxWidth = "70px";
        document.getElementById("profile").style.marginTop = "-1rem";
        document.getElementById("text-header").style.marginTop = "1rem";
        document.getElementById("div-header").style.borderBottom = "2px solid gray";
        document.getElementById("div-header").style.boxShadow = "1px 2px 8px 1px black";
        document.getElementById("div-header").style.backgroundColor = "lightgray";
        document.getElementById("text-header").style.color = "black";
    }
    else {
        document.getElementById("text-header").style.fontSize = "50px";
        document.getElementById("profile").style.maxHeight = "100px";
        document.getElementById("profile").style.maxWidth = "120px";
        document.getElementById("div-header").style.height = "15rem";
        document.getElementById("profile").style.marginTop = "-2rem";
        document.getElementById("text-header").style.marginTop = "2rem";
        document.getElementById("div-header").style.borderBottom = "2px solid black";
        document.getElementById("div-header").style.boxShadow = "none";
        document.getElementById("div-header").style.backgroundColor = "gray";
        document.getElementById("text-header").style.color = "white";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
