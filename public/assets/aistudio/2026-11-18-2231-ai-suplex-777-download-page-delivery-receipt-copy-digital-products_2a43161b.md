---
type: artifact
title: "AI-Suplex 777 download page — the delivery receipt copy"
date: 2026-11-18
time: "2026-11-18T22:31:00"
cycle: 3
week: 5
focus: digital-products
focuses: [digital-products, content-creation]
status: captured
role: Builder
source: "Scratch pad (prompt.md) — copy brief for the 777 download page (projects/ai-suplex-777-download.html): a single-column delivery receipt, not a sales page"
related:
  - "[[2026-11-18-2056-ai-suplex-777-project-page-foundation-copy-digital-products]]"
  - "[[2026-11-15-0851-ai-suplex-product-range-four-wave-release-plan-digital-products]]"
tags: [artifact, builder, scratch-pad, 777, download-page, delivery-receipt, install, checksum, node-22, early-access, netlify-form, digital-products]
key_insights:
  - "The download page is a DELIVERY RECEIPT, not a sales page: one visitor journey (download → verify → install → confirm → optionally join early-access), one narrow column, no marketing hero. The success metric is COMPLETED INSTALLS, not time on page — every block reduces friction or increases confidence."
  - "A single ZIP reduces decision friction: show the exact filename, exact size, full SHA-256, link the release asset + notes, state MIT + local/portable. Offer multiple formats only if actually published — and never claim 'verified' unless the checksum has actually been published and tested."
  - "The Node requirement is 22+, not 20+ — because the graph uses node:sqlite. This corrects the earlier 'Node 20' claim; only drop to Node 20 if the graph is deliberately removed from the default install path, and only offer the 'lightweight install' (skip graph) if the installer actually supports it."
next_actions:
  - "Reconcile the graph/Node decision: four-wave plan said 'make the graph optional'; the v2.10.0 repo ships graph-by-default (node:sqlite → Node 22+). Lock ONE of: graph-optional + Node 20, or graph-default + Node 22 — before publishing the download page."
  - "Fill the real release values before publish: exact ZIP filename/size, full SHA-256, release notes URL, and confirm install.sh vs install.ps1 paths match v2.10.0."
  - "Wire the Netlify form (workflow-console-access) and name the promise 'Get Workflow Console access first' — never 'Get updates / Subscribe'."
---

# 🧾 AI-Suplex 777 download page — the delivery receipt copy

**Date:** 2026-11-18 · **Cycle 3, Week 5**
**One line:** make `projects/ai-suplex-777-download.html` a **single-column delivery receipt** — download, verify, install, confirm, optionally join early access — with **no product selling** (the project page already did that).

---

## 📋 Overview

A copy brief for the 777 download page — the last-mile page from interest to a working local vault. The project page has already sold the product; this page must only **deliver it**. One journey, one narrow column, no hero, no pricing, no feature grid.

**Conversion path:** `Click download → save ZIP → verify checksum → install → see proof → optionally join list`

**Primary metric:** **completed installs**, not time on page.

## 🎯 Purpose & Goals

- **Primary Objective:** Reduce friction and increase confidence on the path to a completed install.
- **Success Criteria:** The 7-block structure, one dominant download action, copyable commands + checksum, and a low-friction early-access form.
- **Intended Use:** The canonical copy for `projects/ai-suplex-777-download.html`.

---

## 📦 Artifact Content

### 1 · Structure (7 blocks)

```
1. Delivery header → 2. Download the release → 3. Verify the download
→ 4. Install and start → 5. You now have → 6. Get Workflow Console access → 7. Need help?
```

### 2 · Delivery header

```
# Download AI-Suplex 777
Get the portable workspace vault, install it locally, and start
your first AI-agent session.

v2.10.0 · Free · MIT · 1.2 MB · Updated [release date]
```

Breadcrumb `AI-Suplex 777 → Download` · status badge `✅ Stable release`. **No large hero image, animated background, or sales copy.**

### 3 · Download the release (primary, dominant)

```
[ Download ai-suplex-777-v2.10.0.zip ]
1.2 MB · ZIP · SHA-256 verified

Includes: portable 777 vault · AGENTS.md · 3lm CLI + workflow tools ·
skills/templates/prompt patterns · installers (macOS/Linux/Windows)

[ View release notes ]  [ View source on GitHub ]
```

**Content rules:** exact filename · exact size · direct link to the GitHub release asset · link to v2.10.0 release notes · state MIT · local + portable · **don't claim "verified" unless the checksum was actually published and tested.**

Single ZIP only — don't offer multiple formats in v1 unless actually published. Measured end-to-end install ≈ 10–11 seconds.

### 4 · Verify the download

Collapsible on mobile, visible/copyable on desktop. Full SHA-256 hash (never truncated), a **Copy checksum** button, and platform commands:

