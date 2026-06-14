const header = document.getElementById('site-header');
const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');

function setMenuOpen(open: boolean) {
  menuBtn?.setAttribute('aria-expanded', String(open));
  menuBtn?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu?.classList.toggle('hidden', !open);
  iconOpen?.classList.toggle('hidden', open);
  iconClose?.classList.toggle('hidden', !open);
}

menuBtn?.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

document.querySelectorAll('.mobile-nav-link').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('border-surface-dark', window.scrollY > 8);
  header.classList.toggle('shadow-sm', window.scrollY > 8);
});
