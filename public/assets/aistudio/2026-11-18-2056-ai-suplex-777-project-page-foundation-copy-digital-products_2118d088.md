---
type: artifact
title: "AI-Suplex 777 project page — the free foundation copy"
date: 2026-11-18
time: "2026-11-18T20:56:00"
cycle: 3
week: 5
focus: digital-products
focuses: [digital-products, content-creation]
status: captured
role: Builder
source: "Scratch pad (prompt.md) — copy brief for the 777 project page: position 777 as the free, portable foundation (not a developer-only repo), with the memory loop as the proof"
related:
  - "[[2026-11-15-0851-ai-suplex-product-range-four-wave-release-plan-digital-products]]"
  - "[[2026-11-13-2251-ultra-labs-page-project-briefing-copy-digital-products]]"
tags: [artifact, builder, scratch-pad, 777, project-page, foundation, copy, memory-loop, byo-agent, graph-optional, proof, digital-products]
key_insights:
  - "777's page sells 'memory that survives the chat' — the durable, portable memory an agent keeps across sessions — NOT 'a self-improving framework'. The hero is 'Give your AI agents a memory that survives the chat.', and the one-line positioning is '777 gives your AI agents a portable memory and a workflow that makes every new session start smarter.'"
  - "The strongest proof is 'see it remember': reuse the real `3lm start --context` terminal output (lessons + recent episodes + active tasklists) instead of explaining the memory model abstractly. A product-like proof beats a developer-heavy one."
  - "The knowledge graph is OPTIONAL and secondary in the client-ready 777 page — the core value is workspace continuity, capture, lessons, and maintenance (mirrors the four-wave release plan's Wave-1 'graph optional' change)."
  - "Three recurring pillars: local ownership ('your vault, your files, your control'), agent freedom ('bring your own agent'), and the human gate ('you approve what becomes memory'). Reserve Ultra and Lab for the next step, never the first explanation."
next_actions:
  - "Lock the 777 page hero + one-line positioning; keep the primary CTA 'Start with 777' and a single primary/secondary per section."
  - "Reuse the real terminal proof (`3lm start --context`) as the 'see it remember' section, and frame proof points (wqr.co.zw · 90s walkthrough · ~10–11s installer) around user value."
  - "Confirm the agent 'verified' list (Zed · Claude Code · Codex · Cursor · OpenCode · Hermes · Oh-My-Pi) claims only actually-tested agents; make the graph explicitly optional in onboarding."
---

# 🧱 AI-Suplex 777 project page — the free foundation copy

**Date:** 2026-11-18 · **Cycle 3, Week 5**
**One line:** position 777 as the **free, portable foundation** of the AI-Suplex system — not a developer-only repository — whose job is to explain what 777 does, prove it works, show how to start, and route visitors toward the Workflow Console, Ultra, or AI-Suplex Lab.

---

## 📋 Overview

A copy brief for the 777 project page. The GitHub repo already carries strong proof (fast installer, the `3lm` memory loop, agent compatibility, live product evidence, MIT open-core); the page's job is to **frame that proof around user value** rather than technical achievement, and to position 777 as the foundation the rest of the range builds on.

## 🎯 Purpose & Goals

- **Primary Objective:** Answer four questions — *what is 777, what problem does it solve, how does it work, what should I do next.*
- **Success Criteria:** The 14-section structure, the memory loop made visible as proof, and a single primary CTA.
- **Conversion path:** `Understand 777 → See it remember → Install or request access → Explore Ultra / Lab`.

---

## 📦 Artifact Content

### 1 · Hero

```
# AI-Suplex 777

## Give your AI agents a memory that survives the chat.

777 is a portable, file-first workspace for AI agents. Create a workspace,
run it with Codex, Claude Code, or Hermes, capture what happened, and start
the next session with the context, lessons, and next actions already in place.

[ Get started ]  [ Watch the 90-second walkthrough ]
```

