const toggler = document.getElementById('button');
const menu = document.getElementById('nav-mobile');

toggler.addEventListener('click', function () {
    menu.classList.toggle('-ml-[100%]');
})