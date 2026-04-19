// Generated from sdk/openapi/openapi.json by scripts/generate_sdk_models.py

export interface AgentChatRequest {
  message: string;
  force_role?: string | null;
  avatar_mode?: string | null;
  employee_id?: number | null;
  provider?: string | null;
}

export interface AgentChatResponse {
  role: string;
  response: string;
  requires_approval: boolean;
  proposed_actions?: ProposedAction[];
  confidence_score?: number;
  confidence_level?: string;
  confidence_reasons?: string[];
  needs_human_review?: boolean;
  memory_context_chars?: number;
  memory_context_truncated?: boolean;
  memory_sources?: string[];
  memory_source_counts?: Record<string, number>;
  policy_score?: number;
  blocked_by_policy?: boolean;
  policy_reasons?: string[];
  policy_blocked_actions?: string[];
  policy_matched_rule_ids?: number[];
}

export interface AnalyticsGrowthRead {
  page_id: number;
  page_name: string;
  platform: string;
  current: SocialMediaAnalyticsRead | null;
  previous: SocialMediaAnalyticsRead | null;
  followers_delta?: number | null;
  engagement_delta?: number | null;
}

export interface AnalyticsSyncResult {
  pages_synced: number;
  pages_failed: number;
  errors: string[];
}

export interface ApiKeyCreate {
  name: string;
  scopes?: string;
  expires_in_days?: number | null;
}

export interface ApiKeyCreateResponse {
  id: number;
  name: string;
  key: string;
  key_prefix: string;
  scopes: string;
  expires_at: string | null;
  created_at: string;
}

export interface ApiKeyListResponse {
  count: number;
  items: ApiKeyRead[];
}

export interface ApiKeyRead {
  id: number;
  name: string;
  key_prefix: string;
  scopes: string;
  is_active: boolean;
  expires_at: string | null;
  last_used_at: string | null;
  created_at: string;
}

export interface ApprovalDecision {
  note?: string | null;
}

export interface ApprovalPatternRead {
  id: number;
  approval_type: string;
  sample_payload?: Record<string, unknown>;
  approved_count?: number;
  rejected_count?: number;
  reject_count?: number;
  is_auto_approve_enabled?: boolean;
  auto_approve_threshold?: number;
  confidence_score?: number;
}

export interface ApprovalPatternUpdate {
  is_auto_approve_enabled?: boolean | null;
  auto_approve_threshold?: number | null;
}

export interface ApprovalRead {
  id: number;
  organization_id: number;
  requested_by: number;
  approval_type: string;
  payload_json: Record<string, unknown>;
  status: ApprovalStatus;
  approved_by: number | null;
  approved_at: string | null;
  rejected_by?: number | null;
  rejected_at?: string | null;
  auto_approved_at?: string | null;
  confidence_score?: number | null;
  executed_at?: string | null;
  expires_at?: string | null;
  created_at: string;
}

export interface ApprovalRequestCreate {
  organization_id: number;
  approval_type: string;
  payload_json?: Record<string, unknown>;
}

export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface ApprovalTimelineItem {
  id: number;
  approval_type: string;
  status: ApprovalStatus;
  requested_by: number;
  approved_by: number | null;
  rejected_by?: number | null;
  created_at: string;
  approved_at: string | null;
  rejected_at?: string | null;
  is_risky: boolean;
  requires_yes_execute: boolean;
}

export interface ApprovalTimelineResponse {
  pending_count: number;
  approved_count: number;
  rejected_count: number;
  items: ApprovalTimelineItem[];
}

export interface AutomationRuleCreate {
  name: string;
  description?: string | null;
  trigger_topic: string;
  conditions_json?: RuleCondition[];
  action_type: string;
  action_params?: Record<string, unknown>;
  requires_approval?: boolean;
  priority?: number;
  cooldown_seconds?: number;
  linked_workflow_definition_id?: number | null;
}

export interface AutomationRuleExecutionRead {
  id: number;
  organization_id: number;
  rule_id: number;
  trigger_signal_id: string | null;
  trigger_data: Record<string, unknown>;
  action_type: string;
  action_params: Record<string, unknown>;
  status: string;
  result_json: Record<string, unknown>;
  error_text: string | null;
  approval_id: number | null;
  created_at: string;
}

