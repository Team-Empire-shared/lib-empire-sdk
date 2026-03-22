# CLAUDE.md — Team Empire SDK

## Project Identity
TypeScript SDK wrapping all Team Empire product APIs.
Used by all frontend apps (web, dashboard, mobile) to call backend APIs.

## Stack
TypeScript, npm package, published to GitHub Packages as @team-empire/sdk

## Architecture Rules
- Pure TypeScript — no React, no Node-specific code
- All API calls return typed responses
- Auth: Bearer token management (get/set/refresh)
- Error handling: structured error types
- Rate limit: respect 429 + Retry-After header

## Testing
```bash
npm test
npm run lint
npm run build
```

## Publishing
```bash
npm version patch
npm publish
```
