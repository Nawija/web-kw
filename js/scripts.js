const burger = document.querySelector('#burger')
const menuToggle = document.getElementById('menuToggle');
const h1 = document.querySelector('h1')

burger.addEventListener('click', function() {
    menuToggle.classList.toggle('menu-toggle')
})