export interface AutomationRuleRead {
  id: number;
  organization_id: number;
  name: string;
  description: string | null;
  trigger_topic: string;
  conditions_json: unknown[];
  action_type: string;
  action_params: Record<string, unknown>;
  is_active: boolean;
  requires_approval: boolean;
  priority: number;
  cooldown_seconds: number;
  fire_count: number;
  last_fired_at: string | null;
  linked_workflow_definition_id: number | null;
  created_by: number | null;
  created_at: string;
  updated_at: string;
}

export interface AutomationRuleUpdate {
  name?: string | null;
  description?: string | null;
  trigger_topic?: string | null;
  conditions_json?: RuleCondition[] | null;
  action_type?: string | null;
  action_params?: Record<string, unknown> | null;
  is_active?: boolean | null;
  requires_approval?: boolean | null;
  priority?: number | null;
  cooldown_seconds?: number | null;
  linked_workflow_definition_id?: number | null;
}

export interface BatchEnrichResponse {
  enriched?: number;
  skipped?: number;
  total?: number;
}

export interface BatchScoreResponse {
  total_scored?: number;
  updated?: number;
}

export interface BulkLeadActionResult {
  requested: number;
  updated: number;
  skipped: number;
  updated_contact_ids: number[];
}

export interface BulkLeadQualifyRequest {
  contact_ids: number[];
  qualified_score?: number | null;
  qualified_status?: "unqualified" | "qualified" | "disqualified" | "needs_review" | null;
  qualification_notes?: string | null;
  routing_status?: "unrouted" | "under_review" | "routed" | "accepted" | "rejected" | "closed" | null;
  lead_type?: string | null;
}

export interface BulkLeadRouteRequest {
  contact_ids: number[];
  lead_type?: string | null;
  routed_company_id?: number | null;
  routing_reason?: string | null;
}

export interface CampaignABTestResult {
  variant_a: CampaignVariantStats;
  variant_b: CampaignVariantStats;
  winner: string;
  confidence: number;
  recommendation: string;
}

export interface CampaignEventCreate {
  event_type: string;
  step_id?: number | null;
  enrollment_id?: number | null;
  contact_id?: number | null;
  variant?: string | null;
}

export interface CampaignRead {
  id: number;
  name: string;
  description?: string | null;
  status: string;
  created_at?: string | null;
}

export interface CampaignStatusUpdate {
  status: string;
}

export interface CampaignVariantCreate {
  variant_name: string;
  subject_line: string;
  body_template: string;
}

export interface CampaignVariantRead {
  id: number;
  organization_id: number;
  campaign_id: number;
  variant_name: string;
  subject_line: string;
  body_template: string;
  send_count?: number;
  open_count?: number;
  click_count?: number;
  reply_count?: number;
  bounce_count?: number;
  conversion_count?: number;
  unsubscribe_count?: number;
  created_at?: string | null;
}

export interface CampaignVariantStats {
  variant_name: string;
  send_count: number;
  open_count: number;
  click_count: number;
  reply_count: number;
  bounce_count: number;
  conversion_count: number;
  unsubscribe_count: number;
  open_rate?: number;
  click_rate?: number;
  reply_rate?: number;
  bounce_rate?: number;
  conversion_rate?: number;
}

export interface CheckRequest {
  notes?: string | null;
}

export interface CockpitCount {
  key: string;
  count: number;
  label?: string | null;
}

export interface ContactCreate {
  name: string;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  role?: string | null;
  relationship?: "personal" | "business" | "family" | "mentor" | "other";
  notes?: string | null;
  pipeline_stage?: "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost";
  lead_score?: number;
  lead_source?: "manual" | "social_media" | "referral" | "website" | "email" | "event" | "other" | null;
  deal_value?: number | null;
  lead_type?: "general" | "study_abroad" | "recruitment";
  source_channel?: string | null;
  campaign_name?: string | null;
  partner_id?: string | null;
  expected_close_date?: string | null;
  tags?: string | null;
  jurisdiction?: string | null;
  data_region?: string | null;
}

export interface ContactInquiryPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  organization_id?: number | null;
}

export interface ContactIntelligenceResponse {
  pipeline: PipelineAnalyticsDetail;
  stale_contacts?: StaleContactItem[];
  follow_up_suggestions?: FollowUpSuggestionItem[];
  stale_count?: number;
  follow_up_count?: number;
}

