---
type: spec
title: "Spec — Ultra MVP v2 (Second Me Shipping Scope)"
version: 2.0
date: 2026-10-18
status: decided
edition: ultra
project: AI-Suplex Ultra
focus: digital-products
cycle: 2
week: 7
thread: project-tasks
supersedes: "Projects/AI-Suplex Ultra Edition/Spec — Ultra MVP.md"
tags: [spec, ultra, mvp, scope, second-me, four-faculties, projection-layer, decision]
key_insights: "The MVP ships FOUR faculties with FIVE surfaces: Drive (Deep Ultra Mode) · Memory (Living Wiki) · Insight (Portfolio Opportunity Mapper) · Output (Projection Layer = Knowledge Canvas + decision-canvas). Insight Resonance is the single cut. 'The Showroom' is rejected — the Projection Layer keeps its name because it says what happens: the vault projected into useful forms. Shipping TWO canvases of different input shapes is what makes it a layer rather than a graph viewer."
next_actions: "1) Build the substrate: Mappings/manifest.json + Tools/project.js. 2) knowledge-canvas. 3) decision-canvas. 4) Tools/opportunity.js. 5) Living Wiki packaging + deterministic fallback. 6) Tests + docs."
---

# 🦸 Spec — Ultra MVP v2 (Second Me Shipping Scope)

> **Decided 2026-10-18 (Cycle 2 · Week 7) — Hustler.** This spec governs **shipping scope**.
> `Spec — Ultra MVP.md` still governs the free-on-ramp vs paid-harness split, the open-core
> constraints, and lane discipline. It no longer governs *what ships in the MVP*.

---

## 1 · The naming decision (closed)

| Faculty | Name | Status |
|---|---|---|
| **Drive** | **Deep Ultra 🦸 Mode** | ✅ decided (was *the Gauntlet*) |
| **Memory** | **Living Wiki** | ✅ decided (was *LLM Wiki*) |
| **Insight** | **Insightful Connections** | ✅ decided (was *Graph RAG*) |
| **Output** | **Projection Layer** | ✅ **kept** — *The Showroom* **rejected** |

**Why the Projection Layer keeps its name.** The name says what happens: the vault is **projected into
useful forms**. A showroom is where finished goods *sit* — passive; this layer *transforms*, and half its
output is not for sale (a canvas, a decision map). Offer line:

> **The Projection Layer — your vault, projected into the forms you actually need.**

The value is **multiplicity**: one typed corpus, many applied forms. Internal verb stays *project*.

---

## 2 · The shipping scope — 4 faculties, 5 surfaces

| Faculty | Surface | Tool behind it | State |
|---|---|---|---|
| ⚡ **Drive** | **Deep Ultra Mode** | `Tools/deep-ultra.js` | ✅ **shipped** — 12 slugs, 3 voices, 45 tests |
| 📚 **Memory** | **Living Wiki** | `Tools/wiki.js` + deterministic fallback | 🟡 package |
| 🧠 **Insight** | **Portfolio Opportunity Mapper** | `Tools/outreach-board.js` + new scoring | 🟡 build `Tools/opportunity.js` |
| 🧩 **Projection** | **Knowledge Canvas** | `Tools/knowledge-graph.js` (SQLite graph) | 🟡 renderer missing |
| 🧩 **Projection** | **decision-canvas** | frontmatter corpus + `Memory/semantic/` | 🟡 build |

**Every faculty in the offer has one room a buyer can walk into.** That is the MVP.

---

## 3 · The evidence (measured 2026-10-18)

| Claim | Evidence |
|---|---|
| the graph engine exists | `Tools/knowledge-graph.js` — **1,076 lines**, SQLite, build/query/path/hubs/orphans/export |
| the outreach entity exists | `Tools/outreach-board.js` — **288 lines**, `--json` summary available |
| the wiki generator exists | `Tools/wiki.js` — **287 lines**, requires a MiMo/OpenAI key, writes a sibling `wiki/` |
| the decision engine exists | `Tools/decide.js` — **136 lines**, deterministic → embedding → local model, fail-open |
| decision data exists | **120** Cycle 2 artifacts carry `key_insights:` · **7** session-end reports |
| deprecation data exists | **3** files in `Memory/semantic/` carry superseded/deprecated markers |
| the substrate does NOT exist | ❌ no `Mappings/` · ❌ no `Tools/project.js` |

**Read:** this is not five builds. It is four package-jobs on working tools **plus one substrate** that
has never been written.

---

## 4 · The single cut — Insight Resonance

**Deferred to roadmap.** Reasons:
1. It has **never been built** — no extractor, no resonance scoring.
2. It is **LLM-heavy** in a product that otherwise runs offline.
3. It **overlaps the Opportunity Mapper's value** — both discover connections across history. Shipping
   two implementations of one faculty in a first MVP is over-scoping.

Insightful Connections still ships — through the mapper, which answers the question a buyer will pay
for: *what should I sell next, and at what price?*

---

## 5 · Build order (≈ 8.5h)

| # | Work | Est. | Gate |
|---|---|---|---|
| **1** | `Mappings/manifest.json` + `Tools/project.js` (`--list` · `--validate` · `--mapping`) | 90m | **both canvases depend on it** |
| **2** | `Mappings/knowledge-canvas.js` → self-contained HTML | 90m | proves the contract on existing data |
| **3** | `Mappings/decision-canvas.js` | 120m | proves the **second input shape** → it is a *layer* |
| **4** | `Tools/opportunity.js` | 90m | the revenue story |
| **5** | Living Wiki packaging + deterministic fallback | 60m | Memory works **without** a key |
| **6** | Tests · docs · tasklist | 60m | 4 suites green |

