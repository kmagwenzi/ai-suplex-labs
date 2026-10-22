---
type: long-running
title: 'Long-Running — Ultra MVP: The Harness (Track P)'
date: 2026-10-16
status: active
lane: long-running-tasks
instance_slug: ultra-mvp
cycle: 2
week: 7
focus: digital-products
focuses: [digital-products, ai-engineering]
product: 'AI-Suplex Ultra Edition (The Second Me) — Track P · PRODUCT (paid)'
governing_doc: 'Projects/Ultra Release Plan — MVP - AS MC - Checkout.md (canonical, 2026-10-14)'
spec: 'Projects/AI-Suplex Ultra Edition/Spec — Ultra MVP.md (v0.2 — approved 2026-10-16)'
supersedes: 'Tasklists/Archive/2026-10-13-long-running-ultra-mvp-first-light-gauntlet-first-tasklist.md (retired: Gauntlet-first, pre-instance)'
budget: 'Background lane + 1–2h dedicated focus daily (declared 2026-10-16 · T001). Spec §5: no budget = the lane eats the week.'
coordinate_with: 'Tasklists/Active/2026-10-13-long-running-production-push-777-prod-grade-share-asmc-tasklist.md → Track L (build once, ship twice)'
tags: [tasklist, long-running, ultra-mvp, track-p, harness, as-mc, install, cron, approvals, discord, checkout, second-me, digital-products, cycle-2, week-7]
---

# ⚔️ TWABAM ⚡! Long-Running Tasklist — Ultra MVP: The Harness (Track P)

**Mission:** Ship the **Ultra MVP = the harness that runs 7-7-7** — AS MC core · cron executor · approvals gate · brief delivery · packaged pillars · `install.sh` — then the **checkout**, per the release plan.

**Governing fact:** the MVP is the **harness**, **not the cockpit**. `Projects/Ultra Release Plan — MVP - AS MC - Checkout.md` §2: *a buyer installs Ultra, points it at their vault, and their rhythm runs itself.* **The cockpit is POST-MVP.**

**Governing rules:**
1. **Background lane.** No session. Prove work with **artifacts + a Save Context brief**. **Never writes the Active Mission Context** (daily-tasks is its sole writer).
2. **Fixed hour budget**, declared before the first commit (**T001**). *No budget = the lane eats the week.*
3. **Build once, ship twice.** The AS MC serves **Track L** (OSS) and **Track P** (paid) — do not build it twice.
4. **Extract, don’t invent.** The operator loop, the approvals gate, and the pillars **already exist** — this lane **packages** them.
5. **Slice B stays GATED** (G1–G3). No pillar *build*, no paid polish, no from-scratch cockpit.

> **Dependency chain:** `T002 (reconcile) → every build` · `T004 (install gate) → T016 (checkout)` · `Track L ships 777 production-grade first`.

---

## 🗄️ Retired

**Superseded:** `Tasklists/Archive/2026-10-13-long-running-ultra-mvp-first-light-gauntlet-first-tasklist.md` — the **Gauntlet-first** framing (Oct 13, pre-instance). The Gauntlet is a **Slice B pillar** (packaged, not built first); the release plan puts the **harness** first. Retired 2026-10-16.

---

## ⚡ Phase 0 — Context Core

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T000 | Hustler | 5m | ✅ **DONE (2026-10-17)** — `node Tools/3lm.js start --context` — staleness guard + instance projection; the **release plan** + **Spec v0.2** referenced | Execution |

**Success Check:**
- [x] Context fresh · the release plan + Spec v0.2 **referenced, not re-derived**

---

## 🧭 Phase 1 — Reconcile the sources (before building)

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T001 | Hustler | 10m | ✅ **DONE (2026-10-16)** — budget declared: **background lane + 1–2h dedicated focus daily** — recorded in `budget:` | Decision |
| T002 | Architect | 20m | ✅ **DONE (2026-10-16)** — **Reconcile the sources**: `Spec — Ultra MVP.md` now scope-labels **FREE on-ramp vs PAID harness**, U1 reconciled (cockpit POST-MVP for the paid build), **U7 records AionUi = demo surface** | Execution |
| T003 | Builder | 20m | ✅ **DONE (2026-10-16)** — the parked Gauntlet-first tasklist is **retired + archived** (`superseded_by` this file) | Execution |

