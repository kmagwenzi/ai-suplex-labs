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
     2. Sticky Header Elevation Shadow & Scroll Progress Bar
     -------------------------------------------------------------------------- */
  const scrollProgressBar = document.getElementById('scrollProgress');
  const heroNavyGlow = document.querySelector('.hero__glow--navy');
  const heroGoldGlow = document.querySelector('.hero__glow--gold');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.documentElement.classList.add('prefers-reduced-motion');
  }

  if (header || scrollProgressBar) {
    let ticking = false;

    const onScrollFrame = function () {
      const scrollY = window.scrollY;

      // Header shadow
      if (header) {
        if (scrollY > 8) {
          header.classList.add('has-shadow');
        } else {
          header.classList.remove('has-shadow');
        }
      }

      // Scroll Progress Indicator
      if (scrollProgressBar && !prefersReducedMotion) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
        scrollProgressBar.style.transform = `scaleX(${progress})`;
      }

      // Hero Ambient Parallax (compositor-only translateY, clamped to hero height)
      if (!prefersReducedMotion && scrollY < window.innerHeight) {
        if (heroNavyGlow) {
          heroNavyGlow.style.transform = `translate3d(0, ${(scrollY * 0.18).toFixed(1)}px, 0)`;
        }
        if (heroGoldGlow) {
          heroGoldGlow.style.transform = `translate3d(0, ${(scrollY * 0.1).toFixed(1)}px, 0)`;
        }
      }

      ticking = false;
    };

    window.addEventListener(
      'scroll',
      function () {
        if (!ticking) {
          window.requestAnimationFrame(onScrollFrame);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Initial pass
    onScrollFrame();
  }

  /* --------------------------------------------------------------------------
     3. Scroll-Triggered Reveal Animations (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    // If user prefers reduced motion, reveal everything immediately
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -48px 0px',
      threshold: 0.12,
    };

    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
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

  // Initialize typing effect and scroll reveal
  initHeroTyping();
  initScrollReveal();
})();
