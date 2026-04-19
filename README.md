# @empireoe/sdk

Typed API client for all Empire Overseas Education frontends (EmpireO.AI, EOE, Empire Digital, LWE, EGPN, After Services).

## Install

```bash
npm install @empireoe/sdk
```

## Usage

```ts
import { createClient } from "@empireoe/sdk";

const sdk = createClient({
  baseUrl: process.env.NEXT_PUBLIC_BOS_URL!,
  apiKey:  process.env.NEXT_PUBLIC_BOS_API_KEY!,
});

// Grouped service namespaces
const contacts  = await sdk.contacts.list({ limit: 25 });
const courses   = await sdk.learning.courses.list({ published_only: true });
const pipeline  = await sdk.recruitment.pipeline();
const partners  = await sdk.egpn.leaderboard();

// Raw endpoint escape hatch
const raw = await sdk._client.getApiV1DashboardExecutive();
```

## Build from source

```bash
cd sdk/typescript
npm install
npm run build
```

## Client behavior

- Retry / backoff for `429`, `502`, `503`, `504`
- `Retry-After` header aware
- Throws `QuotaExceededError` for quota-specific `429` responses
- Optional request observability callback via `onRequestEvent`
