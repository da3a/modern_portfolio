//Select DOM Items 

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    showMenu ? menuBtn.classList.remove("close") : menuBtn.classList.add("close");
    showMenu ? menu.classList.remove('show') : menu.classList.add('show');
    showMenu ? menuNav.classList.remove('show') : menuNav.classList.add('show');
    showMenu ? menuBranding.classList.remove('show') : menuBranding.classList.add('show');
    showMenu ? navItems.forEach(item => item.classList.remove('show')) : navItems.forEach(item => item.classList.add('show'));
    showMenu = !showMenu;
}

