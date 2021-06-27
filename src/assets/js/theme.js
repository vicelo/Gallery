//
// Initialize plugins and behaviors on document ready
//

/*$(function (){

    aboutMain.init()

    blogMain.init()

    galeryMain.init()

    vlogMain.init()

})

//
// fonction about main
//

var aboutMain = {
    init: function () {
        const threshold = 0.1;
        const options = {
          root: null,
          rootMargin: "0px",
          threshold,
        };
        
        const handleIntersect = function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > threshold) {
              entry.target.classList.remove("reveal");
              observer.unobserve(entry.target);
            }
          });
        };
        
        document.documentElement.classList.add("reveal-loaded");
        
        window.addEventListener("DOMContentLoaded", function () {
          const observer = new IntersectionObserver(handleIntersect, options);
          const targets = document.querySelectorAll(".reveal");
          targets.forEach(function (target) {
            observer.observe(target);
          });
        });
        
    }
}

//
// fonction Blog main
//

var blogMain = {
    init: function () {
        const threshold = 0.1;
        const options = {
          root: null,
          rootMargin: "0px",
          threshold,
        };
        
        const handleIntersect = function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > threshold) {
              entry.target.classList.remove("reveal");
              observer.unobserve(entry.target);
            }
          });
        };
        
        document.documentElement.classList.add("reveal-loaded");
        
        window.addEventListener("DOMContentLoaded", function () {
          const observer = new IntersectionObserver(handleIntersect, options);
          const targets = document.querySelectorAll(".reveal");
          targets.forEach(function (target) {
            observer.observe(target);
          });
        });
        
    }
}


//
// fonction Blog main
//

var galleryMain = {
    init: function () {
        const threshold = .1
        const options = {
          root: null,
          rootMargin: '0px',
          threshold
        }
        
        const handleIntersect = function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio > threshold) {
              entry.target.classList.remove('reveal')
              observer.unobserve(entry.target)
            }
          })
        }
        
        document.documentElement.classList.add('reveal-loaded')
        
        window.addEventListener("DOMContentLoaded", function () {
          const observer = new IntersectionObserver(handleIntersect, options)
          const targets = document.querySelectorAll('.reveal')
          targets.forEach(function (target) {
            observer.observe(target)
          })
        })
        
    }
}

//
// fonction VLog main
//

var vlogMain = {
    init: function () {
        var slideIndex = 1;
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
          var i;
          var slides = document.getElementsByClassName("m-vlog-mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        
        }
    }
}*/
