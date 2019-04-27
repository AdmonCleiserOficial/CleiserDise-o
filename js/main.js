const cambie = document.querySelector('.toggle');
const singUp = document.querySelector('.signup');
const login = document.querySelector('.login');
let i = 1;
cambie.addEventListener('click', () => {
    i += 1;
   
    if (i % 2 == 0) {  

        animateCSS('.login','bounceOutDown');
        login.style.opacity="0";
        singUp.classList.add('encimade');
        animateCSS('.signup','bounceInRight');
        setTimeout(()=>{singUp.style.display = "block";
        singUp.style.opacity = "1";},600);      
       
    } else {  
        booleano=true;
        // singUp.style.display = "none";
        // singUp.style.opacity = "0";
        animateCSS('.login','bounceInRight');
        setTimeout(()=>{login.style.opacity="1";singUp.style.display = "none";},600);
       }

  
});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName,"slow");

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
