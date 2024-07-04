const menuButton = document.querySelector('#toggle');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.nav-item');
const menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', checkMenu);

function checkMenu(){
    document.body.classList.toggle('lock-scroll');
}

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        checkMenu();
        if(menuButton.checked){
            menuButton.checked = false;
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}); 