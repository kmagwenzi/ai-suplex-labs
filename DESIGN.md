# Design: AI-Suplex Ultra — Labs Project Briefing

The locked design system for `ai-suplex.co.zw/projects/ai-suplex-ultra.html`.
This file is the briefing-page application of the brand authority: the sales page's
`DESIGN.md` (repo `ai-suplex-ultra-preview`) — "the file is the rule". This page is a
**project briefing**, not a sales page: it creates context and hands off to exactly two
actions. Where the two files disagree, the sales file wins on **brand** (palette, type,
buttons); this file wins on **briefing behavior** (CTA set, content order, scope).

## Decisions of record (Hustler, 2026-11-13 ~23:33 CAT)
- **Direction:** Calm Command Centre (PRD D3) — dark, precise, evidence-led.
- **Accent:** **Navy & Warm Gold carry** — gold `#d4a94f` / `#b8862e` on navy `#080e1a`.
  One accent. No gradient, no neon, no game styling.
- **Brand line:** dropped. The page runs the canonical line only:
  **"AI-Suplex 777 captures the work. Ultra turns it into your next opportunity."**
- **Source file:** `projects/ai-suplex-ultra.html` (confirmed Phase 0).

## URLs of record (the only ones allowed on this page)
- Demo: `https://ai-suplex-ultra-showcase.vercel.app`
- Sales page: `https://ultra.ai-suplex.co.zw`
- This page: `https://ai-suplex.co.zw/projects/ai-suplex-ultra.html`
- **Banned:** `ai-suplex-ultra-preview.netlify.app` — staging preview URL; never ship it.

## Palette (inherits the brand system verbatim)
| Role | Value |
|---|---|
| Ground Navy-950 | `#080e1a` |
| Elevation 1 / 2 / 3 | `#0d172a` · `#121e35` · `#1a2947` |
| Gold base (borders, idle marks) | `#b8862e` |
| Gold high (active, links, CTA fill) | `#d4a94f` |
| Cream accent (rare emphasis) | `#e8d5a8` |
| Ink primary / muted / sub-muted | `#f1f5f9` · `#94a3b8` · `rgba(148,163,184,.6)` |
| Hairline / strong | `rgba(255,255,255,.08)` · `rgba(255,255,255,.14)` |
| Status: shipped | mono, gold-hi text on `rgba(184,134,46,.12)` |
| Status: in development | mono, muted text on hairline ground |

No green/red badges — the accent stays singular. Contrast floor: **every** text, link and
badge ≥ 4.5:1 against its ground (ink-on-navy passes; gold-hi on navy-950 passes; never
gold-base small text on elevations).

## Typography
- **Display / headings:** `"IBM Plex Serif", Georgia, serif` — hero line + section heads.
- **Body / interface:** `Inter`, system sans stack.
- **Data / badges / terminal:** `"IBM Plex Mono", SFMono-Regular, monospace`.
- Scale (page tokens): display `clamp(2.5rem, 5vw + 1rem, 4rem)` lh 1.08 · h2
  `clamp(1.6rem, 2.2vw + 1rem, 2.1rem)` lh 1.15 · h3 `1.25rem` lh 1.3 · lead
  `clamp(1.05rem, .4vw + .95rem, 1.2rem)` lh 1.65 · body `1rem` lh 1.7 max 65ch ·
  small `.875rem` · mono `.8125rem`.
- No italic word inside a roman heading. No tracked-capital eyebrow kickers.

## Spacing & layout
- Scale: `--s-1 .5rem · --s-2 .75rem · --s-3 1rem · --s-4 1.5rem · --s-5 2.5rem · --s-6 4rem`
  (aliases of the shared vault scale).
- Section rhythm: `--s-6` desktop, `--s-5` under 768px. Container max-width `72rem`,
  inline padding `1.25rem` (`1rem` under 480px). Prose column 65ch. Grid over flex-math.
- Breakpoints: 640 / 768 / 1024. `overflow-x: clip` on `html` and `body`.

## Component treatment
- **Evidence card (the atom):** navy elevation, hairline border, radius 10px. Header =
  mono label + status chip. Body = the insight in plain language. Footer = the source line
  ("Evidence — 3 workspaces · 2 tasks · 1 lesson") + confidence meter ("High confidence ·
  4 evidence links") in gold-hi. Cards read as real product output — never marketing
  illustration. One optional **Approve** affordance (outline) demonstrates the human gate.
- **Buttons:** Primary = fill `#d4a94f`, text `#080e1a`, weight 600, padding `.75rem 1.5rem`,
  radius 6px, hover brightness(1.05), focus-visible 2px solid `#d4a94f`. Secondary =
  `1px solid rgba(255,255,255,.16)`, bg `rgba(18,30,53,.5)`, text `#f1f5f9`; hover border
  `#b8862e`, text `#d4a94f`. Exactly two CTA labels on the whole page:
  `[View the live demo]` and `[Visit the Ultra sales page]`. "Learn more" is banned.
- **Ledger (proof):** Result / Measure / How it was taken — mono numerals, dated caption.
  This is the evidence rule: figures trace to commands; no metric tiles.
- **Terminal moments:** IBM Plex Mono blocks ONLY in Deep Ultra Mode and AS MC sections.
  Never above the fold.
- **Constellation motif (signature):** inline SVG, `aria-hidden`, viewBox-responsive —
  node labels are HTML, never SVG `<text>`, under 640px. Scattered nodes → edges draw →
  one opportunity node resolves in gold. Used in: hero background, Knowledge Canvas and
  Opportunity Mapper illustrations, section transitions, final CTA ground.
- **777 mentions:** below the fold only, in ecosystem-context rows.

## Motion principles
- Animate ONLY opacity and transform. `transition: all` is banned.
- Hero sequence ≤ 2.5s: headline fade-up (0–.4s) → typewriter outcome line (.4–1.6s) →
  constellation nodes connect (.6–2.0s) → mapper evidence card fades in (1.7–2.2s) →
  evidence links highlight (2.2–2.5s). **The two CTAs are fully visible from first paint** —
  the sequence decorates; it never gates the hand-off.
- Typewriter rotates the five outcome lines; reduced-motion renders the full line.
- `prefers-reduced-motion: reduce` → all animation off, static final states, scroll
  reveals never hide content.
- Scroll reveals: translate ≤ 12px, 320ms, `cubic-bezier(.22,.61,.36,1)`, once.

## Honesty floor (briefing-specific, hard rules)
1. Two CTAs only, at the five spec points; no purchase path, no pricing on this page.
2. Verbs: surfaces · connects · recommends · explains · highlights · helps you decide —
   never decides · automatically improves · finds money · predicts revenue · runs your business.
3. No technical vocabulary above the fold (typed graph, frontmatter, LLM enrichment, projection layer).
4. Every claim evidence-linked; zero stale numbers; the ledger caption carries the measure date.
5. The human approval loop is stated: **"Ultra recommends; you approve."**
6. Insight Resonance has no standalone headline — it lives inside Knowledge Canvas.
7. 777 below the fold; this page hands off, it does not close.

## Implementation notes
- Shared chrome (header, nav, footer, skip-link, base tokens) from `/assets/css/style.css`.
- Page-scoped tokens + section styles live in a new `/assets/css/ultra-briefing.css`,
  loaded after `style.css`, scoped under `.ub-` prefixes to avoid cross-page bleed.
- Fonts via the sales page's preconnect + stylesheet pattern (IBM Plex Serif / Inter /
  IBM Plex Mono), `display=swap`.
- No build step; static HTML/CSS only (`netlify.toml` publishes the repo root).
