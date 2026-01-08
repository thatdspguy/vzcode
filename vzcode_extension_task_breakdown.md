
# VZCode VS Code Extension — Development Task Breakdown

This document formalizes the design and implementation plan for **VZCode**, a VS Code extension for real-time data visualization using dashboards composed of interactive widgets (line plots, scatter plots, tables).

The purpose of this document is to serve as a **GitHub issue factory**: each task below can be copied directly into a GitHub issue.  
Each task includes:
- **Objective**
- **Scope / Requirements**
- **Deliverables**
- **Acceptance Criteria**
- **Notes / References**

---

## EPIC 0 — Project Foundation & Governance

### Task 0.1 — Create Repository & Base Tooling
**Objective:** Initialize the VZCode repository with consistent tooling and conventions.

**Scope / Requirements:**
- GitHub repository for `vzcode` is https://github.com/thatdspguy/vzcode.git
- Initialize a copyright by Keaton Scheible license
- Configure TypeScript, ESLint, Prettier
- Add basic README and CHANGELOG

**Deliverables:**
- GitHub repo created
- `package.json`, `tsconfig.json`, lint config
- CI placeholder (GitHub Actions stub)

**Acceptance Criteria:**
- Repo clones and builds without errors
- Lint passes on empty extension

---

## EPIC 1 — VS Code Extension Core

### Task 1.1 — Extension Activation & Lifecycle
**Objective:** Establish the extension entry point and lifecycle.

**Scope / Requirements:**
- Implement `activate()` and `deactivate()`
- Register base commands namespace (`vzcode.*`)
- Set up logging utility

**Deliverables:**
- `src/extension.ts`
- Basic logging helper

**Acceptance Criteria:**
- Extension activates without error
- Commands appear in Command Palette

---

### Task 1.2 — VZCode View Container Contribution
**Objective:** Create the VZCode View Container.

**Scope / Requirements:**
- Contribute `vzcode` view container via `package.json`
- Default placement: Activity Bar

**Deliverables:**
- `package.json` contribution entries

**Acceptance Criteria:**
- VZCode icon appears in Activity Bar
- Container can be moved to Panel

---

## EPIC 2 — Dashboard Webview (v1: Single Dashboard)

### Task 2.1 — Dashboard WebviewView Provider
**Objective:** Implement the Dashboard as a `WebviewView`.

**Scope / Requirements:**
- Create `WebviewViewProvider`
- Secure CSP and local resource roots
- Webview message bridge

**Deliverables:**
- `dashboards/viewProvider.ts`
- Secure HTML template

**Acceptance Criteria:**
- Dashboard view opens
- Webview loads static UI successfully

---

### Task 2.2 — Webview UI Framework Setup
**Objective:** Scaffold the webview frontend.

**Scope / Requirements:**
- React + Vite (or equivalent)
- VS Code API bridge
- Hot-reload for development

**Deliverables:**
- `webview-ui/` project
- Build outputs to `media/`

**Acceptance Criteria:**
- UI builds and renders in VS Code webview

---

### Task 2.3 — Grid Layout Engine
**Objective:** Support tiled widget layouts inside dashboard.

**Scope / Requirements:**
- Grid-based layout (x,y,w,h)
- Drag + resize interactions
- Layout state serialization

**Deliverables:**
- `Grid.tsx`
- Layout state model

**Acceptance Criteria:**
- Widgets can be rearranged visually
- Layout updates propagate to extension

---

## EPIC 3 — Widget System

### Task 3.1 — Widget Host Abstraction
**Objective:** Create a common widget host interface.

**Scope / Requirements:**
- Widget lifecycle (init, update, dispose)
- Subscription handling
- Configuration binding

**Deliverables:**
- `WidgetHost.tsx`
- Widget interface definitions

**Acceptance Criteria:**
- New widget types can be added with minimal boilerplate

---

### Task 3.2 — Line Plot Widget
**Objective:** Implement interactive line plot widget.

**Scope / Requirements:**
- Multi-series support
- Zoom, pan, hover tooltips
- Time windowing

**Deliverables:**
- `LineWidget.tsx`

**Acceptance Criteria:**
- Sustains ~500 points/sec smoothly
- Series toggling works

---

### Task 3.3 — Scatter Plot Widget
**Objective:** Implement scatter plot widget.

**Scope / Requirements:**
- x/y mapping
- Multiple series support
- Pan/zoom

**Deliverables:**
- `ScatterWidget.tsx`

**Acceptance Criteria:**
- Scatter renders correctly from vector streams

---

### Task 3.4 — Table Widget
**Objective:** Implement virtualized table widget.

**Scope / Requirements:**
- Append-only rows
- Column configuration
- Virtual scrolling

**Deliverables:**
- `TableWidget.tsx`