export interface ContactRead {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  role: string | null;
  relationship: string;
  notes: string | null;
  pipeline_stage: string;
  lead_score: number;
  lead_source: string | null;
  deal_value: number | null;
  lead_owner_company_id: number | null;
  routed_company_id: number | null;
  lead_type: string;
  routing_status: string;
  routing_reason: string | null;
  routing_source: string | null;
  routing_rule_id: number | null;
  routed_at: string | null;
  routed_by_user_id: number | null;
  source_channel: string | null;
  campaign_name: string | null;
  partner_id: string | null;
  qualified_score: number | null;
  qualified_status: string;
  qualification_notes: string | null;
  expected_close_date: string | null;
  last_contacted_at: string | null;
  next_follow_up_at: string | null;
  tags: string | null;
  jurisdiction?: string | null;
  data_region?: string | null;
  empire_person_id?: string | null;
  created_at: string;
  updated_at?: string | null;
}

export interface ContactUpdate {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  role?: string | null;
  relationship?: "personal" | "business" | "family" | "mentor" | "other" | null;
  notes?: string | null;
  pipeline_stage?: "new" | "contacted" | "qualified" | "proposal" | "negotiation" | "won" | "lost" | null;
  lead_score?: number | null;
  lead_source?: "manual" | "social_media" | "referral" | "website" | "email" | "event" | "other" | null;
  deal_value?: number | null;
  lead_type?: "general" | "study_abroad" | "recruitment" | null;
  source_channel?: string | null;
  campaign_name?: string | null;
  partner_id?: string | null;
  qualified_score?: number | null;
  qualified_status?: "unqualified" | "qualified" | "disqualified" | "needs_review" | null;
  qualification_notes?: string | null;
  expected_close_date?: string | null;
  last_contacted_at?: string | null;
  next_follow_up_at?: string | null;
  tags?: string | null;
  jurisdiction?: string | null;
  data_region?: string | null;
  empire_person_id?: string | null;
}

export interface DealCreate {
  contact_id?: number | null;
  title: string;
  stage?: "discovery" | "proposal" | "negotiation" | "contract" | "won" | "lost";
  value?: number;
  currency?: string;
  probability?: number;
  expected_close_date?: string | null;
  description?: string | null;
  source?: string | null;
}

export interface DealPipelineAnalytics {
  stage: string;
  count: number;
  total_value: number;
  avg_value: number;
  avg_probability: number;
}

export interface DealRead {
  id: number;
  organization_id: number;
  contact_id: number | null;
  title: string;
  stage: string;
  value: number;
  currency: string;
  probability: number;
  expected_close_date: string | null;
  description: string | null;
  source: string | null;
  owner_user_id: number | null;
  won_at: string | null;
  lost_at: string | null;
  lost_reason: string | null;
  created_at: string;
  updated_at: string;
}

export interface DealSummary {
  total_deals: number;
  total_value: number;
  won_value: number;
  lost_count: number;
  win_rate: number;
  avg_deal_size: number;
  pipeline: DealPipelineAnalytics[];
}

export interface DealUpdate {
  contact_id?: number | null;
  title?: string | null;
  stage?: "discovery" | "proposal" | "negotiation" | "contract" | "won" | "lost" | null;
  value?: number | null;
  probability?: number | null;
  expected_close_date?: string | null;
  description?: string | null;
  source?: string | null;
  lost_reason?: string | null;
}

export interface DuplicateContactBrief {
  id: number;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  pipeline_stage?: string | null;
  created_at?: string | null;
}

export interface DuplicateGroup {
  match_field: string;
  match_value?: string | null;
  count?: number;
  contacts?: DuplicateContactBrief[];
}

export interface EmpireDigitalCockpitRead {
  total_visible_leads: number;
  new_leads: number;
  unrouted_leads: number;
  routed_leads: number;
  stale_unrouted_leads: number;
  by_lead_type: CockpitCount[];
  by_routed_company: CockpitCount[];
  qualification_breakdown: CockpitCount[];
  top_sources: CockpitCount[];
  unrouted_aging_buckets: CockpitCount[];
  average_routing_hours: number | null;
  pending_intelligence: number;
  stale_warning_triggered?: boolean;
  stale_warning_threshold_count?: number;
  warning_unrouted_threshold_count?: number;
  visibility_scope: "cross_company" | "empire" | "company_scoped";
}

