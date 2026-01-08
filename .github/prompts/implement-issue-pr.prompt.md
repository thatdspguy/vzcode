---
name: implement-issue-pr
description: "Implement a GitHub issue end-to-end (code/docs/tests) and open a PR. Provide the issue number when running."
argument-hint: "issueNumber=<number> [optional: repo=OWNER/REPO]"
agent: "agent"
---

## Objective

You will take a GitHub issue number, implement everything needed to fully resolve it (code, docs, tests, configuration), and open a pull request that links back to the issue.

## Inputs

- Issue number: **${input:issueNumber:Enter the GitHub issue number (e.g., 123)}**
- Optional repo override (only if needed): **${input:repo:Optional repo in OWNER/REPO form (leave blank to use the current workspace repo)}**

## Required workflow (follow in order)

### 1) Establish repository context
1. Determine the repository associated with the current workspace (preferred).
2. If the workspace is not a Git repo or the repo cannot be determined, use `repo` input (OWNER/REPO).
3. Confirm you can authenticate to GitHub for read/write operations (only as needed for PR creation).

### 2) Read and restate the issue
1. Fetch the issue details (title, body, comments, labels, linked PRs).
2. Extract and restate:
   - Problem statement
   - Acceptance criteria / definition of done
   - Constraints (platforms, versions, backward compatibility, style requirements)
   - Any reproduction steps

If key information is missing, ask *targeted* questions in chat before coding.

### 3) Plan the implementation
Produce a short plan containing:
- Files/modules likely impacted
- Proposed approach and alternatives (brief)
- Test strategy (unit/integration/e2e)
- Docs/CHANGELOG needs (if applicable)

Then proceed immediately to implementation.

### 4) Implement the change
1. Create a new branch:
   - `issue-${issueNumber}-<short-slug>`
2. Make the minimal, correct changes to satisfy acceptance criteria.
3. Update documentation where appropriate (README, user docs, inline docs).
4. Add/modify tests to cover:
   - The fix/feature behavior
   - Edge cases and regressions

### 5) Validate locally
1. Run the repo’s standard validation:
   - formatter/linter
   - unit tests
   - build/package steps
2. If the repo has no documented commands, infer the most likely ones (based on language/tooling) and run them.
3. Fix failures. Do not bypass checks unless the issue explicitly authorizes it.

### 6) Commit with high signal
1. Make logical commits (1–3 commits preferred).
2. Commit messages must:
   - Reference the issue number (e.g., `Fix #${issueNumber}` or `Refs #${issueNumber}` as appropriate)
   - Explain *why* and *what* succinctly

### 7) Open a pull request
1. Push the branch to the remote.
2. Create a PR that:
   - Links to the issue (GitHub will auto-link if referenced properly)
   - Includes a clear description:
     - Summary of changes
     - How to test
     - Screenshots/GIFs if UI changes
     - Risks and mitigations
   - Uses a meaningful title: `Issue #${issueNumber}: <short title>`

### 8) Final report back in chat
Return:
- PR link
- Short changelog-style summary
- Test commands run + results
- Any follow-ups / known limitations (if unavoidable)

## Guardrails
- Do not commit secrets.
- Do not make unrelated refactors.
- Prefer smallest safe change that meets acceptance criteria.
- If you must choose between multiple interpretations, pick the one most consistent with the existing codebase and issue text, and document the choice in the PR description.

## References (optional)
- If present, follow repository custom instructions: `.github/copilot-instructions.md`
- If present, follow additional prompt/instruction links referenced by this workspace prompt file.
