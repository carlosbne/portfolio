const menubtn = document.querySelector('#toggle');

menubtn.addEventListener('click', function() {
    document.body.classList.toggle('lock-scroll');
});
