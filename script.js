/* Shared behavior for every page: mobile nav, subscribe modal, tag filters. */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- subscribe modal ---------- */
  var modal = document.getElementById('subscribe-modal');
  var openButtons = document.querySelectorAll('[data-subscribe-open]');
  var closeButton = document.querySelector('[data-subscribe-close]');
  var lastFocused = null;

  function openModal() {
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    var input = modal.querySelector('input[type=email]');
    if (input) input.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    if (lastFocused) lastFocused.focus();
  }

  openButtons.forEach(function (btn) {
    btn.addEventListener('click', openModal);
  });
  if (closeButton) closeButton.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- tag filters ---------- */
  var chips = document.querySelectorAll('.chip');
  var cards = document.querySelectorAll('[data-tags]');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var tag = chip.getAttribute('data-filter');

      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');

      cards.forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(',');
        var show = tag === 'all' || tags.indexOf(tag) !== -1;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* ---------- mark current nav link ---------- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) link.classList.add('is-active');
  });

});