**Acceptance Criteria:**
- Handles >10k rows without UI degradation

---

## EPIC 4 — Stream & Data Model

### Task 4.1 — Stream Registry
**Objective:** Central registry for all data streams.

**Scope / Requirements:**
- Schema tracking
- Unit metadata
- Retention configuration

**Deliverables:**
- `streamRegistry.ts`

**Acceptance Criteria:**
- Streams can be declared dynamically or via config

---

### Task 4.2 — Ring Buffer Implementation
**Objective:** Lossless ingestion buffer with retention.

**Scope / Requirements:**
- Time-based retention
- Sample cap
- Thread-safe access

**Deliverables:**
- `ringBuffer.ts`

**Acceptance Criteria:**
- Old samples evicted correctly
- No unbounded memory growth

---

### Task 4.3 — Stream Router & Batching
**Objective:** Efficiently deliver data to widgets.

**Scope / Requirements:**
- Batched delivery (30–60Hz)
- Backpressure awareness
- Widget subscription routing

**Deliverables:**
- `router.ts`

**Acceptance Criteria:**
- UI remains responsive under sustained load

---

## EPIC 5 — Ingestion Server (WebSocket v1)

### Task 5.1 — WebSocket Server Lifecycle
**Objective:** Always-on local ingestion server.

**Scope / Requirements:**
- Bind localhost by default
- Auto-port selection
- Graceful shutdown

**Deliverables:**
- `transport/wsServer.ts`

**Acceptance Criteria:**
- Server starts on workspace open
- Port discoverable via command

---

### Task 5.2 — Authentication & Session Management
**Objective:** Secure ingestion endpoint.

**Scope / Requirements:**
- Token-based auth
- Secret storage integration
- Session tracking

**Deliverables:**
- `auth.ts`

**Acceptance Criteria:**
- Unauthorized clients rejected

---

### Task 5.3 — Protocol v1 Implementation
**Objective:** Implement `hello`, `declare`, `pub` messages.

**Scope / Requirements:**
- JSON message validation
- Error handling
- Stream declaration compatibility checks

**Deliverables:**
- `protocol.ts`
- Message validators

**Acceptance Criteria:**
- Python/Node clients can publish data reliably

---

## EPIC 6 — Configuration & Persistence

### Task 6.1 — vzcode.json Loader & Validator
**Objective:** Parse and validate workspace config.

**Scope / Requirements:**
- JSON Schema validation (AJV)
- Hot reload on file change

**Deliverables:**
- `vzcodeConfig.ts`
- Schema binding

**Acceptance Criteria:**
- Invalid configs produce actionable errors

---

### Task 6.2 — Layout Export / Import Commands
**Objective:** Support Git-shareable layouts.

**Scope / Requirements:**
- Export current dashboard to vzcode.json
- Apply layout from file

**Deliverables:**
- Command implementations

**Acceptance Criteria:**
- Layout round-trips cleanly

---

## EPIC 7 — v2 Enablement (Deferred but Planned)

### Task 7.1 — Dashboard Webview Panels
**Objective:** Support multiple dashboards simultaneously.

**Scope / Requirements:**
- Open dashboard as editor tab
- Multiple active instances

**Deliverables:**
- `panelProvider.ts`
- `openDashboardInEditor` command

**Acceptance Criteria:**
- Two dashboards visible side-by-side

---

## EPIC 8 — Developer Experience & Adapters

### Task 8.1 — Python Adapter
**Objective:** Reference Python ingestion client.

**Scope / Requirements:**
- WebSocket client
- Examples for scalar, vector, table

**Deliverables:**
- `adapters/python/vzcode_client.py`

**Acceptance Criteria:**
- Python script streams data into dashboard

---

### Task 8.2 — Node.js Adapter
**Objective:** Reference Node ingestion client.

**Scope / Requirements:**
- Typed API
- Example scripts

**Deliverables:**
- `adapters/node/`

**Acceptance Criteria:**
- Node script publishes real-time data

---

## EPIC 9 — Observability & Hardening

### Task 9.1 — Stream Inspector View
**Objective:** Visualize active streams and health.

**Scope / Requirements:**
- Show rate, buffer depth, drops
- Read-only view

**Deliverables:**
- Inspector UI + backend

**Acceptance Criteria:**
- Developers can diagnose performance issues

---

### Task 9.2 — Performance Stress Tests
**Objective:** Validate stability under load.

**Scope / Requirements:**
- Sustained publish at 500+ pts/sec
- Long-running soak tests

**Deliverables:**
- Test scripts
- Performance notes

**Acceptance Criteria:**
- No crashes, leaks, or UI freezes

---

## END

This document is intended to evolve alongside VZCode.
Each task should map 1:1 to a GitHub issue, with EPICs represented as GitHub Milestones or Projects.
