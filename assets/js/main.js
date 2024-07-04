const menuButton = document.querySelector('#toggle');
/* const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link'); */

Array.from(itensNav).forEach(element => element.addEventListener('click', checkMenu))

menuButton.addEventListener('click', function() {
    document.body.classList.toggle('lock-scroll');
});

/* function checkMenu(click){
    
} */