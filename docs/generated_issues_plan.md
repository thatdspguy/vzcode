# VZCode GitHub Issues Plan — Dry Run

**Generated:** January 7, 2026  
**Repository:** https://github.com/thatdspguy/vzcode

---

## Milestones to Create

| Milestone                                         | Description                                        |
| ------------------------------------------------- | -------------------------------------------------- |
| EPIC 0 — Project Foundation & Governance          | Repository setup, tooling, and conventions         |
| EPIC 1 — VS Code Extension Core                   | Extension entry point, lifecycle, view container   |
| EPIC 2 — Dashboard Webview (v1: Single Dashboard) | WebviewView provider, UI framework, grid layout    |
| EPIC 3 — Widget System                            | Widget host abstraction and widget implementations |
| EPIC 4 — Stream & Data Model                      | Stream registry, ring buffers, routing             |
| EPIC 5 — Ingestion Server (WebSocket v1)          | WebSocket server, auth, protocol implementation    |
| EPIC 6 — Configuration & Persistence              | Config loader, layout export/import                |
| EPIC 7 — v2 Enablement                            | Multiple dashboard support                         |
| EPIC 8 — Developer Experience & Adapters          | Python and Node.js adapters                        |
| EPIC 9 — Observability & Hardening                | Stream inspector, stress tests                     |
| EPIC A — Engineering Artifacts                    | Supporting documents and engineering aids          |

---

## Labels to Create

### Epic Labels
| Label          | Color   | Description                  |
| -------------- | ------- | ---------------------------- |
| epic:0         | #1D76DB | EPIC 0 — Project Foundation  |
| epic:1         | #1D76DB | EPIC 1 — Extension Core      |
| epic:2         | #1D76DB | EPIC 2 — Dashboard Webview   |
| epic:3         | #1D76DB | EPIC 3 — Widget System       |
| epic:4         | #1D76DB | EPIC 4 — Stream & Data Model |
| epic:5         | #1D76DB | EPIC 5 — Ingestion Server    |
| epic:6         | #1D76DB | EPIC 6 — Configuration       |
| epic:7         | #1D76DB | EPIC 7 — v2 Enablement       |
| epic:8         | #1D76DB | EPIC 8 — Adapters            |
| epic:9         | #1D76DB | EPIC 9 — Observability       |
| epic:artifacts | #1D76DB | Engineering Artifacts        |

### Type Labels
| Label         | Color   | Description                   |
| ------------- | ------- | ----------------------------- |
| type:feature  | #0E8A16 | New feature or enhancement    |
| type:chore    | #FEF2C0 | Maintenance or infrastructure |
| type:docs     | #C5DEF5 | Documentation                 |
| type:test     | #FBCA04 | Testing                       |
| type:security | #B60205 | Security-related              |

### Area Labels
| Label               | Color   | Description              |
| ------------------- | ------- | ------------------------ |
| area:extension-host | #D4C5F9 | Extension host code      |
| area:webview-ui     | #D4C5F9 | Webview UI code          |
| area:protocol       | #D4C5F9 | Protocol/messaging       |
| area:config         | #D4C5F9 | Configuration            |
| area:adapters       | #D4C5F9 | Language adapters        |
| area:observability  | #D4C5F9 | Observability/monitoring |

### Priority Labels
| Label       | Color   | Description       |
| ----------- | ------- | ----------------- |
| priority:P0 | #B60205 | Critical priority |
| priority:P1 | #FF9F1C | High priority     |
| priority:P2 | #0E8A16 | Normal priority   |

### Status Labels
| Label        | Color   | Description              |
| ------------ | ------- | ------------------------ |
| status:ready | #0E8A16 | Ready for implementation |

---

## Issues to Create

### EPIC 0 — Project Foundation & Governance

| #   | Issue Title                                 | Labels                                       | Summary                                       |
| --- | ------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| 1   | Task 0.1 — Create Repository & Base Tooling | epic:0, type:chore, area:config, priority:P1 | Initialize repo with TS, ESLint, Prettier, CI |

### EPIC 1 — VS Code Extension Core

| #   | Issue Title                                   | Labels                                                 | Summary                                          |
| --- | --------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------ |
| 2   | Task 1.1 — Extension Activation & Lifecycle   | epic:1, type:feature, area:extension-host, priority:P1 | Implement activate/deactivate, commands, logging |
| 3   | Task 1.2 — VZCode View Container Contribution | epic:1, type:feature, area:extension-host, priority:P1 | Create view container in Activity Bar            |

