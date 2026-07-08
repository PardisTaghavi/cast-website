// CAST project page — main JS
// Handles: smooth scroll, active-section highlighting, theme toggle

document.addEventListener('DOMContentLoaded', function () {
  // ===== Smooth scroll for in-page anchors =====
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== Active-section highlighting in top nav =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');

  function onScroll() {
    let current = '';
    sections.forEach(function (s) {
      const rect = s.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom > 80) current = '#' + s.id;
    });
    navLinks.forEach(function (a) {
      a.classList.remove('active');
      if (a.getAttribute('href') === current) a.classList.add('active');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===== Theme toggle =====
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  if (toggle) {
    toggle.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('cast-theme', next); } catch (e) { /* ignore */ }
    });
  }

  // ===== React to system theme changes (only when user hasn't set a preference) =====
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  if (mql && typeof mql.addEventListener === 'function') {
    mql.addEventListener('change', function (e) {
      try {
        if (localStorage.getItem('cast-theme')) return;  // user has chosen
      } catch (err) {}
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
  }
});