export interface EmpireSlaConfigRead {
  stale_unrouted_days?: number;
  warning_stale_count?: number;
  warning_unrouted_count?: number;
}

export interface EmpireSlaConfigUpdate {
  stale_unrouted_days?: number;
  warning_stale_count?: number;
  warning_unrouted_count?: number;
}

export interface EnrollRequest {
  contact_id: number;
}

export interface EnrollmentRead {
  id: number;
  campaign_id: number;
  contact_id: number;
  current_step: number;
  status: string;
  next_send_at?: string | null;
  enrolled_at?: string | null;
}

export interface EscalateStaleLeadsRequest {
  contact_ids?: number[] | null;
  limit?: number;
}

export interface EscalateStaleLeadsResult {
  considered: number;
  escalated: number;
  decision_card_ids: number[];
}

export interface FeatureFlagValue {
  enabled?: boolean;
  rollout_percentage?: number;
}

export interface FireRulesRequest {
  trigger_topic: string;
  trigger_data?: Record<string, unknown>;
}

export interface FireRulesResponse {
  rules_evaluated: number;
  rules_matched: number;
  actions_taken: Record<string, unknown>[];
}

export interface FollowUpSuggestionItem {
  id: number;
  name?: string | null;
  email?: string | null;
  company?: string | null;
  pipeline_stage?: string | null;
  lead_score?: number | null;
  reason?: string | null;
  days_overdue?: number | null;
  next_follow_up_at?: string | null;
  deal_value?: number | null;
}

export interface FounderFlowReportRead {
  window_days: number;
  points: FounderReportDailyPoint[];
}

export interface FounderReportDailyPoint {
  day: string;
  leads_created: number;
  leads_routed: number;
  stale_unrouted: number;
  intelligence_accepted: number;
  intelligence_rejected: number;
  escalations_created?: number;
}

export interface FunnelStage {
  stage: string;
  count?: number;
  value?: number;
}

