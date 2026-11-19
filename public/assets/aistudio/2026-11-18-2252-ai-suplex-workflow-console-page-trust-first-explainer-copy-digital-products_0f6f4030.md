---
type: artifact
title: "AI-Suplex Workflow Console page — the trust-first explainer copy"
date: 2026-11-18
time: "2026-11-18T22:52:00"
cycle: 3
week: 5
focus: digital-products
focuses: [digital-products, content-creation]
status: captured
role: Builder
source: "Scratch pad (prompt.md) — copy brief for the Workflow Console page (projects/workflow-console.html): a trust-first product explainer, not a second sales page"
related:
  - "[[2026-11-18-2231-ai-suplex-777-download-page-delivery-receipt-copy-digital-products]]"
  - "[[2026-11-18-2056-ai-suplex-777-project-page-foundation-copy-digital-products]]"
tags: [artifact, builder, scratch-pad, workflow-console, trust-first, explainer, file-writes, permission-table, screenshot-gate, boundaries, digital-products]
key_insights:
  - "The Workflow Console page is a TRUST-FIRST explainer, not a second sales page: show what it is, prove it runs (one real screenshot), state exactly what it writes to the vault (a permission table), and give one honest next action. The conversion metric is ACCESS REQUESTS, not time on page."
  - "The page's trust line is the philosophy: 'It proposes. You click. The vault remembers. You approve what becomes memory.' The 'what it writes' permission table is the most important trust section — every write maps to a human control (you define / you choose / you review / you approve)."
  - "A hard BUILD GATE: do not publish the 'See it working' section without a real screenshot from the running console. The page's credibility depends on showing actual product, not a mockup — if no capture exists, omit the section rather than pretend."
next_actions:
  - "Capture the minimum proof set before publish: desktop screenshot of workspace creation, narrow-viewport screenshot, caption naming the exact action, a test/build record for the stated metrics, and a link back to the 777 project page."
  - "Only claim `suplex://commands` (contract 1.3.0) and `suplex_workspace_create` if they are real, declared operations in the shipped build — otherwise use plainer language."
  - "Wire 'Request access' to /contact.html with a hidden interest=workflow-console field; do NOT link to a nonexistent workflow-console-download.html."
---

# 🖥️ AI-Suplex Workflow Console page — the trust-first explainer copy

**Date:** 2026-11-18 · **Cycle 3, Week 5**
**One line:** make `projects/workflow-console.html` a **trust-first product explainer** — show what the console is, prove it runs, state exactly what it writes to the vault, and give one honest next action.

---

## 📋 Overview

A copy brief for the Workflow Console page. The 777 project page already establishes the core value (portable memory, agent-agnostic execution, human-approved lessons, local-first vault); this page positions the console as the **accessible control surface for that same vault**. It is a trust-first explainer, not a second sales page.

**Journey:** `Understand the console → See it working → Trust what it writes → Request access`

**Metric:** **access requests**, not time on page.

## 🎯 Purpose & Goals

- **Primary Objective:** Clarify the product, show proof, and reduce uncertainty about file access.
- **Success Criteria:** The 9-block structure, one real screenshot, a permission table, and an honest request-access path.
- **Intended Use:** The canonical copy for `projects/workflow-console.html`.

---

## 📦 Artifact Content

### 1 · Hero

```
# AI-Suplex Workflow Console
## Your AI-Suplex vault, with buttons.

Create workspaces, review the day's work, run AI-Suplex commands,
and capture what happened — without editing files or remembering CLI syntax.

Free · Local · Offline-capable

[ See it working ]  [ Request access ]
```

Typewriter: create a workspace in seconds · see today's work at a glance · run commands without the terminal · capture outcomes and lessons · your vault stays local.

**Primary CTA = `See it working`** (→ real screenshot/demo). **Secondary = `Request access`** (→ `/contact.html`). **Do not link to a nonexistent `workflow-console-download.html`.**

### 2 · What it is (three concise cards)

- **Workspaces** — create from a form, not file editing (type, title, mission, outcome, tasks).
- **Today** — active workspaces, tasklists, recent sessions, what needs attention.
- **Commands** — run AI-Suplex commands as guided actions; the console exposes the workflow, you choose what to run.

Technical footnote (only if accurate in the shipped build): *"uses the AI-Suplex command contract (`suplex://commands`, 1.3.0)."*

### 3 · See it working (the proof)

**One real screenshot**, no Figma/mockup/generic dashboard. Show the workspace-creation form → workspace created → resulting view → the confirmation that the vault was updated. Caption: `Workspace created from the form: Quick Task · quick-wins · ref 3.`

**Screenshot requirements:** desktop capture (readable) + narrow/mobile capture · no sensitive client data/API keys/emails · real UI, real data · caption stating exactly what happened.

### 4 · What it writes to your vault (the most important trust section)

```
The Workflow Console operates your local vault. It is not a cloud dashboard,
and it does not replace your agent.
```

