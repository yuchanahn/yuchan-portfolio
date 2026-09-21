# Nirvana Final-Source Inventory

Use this checklist against the **final local project source**, not the older GitHub `Develop` branch.

## A. Repository / build identity

- [ ] Final project root located
- [ ] Unreal Engine version confirmed
- [ ] Final branch / commit / archive date recorded
- [ ] Project can be opened or source tree is complete enough to inspect
- [ ] No secrets or private endpoints are present in files selected for publication

## B. Ownership verification

For every code excerpt, record:

| File | Function / region | What I implemented | Shared/team foundation | Ownership evidence | Publish? |
| --- | --- | --- | --- | --- | --- |
| TBD | TBD | TBD | TBD | commit/blame/history or team confirmation | TBD |

Do not use a file merely because it exists in the project. The portfolio claim should match the exact region that can be attributed to my work.

## C. Target files from the current public portfolio

These paths are references recorded in the current portfolio and must be reconciled with the actual final source tree.

### 1. Online session

Expected reference:
- `YC/OSS/NrvOss.cpp`

Look for:
- `OnJoinSession`
- session state transition
- resolved connect string
- `ClientTravel`
- create / find / join callbacks

Evidence to capture:
- 15–40 line excerpt
- one sentence on the bug / requirement
- one sentence on why callback ordering matters
- exact final-file path

### 2. Server gameplay state

Expected reference:
- `YC/Core/Server/Server.cpp`

Look for:
- `StageLoaded`
- `FPac_GameLoadingEnded`
- player ready-count logic
- item interaction ownership / drag state
- health / shield updates
- revival / game-over decisions
- typed gameplay packet handlers

Evidence to capture:
- loading barrier excerpt
- server-authoritative item interaction excerpt
- one additional state-decision excerpt if it adds a distinct server concept

### 3. Client state application

Expected reference:
- `YC/Core/Client/Client.cpp`

Look for:
- handlers that apply server decisions to UI / gameplay state
- separation between request and application

Evidence to capture:
- only if it helps demonstrate the authority boundary
- avoid duplicating server logic

### 4. Packet binding / dispatch

Expected location:
- somewhere under `YC/Core`, packet definitions, or macros used by Server / Client

Look for:
- `YC_PACKET`
- `FPac_`
- packet ID registration
- USTRUCT binding
- typed dispatch
- server / client channel separation

Evidence to capture:
- registration mechanism
- dispatch mechanism
- explicit note that the base byte-serialization layer was shared team code if that is still accurate

### 5. NetAnim

Expected reference:
- `YC/NetAnim.cpp`

This is **secondary evidence** for the game-server portfolio.

Only include if:
- it demonstrates time/state synchronization in a way not already covered by the server cases; and
- space remains after the main server examples.

Otherwise leave it out of the main portfolio.

## D. Evidence package acceptance criteria

The Nirvana package is ready to publish when all of the following are true:

- [ ] At least three server-relevant cases have exact final-source evidence
- [ ] Each claim distinguishes my code from shared/team code
- [ ] Every excerpt is small enough to review quickly
- [ ] Every excerpt has an exact public deep link
- [ ] The original team repository does not need to be public
- [ ] Images / diagrams used in the portfolio are confirmed safe to publish
- [ ] No private team asset or unrelated teammate source is copied
- [ ] README describes team size, my scope, and architecture without overstating ownership
- [ ] A reviewer can understand the project without opening the original private repository

## E. Recommended public mirror shape

```text
nirvana-networking/
├─ README.md
├─ docs/
│  ├─ gameplay.png
│  ├─ packet-flow.svg
│  ├─ loading-flow.svg
│  └─ session-flow.svg
└─ src/
   ├─ packet-dispatch/
   ├─ server-authority/
   ├─ loading-barrier/
   └─ online-session/
```

Each `src` folder should contain only the minimum approved code excerpt or self-contained file needed to support the associated case.