**Success Check:**
- [x] Parked tasklist retired + archived
- [x] Budget declared — **T001 ✅ (2026-10-16)**
- [x] U1 reconciled · AionUi role recorded — **T002 ✅ (2026-10-16)**

---

## 📦 Phase 2 — A1: the install gate *(shared with Track L)*

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T004 | Builder | 60m | ✅ **DONE (2026-10-16)** — **`install.sh`** (Linux/macOS/Git Bash/WSL) + **`install.ps1`** (native Windows) + **`.gitattributes`** (LF for scripts). Node 22+ check · target guard · template copy · init → index → graph · smoke test. **Measured: install 6s + `start --context` 3s = ~9s.** ⚠️ `install.ps1` **untested** — no PowerShell on this machine. **Pushed: `a118211`** | Execution |
| T005 | Builder | 45m | ✅ **DONE (2026-10-16)** — quick-start wired to `bash install.sh` · OS note · **agent-agnostic pitch** (a third audience) · **2 screenshot slots scaffolded** with alt text + captions (`assets/graph.png` · `assets/vault.png`). ⬜ **Only the 2 PNG captures remain** (GUI) | Creative |
| T006 | Architect | 30m | ✅ **PASS (conditional) — 2026-10-16.** Fresh **remote clone** + README **verbatim** → **11s** (clone 2 · install 4 · brief 5) vs a 600s DoD. ⚠️ **Caught a real defect:** `install.sh` committed as `100644` → `Permission denied`; fixed `52db041`. ⚠️ Windows + bare-machine runs pending. Review: `Artifacts/2026-2027/Cycle 2/Week 7/2026-10-16-a1-install-gate-architect-review-t006-ai-engineering.md` | Review |

**Success Check:**
- [x] A stranger installs in **`<10 min`** on a clean machine and runs `3lm start --context` unaided — **T004 ✅ ~9s · T006 gate ✅ 11s verbatim** (defect caught + fixed)

---

## 🧠 Phase 3 — The AS MC core *(components 1–2)*

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T007 | Builder | 60m | ✅ **DONE (2026-10-17)** — **`Tools/asmc.js`** — the headless operator loop (`open`/`close`/`status`) · the four threads **as v2.0 instances** · the staleness guard (with `--strict`) · documented for Linux (`AS MC — Operator Loop.md`) · **fresh-clone proof: clone → install → open exits 0** · 28 assertions green · pushed `c2f3760` | Execution |
| T008 | Builder | 60m | ✅ **DONE (2026-10-17)** — **the cron executor** · `rituals.sh` deterministic (daily · sat · tue) — **D5 enforced: removed the LLM step (`bbomb_hunter.py`) from `saturday`** · `Tools/cron/hermes-jobs.md` = the 5 agent-shaped jobs (operator brief · weekly review · outreach audit · B-Bomb ranking · backup) · `crontab.example` + `n8n/README.md` · **23 assertions green** (`cron-partition.test.js`) | Execution |
| T009 | Builder | 30m | ✅ **DONE (2026-10-17)** — **`ai-suplex` Hermes profile created + wired** (`terminal.cwd` = vault root · `skills.external_dirs` = `~/.agents/skills`, 21 skills) · spec §3 records the v2.0 delegation · crons read **instances** via `asmc open` → `3lm threads` · verified `Tools/test/t009-profile-wiring-verify.sh` (5/5) | Execution |

**Success Check:**
- [x] The loop runs **headless from a fresh clone** · crons are partitioned · no job owns two things — **T007 ✅ · T008 ✅ · T009 ✅**

---

## 🚪 Phase 4 — The gate + delivery *(components 3–4)*

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T010 | Builder | 30m | ✅ **DONE (2026-10-17)** — **the approvals gate** verified + documented + **split out of `3lm` into its own CLI** (`Tools/approvals.js` — `3lm` stays memory-only): the Hustler gate (3 buckets — gauntlet gates · lesson promotions · B-Bomb candidates) → `AS MC — Approvals Gate.md` · live: lessons pool 373 (ready 50) · bBombs 70 · ⚠️ flagged a `readyItems` dedup for the memory-loop owner | Execution |
| T011 | Builder | 60m | ✅ **DONE (2026-10-17, build side)** — **brief delivery → Discord (D9)** wired: `Tools/cron/operator-brief.sh` (deterministic bridge) + `~/.hermes/scripts/operator-brief.sh` (operator seat) + `AS MC — Delivery.md` runbook + cron job #1 token-ready. ⚠️ **Hustler gated:** Discord bot token + `hermes gateway setup` + `gateway install` — then T012 tests the real landing | Execution |
| T012 | Architect | 30m | ✅ **PASS (2026-10-17)** — **delivery test** · cron `9998f336f1f5` fired **3×** (`status: ok`, `delivery_error: null`) → the operator brief landed in **#general** of *AI-Suplex Mission Control* · switched to `--no-agent` after the agent-mode run wandered 90k tokens/4min · **D9 proven end-to-end** | Review |

