const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.classList.toggle('open', !open);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('open');
    });
  });
}

document.querySelectorAll('.service-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.service-item');
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.service-item.open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.service-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    button.setAttribute('aria-expanded', String(!isOpen));
    item.classList.toggle('open', !isOpen);
  });
});