```bash
shasum -a 256 ai-suplex-777-v2.10.0.zip            # macOS / Linux
Get-FileHash .\ai-suplex-777-v2.10.0.zip -Algorithm SHA256   # Windows PowerShell
```

Reassurance: *if the checksums do not match, do not install — download again or report.*

### 5 · Install and start

Requires **Node 22+** (see §10 for the correction).

```bash
unzip ai-suplex-777-v2.10.0.zip
cd ai-suplex
bash install.sh ~/AI-Suplex-777        # or: bash install.sh (default folder)
cd ~/AI-Suplex-777
node Tools/3lm.js start --context

$ ✅ Context fresh.
```

Windows: `.\install.ps1` (native PowerShell) — repo documents `install.sh` (Linux/macOS/Windows via Git Bash/WSL) and `install.ps1`. Installer checks Node 22+, copies the vault template, initializes structure, builds index + graph, runs a smoke test.

**Optional lightweight install (only if actually supported):**

```bash
node Tools/initialise-vault.js
node Tools/vault-index.js --current
node Tools/3lm.js start --context
```

### 6 · You now have (3 lines)

```
- AGENTS.md — the shared instructions any file-capable agent can follow
- Tools/3lm — the workflow CLI for starting, capturing, learning, indexing
- Workspaces — a portable place for missions, tasks, context, outcomes

Next: Create your first workspace and run it with Codex, Claude Code, or Hermes.
```

### 7 · Email capture (optional, low-friction — not a paywall)

```
## Get Workflow Console access first
Be first to try the Workflow Console.
```

Netlify form (`workflow-console-access`, `data-netlify="true"`) — email only. Promise narrow + credible; **tie the capture to the next product surface**, avoid "Get updates / Join the community / Subscribe".

### 8 · Need help? (minimal)

Quick-start guide · GitHub repo · GitHub Issues · `kuda@ai-suplex.co.zw`. **No full support section.**

### 9 · Design direction — terminal receipt

Single column (max ~680–760 px) · monospace for commands/filenames/hashes/output · numbered steps · large primary download button · copy buttons on every command/checksum · minimal icons · no carousel/testimonials/pricing/feature grid. Feels like *"a clean, trustworthy installation receipt."*

### 10 · The Node 22+ correction (important)

> The earlier draft said **Node 20+**; the repository currently says **Node 22+** because the graph uses `node:sqlite`. Use **Node 22+** unless you deliberately change the requirement and remove the graph from the default install path.

### 11 · Copy rules

"Download / Verify / Install / Start" (not "Get started" everywhere) · state only measured facts (version, size, checksum, Node req, install time) · link every claim to its source · don't promise "10 seconds" unless current for the ZIP path · don't imply the graph is optional unless the installer/docs support it · don't say "verified by clean-room install" unless documented.

### 12 · Success checklist (before publish)

Download button → exact release asset · filename + size match · full SHA-256 present + copyable · checksum commands correct (macOS/Linux/Windows) · install commands match v2.10.0 · Node requirement matches (22+) · `3lm start --context` output accurate · Netlify form named + configured · project page links here · this page links back to project page + release notes · loads fast + works on mobile.

### 13 · Final recommendation

```
# Download AI-Suplex 777
## Get the vault. Verify it. Start your first session.
```

Operational, no second pitch: `Download → Verify → Install → Confirm → Join early access`.

---

### External Resources
- [[Digital Products MOC]]
- [[Digital Products Tracker]]
- [[AI-Suplex 7‑7‑7 – Dashboard]]
- `github.com/kmagwenzi/ai-suplex` · `ai-suplex.co.zw`

## 🧠 Learnings & Insights

1. **The last mile is a receipt, not a pitch.** By the download page, the visitor has decided; the page's only job is to not lose them. Friction (multiple formats, truncated hashes, unverified claims) is the enemy, so every block either reduces friction or increases confidence.
2. **One ZIP, one path.** A single download + exact filename/size/hash removes the decision that stalls installs. Honesty is structural: only state measured facts, and never claim "verified" or "10 seconds" you can't reproduce.
3. **The Node requirement is a product decision, not a doc typo.** Node 22+ (graph/`node:sqlite`) vs Node 20+ (no graph) is the graph-optional decision leaking into the install page. You can't ship the download page until that's locked.

## 🔄 Next Steps

1. **Lock the graph/Node decision** — graph-optional + Node 20, or graph-default + Node 22. The four-wave plan said "optional"; the repo says "default (22+)". One truth before publish.
2. Fill the real release values (filename, size, full SHA-256, release notes URL) and confirm `install.sh`/`install.ps1` match v2.10.0.
3. Wire the `workflow-console-access` Netlify form; name the promise "Get Workflow Console access first".

---

*Captured via AI-Suplex (Builder) on 2026-11-18 — Cycle 3, Week 5 · focus: digital-products · source: scratch pad `prompt.md`. The Hustler always decides. TWABAM ⚡*
