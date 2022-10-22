  // =====change navbar style

  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle
    ('window-scroll', window.scrollY > 999)
})


let nav = document.querySelector('nav')
let menu = document.querySelector('.menu')
let close = document.querySelector('.close')

menu.addEventListener("click", () => {

    nav.classList.add('open-nav')

})


close.addEventListener("click", () => {

    nav.classList.remove('open-nav')

})


      // SCROLL ANIMATION
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
    
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
        }
    
        window.addEventListener("scroll", reveal);