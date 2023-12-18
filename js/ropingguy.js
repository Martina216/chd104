/*hiuuuuuuuuuu*/
function handleScroll() {
    if (window.innerWidth < 768) {
        return;
    }

    var scrollPosition = window.scrollY; 
    var viewportHeight = window.innerHeight * 0.5;
    var ropingElement = document.querySelector('.roping');

    if (scrollPosition > viewportHeight) {
        ropingElement.classList.add('active'); 

        setTimeout(function() {
            var ropingGuy = document.querySelector('.roping-guy');
            ropingGuy.style.animation = 'followPath 3s linear 3 forwards';
            
            ropingGuy.addEventListener('animationend', function() {
                ropingElement.classList.remove('active');
                window.removeEventListener('scroll', handleScroll);
            }, { once: true });
        }, 100);
    }
}

window.addEventListener('scroll', handleScroll);