### EPIC 2 — Dashboard Webview (v1: Single Dashboard)

| #   | Issue Title                               | Labels                                             | Summary                                |
| --- | ----------------------------------------- | -------------------------------------------------- | -------------------------------------- |
| 4   | Task 2.1 — Dashboard WebviewView Provider | epic:2, type:feature, area:webview-ui, priority:P1 | Implement WebviewViewProvider with CSP |
| 5   | Task 2.2 — Webview UI Framework Setup     | epic:2, type:feature, area:webview-ui, priority:P1 | Scaffold React+Vite webview frontend   |
| 6   | Task 2.3 — Grid Layout Engine             | epic:2, type:feature, area:webview-ui, priority:P1 | Grid layout with drag/resize           |

### EPIC 3 — Widget System

| #   | Issue Title                        | Labels                                             | Summary                                         |
| --- | ---------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| 7   | Task 3.1 — Widget Host Abstraction | epic:3, type:feature, area:webview-ui, priority:P1 | Widget lifecycle, subscriptions, config binding |
| 8   | Task 3.2 — Line Plot Widget        | epic:3, type:feature, area:webview-ui, priority:P1 | Multi-series line plot with zoom/pan            |
| 9   | Task 3.3 — Scatter Plot Widget     | epic:3, type:feature, area:webview-ui, priority:P1 | Scatter plot with multi-series support          |
| 10  | Task 3.4 — Table Widget            | epic:3, type:feature, area:webview-ui, priority:P1 | Virtualized table widget                        |

### EPIC 4 — Stream & Data Model

| #   | Issue Title                           | Labels                                                 | Summary                                      |
| --- | ------------------------------------- | ------------------------------------------------------ | -------------------------------------------- |
| 11  | Task 4.1 — Stream Registry            | epic:4, type:feature, area:extension-host, priority:P1 | Central stream registry with schema tracking |
| 12  | Task 4.2 — Ring Buffer Implementation | epic:4, type:feature, area:extension-host, priority:P1 | Lossless ingestion buffer with retention     |
| 13  | Task 4.3 — Stream Router & Batching   | epic:4, type:feature, area:extension-host, priority:P1 | Batched delivery with backpressure           |

### EPIC 5 — Ingestion Server (WebSocket v1)

| #   | Issue Title                                    | Labels                                                  | Summary                              |
| --- | ---------------------------------------------- | ------------------------------------------------------- | ------------------------------------ |
| 14  | Task 5.1 — WebSocket Server Lifecycle          | epic:5, type:feature, area:extension-host, priority:P1  | Always-on local WebSocket server     |
| 15  | Task 5.2 — Authentication & Session Management | epic:5, type:security, area:extension-host, priority:P1 | Token auth, secret storage, sessions |
| 16  | Task 5.3 — Protocol v1 Implementation          | epic:5, type:feature, area:protocol, priority:P1        | Implement hello/declare/pub messages |

### EPIC 6 — Configuration & Persistence

| #   | Issue Title                                | Labels                                         | Summary                                |
| --- | ------------------------------------------ | ---------------------------------------------- | -------------------------------------- |
| 17  | Task 6.1 — vzcode.json Loader & Validator  | epic:6, type:feature, area:config, priority:P1 | JSON Schema validation with hot reload |
| 18  | Task 6.2 — Layout Export / Import Commands | epic:6, type:feature, area:config, priority:P1 | Git-shareable layout commands          |

### EPIC 7 — v2 Enablement

| #   | Issue Title                         | Labels                                             | Summary                          |
| --- | ----------------------------------- | -------------------------------------------------- | -------------------------------- |
| 19  | Task 7.1 — Dashboard Webview Panels | epic:7, type:feature, area:webview-ui, priority:P2 | Multiple simultaneous dashboards |

### EPIC 8 — Developer Experience & Adapters

| #   | Issue Title                | Labels                                           | Summary                  |
| --- | -------------------------- | ------------------------------------------------ | ------------------------ |
| 20  | Task 8.1 — Python Adapter  | epic:8, type:feature, area:adapters, priority:P2 | Python ingestion client  |
| 21  | Task 8.2 — Node.js Adapter | epic:8, type:feature, area:adapters, priority:P2 | Node.js ingestion client |

### EPIC 9 — Observability & Hardening

