// ── Auth ────────────────────────────────────────────────────────────────
export interface UserMeRead { id: number; email: string; role: string; org_id: number; name: string; }
export interface LoginRequest { username: string; password: string; }
export interface LoginResponse { access_token: string; token_type: string; }

// ── API Keys ────────────────────────────────────────────────────────────
export interface ApiKeyCreate { name: string; scopes?: string; expires_in_days?: number | null; }
export interface ApiKeyCreateResponse { id: number; name: string; key: string; key_prefix: string; scopes: string; expires_at: string | null; created_at: string; }
export interface ApiKeyListResponse { count: number; items: ApiKeyRead[]; }
export interface ApiKeyRead { id: number; name: string; key_prefix: string; scopes: string; is_active: boolean; expires_at: string | null; last_used_at: string | null; created_at: string; }

// ── Contacts ────────────────────────────────────────────────────────────
export interface ContactCreate { name: string; email?: string | null; phone?: string | null; company?: string | null; source?: string | null; tags?: string[]; }
export interface ContactRead { id: number; organization_id: number; name: string; email: string | null; phone: string | null; company: string | null; source: string | null; status: string; tags: string[]; created_at: string; updated_at: string | null; }
export interface ContactUpdate { name?: string | null; email?: string | null; phone?: string | null; company?: string | null; status?: string | null; }
export interface ContactListResponse { count: number; items: ContactRead[]; }

// ── Leads ───────────────────────────────────────────────────────────────
export interface LeadRead { id: number; contact_id: number; lead_type: string; status: string; score: number | null; source: string | null; owner_company_id: number | null; assigned_to: number | null; created_at: string; }

// ── Deals ───────────────────────────────────────────────────────────────
export interface DealCreate { title: string; value?: number | null; stage?: string; contact_id?: number | null; }
export interface DealRead { id: number; organization_id: number; title: string; value: number | null; stage: string; contact_id: number | null; owner_user_id: number | null; created_at: string; closed_at: string | null; }
export interface DealUpdate { title?: string | null; value?: number | null; stage?: string | null; }

// ── Notes ───────────────────────────────────────────────────────────────
export interface NoteCreate { content: string; entity_type?: string; entity_id?: number; }
export interface NoteRead { id: number; organization_id: number; content: string; entity_type: string | null; entity_id: number | null; author_user_id: number; created_at: string; }

// ── Events ──────────────────────────────────────────────────────────────
export interface EventCreate { title: string; starts_at: string; ends_at?: string | null; description?: string | null; }
export interface EventRead { id: number; organization_id: number; title: string; starts_at: string; ends_at: string | null; description: string | null; created_by: number; created_at: string; }

// ── Projects ────────────────────────────────────────────────────────────
export interface ProjectCreate { name: string; description?: string | null; }
export interface ProjectRead { id: number; organization_id: number; name: string; description: string | null; status: string; created_at: string; }

// ── Tasks ───────────────────────────────────────────────────────────────
export interface TaskCreate { title: string; description?: string | null; priority?: number; category?: "personal" | "business" | "health" | "finance" | "other"; project_id?: number | null; due_date?: string | null; }
export interface TaskRead { id: number; title: string; description: string | null; priority: number; category: string; project_id: number | null; due_date: string | null; is_done: boolean; created_at: string; completed_at: string | null; }
export interface TaskUpdate { is_done?: boolean | null; title?: string | null; description?: string | null; priority?: number | null; }

// ── Approvals ───────────────────────────────────────────────────────────
export interface ApprovalDecision { note?: string | null; }
export interface ApprovalRead { id: number; organization_id: number; requested_by: number; approval_type: string; payload_json: Record<string, unknown>; status: string; approved_by: number | null; approved_at: string | null; created_at: string; }

// ── Organizations ───────────────────────────────────────────────────────
export interface OrganizationCreate { name: string; slug: string; }
export interface OrganizationRead { id: number; name: string; slug: string; country_code: string | null; created_at: string; updated_at: string; }

// ── Integrations ────────────────────────────────────────────────────────
export interface IntegrationRead { id: number; organization_id: number; type: string; status: string; last_sync_at: string | null; sync_error_count: number; created_at: string; }

// ── Notifications ───────────────────────────────────────────────────────
export interface NotificationRead { id: number; organization_id: number; user_id: number; title: string; body: string | null; channel: string; is_read: boolean; created_at: string; }

// ── Webhooks ────────────────────────────────────────────────────────────
export interface WebhookEndpointCreate { url: string; description?: string | null; event_types?: string[]; }
export interface WebhookEndpointCreateResponse { id: number; url: string; signing_secret: string; created_at: string; }
export interface WebhookEndpointRead { id: number; url: string; description: string | null; event_types: string[]; is_active: boolean; created_at: string; }
export interface WebhookDeliveryRead { id: number; event: string; status: string; response_status_code: number | null; duration_ms: number | null; attempt_count: number; created_at: string; }
export interface WebhookDeliveryListResponse { count: number; items: WebhookDeliveryRead[]; }
export type WebhookEndpointListResponse = WebhookEndpointRead[];

// ── Automations ─────────────────────────────────────────────────────────
export interface TriggerCreate { name: string; description?: string | null; source_event: string; action_type: string; requires_approval?: boolean; }
export interface TriggerRead { id: number; organization_id: number; name: string; source_event: string; action_type: string; is_active: boolean; fire_count: number; created_at: string; }

// ── AI Agents ───────────────────────────────────────────────────────────
export interface AgentChatRequest { message: string; session_id?: string | null; context?: Record<string, unknown>; }
export interface AgentChatResponse { reply: string; session_id: string; }
export interface MultiTurnResponse { reply: string; session_id: string; turn: number; }

// ── EGPN ────────────────────────────────────────────────────────────────
export interface EGPNPartnerRegistration { company_name: string; contact_name: string; email: string; phone: string; country_code: string; website?: string; specializations?: string[]; }
export interface EGPNPartnerRead { id: number; partner_code: string | null; status: string; company_name: string; contact_name: string; email: string; country_code: string; created_at: string; }

// ── Campaigns ───────────────────────────────────────────────────────────
export interface CampaignVariantCreate { variant_name: string; subject_line: string; body_template: string; }
export interface CampaignVariantRead { id: number; campaign_id: number; variant_name: string; subject_line: string; body_template: string; send_count: number; open_count: number; click_count: number; created_at: string; }
export interface CampaignVariantStats { variant_name: string; send_count: number; open_count: number; click_count: number; open_rate: number; click_rate: number; }
export interface CampaignABTestResult { variant_a: CampaignVariantStats; variant_b: CampaignVariantStats; winner: string; confidence: number; recommendation: string; }

// ── Health ──────────────────────────────────────────────────────────────
export interface HealthCheckResponse { status: string; detail?: string; }

// ── Pagination ──────────────────────────────────────────────────────────
export interface PaginatedResponse<T> { count: number; items: T[]; }
