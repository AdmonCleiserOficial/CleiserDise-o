const cambie = document.querySelector('.toggle');
const singUp = document.querySelector('.signup');
const login = document.querySelector('.login');
const dispare = document.querySelector('.dispare');
let i = 1;
let tiempoInicial = 50;
let differenceTime = 100;
let temp;
dispare.addEventListener('click', () => {

    metaTiempo('.lia', 'bounceInRight', tiempoInicial);
    tiempoInicial += differenceTime;
    metaTiempo('.lib', 'bounceInRight', tiempoInicial);
    tiempoInicial += differenceTime;
    metaTiempo('.lic', 'bounceInRight', tiempoInicial);
    tiempoInicial += differenceTime;
    metaTiempo('.lid', 'bounceInRight', tiempoInicial);
    tiempoInicial += differenceTime;
    metaTiempo('.lie', 'bounceInRight', tiempoInicial);
});

function metaTiempo(clase, animacion, tiempo) {
    setTimeout(() => {
        animateCSS(clase, animacion)
    }, tiempo);
}
cambie.addEventListener('click', () => {
    i += 1;

    if (i % 2 == 0) {

        animateCSS('.login', 'bounceOutDown');
        login.style.opacity = "0";
        singUp.classList.add('encimade');

        animateCSS('.signup', 'bounceInRight');
        setTimeout(() => {
            singUp.style.display = "block";
            singUp.style.opacity = "1";
        }, 600);

    } else {
        booleano = true;
        singUp.style.display = "none";
        singUp.style.opacity = "0";

        animateCSS('.login', 'bounceInRight');


        setTimeout(() => {
            login.style.opacity = "1";
            singUp.style.display = "0";
        }, 20);
    }


});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName, "slow");

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}