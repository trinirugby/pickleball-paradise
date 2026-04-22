/* Pickleball Paradise TT — main.js */

(function () {
  // ── Hamburger / drawer ──
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer    = document.querySelector('.nav-drawer');
  const overlay   = document.querySelector('.nav-overlay');
  const closeBtn  = document.querySelector('.nav-drawer-close');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
  if (overlay)   overlay.addEventListener('click', closeDrawer);

  // Close drawer on link click
  document.querySelectorAll('.nav-drawer-links a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });

  // ── Active nav link ──
  var current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-drawer-links a, .nav-links-desktop a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();
