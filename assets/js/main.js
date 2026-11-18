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

  /* --------------------------------------------------------------------------
     4. Progressive Phrase Rotator ([data-rotate-phrases])
     -------------------------------------------------------------------------- */
  function initPhraseRotator() {
    const rotators = document.querySelectorAll('[data-rotate-phrases]');
    if (!rotators.length) return;

    if (prefersReducedMotion) return;

    rotators.forEach(function (el) {
      const raw = el.getAttribute('data-rotate-phrases');
      if (!raw) return;

      const phrases = raw
        .split('|')
        .map(function (s) {
          return s.trim();
        })
        .filter(Boolean);

      if (phrases.length < 2) return;

      let phraseIndex = 0;
      let charIndex = phrases[0].length;
      let isDeleting = false;

      el.textContent = phrases[0];

      function tick() {
        const current = phrases[phraseIndex];

        if (isDeleting) {
          charIndex--;
          el.textContent = current.slice(0, Math.max(0, charIndex));

          if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(tick, 280);
            return;
          }
          setTimeout(tick, 22);
        } else {
          charIndex++;
          el.textContent = current.slice(0, charIndex);

          if (charIndex >= current.length) {
            isDeleting = true;
            setTimeout(tick, 2600);
            return;
          }
          setTimeout(tick, 38);
        }
      }

      setTimeout(function () {
        isDeleting = true;
        tick();
      }, 2600);
    });
  }

  /* --------------------------------------------------------------------------
     5. Copy-to-Clipboard Buttons ([data-copy-target])
     -------------------------------------------------------------------------- */
  function initCopyButtons() {
    const copyButtons = document.querySelectorAll('[data-copy-target]');
    if (!copyButtons.length) return;

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } finally {
        document.body.removeChild(textarea);
      }
    }

    copyButtons.forEach(function (button) {
      const defaultLabel = button.textContent.trim();

      button.addEventListener('click', function () {
        const targetId = button.getAttribute('data-copy-target');
        const target = targetId ? document.getElementById(targetId) : null;
        if (!target) return;

        const text = target.textContent.trim();
        if (!text) return;

        const finish = function () {
          button.textContent = 'Copied';
          button.classList.add('is-copied');
          setTimeout(function () {
            button.textContent = defaultLabel;
            button.classList.remove('is-copied');
          }, 2000);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(finish, function () {
            fallbackCopy(text);
            finish();
          });
        } else {
          fallbackCopy(text);
          finish();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. Delivery Receipt Responsive Disclosure (<details data-desktop-open>)
     -------------------------------------------------------------------------- */
  function initReceiptDetails() {
    const panels = document.querySelectorAll('[data-desktop-open]');
    if (!panels.length) return;

    if (window.matchMedia('(min-width: 640px)').matches) {
      panels.forEach(function (panel) {
        panel.setAttribute('open', '');
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. Workflow Console Early-Access Form ([data-receipt-form])
     -------------------------------------------------------------------------- */
  function initReceiptForm() {
    const form = document.querySelector('[data-receipt-form]');
    if (!form) return;

    const emailInput = form.querySelector('input[type="email"]');
    const statusEl = form.querySelector('[data-form-status]');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!emailInput || !statusEl) return;

      const email = emailInput.value.trim();
      if (!email || !emailInput.checkValidity()) {
        statusEl.textContent = 'Enter a valid email address.';
        statusEl.className = 'receipt__form-status is-error';
        emailInput.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
      }
      statusEl.textContent = 'Sending request...';
      statusEl.className = 'receipt__form-status';

      const formData = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(function (response) {
          if (response.ok) {
            statusEl.textContent = 'Received. You are on the Workflow Console early-access list.';
            statusEl.className = 'receipt__form-status is-success';
            form.reset();
            return;
          }
          throw new Error('HTTP ' + response.status);
        })
        .catch(function () {
          statusEl.innerHTML =
            'Direct form submission is active on the live site. Email <a href="mailto:kuda@ai-suplex.co.zw?subject=Workflow%20Console%20Early%20Access" class="p777-link">kuda@ai-suplex.co.zw</a> to request early access now.';
          statusEl.className = 'receipt__form-status is-error';
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
          }
        });
    });
  }

  // Initialize typing effect, phrase rotator, scroll reveal, and receipt helpers
  initHeroTyping();
  initPhraseRotator();
  initScrollReveal();
  initCopyButtons();
  initReceiptDetails();
  initReceiptForm();
})();