**Ordering rule:** the substrate is built **once** and used **twice**. Never build a canvas before the
registry exists — that is how a layer decays into a one-off script.

---

## 6 · Acceptance criteria

### 6.1 · The substrate

1. `--validate` fails loudly (non-zero, named mapping) on a malformed manifest entry.
2. Adding a mapping requires **no** change to `Tools/project.js`.
3. No projection mutates the vault — tracked files unchanged after a run, excluding `Projections/`.
4. Every run logs to `Memory/projection-log.md` (id · input hash · output · timestamp · deterministic).

### 6.2 · knowledge-canvas

1. Opens offline (`file://`), no network, no CDN at open time.
2. All entities render as nodes; all relationships as edges **carrying their type**.
3. Filtering by relationship type works (`contradicts` · `supports` · `reusable_for` · `inspired_by` · `produced`).
4. Clicking a node shows its relationships **and** the source file path(s).
5. Re-running on an unchanged DB produces a byte-identical file.

### 6.3 · decision-canvas — **deterministic first**

1. A named decision traces to at least one evidence artifact **and** its outcome.
2. Superseded / deprecated decisions render **distinctly** (semantic memory already marks them).
3. **Without an LLM key the canvas still renders** — frontmatter-only fallback is the shipped path, not a
   degradation. `requires: []` on the manifest entry; LLM enrichment is an optional upgrade.

**Extraction heuristic (no model):** decision unit = a `key_insights` line, a `next_actions` line, or a
semantic rule · evidence = the artifact it lives in · outcome = a later artifact/session referencing the
same entity (reuse the graph's entity table) or a superseded marker · link = shared entity tokens +
frontmatter dates.

### 6.4 · Portfolio Opportunity Mapper

1. Reads `Tools/outreach-board.js --json` + B-Bombs + recorded prices — **deterministic, no key**.
2. Emits a ranked cross-sell / up-sell list with price bands.
3. Ported **into the vault** as `Tools/opportunity.js` — not left as a Next.js-only demo.

### 6.5 · Living Wiki

1. Runs **without** an API key — frontmatter-only pages.
2. With a key, enriches the same pages (never a different structure).
3. Output is self-contained markdown under the wiki root.

---

## 7 · Risks

| Risk | Mitigation |
|---|---|
| **LLM dependency** — Living Wiki exits without a key | deterministic fallback is the shipped path; a key only enriches |
| **Runtime split** — the mapper lives in the Next.js showcase | port to `Tools/opportunity.js`; the showcase keeps the *story*, the vault gets the *tool* |
| **Substrate skipped** — a canvas built as a one-off script | the registry is step 1; `--validate` enforces the contract |
| **Scope creep** — Insight Resonance creeps back in | it is explicitly roadmap; the mapper carries the faculty |

---

## 8 · Tasklist re-map (T014–T018)

| Task | Was | Becomes |
|---|---|---|
| **T014** | LLM Wiki + Insightful Connections (45m) | **T014a Living Wiki** (60m) · **T014b Opportunity Mapper** (90m) · T014c Insight Resonance **DEFERRED** |
| **T015** | Projection Layer — ship the renderer (30m) | **substrate + knowledge-canvas + decision-canvas** (5h) |
| **T016** | Selar listing | unchanged — after the 4 surfaces exist |
| **T017** | Landing page | unchanged — **volume wall written first** |
| **T018** | 2-minute demo | ✅ **DONE** (2026-10-18) |

> The 45-minute estimate for T014 was inherited from when "package the pillars" meant "write a guide."
> It now means building. The v2 numbers above are the honest ones.

---

## 8b · Integration — AionUi (explicit, POST-MVP)

> **Stated explicitly 2026-10-18 by the Hustler.** AI-Suplex Ultra **will integrate with
> [AionUi](https://github.com/iOfficeAI/AionUi)** — the open-source 24/7 Cowork agent app.

| Fact | Value |
|---|---|
| License | **Apache-2.0** (permissive — compatible with the 777 MIT model) |
| Stack | **TypeScript** (the harness is CommonJS Node — a module bridge is a later-phase concern) |
| Stars | ~33.6k (was 30.9k at the Cycle 1 hybrid decision) |
| Role | the **commodity layer** — chat shell · tool call · model router · file preview · scheduled tasks · doc gen |

**The split (unchanged from the Cycle 1 hybrid artifact):** AionUi buys the commodity; Ultra keeps the
soul — **Deep Ultra Mode · Living Wiki · Insightful Connections · The Projection Layer · 3lm memory.**

**Placement:** POST-MVP (release plan §2 — the cockpit is the *product path*, not the current harness
MVP). Sections 1–6 of this build ship **without** AionUi. When it lands, the canvases (self-contained
HTML) are already AionUi-compatible — they open in any browser.

---

## 9 · Sources

- `Artifacts/2026-2027/Cycle 2/Week 6/2026-10-13-0745-ultra-edition-the-second-me-offer-and-launch-framing-digital-products.md` — the offer + the four faculties
- `Projects/AI-Suplex Ultra Edition/Spec — Ultra MVP.md` — free on-ramp vs paid harness (still canonical for scope *labels*)
- `Projects/AI-Suplex Ultra Edition/Projection Layer — Design Spec.md` — registry · runner · mappings (v1.0)
- `Projects/AI-Suplex Ultra Edition/Outreach Entity — Design Spec.md` — the outreach substrate
- `Artifacts/2026-2027/Cycle 1/Week 2/2026-05-08-1345-graph-rag-live-implementations-ai-suplex-ai-engineering.md` — the Insight Resonance / Opportunity Mapper origins

---

*Spec v2.0 — decided 2026-10-18 (Cycle 2, Week 7) · Track P · project-tasks lane. TWABAM ⚡*