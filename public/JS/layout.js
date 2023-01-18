const collapsibleNavbarL = document.querySelector('#collapsible_navbar_l');
const collapsibleNavbarS = document.querySelector('#collapsible_navbar_s');
const hamburgerMenu = document.getElementById('hamburger_menu');

function showHideHamburgerLinks() {
  const hamburgerLinks = document.getElementById(
    'collapsible_navbar_s_hamburger_links'
  );
  if (hamburgerLinks.style.display === 'block') {
    hamburgerLinks.style.display = 'none';
  } else {
    hamburgerLinks.style.display = 'block';
  }
}

function NavbarAdapt() {
  if (window.scrollY > 260 && window.innerWidth > 770) {
    collapsibleNavbarS.style.display = 'none';
    collapsibleNavbarL.style.display = 'block';
  } else if (window.scrollY > 260 && window.innerWidth <= 770) {
    collapsibleNavbarL.style.display = 'none';
    collapsibleNavbarS.style.display = 'block';
  } else {
    collapsibleNavbarS.style.display = 'none';
    collapsibleNavbarL.style.display = 'none';
  }
}

hamburgerMenu.addEventListener('click', showHideHamburgerLinks);

['scroll', 'resize'].forEach((event) => {
  window.addEventListener(event, NavbarAdapt);
});
