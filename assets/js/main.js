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

  /* --------------------------------------------------------------------------
     3. Hero Terminal Typing Effect (Progressive Enhancement)
     -------------------------------------------------------------------------- */
  function initHeroTyping() {
    const hero = document.querySelector('.hero');
    const title = document.querySelector('.hero__title');
    const titleText = document.querySelector('.hero__title-text');
    const cursor = document.querySelector('.hero__cursor');

    if (!hero || !title || !titleText || !cursor) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const fullText = titleText.textContent.trim();
    if (!fullText) return;

    // Enable animation state for CSS transitions
    hero.classList.add('hero--animating');

    // Split text into spans for each character to preserve exact word-wrap geometry (zero CLS)
    titleText.textContent = '';
    const chars = [];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < fullText.length; i++) {
      const span = document.createElement('span');
      span.className = 'hero__char';
      span.textContent = fullText[i];
      span.style.opacity = '0';
      fragment.appendChild(span);
      chars.push(span);
    }
    titleText.appendChild(fragment);

    // Position cursor at start
    cursor.style.display = 'inline-block';
    cursor.classList.add('is-typing');
    if (chars.length > 0) {
      chars[0].before(cursor);
    }

    let currentIndex = 0;
    const charDelay = 40; // ~35-45ms per character

    function revealNextChar() {
      if (currentIndex < chars.length) {
        const charSpan = chars[currentIndex];
        charSpan.style.opacity = '1';
        charSpan.after(cursor);
        currentIndex++;
        setTimeout(revealNextChar, charDelay);
      } else {
        // Typing finished
        cursor.classList.remove('is-typing');
        cursor.classList.add('is-blinking');

        // Reveal hero elements with staggered delays (~150ms apart)
        setTimeout(function () {
          hero.classList.add('hero--reveal-badge');
        }, 50);

        setTimeout(function () {
          hero.classList.add('hero--reveal-lead');
        }, 200);

        setTimeout(function () {
          hero.classList.add('hero--reveal-cta');
        }, 350);

        // Cursor blinks 3-4 times (~2 seconds) then fades out
        setTimeout(function () {
          cursor.classList.remove('is-blinking');
          cursor.classList.add('is-faded');
        }, 2200);
      }
    }

    // Begin typing after a subtle initial pause
    setTimeout(revealNextChar, 180);
  }

  // Initialize typing effect
  initHeroTyping();
})();