| Action | What happens | Your control |
|---|---|---|
| Create a workspace | Creates a workspace brief + optional tasklist | You define mission + tasks |
| Read vault state | Reads workspaces, tasklists, sessions, status | Read-only |
| Run a command | Executes the selected workflow action | You choose + confirm |
| Capture a session | Records outcomes, artifacts, proposed lessons | You review before promotion |
| Promote a lesson | Adds approved knowledge to durable memory | You approve |

Philosophy line: **`It proposes. You click. The vault remembers. You approve what becomes memory.`**

Only claim `suplex_workspace_create` if it's a real declared file-write op in the shipped MCP contract; otherwise use plainer language ("creates a workspace brief and optional tasklist in your local vault").

### 5 · How it fits

```
## One vault. Many ways to work.
- AI-Suplex 777 — the portable vault, memory, workflow, tools
- Your agents — Codex, Claude Code, Hermes do the work
- Workflow Console — the point-and-click face for creating/reviewing/maintaining workspaces
```

The console is **not required** — users can still open the vault in Obsidian or point an agent at `AGENTS.md`.

### 6 · What it is not (boundaries)

- **Not a cloud dashboard** — runs locally, works offline.
- **Not an agent replacement** — operates the vault; agents do the work.
- **Not the Agents Terminal client** — AT is a separate orchestration product for agents + client operations.
- **Not autonomous** — proposes actions; you approve consequential changes.

This distinction matters because the ecosystem will include Workflow Console, Execution Console, Agents Terminal, and Ultra.

### 7 · Current status (honest, verifiable)

```
- Shipped: 18 November 2026
- 140 tests passing
- 7/7 routes returning 200
- Desktop bundle deferred
```

Only include metrics verifiable from build/CI; update from the build artifact, not hard-coded stale claims. Roadmap line: `Next: Desktop bundle and public download.` — no date unless committed.

### 8 · Request access

```
The Workflow Console is available by request while the desktop bundle is prepared.
[ Request access ]
```

Use the existing contact form + hidden field `<input type="hidden" name="interest" value="workflow-console" />`. Short form: name · email · "how do you work with AI agents?" · optional "which agents do you use?". **No company size / budget / detailed use case at this stage.**

### 9 · FAQ

- Need 777? Yes — it's a control surface for a 777 vault.
- Replace my agent? No.
- Cloud? No — local, offline.
- Terminal still work? Yes — alternative interface, not a replacement for the `3lm` CLI.
- Free? Yes.
- Download? Desktop bundle in preparation — request access to be notified.

### 10 · Design direction

Same visual language as the 777 page, but feel like a **product control panel**: one accent color · real UI screenshot framed like an application window · permission table with green checks/red crosses · monospace only for command names/paths/labels · **no terminal-heavy visuals** (this is the non-terminal surface) · no generic SaaS dashboard illustration.

### 11 · Copy principles

Lead with outcome ("Your vault, with buttons.") · local ownership ("local / offline-capable / your vault") · agency freedom ("your agents do the work") · human control ("you approve what becomes memory") · precise about file writes · don't blur with Agents Terminal · don't promise a download that doesn't exist.

### 12 · Build gate

Do **not** publish "See it working" without a real screenshot. **Minimum proof set:**

1. Desktop screenshot of workspace creation.
2. Mobile/narrow-viewport screenshot.
3. Caption naming the exact action.
4. A test/build record supporting the stated route/test metrics.
5. A link back to the 777 project page.

### 13 · Final recommendation

```
# AI-Suplex Workflow Console
## Your AI-Suplex vault, with buttons.
```

Trust line: `It proposes. You click. The vault remembers. You approve what becomes memory.`

**Funnel role:** 777 project page explains the vault → this page makes it accessible → the download page delivers the console. Until the desktop artifact exists, every "run it" action points truthfully to request-access.

---

### External Resources
- [[Digital Products MOC]]
- [[Digital Products Tracker]]
- [[AI-Suplex 7‑7‑7 – Dashboard]]
- `github.com/kmagwenzi/ai-suplex` · `ai-suplex.co.zw`

## 🧠 Learnings & Insights

1. **Trust is a permission table, not a promise.** The console's credibility lives in the "what it writes" section — every write mapped to a human control. "It proposes, you click, you approve" is the whole trust story, stated operationally.
2. **A screenshot gate is a honesty gate.** The page is only allowed to show the product it can actually capture. No mockup, no Figma frame — omit the section rather than pretend. Same deterministic-first principle, applied to marketing.
3. **Boundaries do conversion work too.** The "what it is not" section prevents the console from being confused with Agents Terminal/Ultra, which keeps the funnel clean: this is the accessible free surface, not the orchestration product.

## 🔄 Next Steps

1. Capture the **minimum proof set** (desktop + narrow screenshots, caption, build record, back-link) before publishing "See it working".
2. Confirm `suplex://commands` (1.3.0) / `suplex_workspace_create` against the shipped build — or drop to plainer language.
3. Wire "Request access" → `/contact.html` with hidden `interest=workflow-console`; no nonexistent download link.

---

*Captured via AI-Suplex (Builder) on 2026-11-18 — Cycle 3, Week 5 · focus: digital-products · source: scratch pad `prompt.md`. The Hustler always decides. TWABAM ⚡*
