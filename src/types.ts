export interface UserMeRead { id: number; email: string; role: string; org_id: number; }
export interface ApiKeyCreate { name: string; scopes?: string; expires_in_days?: number | null; }
export interface ApiKeyCreateResponse { id: number; name: string; key: string; key_prefix: string; scopes: string; expires_at: string | null; created_at: string; }
export interface ApiKeyListResponse { count: number; items: ApiKeyRead[]; }
export interface ApiKeyRead { id: number; name: string; key_prefix: string; scopes: string; is_active: boolean; expires_at: string | null; last_used_at: string | null; created_at: string; }
export interface ApprovalDecision { note?: string | null; }
export interface ApprovalRead { id: number; organization_id: number; requested_by: number; approval_type: string; payload_json: Record<string, unknown>; status: string; approved_by: number | null; approved_at: string | null; created_at: string; }
export interface ApprovalRequestCreate { organization_id: number; approval_type: string; payload_json?: Record<string, unknown>; }
export interface TaskCreate { title: string; description?: string | null; priority?: number; category?: "personal" | "business" | "health" | "finance" | "other"; project_id?: number | null; due_date?: string | null; }
export interface TaskRead { id: number; title: string; description: string | null; priority: number; category: string; project_id: number | null; due_date: string | null; is_done: boolean; created_at: string; completed_at: string | null; }
export interface TaskUpdate { is_done?: boolean | null; title?: string | null; description?: string | null; priority?: number | null; }
export interface TriggerCreate { name: string; description?: string | null; source_event: string; action_type: string; requires_approval?: boolean; }
export interface TriggerRead { id: number; organization_id: number; name: string; source_event: string; action_type: string; is_active: boolean; fire_count: number; created_at: string; }
export interface OrganizationCreate { name: string; slug: string; }
export interface OrganizationRead { id: number; name: string; slug: string; country_code: string | null; created_at: string; updated_at: string; }
export interface AgentChatRequest { message: string; session_id?: string | null; context?: Record<string, unknown>; }
export interface AgentChatResponse { reply: string; session_id: string; }
export interface MultiTurnResponse { reply: string; session_id: string; turn: number; }
export interface WebhookEndpointCreate { url: string; description?: string | null; event_types?: string[]; }
export interface WebhookEndpointCreateResponse { id: number; url: string; signing_secret: string; created_at: string; }
export interface WebhookEndpointRead { id: number; url: string; description: string | null; event_types: string[]; is_active: boolean; created_at: string; }
export interface WebhookDeliveryRead { id: number; event: string; status: string; response_status_code: number | null; duration_ms: number | null; attempt_count: number; created_at: string; }
export interface WebhookDeliveryListResponse { count: number; items: WebhookDeliveryRead[]; }
export type WebhookEndpointListResponse = WebhookEndpointRead[];