Typewriter rotation:

```
Stop repeating yourself. · Start every session with context. ·
Turn work into reusable lessons. · Use the agent you already trust. ·
Keep your memory local and portable.
```

Trust line: `Open source · Local-first · Works with your existing agents · MIT licensed`

### 2 · The problem

```
## Your agent forgets. Your work should not.

Every chat session starts from zero. You re-explain the project, repeat
decisions, rediscover blockers, and lose the lessons from completed work.
AI-Suplex 777 gives your agents a durable, portable memory — without
locking you into one AI provider.
```

Pain points: repeat the same context every session · decisions/lessons disappear with the chat · agent work is hard to track/review/continue · memory trapped inside one AI tool.

### 3 · What 777 is

```
## A portable workspace for AI agents.

AI-Suplex 777 is a file-first execution framework. It turns your work into
workspaces, captures what happened, extracts lessons, and makes the next
session start smarter. It works alongside the agents you already use.
```

| Layer | What it does |
|---|---|
| **Workspace** | Defines the mission, tasks, context, outcome |
| **Memory** | Captures episodes, lessons, decisions, reusable knowledge |
| **Workflow** | Starts, executes, captures, promotes, maintains work |

Avoid "self-improving framework" in the hero — *"memory that survives the chat"* is clearer and more immediately valuable.

### 4 · How it works

```
Create a workspace → Kickstart it → Capture the outcome → Learn → Return smarter
```
Loop visual: `Start → Execute → Capture → Learn → Promote → Index → Return`

### 5 · See it remember (the strongest proof)

Reuse the real `3lm start --context` output, product-like rather than developer-heavy:

```
$ 3lm start --context
✅ Context fresh.

LESSONS
· Screen a remote role in the order region → language → seniority → stack.
· A background build lane must declare its hour budget before the first commit.
· When a spec says an artifact is generated by a tool, verify the tool writes it.

RECENT EPISODES
· 2026-10-13-0815-ship-the-install-gate (4/5)

ACTIVE TASKLISTS
· 2026-10-16-ship-the-install-gate-tasklist.md
```

> Every lesson listed was learned in an earlier session. **That is the core value of 777.**

### 6 · Core capabilities (outcomes, not internals)

- **Portable workspace vault** — normal folder of Markdown, tasklists, artifacts, local databases; move/backup/sync/open in Obsidian.
- **Agent-agnostic execution** — point any file-capable agent at `AGENTS.md`; 777 provides workflow/memory/guardrails, the agent does the work.
- **Human-approved memory** — captures, proposes lessons, promotes only what you approve.
- **Structured task continuity** — workspaces, tasklists, episodes, next actions.
- **Local-first maintenance** — validate, refresh index, backup, export.
- **Optional knowledge graph** — lightweight exploration of what relates to what. **Optional** in the client-ready release.

### 7 · Who it is for

Solo AI builders · freelancers turning work into repeatable processes · small agencies · technical founders (Codex/Claude Code/Hermes) · AI-native teams needing shared context without cloud lock-in.

### 8 · Agent compatibility

`Bring your own agent.` — Codex · Claude Code · Hermes · Cursor · Zed · OpenCode · Oh-My-Pi · Obsidian. Keep the "verified" claim only for agents actually tested (repo currently lists Zed, Claude Code, Codex, Cursor, OpenCode, Hermes, Oh-My-Pi).

### 9 · What is inside

`AGENTS.md` · Workspaces · Memory · Skills · Prompt Patterns · Tools (3lm, vault index, graph, maintenance) · Guides · Templates.

### 10 · Proof and credibility

`Built in production, not just demonstrated.` — proof ledger:

| Proof | What it demonstrates |
|---|---|
| `wqr.co.zw` | live WhatsApp commerce agent, real orders + Paynow/EcoCash payments |
| 90-second walkthrough | the memory loop in action |
| open-source repository | the actual framework, tools, workflow |
| fast installer (~10–11s) | low-friction setup |
| agent compatibility | works beyond one vendor |

