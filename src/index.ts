export { EmpireOClient } from "./client";
export type { ClientOptions, RequestEvent } from "./client";
export type {
  // Auth
  UserMeRead, LoginRequest, LoginResponse,
  // API Keys
  ApiKeyCreate, ApiKeyCreateResponse, ApiKeyListResponse, ApiKeyRead,
  // Contacts
  ContactCreate, ContactRead, ContactUpdate, ContactListResponse,
  // Leads
  LeadRead,
  // Deals
  DealCreate, DealRead, DealUpdate,
  // Notes
  NoteCreate, NoteRead,
  // Events
  EventCreate, EventRead,
  // Projects
  ProjectCreate, ProjectRead,
  // Tasks
  TaskCreate, TaskRead, TaskUpdate,
  // Approvals
  ApprovalDecision, ApprovalRead,
  // Organizations
  OrganizationCreate, OrganizationRead,
  // Integrations
  IntegrationRead,
  // Notifications
  NotificationRead,
  // Webhooks
  WebhookDeliveryListResponse, WebhookDeliveryRead,
  WebhookEndpointCreate, WebhookEndpointCreateResponse,
  WebhookEndpointListResponse, WebhookEndpointRead,
  // Automations
  TriggerCreate, TriggerRead,
  // AI Agents
  AgentChatRequest, AgentChatResponse, MultiTurnResponse,
  // EGPN
  EGPNPartnerRegistration, EGPNPartnerRead,
  // Campaigns
  CampaignVariantCreate, CampaignVariantRead, CampaignVariantStats, CampaignABTestResult,
  // Health
  HealthCheckResponse,
  // Pagination
  PaginatedResponse,
} from "./types";
export { APIError, RateLimitError, QuotaExceededError, SDKError } from "./errors";
