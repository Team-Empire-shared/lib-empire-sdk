# Team Empire SDK

TypeScript SDK wrapping all Team Empire product APIs.

## Install
```bash
npm install @empireoe/sdk
```

## Usage
```typescript
import { createClient } from "@empireoe/sdk"

const client = createClient({
  baseUrl: "https://api.empireoe.com",
  token: "your-jwt-token",
})

// Contacts
const contacts = await client.contacts.list()

// Deals
const deals = await client.deals.list({ stage: "proposal" })

// Tasks
const task = await client.tasks.create({ title: "Follow up" })
```

## APIs Covered
- Contacts / CRM
- Deals / Pipeline
- Tasks / Projects
- Email
- Approvals
- Integrations
- Search

## Development
```bash
npm install
npm run build
npm test
```

