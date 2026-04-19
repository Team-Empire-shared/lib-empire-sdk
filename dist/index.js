export * from "./client";
export * from "./errors";
export * from "./types";
export * from "./services";
// Convenience factory — creates both the raw client and the grouped SDK in one call
import { NidinBOSClient } from "./client";
import { createSDK } from "./services";
export { createSDK };
/**
 * createClient — preferred entry point for all frontends.
 *
 * Returns an EmpireSDK with grouped service namespaces AND
 * a `_client` escape hatch for raw endpoint access.
 *
 * @example
 * ```ts
 * import { createClient } from "@empireoe/sdk";
 *
 * const sdk = createClient({
 *   baseUrl: process.env.NEXT_PUBLIC_BOS_URL!,
 *   apiKey:  process.env.NEXT_PUBLIC_BOS_API_KEY!,
 * });
 *
 * // Grouped service calls
 * const contacts = await sdk.contacts.list({ limit: 25 });
 * const courses  = await sdk.learning.courses.list({ published_only: true });
 * const pipeline = await sdk.recruitment.pipeline();
 *
 * // Escape hatch for raw methods
 * const raw = await sdk._client.getApiV1DashboardExecutive();
 * ```
 */
export function createClient(options) {
    const client = new NidinBOSClient(options);
    return createSDK(client);
}