### 11 · Get started (two paths)

```
## Start in under 10 minutes.
### For developers → clone + install.sh
### For non-technical users → request access to the Workflow Console
```

```
git clone https://github.com/kmagwenzi/ai-suplex.git
cd ai-suplex && bash install.sh
cd ai-suplex-vault && node Tools/3lm.js start --context
```

### 12 · 777 vs Ultra

`777 captures the work. Ultra understands it.`

| Capability                          | 777    | Ultra            |
| ----------------------------------- | ------ | ---------------- |
| Create and run workspaces           | Yes    | Yes              |
| Capture sessions and lessons        | Yes    | Yes              |
| Maintain a portable vault           | Yes    | Yes              |
| Cross-workspace opportunity mapping | No     | Yes              |
| Weekly operating review             | No     | Yes              |
| Knowledge Canvas                    | No     | Yes              |
| Scheduled mission control           | Basic  | Full             |
| Skill evolution                     | Manual | Assisted / gated |

### 13 · FAQ

No specific agent required (agent-agnostic) · data in your local vault · does not decide for you (captures, proposes, asks approval) · graph optional · 777 free (MIT) · Ultra = the paid intelligence layer.

### 14 · Final CTA

```
## Stop starting from zero.

Give your AI agents a portable memory, a clear workflow,
and a system that gets smarter with every session.

[ Get started with 777 ]  [ Watch the walkthrough ]  [ Explore AI-Suplex Ultra ]
```

### 15 · Content to remove / reduce

Long 7-7-7 naming/cycles/philosophy · Deep Ultra persona details · full data-model explanations above the fold · graph implementation details before core value · recruiter-oriented messaging · too many CTAs (one primary + one secondary per section).

### 16 · Copy principles

Lead with continuity ("start smarter next session") · make local ownership visible ("your vault, your files, your control") · make agent freedom visible ("bring your own agent") · make the human gate visible ("you approve what becomes memory") · keep the graph optional and secondary · use proof early (terminal output, live product, fast install) · reserve Ultra and Lab for the next step.

### 17 · One-line positioning + CTA

```
AI-Suplex 777 gives your AI agents a portable memory and a workflow
that makes every new session start smarter.
```

Primary CTA: **`Start with 777`**

> The strongest version is not a feature inventory — it is one story: **your agent forgets; 777 remembers; you stay in control; your next session begins with the context that matters.**

---

### External Resources
- [[Digital Products MOC]]
- [[Digital Products Tracker]]
- [[AI-Suplex 7‑7‑7 – Dashboard]]
- `github.com/kmagwenzi/ai-suplex` · `ai-suplex.co.zw`

## 🧠 Learnings & Insights

1. **The headline sells the symptom, not the mechanism.** "Memory that survives the chat" names the pain the buyer already feels; "self-improving framework" names the internal truth. The hero is the former; the latter stays in the docs.
2. **Proof is a verb, not a claim.** The "see it remember" section works because it reuses real `3lm start --context` output — the visitor watches memory happen, rather than being told the model exists.
3. **The graph is optional everywhere it matters.** The same "continuity first, graph later" decision that governs Wave 1 also governs this page — the graph is a later unlock, never the headline.

## 🔄 Next Steps

1. Lock the 777 page hero + one-line positioning; primary CTA `Start with 777`; one primary + one secondary per section.
2. Reuse the real terminal proof as the "see it remember" section; frame the proof ledger (wqr.co.zw · 90s walkthrough · ~10–11s install) around user value.
3. Confirm the agent "verified" list claims only tested agents; make the graph explicitly optional in onboarding.

---

*Captured via AI-Suplex (Builder) on 2026-11-18 — Cycle 3, Week 5 · focus: digital-products · source: scratch pad `prompt.md`. The Hustler always decides. TWABAM ⚡*