| #   | Issue Title                         | Labels                                                | Summary                     |
| --- | ----------------------------------- | ----------------------------------------------------- | --------------------------- |
| 22  | Task 9.1 — Stream Inspector View    | epic:9, type:feature, area:observability, priority:P2 | Visualize stream health     |
| 23  | Task 9.2 — Performance Stress Tests | epic:9, type:test, area:observability, priority:P2    | Load testing and soak tests |

### EPIC A — Engineering Artifacts

| #   | Issue Title                                         | Labels                                                      | Summary                                    |
| --- | --------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| 24  | Artifact 1.1 — Extension ↔ Webview Message Contract | epic:artifacts, type:docs, area:protocol, priority:P0       | Versioned TypeScript message union         |
| 25  | Artifact 2.1 — Canonical Runtime State Diagram      | epic:artifacts, type:docs, area:extension-host, priority:P0 | State model for dashboards/widgets/streams |
| 26  | Artifact 3.1 — Schema ↔ Type Mapping Table          | epic:artifacts, type:docs, area:config, priority:P1         | Config schema to runtime type mapping      |
| 27  | Artifact 4.1 — Performance Budget Document          | epic:artifacts, type:docs, area:observability, priority:P0  | Data rates, memory caps, latency targets   |
| 28  | Artifact 5.1 — Protocol Golden Files                | epic:artifacts, type:test, area:protocol, priority:P0       | Test vectors for protocol validation       |
| 29  | Artifact 6.1 — CSP & Webview Safety Checklist       | epic:artifacts, type:security, area:webview-ui, priority:P0 | Security checklist for webviews            |
| 30  | Artifact 7.1 — Widget Developer Contract            | epic:artifacts, type:docs, area:webview-ui, priority:P1     | Widget authoring guide                     |
| 31  | Artifact 8.1 — Language Support Matrix              | epic:artifacts, type:docs, area:adapters, priority:P2       | Adapter compatibility matrix               |
| 32  | Artifact 9.1 — Config Versioning Strategy           | epic:artifacts, type:docs, area:config, priority:P2         | Upgrade and migration policy               |
| 33  | Artifact 10.1 — Marketplace Release Checklist       | epic:artifacts, type:docs, area:extension-host, priority:P2 | Release readiness checklist                |

---

## Execution Plan (gh CLI Commands)

### Step 1: Create Milestones

```bash
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 0 — Project Foundation & Governance" -f description="Repository setup, tooling, and conventions" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 1 — VS Code Extension Core" -f description="Extension entry point, lifecycle, view container" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 2 — Dashboard Webview (v1: Single Dashboard)" -f description="WebviewView provider, UI framework, grid layout" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 3 — Widget System" -f description="Widget host abstraction and widget implementations" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 4 — Stream & Data Model" -f description="Stream registry, ring buffers, routing" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 5 — Ingestion Server (WebSocket v1)" -f description="WebSocket server, auth, protocol implementation" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 6 — Configuration & Persistence" -f description="Config loader, layout export/import" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 7 — v2 Enablement" -f description="Multiple dashboard support" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 8 — Developer Experience & Adapters" -f description="Python and Node.js adapters" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC 9 — Observability & Hardening" -f description="Stream inspector, stress tests" -f state="open"
gh api repos/thatdspguy/vzcode/milestones -f title="EPIC A — Engineering Artifacts" -f description="Supporting documents and engineering aids" -f state="open"
```

### Step 2: Create Labels

