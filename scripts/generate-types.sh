#!/bin/bash
# Generate TypeScript types from BOS OpenAPI spec.
#
# Usage:
#   ./scripts/generate-types.sh                         # uses api.empireoe.com
#   ./scripts/generate-types.sh http://localhost:8002    # uses local dev server
#
# This downloads the OpenAPI spec from the running BOS server,
# then generates TypeScript interfaces into src/generated.ts.
#
# Prerequisites:
#   npm install -g openapi-typescript
#   OR: npx openapi-typescript (runs without global install)

set -e

BASE_URL="${1:-https://api.empireoe.com}"
SPEC_URL="${BASE_URL}/openapi.json"
OUTPUT="src/generated.ts"

echo "Fetching OpenAPI spec from ${SPEC_URL}..."
curl -s "$SPEC_URL" -o openapi.json

echo "Generating TypeScript types..."
npx openapi-typescript openapi.json -o "$OUTPUT"

# Clean up
rm -f openapi.json

echo "Done. Types written to ${OUTPUT}"
echo "Run 'npm run build' to verify."