**Success Check:**
- [x] The gate holds · the brief **lands** on a gateway (not merely generates) — **T012 ✅** (cron `9998f336f1f5` · 3× `ok` · `delivery_error: null`) · **re-verified 2026-10-20:** `Tools/approvals.js` renders the 4-bucket gate · `Tools/cron/operator-brief.sh` renders today's brief

---

## 🧩 Phase 5 — Package the pillars *(component 5)*

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T013 | Builder | 60m | ✅ **DONE (2026-10-17)** — **packaged Deep Ultra 🦸 Mode** · fixed the suffixed-ID parser (`deep-ultra.js` + `asmc.js` — 0/0 HP → honest HP) · `deep-ultra.test.js` **32 assertions** (three voices, FINAL BOSS constant) · **ULTRA-ONLY** — packaged in the vault; **pulled from the 777 template** (Second Me artifact: *keep Ultra off the 777 production repo*) · `rituals.sh saturday` fires `deep-ultra.js latest --dry` · run-this guide `Guides/Guide — Run Deep Ultra Mode.md` · spec `Projects/AI-Suplex Ultra Edition/Deep Ultra Mode — Technical Spec.md` | Execution |
| T014 | Builder | 45m | ✅ **DONE (2026-10-18)** — **Living Wiki** (Memory) + **Portfolio Opportunity Mapper** (Insight) shipped: `Tools/wiki.js` (deterministic · keyless · 6 sections · 3 forms) + `Tools/opportunity.js` (pipeline · overdue · channels · under-utilised · price bands) · **Insight Resonance DEFERRED** (per Spec v2 — never built, LLM-heavy, overlaps the mapper) | Execution |
| T015 | Builder | 30m | ✅ **DONE (2026-10-18)** — **the Projection Layer** shipped: `Mappings/` registry + `Tools/project.js` runner + **Knowledge Canvas** + **decision-canvas** (two input shapes through one substrate, zero runner edits) · **deliverable-renderer DEFERRED** (Phase 3, roadmap) | Execution |

> **Naming (2026-10-17):** the feature is **Deep Ultra 🦸 Mode** — never "the Gauntlet". Renamed across
> `Prompt Patterns/📄 Pattern - Deep Ultra Mode.md` · the three commands `⚡ Command — Deep Ultra Mode (Arcade|Operative|Pro).md` ·
> `Skills/Builder – Deep Ultra Mode Generator.md` · `Guides/Guide — Run Deep Ultra Mode.md` · `Tools/deep-ultra.js` ·
> the tooling registries (`manifest.json` · `index.json`) · `AGENTS.md`. Legacy artifacts keep `type: gauntlet`;
> `Tools/approvals.js` reads **both** schemas so old battles still gate.

**Success Check:**
- [x] Each pillar is a **run-this**, not a tool you must already know — **5 run-this guides live:** *Run Deep Ultra Mode* · *Run the Living Wiki* · *Run the Opportunity Mapper* · *Run the Projection Layer* · *Run Ultra (The Second Me)*
- [x] **Honest** about shipped vs roadmap (the vault rule: honest is the better pitch) — the T018 demo script's table marks the deferred pillars **roadmap** in 3 explicit lines

---

## 💳 Phase 6 — The checkout *(release plan §3)*

