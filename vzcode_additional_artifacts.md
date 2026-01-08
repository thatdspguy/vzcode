
# VZCode — Supporting Artifacts & Engineering Aids

This document enumerates **additional artifacts** that materially reduce risk, rework, and ambiguity when implementing the VZCode extension.  
These artifacts are not optional “nice to haves”; they are **force multipliers** that make each GitHub issue easier to complete correctly and consistently.

Each section explains:
- **What the artifact is**
- **Why it matters**
- **When it should be created**
- **Which EPICs it supports**

---

## 1. Formal Interface Contracts (Strongly Recommended)

### 1.1 Extension ↔ Webview Message Contract
**What**
A versioned TypeScript union defining all messages exchanged between:
- Extension host → Webview
- Webview → Extension host

**Why**
- Prevents silent protocol drift
- Enables refactors without breaking dashboards
- Simplifies debugging (single source of truth)

**When**
Before EPIC 2.3 (Grid Layout Engine)

**Supports**
- EPIC 2 (Dashboard)
- EPIC 3 (Widgets)
- EPIC 4 (Streams)

**Artifact**
`shared/protocol/internalMessages.ts`

Example:
```ts
export type HostToWebview =
  | { type: "renderLayout"; dashboardId: string; layout: Layout }
  | { type: "streamBatch"; streamId: string; samples: Sample[] };

export type WebviewToHost =
  | { type: "uiReady" }
  | { type: "layoutChanged"; dashboardId: string; layout: Layout };
```

---

## 2. VZCode Internal State Model

### 2.1 Canonical Runtime State Diagram
**What**
A diagram (or markdown description) of:
- dashboards
- widgets
- streams
- subscriptions
- buffers

**Why**
- Prevents accidental circular dependencies
- Clarifies ownership (who mutates what)
- Makes async behavior predictable

**When**
Before EPIC 4.3 (Stream Router)

**Supports**
- EPIC 4 (Stream model)
- EPIC 5 (Ingestion server)

**Artifact**
`docs/state_model.md`

---

## 3. JSON Schema + Runtime Type Alignment

### 3.1 Schema ↔ Type Mapping Table
**What**
A table mapping:
- `vzcode.json` schema nodes
- Runtime TypeScript types
- Validation responsibilities

**Why**
- Avoids drift between JSON schema and runtime behavior
- Makes config evolution safer

**When**
Before EPIC 6.1

**Supports**
- EPIC 6 (Configuration)

**Artifact**
`docs/config_mapping.md`

---

## 4. Performance Budget & Backpressure Policy

### 4.1 Performance Budget Document
**What**
A short document stating:
- Expected data rates (ingest, render)
- Memory caps per stream
- Acceptable UI latency
- Drop/decimation rules

**Why**
- Prevents accidental “infinite buffer” bugs
- Makes performance tradeoffs explicit

**When**
Before EPIC 5.1

**Supports**
- EPIC 4 (Ring buffers)
- EPIC 5 (WebSocket server)
- EPIC 9 (Hardening)

**Artifact**
`docs/performance_budget.md`

---

## 5. Ingestion Protocol Test Vectors

### 5.1 Protocol Golden Files
**What**
A set of JSON files containing:
- Valid `hello`, `declare`, `pub`
- Invalid edge cases
- Boundary conditions

**Why**
- Enables deterministic testing
- Prevents breaking adapters when protocol evolves

**When**
Before EPIC 5.3

**Supports**
- EPIC 5 (Protocol)

**Artifact**
`tests/protocol/fixtures/*.json`

---

## 6. Webview Security Checklist

### 6.1 CSP & Webview Safety Checklist
**What**
A checklist covering:
- CSP correctness
- Nonce usage
- Message validation
- Resource URI handling

**Why**
- Webviews are security-sensitive
- VS Code marketplace reviews will check this

**When**
Before publishing any preview build

**Supports**
- EPIC 2 (Dashboard)
- EPIC 7 (Multiple dashboards)

**Artifact**
`docs/webview_security.md`

---

## 7. Widget Authoring Guide (Internal)

### 7.1 Widget Developer Contract
**What**
A guide for adding new widgets:
- Required lifecycle hooks
- Expected performance behavior
- Subscription patterns

**Why**
- Makes widget development predictable
- Enables future contributors

**When**
Before EPIC 3.2

**Supports**
- EPIC 3 (Widgets)
- EPIC 7 (v2 dashboards)

**Artifact**
`docs/widget_authoring.md`

---

## 8. Adapter Compatibility Matrix

### 8.1 Language Support Matrix
**What**
A table documenting:
- Supported adapters (Python, Node)
- Protocol versions
- Feature support

**Why**
- Prevents undocumented breaking changes
- Helps enterprise adoption later

**When**
Before EPIC 8

**Supports**
- EPIC 8 (Adapters)

**Artifact**
`docs/adapter_compatibility.md`

---

## 9. Upgrade & Migration Policy

### 9.1 Config Versioning Strategy
**What**
Defines:
- How `vzcode.json` versions evolve
- How migrations are handled
- Deprecation timelines

**Why**
- Prevents “dead configs”
- Makes future releases safer

**When**
Before first stable release

**Supports**
- EPIC 6 (Config)
- EPIC 7 (v2)

**Artifact**
`docs/versioning_policy.md`

---

## 10. Release Readiness Checklist

### 10.1 Marketplace Release Checklist
**What**
A checklist covering:
- Build reproducibility
- Security review
- Performance validation
- Documentation completeness

**Why**
- Reduces last-minute blockers
- Speeds up iteration cycles

**When**
Before publishing to VS Code Marketplace

**Supports**
- All EPICs

**Artifact**
`docs/release_checklist.md`

---

## Summary

If you create **only three additional artifacts**, make them:

1. **Extension ↔ Webview Message Contract**
2. **Performance Budget**
3. **Webview Security Checklist**

Those three alone will eliminate most future refactors and production issues.

This document intentionally over-specifies early-stage engineering artifacts to ensure VZCode remains maintainable, extensible, and enterprise-ready.

