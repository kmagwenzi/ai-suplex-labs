/**
 * AI-Suplex Labs — Main Progressive Enhancement Script
 * Minimal, dependency-free vanilla JS.
 * The page remains 100% accessible and functional with JavaScript disabled.
 */

(function () {
  'use strict';

  // Mark JS enhancement availability
  document.documentElement.classList.add('js-enabled');

  // Elements
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.nav__toggle');
  const menuWrapper = document.querySelector('.nav__menu-wrapper');
  const checkbox = document.querySelector('.nav__checkbox');

  /* --------------------------------------------------------------------------
     1. Mobile Navigation Toggle (Progressive Enhancement)
     -------------------------------------------------------------------------- */
  if (toggleBtn && menuWrapper) {
    toggleBtn.addEventListener('click', function (event) {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      toggleBtn.setAttribute('aria-expanded', String(newState));
      menuWrapper.classList.toggle('is-open', newState);

      // Keep checkbox in sync for accessibility and visual states
      if (checkbox) {
        checkbox.checked = newState;
      }
    });

    // Close mobile nav when pressing Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuWrapper.classList.contains('is-open')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menuWrapper.classList.remove('is-open');
        if (checkbox) {
          checkbox.checked = false;
        }
        toggleBtn.focus();
      }
    });

    // Close when clicking outside of the open menu
    document.addEventListener('click', function (event) {
      if (
        menuWrapper.classList.contains('is-open') &&
        !menuWrapper.contains(event.target) &&
        !toggleBtn.contains(event.target)
      ) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        menuWrapper.classList.remove('is-open');
        if (checkbox) {
          checkbox.checked = false;
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Header Elevation Shadow on Scroll
     -------------------------------------------------------------------------- */
  if (header) {
    let ticking = false;

    const updateHeaderShadow = function () {
      const shouldHaveShadow = window.scrollY > 8;
      if (shouldHaveShadow) {
        header.classList.add('has-shadow');
      } else {
        header.classList.remove('has-shadow');
      }
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(updateHeaderShadow);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Initial check
    updateHeaderShadow();
  }
})();