> ⚠️ **SCHEDULE CONTRADICTION — recorded 2026-10-20. Deliberately not resolved by silence.**
> This phase carries the checkout into **Week 7**, but the governing plan sequences it at **Cycle 3 · w3–w4**
> (`Projects/Ultra Release Plan — MVP - AS MC - Checkout.md` §4: *W1–W3 harness · W3–W4 checkout*).
> The tasklist inherited the checkout when it was carved from the plan; **the plan never moved it.**
>
> **Resolution rule:** the governing doc owns the schedule. T016/T017 therefore close either **inside the
> 21–25 Oct bounded window (DOOR A)** or **re-dated into Cycle 3 w3–w4 (DOOR B)** — the Hustler's call,
> recorded at the door, **never left to drift**.
> → `Artifacts/<Period>/Cycle 2/Week 7/2026-10-20-1745-the-door-ultra-mvp-deep-ultra-digital-products.md`

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T016 | Builder | 45m | **Selar Ultra listing** — the Ultra product page (**$50 local · $100 Africa · $150 global**) | Execution |
| T017 | Builder | 60m | **The landing page** — the **Second Me** offer + the **volume-wall** trigger (*your vault outgrew your memory*) | Creative |
| T018 | Builder | 45m | ✅ **DONE (2026-10-18)** — **the 2-minute demo script**: 6 beats (**THE WALL → INSTALL → BRIEF → FIGHT → GATE → PROMISE**), every beat a real command with real output (5,291 files · 11s install · BOSS HP drains on camera · the gate holds). Pillars are never enumerated; the honest table marks LLM Wiki / Insightful Connections / Projection **roadmap** → `Artifacts/<Period>/Cycle 2/Week 7/2026-10-18-1611-ultra-2-minute-demo-script-digital-products.md` | Creative |

**Success Check:**
- [ ] A buyer can **find → understand → pay** — the funnel has a floor

---

## 🏁 Phase 7 — Dogfood + verdict

| ID | Role | Dur | Task | Nature |
|----|------|-----|------|--------|
| T019 | Hustler | 60m | ✅ **DONE (2026-10-19)** — **the dogfood ran**: the daily rhythm end to end in **16s** (brief 1s · memory load 8s · maintenance ritual 2s · boss battle 1s · approvals gate 4s) — no LLM, no prompt, no steering. **The rhythm runs without a human turning the crank.** → `Artifacts/<Period>/Cycle 2/Week 7/2026-10-19-2111-ultra-mvp-dogfood-deep-ultra-digital-products.md` | Execution |
| T020 | Architect | 30m | **Review vs the MVP DoD** — *a buyer installs Ultra, points it at their vault, and their rhythm runs itself* | Review |
| T021 | Builder | 20m | **Capture + memory loop** — artifact; `3lm add-lessons --source artifact` (≤3) + `3lm index` | Execution |
| T022 | Builder | 15m | **Close** — status `completed`; **targeted** commit | Execution |

**Success Check:**
- [ ] The rhythm runs on a **real** week · artifact written · lessons routed · tasklist closed

---

## 📊 Task Distribution

| Role | Task IDs | Count | Est. Hours |
|------|----------|-------|-----------|
| Hustler | T000, T001, T019 | 3 | ~1.3h |
| Builder | T003–T005, T007–T011, T013–T018, T021, T022 | 15 | ~10.3h |
| Architect | T002, T006, T012, T020 | 4 | ~1.8h |
| **Total** | **T000–T022** | **22** | **~13.4h** |

---

## ⚠️ Execution Rules

1. **The harness, not the cockpit.** A UI is a demo surface; the MVP is the loop.
2. **Slice B stays gated** (G1–G3) — build what a *paying user asks for*, not the diagram.
3. **Extract, don’t invent** — if a component already exists, package it.
4. **One job, one owner** — `rituals.sh` stays deterministic; `hermes cron` holds the LLM-in-loop.
5. **Delivery is the deliverable** — a brief that never lands is not shipped.
6. **Never write the Active Mission Context** — daily-tasks is its sole writer.
7. **Declare the budget first** (T001) — an unbounded background build absorbs every free hour.

---

## ✅ Completion Command (when all tasks are [x])

```
for t in Tools/test/*.test.js; do node "$t" || exit 1; done && node Tools/eval-router.js
node Tools/3lm.js learn && node Tools/3lm.js index
node Tools/3lm.js sync "Ultra MVP shipped — the harness (AS MC core · cron · gate · delivery · pillars · install) + the checkout"
```

---

*Generated via AI-Suplex (Orchestrator) on 2026-10-16 — Cycle 2, Week 7 · long-running-tasks lane (instance: `long-running-tasks-1-ultra-mvp`).
*Governed by `Ultra Release Plan — MVP · AS MC · Checkout` (canonical). Supersedes the Gauntlet-first tasklist. TWABAM ⚡*