export interface GenerateTasksResponse {
  generated: number;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

export interface LeadQualificationUpdate {
  lead_type?: "general" | "study_abroad" | "recruitment" | null;
  qualified_score?: number | null;
  qualified_status?: "unqualified" | "qualified" | "disqualified" | "needs_review" | null;
  qualification_notes?: string | null;
  routing_status?: "unrouted" | "under_review" | "routed" | "accepted" | "rejected" | "closed" | null;
}

export interface LeadRouteRequest {
  lead_type?: "general" | "study_abroad" | "recruitment" | null;
  routed_company_id?: number | null;
  routing_reason?: string | null;
}

export interface LeadRouteResponse {
  contact_id: number;
  lead_owner_company_id: number | null;
  routed_company_id: number | null;
  lead_type: string;
  routing_status: "unrouted" | "under_review" | "routed" | "accepted" | "rejected" | "closed";
  routing_reason: string | null;
  routing_source: string | null;
  routing_rule_id: number | null;
  routed_at: string | null;
  routed_by_user_id: number | null;
}

export interface LeadRoutingRuleCreate {
  lead_type: string;
  target_company_id: number;
  priority?: number;
  routing_reason?: string | null;
}

export interface LeadRoutingRuleRead {
  id: number;
  owner_company_id: number;
  lead_type: string;
  target_company_id: number;
  priority: number;
  routing_reason: string | null;
  is_active: boolean;
  created_by_user_id: number | null;
  updated_by_user_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface LeadRoutingRuleUpdate {
  target_company_id?: number | null;
  priority?: number | null;
  routing_reason?: string | null;
  is_active?: boolean | null;
}

export interface MarketingIntelligenceCreate {
  category?: "market_demand" | "campaign_feedback" | "lead_quality" | "offer_insight" | "country_signal" | "other";
  title: string;
  summary: string;
  confidence?: number | null;
  priority?: "low" | "medium" | "high" | "critical" | null;
  suggested_action?: string | null;
}

export interface MarketingIntelligenceRead {
  id: number;
  owner_company_id: number;
  source_company_id: number;
  category: "market_demand" | "campaign_feedback" | "lead_quality" | "offer_insight" | "country_signal" | "other";
  title: string;
  summary: string;
  confidence: number | null;
  priority: "low" | "medium" | "high" | "critical" | null;
  suggested_action: string | null;
  status: "submitted" | "reviewing" | "accepted" | "rejected" | "applied";
  created_by_user_id: number | null;
  reviewed_by_user_id: number | null;
  created_at: string;
  reviewed_at: string | null;
}

export interface MarketingIntelligenceReview {
  status?: "submitted" | "reviewing" | "accepted" | "rejected" | "applied";
  create_decision_card?: boolean;
  workspace_id?: number | null;
}

export interface MarketingIntelligenceReviewResult {
  item: MarketingIntelligenceRead;
  decision_card_id?: number | null;
}

export interface MergeHistoryItem {
  id: number;
  primary_contact_id: number;
  merged_contact_id: number;
  merged_contact_snapshot?: Record<string, unknown> | null;
  actor_user_id?: number | null;
  undone?: boolean;
  created_at?: string | null;
}

export interface MergeRequest {
  primary_id: number;
  duplicate_ids: number[];
}

export interface MultiTurnResponse {
  steps?: StepResult[];
  final_summary?: string;
  total_steps?: number;
  steps_requiring_approval?: number;
  all_proposed_actions?: ProposedAction[];
  confidence_score?: number;
  confidence_level?: string;
  needs_human_review?: boolean;
}

export interface OrganizationCreate {
  name: string;
  slug: string;
  parent_organization_id?: number | null;
  country_code?: string | null;
  branch_label?: string | null;
  industry_type?: string | null;
}

export interface OrganizationFeatureFlagsRead {
  config_version: number;
  flags: Record<string, FeatureFlagValue>;
}

export interface OrganizationFeatureFlagsUpdate {
  expected_config_version?: number | null;
  flags: Record<string, FeatureFlagValue>;
}

export interface OrganizationMembershipCreate {
  user_id: number;
  role?: "OWNER" | "ADMIN" | "TECH_LEAD" | "OPS_MANAGER" | "DEVELOPER" | "MANAGER" | "STAFF" | "VIEWER";
}

export interface OrganizationMembershipRead {
  id: number;
  organization_id: number;
  user_id: number;
  role: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface OrganizationRead {
  id: number;
  parent_organization_id: number | null;
  name: string;
  slug: string;
  country_code: string | null;
  branch_label: string | null;
  industry_type: string | null;
  config_version: number;
  created_at: string;
  updated_at: string;
}

export interface OrganizationUpdate {
  name?: string | null;
  slug?: string | null;
  parent_organization_id?: number | null;
  country_code?: string | null;
  branch_label?: string | null;
  industry_type?: string | null;
  expected_config_version?: number | null;
}

export interface PipelineAnalyticsDetail {
  total_contacts?: number;
  stages?: PipelineStageDetail[];
}

export interface PipelineAnalyticsResponse {
  funnel?: FunnelStage[];
  total_contacts?: number;
  total_pipeline_value?: number;
  won_value?: number;
  win_rate?: number;
}

export interface PipelineStageDetail {
  stage?: string | null;
  count?: number;
  total_value?: number;
  avg_score?: number;
}

export interface PipelineSummary {
  stage: string;
  count: number;
  total_deal_value: number;
}

export interface ProposedAction {
  action_type: string;
  params?: Record<string, unknown>;
}

export interface RequirementCreate {
  stage: string;
  title: string;
  description?: string | null;
  is_mandatory?: boolean;
  sort_order?: number;
}

export interface RequirementRead {
  id: number;
  stage: string;
  title: string;
  description?: string | null;
  is_mandatory: boolean;
  sort_order: number;
  is_active: boolean;
  created_at?: string | null;
}

export interface RuleCondition {
  field: string;
  operator: string;
  value?: unknown;
}

export interface ScorecardRead {
  window_days: number;
  tiles: ScorecardTile[];
}

export interface ScorecardTile {
  key: string;
  label: string;
  value: number;
  band: string;
  target?: number | null;
}

export interface SocialMediaAnalyticsCreate {
  page_id: number;
  snapshot_date: string;
  followers_count?: number | null;
  following_count?: number | null;
  posts_count?: number | null;
  engagement_rate?: number | null;
  impressions?: number | null;
  reach?: number | null;
  likes_total?: number | null;
  comments_total?: number | null;
  shares_total?: number | null;
  video_views?: number | null;
  subscribers_count?: number | null;
  source?: "manual" | "meta_api" | "youtube_api" | "linkedin_api" | "scraper";
}

export interface SocialMediaAnalyticsRead {
  id: number;
  organization_id: number;
  page_id: number;
  snapshot_date: string;
  followers_count: number | null;
  following_count: number | null;
  posts_count: number | null;
  engagement_rate: number | null;
  impressions: number | null;
  reach: number | null;
  likes_total: number | null;
  comments_total: number | null;
  shares_total: number | null;
  video_views: number | null;
  subscribers_count: number | null;
  source: string;
  fetched_at: string;
}

export interface SocialMediaPageCreate {
  page_name: string;
  platform: "instagram" | "facebook" | "linkedin" | "youtube" | "pinterest" | "x" | "tiktok" | "whatsapp" | "monster" | "other";
  platform_username?: string | null;
  platform_page_id?: string | null;
  purpose?: string | null;
  company_name_used?: string | null;
  company_id?: number | null;
  credentials?: Record<string, unknown> | null;
  linked_to_user_id?: number | null;
  website_url?: string | null;
  whatsapp_number?: string | null;
}

export interface SocialMediaPageRead {
  id: number;
  organization_id: number;
  company_id: number | null;
  page_name: string;
  platform: string;
  platform_username: string | null;
  platform_page_id: string | null;
  purpose: string | null;
  company_name_used: string | null;
  linked_to_user_id: number | null;
  is_active: boolean;
  website_url: string | null;
  whatsapp_number: string | null;
  created_by_user_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface SocialMediaPageSummary {
  total_pages: number;
  active_pages: number;
  inactive_pages: number;
  by_platform: Record<string, number>;
  by_company: Record<string, number>;
}

export interface SocialMediaPageUpdate {
  page_name?: string | null;
  platform?: "instagram" | "facebook" | "linkedin" | "youtube" | "pinterest" | "x" | "tiktok" | "whatsapp" | "monster" | "other" | null;
  platform_username?: string | null;
  platform_page_id?: string | null;
  purpose?: string | null;
  company_name_used?: string | null;
  company_id?: number | null;
  credentials?: Record<string, unknown> | null;
  linked_to_user_id?: number | null;
  is_active?: boolean | null;
  website_url?: string | null;
  whatsapp_number?: string | null;
}

export interface SocialMediaPageWithCredentials {
  id: number;
  organization_id: number;
  company_id: number | null;
  page_name: string;
  platform: string;
  platform_username: string | null;
  platform_page_id: string | null;
  purpose: string | null;
  company_name_used: string | null;
  linked_to_user_id: number | null;
  is_active: boolean;
  website_url: string | null;
  whatsapp_number: string | null;
  created_by_user_id: number | null;
  created_at: string;
  updated_at: string;
  credentials?: Record<string, unknown> | null;
}

export interface StaleContactItem {
  id: number;
  name?: string | null;
  email?: string | null;
  company?: string | null;
  pipeline_stage?: string | null;
  lead_score?: number | null;
  days_inactive?: number | null;
  last_contacted_at?: string | null;
  deal_value?: number | null;
}

export interface StepResult {
  step_number: number;
  description: string;
  role: string;
  response: string;
  requires_approval: boolean;
  proposed_actions?: ProposedAction[];
}

export interface TaskCreate {
  title: string;
  description?: string | null;
  priority?: number;
  category?: "personal" | "business" | "health" | "finance" | "other";
  project_id?: number | null;
  due_date?: string | null;
  depends_on_task_id?: number | null;
  assigned_to_user_id?: number | null;
}

export interface TaskRead {
  id: number;
  title: string;
  description: string | null;
  priority: number;
  category: string;
  project_id: number | null;
  due_date: string | null;
  depends_on_task_id?: number | null;
  assigned_to_user_id?: number | null;
  is_done: boolean;
  created_at: string;
  completed_at: string | null;
}

export interface TaskTemplateCreate {
  title: string;
  description?: string | null;
  priority?: number;
  category?: string;
  project_id?: number | null;
  recurrence?: string;
  recurrence_detail?: string | null;
}

export interface TaskTemplateRead {
  id: number;
  title: string;
  description?: string | null;
  priority: number;
  category: string;
  project_id?: number | null;
  recurrence: string;
  recurrence_detail?: string | null;
  is_active: boolean;
  last_generated_at?: string | null;
  created_at?: string | null;
}

export interface TaskTemplateUpdate {
  title?: string | null;
  description?: string | null;
  priority?: number | null;
  recurrence?: string | null;
  recurrence_detail?: string | null;
  is_active?: boolean | null;
}

export interface TaskUpdate {
  is_done?: boolean | null;
  title?: string | null;
  description?: string | null;
  priority?: number | null;
  category?: "personal" | "business" | "health" | "finance" | "other" | null;
  project_id?: number | null;
  due_date?: string | null;
  assigned_to_user_id?: number | null;
}

export interface TriggerCreate {
  name: string;
  description?: string | null;
  source_event: string;
  source_integration?: string | null;
  filter_json?: Record<string, unknown>;
  action_type: string;
  action_integration?: string | null;
  action_params?: Record<string, unknown>;
  requires_approval?: boolean;
}

export interface TriggerRead {
  id: number;
  organization_id: number;
  name: string;
  description: string | null;
  source_event: string;
  source_integration: string | null;
  filter_json: Record<string, unknown>;
  action_type: string;
  action_integration: string | null;
  action_params: Record<string, unknown>;
  is_active: boolean;
  requires_approval: boolean;
  fire_count: number;
  last_fired_at: string | null;
  created_at: string;
}

export interface TriggerUpdate {
  name?: string | null;
  description?: string | null;
  is_active?: boolean | null;
  filter_json?: Record<string, unknown> | null;
  action_params?: Record<string, unknown> | null;
  requires_approval?: boolean | null;
}

export interface UserMeRead {
  id: number;
  email: string;
  name: string;
  role: string;
  org_id: number;
  org_name: string;
  is_active?: boolean;
}

export interface ValidationError {
  loc: string | number[];
  msg: string;
  type: string;
  input?: unknown;
  ctx?: Record<string, unknown>;
}

export interface VariantEventRecord {
  event_type: string;
}

export interface WebhookDeliveryListResponse {
  count: number;
  items: app__schemas__webhook__WebhookDeliveryRead[];
}

export interface WebhookEndpointCreate {
  url: string;
  description?: string | null;
  event_types?: string[];
  max_retry_attempts?: number;
}

export interface WebhookEndpointCreateResponse {
  id: number;
  url: string;
  description: string | null;
  event_types: string[];
  is_active: boolean;
  signing_secret: string;
  created_at: string;
  updated_at: string;
}

export interface WebhookEndpointRead {
  id: number;
  url: string;
  description: string | null;
  event_types: string[];
  is_active: boolean;
  max_retry_attempts?: number;
  created_at: string;
  updated_at: string;
}

export interface WebhookEndpointUpdate {
  url?: string | null;
  description?: string | null;
  event_types?: string[] | null;
  is_active?: boolean | null;
}

export interface WebhookReplayResponse {
  ok: boolean;
  replayed_delivery_id?: number | null;
  error?: string | null;
}

export interface WebhookTestResponse {
  ok: boolean;
  status_code?: number | null;
  error?: string | null;
  duration_ms?: number | null;
}

export interface WorkflowApprovalPreviewRead {
  workflow_definition_id: number;
  workflow_status: string;
  input_json: Record<string, unknown>;
  requires_publish: boolean;
  step_plans: Record<string, unknown>[];
}

export interface WorkflowDefinitionCreate {
  name: string;
  description?: string | null;
  trigger_mode?: string;
  trigger_spec_json?: Record<string, unknown>;
  defaults_json?: Record<string, unknown>;
  risk_level?: string;
  steps: WorkflowDefinitionStep[];
}

export interface WorkflowDefinitionRead {
  id: number;
  organization_id: number;
  workspace_id: number | null;
  name: string;
  slug: string;
  description: string | null;
  status: string;
  trigger_mode: string;
  trigger_spec_json: Record<string, unknown>;
  steps_json: unknown[];
  defaults_json: Record<string, unknown>;
  risk_level: string;
  version: number;
  created_by: number | null;
  updated_by: number | null;
  published_at: string | null;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkflowDefinitionStep {
  key?: string | null;
  name: string;
  action_type: string;
  integration?: string | null;
  params?: Record<string, unknown>;
  requires_approval?: boolean;
}

export interface WorkflowDefinitionUpdate {
  name?: string | null;
  description?: string | null;
  trigger_mode?: string | null;
  trigger_spec_json?: Record<string, unknown> | null;
  defaults_json?: Record<string, unknown> | null;
  risk_level?: string | null;
  steps?: WorkflowDefinitionStep[] | null;
}

export interface WorkflowPlanDraftRead {
  name: string;
  summary: string;
  trigger_mode: string;
  steps: Record<string, unknown>[];
  risk_level: string;
  confidence: number;
}

export interface WorkflowPlanRequest {
  intent: string;
  constraints?: Record<string, unknown>;
  available_integrations?: string[];
  workspace_id?: number | null;
}

export interface WorkflowRunListItem {
  id: number;
  organization_id: number;
  workspace_id: number | null;
  workflow_definition_id: number;
  workflow_version: number;
  trigger_source: string;
  trigger_signal_id: string | null;
  status: string;
  current_step_index: number;
  requested_by: number;
  started_by: number | null;
  approval_id: number | null;
  idempotency_key: string;
  result_json: Record<string, unknown>;
  error_summary: string | null;
  retry_count: number;
  next_retry_at: string | null;
  last_heartbeat_at: string | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface WorkflowRunRead {
  id: number;
  organization_id: number;
  workspace_id: number | null;
  workflow_definition_id: number;
  workflow_version: number;
  trigger_source: string;
  trigger_signal_id: string | null;
  status: string;
  current_step_index: number;
  requested_by: number;
  started_by: number | null;
  approval_id: number | null;
  idempotency_key: string;
  result_json: Record<string, unknown>;
  error_summary: string | null;
  retry_count: number;
  next_retry_at: string | null;
  last_heartbeat_at: string | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
  updated_at: string;
  plan_snapshot_json: Record<string, unknown>;
  input_json: Record<string, unknown>;
  context_json: Record<string, unknown>;
  step_runs?: WorkflowStepRunRead[];
}

export interface WorkflowRunRequest {
  trigger_source?: string;
  input_json?: Record<string, unknown>;
  trigger_signal_id?: string | null;
  idempotency_key?: string | null;
}

export interface WorkflowStepDef {
  name: string;
  action_type: string;
  integration?: string | null;
  params?: Record<string, unknown>;
  requires_approval?: boolean;
}

export interface WorkflowStepRunRead {
  id: number;
  organization_id: number;
  workflow_run_id: number;
  step_index: number;
  step_key: string;
  action_type: string;
  status: string;
  approval_id: number | null;
  execution_id: number | null;
  attempt_count: number;
  idempotency_key: string;
  input_json: Record<string, unknown>;
  output_json: Record<string, unknown>;
  error_text: string | null;
  latency_ms: number | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
}

export interface app__api__v1__endpoints__campaigns__CampaignCreate {
  name: string;
  description?: string | null;
}

export interface app__api__v1__endpoints__campaigns__StepCreate {
  subject: string;
  body_template: string;
  step_order?: number;
  delay_hours?: number;
}

export interface app__api__v1__endpoints__campaigns__StepRead {
  id: number;
  campaign_id: number;
  step_order: number;
  subject: string;
  body_template: string;
  delay_hours: number;
}

export interface app__schemas__automation__WorkflowCreate {
  name: string;
  description?: string | null;
  steps: WorkflowStepDef[];
}

export interface app__schemas__automation__WorkflowRead {
  id: number;
  organization_id: number;
  name: string;
  description: string | null;
  steps_json: unknown[];
  status: string;
  current_step: number;
  result_json: Record<string, unknown>;
  error_text: string | null;
  created_by: number | null;
  started_at: string | null;
  finished_at: string | null;
  created_at: string;
}

export interface app__schemas__webhook__WebhookDeliveryRead {
  id: number;
  event: string;
  payload_json: Record<string, unknown>;
  status: string;
  response_status_code: number | null;
  error_message: string | null;
  error_category?: string | null;
  duration_ms: number | null;
  attempt_count: number;
  max_retries?: number;
  next_retry_at?: string | null;
  created_at: string;
}

export type WebhookEndpointListResponse = WebhookEndpointRead[];