```bash
# Epic labels
gh label create "epic:0" --color "1D76DB" --description "EPIC 0 — Project Foundation" --force
gh label create "epic:1" --color "1D76DB" --description "EPIC 1 — Extension Core" --force
gh label create "epic:2" --color "1D76DB" --description "EPIC 2 — Dashboard Webview" --force
gh label create "epic:3" --color "1D76DB" --description "EPIC 3 — Widget System" --force
gh label create "epic:4" --color "1D76DB" --description "EPIC 4 — Stream & Data Model" --force
gh label create "epic:5" --color "1D76DB" --description "EPIC 5 — Ingestion Server" --force
gh label create "epic:6" --color "1D76DB" --description "EPIC 6 — Configuration" --force
gh label create "epic:7" --color "1D76DB" --description "EPIC 7 — v2 Enablement" --force
gh label create "epic:8" --color "1D76DB" --description "EPIC 8 — Adapters" --force
gh label create "epic:9" --color "1D76DB" --description "EPIC 9 — Observability" --force
gh label create "epic:artifacts" --color "1D76DB" --description "Engineering Artifacts" --force

# Type labels
gh label create "type:feature" --color "0E8A16" --description "New feature or enhancement" --force
gh label create "type:chore" --color "FEF2C0" --description "Maintenance or infrastructure" --force
gh label create "type:docs" --color "C5DEF5" --description "Documentation" --force
gh label create "type:test" --color "FBCA04" --description "Testing" --force
gh label create "type:security" --color "B60205" --description "Security-related" --force

# Area labels
gh label create "area:extension-host" --color "D4C5F9" --description "Extension host code" --force
gh label create "area:webview-ui" --color "D4C5F9" --description "Webview UI code" --force
gh label create "area:protocol" --color "D4C5F9" --description "Protocol/messaging" --force
gh label create "area:config" --color "D4C5F9" --description "Configuration" --force
gh label create "area:adapters" --color "D4C5F9" --description "Language adapters" --force
gh label create "area:observability" --color "D4C5F9" --description "Observability/monitoring" --force

# Priority labels
gh label create "priority:P0" --color "B60205" --description "Critical priority" --force
gh label create "priority:P1" --color "FF9F1C" --description "High priority" --force
gh label create "priority:P2" --color "0E8A16" --description "Normal priority" --force

# Status labels
gh label create "status:ready" --color "0E8A16" --description "Ready for implementation" --force
```

### Step 3: Create Issues (EPIC 0–9, then Artifacts)

See issue body templates below. Each issue will be created with:
```bash
gh issue create --title "<title>" --body "<body>" --milestone "<milestone>" --label "<labels>"
```

---

## Issue Body Templates

### Task 0.1 — Create Repository & Base Tooling
```markdown
## Objective
Initialize the VZCode repository with consistent tooling and conventions.

## Scope / Requirements
- GitHub repository for `vzcode` is https://github.com/thatdspguy/vzcode.git
- Initialize a copyright by Keaton Scheible license
- Configure TypeScript, ESLint, Prettier
- Add basic README and CHANGELOG

## Deliverables
- GitHub repo created
- `package.json`, `tsconfig.json`, lint config
- CI placeholder (GitHub Actions stub)

## Acceptance Criteria
- Repo clones and builds without errors
- Lint passes on empty extension

## Dependencies
Dependencies: None (foundational task)

## Tracking Checklist
- [ ] Implementation
- [ ] Tests (if applicable)
- [ ] Docs (if applicable)
- [ ] Manual verification notes
```

(Additional issue bodies will be generated programmatically during execution)

---

## Dependency Matrix

| Issue         | Depends On              |
| ------------- | ----------------------- |
| Task 1.1      | Task 0.1                |
| Task 1.2      | Task 1.1                |
| Task 2.1      | Task 1.2                |
| Task 2.2      | Task 2.1                |
| Task 2.3      | Task 2.2, Artifact 1.1  |
| Task 3.1      | Task 2.2                |
| Task 3.2      | Task 3.1, Artifact 7.1  |
| Task 3.3      | Task 3.1                |
| Task 3.4      | Task 3.1                |
| Task 4.1      | Task 1.1                |
| Task 4.2      | Task 4.1, Artifact 4.1  |
| Task 4.3      | Task 4.2, Artifact 2.1  |
| Task 5.1      | Task 4.3, Artifact 4.1  |
| Task 5.2      | Task 5.1                |
| Task 5.3      | Task 5.2, Artifact 5.1  |
| Task 6.1      | Task 1.1, Artifact 3.1  |
| Task 6.2      | Task 6.1                |
| Task 7.1      | EPIC 2, EPIC 3 complete |
| Task 8.1      | Task 5.3                |
| Task 8.2      | Task 5.3                |
| Task 9.1      | Task 4.3                |
| Task 9.2      | Task 5.3, Artifact 4.1  |
| Artifact 1.1  | Task 2.1                |
| Artifact 2.1  | Task 4.1                |
| Artifact 3.1  | Task 1.1                |
| Artifact 4.1  | Task 0.1                |
| Artifact 5.1  | Task 5.1                |
| Artifact 6.1  | Task 2.1                |
| Artifact 7.1  | Task 3.1                |
| Artifact 8.1  | Task 8.1                |
| Artifact 9.1  | Task 6.1                |
| Artifact 10.1 | All EPICs               |

---

**END OF DRY RUN PLAN**
