/**
 * @empireoe/sdk — Service Wrappers
 *
 * High-level grouped service objects that proxy to NidinBOSClient methods.
 * Use these instead of calling flat client methods directly.
 *
 * Usage:
 *   import { createClient } from "@empireoe/sdk";
 *   const sdk = createClient({ baseUrl, apiKey });
 *   const contacts = await sdk.contacts.list();
 *   const enrolled  = await sdk.learning.enrollments.create({ course_id: 5 });
 */

import type { NidinBOSClient } from "./client";

// ─── Contacts ────────────────────────────────────────────────────────────────

export interface ContactsService {
  list(params?: {
    limit?: number;
    offset?: number;
    pipeline_stage?: string;
    lead_score_min?: number;
    lead_score_max?: number;
    relationship?: string;
    search?: string;
  }): Promise<unknown>;
  get(contactId: number | string): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(contactId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  delete(contactId: number | string): Promise<unknown>;
  timeline(contactId: number | string, limit?: number): Promise<unknown>;
  network(contactId: number | string, limit?: number): Promise<unknown>;
  pipelineAnalytics(): Promise<unknown>;
  pipelineSummary(): Promise<unknown>;
  duplicates(limit?: number): Promise<unknown>;
  followUpDue(limit?: number): Promise<unknown>;
  intelligence(staleDays?: number): Promise<unknown>;
  qualify(contactId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  route(contactId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  merge(payload: Record<string, unknown>): Promise<unknown>;
  enrich(): Promise<unknown>;
  submitInquiry(payload: Record<string, unknown>): Promise<unknown>;
}

function buildContactsService(client: NidinBOSClient): ContactsService {
  return {
    list: (p?) => client.getApiV1Contacts(p?.limit, p?.offset, p?.pipeline_stage, p?.lead_score_min, p?.lead_score_max, p?.relationship, p?.search),
    get: (id) => client.getApiV1ContactsContactId(id),
    create: (payload) => client.postApiV1Contacts(payload),
    update: (id, payload) => client.patchApiV1ContactsContactId(id, payload),
    delete: (id) => client.deleteApiV1ContactsContactId(id),
    timeline: (id, limit?) => client.getApiV1ContactsContactIdTimeline(id, limit),
    network: (id, limit?) => client.getApiV1ContactsContactIdNetwork(id, limit),
    pipelineAnalytics: () => client.getApiV1ContactsPipelineAnalytics(),
    pipelineSummary: () => client.getApiV1ContactsPipelineSummary(),
    duplicates: (limit?) => client.getApiV1ContactsDuplicates(limit),
    followUpDue: (limit?) => client.getApiV1ContactsFollowUpDue(limit),
    intelligence: (staleDays?) => client.getApiV1ContactsIntelligence(staleDays),
    qualify: (id, payload?) => client.postApiV1ContactsContactIdQualify(id, payload),
    route: (id, payload?) => client.postApiV1ContactsContactIdRoute(id, payload),
    merge: (payload) => client.postApiV1ContactsMerge(payload),
    enrich: () => client.postApiV1ContactsEnrich(),
    submitInquiry: (payload) => client.postApiV1ContactsContactsInquiry(payload),
  };
}

// ─── Deals ───────────────────────────────────────────────────────────────────

export interface DealsService {
  list(params?: { contact_id?: number; stage?: string; limit?: number; offset?: number }): Promise<unknown>;
  get(dealId: number | string): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(dealId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  delete(dealId: number | string): Promise<unknown>;
  forecast(): Promise<unknown>;
  forecastPipeline(): Promise<unknown>;
  forecastWinRates(): Promise<unknown>;
  summary(): Promise<unknown>;
}

function buildDealsService(client: NidinBOSClient): DealsService {
  return {
    list: (p?) => client.getApiV1Deals(p?.contact_id, p?.stage, p?.limit, p?.offset),
    get: (id) => client.getApiV1DealsDealId(id),
    create: (payload) => client.postApiV1Deals(payload),
    update: (id, payload) => client.patchApiV1DealsDealId(id, payload),
    delete: (id) => client.deleteApiV1DealsDealId(id),
    forecast: () => client.getApiV1DealsForecast(),
    forecastPipeline: () => client.getApiV1DealsForecastPipeline(),
    forecastWinRates: () => client.getApiV1DealsForecastWinRates(),
    summary: () => client.getApiV1DealsSummary(),
  };
}

// ─── Approvals ───────────────────────────────────────────────────────────────

export interface ApprovalsService {
  list(params?: { status?: string; limit?: number; offset?: number }): Promise<unknown>;
  request(payload: Record<string, unknown>): Promise<unknown>;
  approve(approvalId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  reject(approvalId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  timeline(limit?: number, offset?: number): Promise<unknown>;
  patterns(): Promise<unknown>;
  updatePattern(patternId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  deletePattern(patternId: number | string): Promise<unknown>;
}

function buildApprovalsService(client: NidinBOSClient): ApprovalsService {
  return {
    list: (p?) => client.getApiV1Approvals(p?.status, p?.limit, p?.offset),
    request: (payload) => client.postApiV1ApprovalsRequest(payload),
    approve: (id, payload?) => client.postApiV1ApprovalsApprovalIdApprove(id, payload),
    reject: (id, payload?) => client.postApiV1ApprovalsApprovalIdReject(id, payload),
    timeline: (limit?, offset?) => client.getApiV1ApprovalsTimeline(limit, offset),
    patterns: () => client.getApiV1ApprovalsApprovalPatterns(),
    updatePattern: (id, payload) => client.patchApiV1ApprovalsApprovalPatternsPatternId(id, payload),
    deletePattern: (id) => client.deleteApiV1ApprovalsApprovalPatternsPatternId(id),
  };
}

// ─── Campaigns ───────────────────────────────────────────────────────────────

export interface CampaignsService {
  list(status?: string): Promise<unknown>;
  get(campaignId: number | string): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  setStatus(campaignId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  analytics(campaignId: number | string): Promise<unknown>;
  abTest(campaignId: number | string): Promise<unknown>;
  funnel(campaignId: number | string): Promise<unknown>;
  summary(campaignId: number | string): Promise<unknown>;
  variantStats(campaignId: number | string): Promise<unknown>;
  enrollments(campaignId: number | string, status?: string): Promise<unknown>;
  enroll(campaignId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  steps(campaignId: number | string): Promise<unknown>;
  addStep(campaignId: number | string, payload: Record<string, unknown>): Promise<unknown>;
}

function buildCampaignsService(client: NidinBOSClient): CampaignsService {
  return {
    list: (status?) => client.getApiV1Campaigns(status),
    get: (id) => client.getApiV1CampaignsCampaignId(id),
    create: (payload) => client.postApiV1Campaigns(payload),
    setStatus: (id, payload) => client.patchApiV1CampaignsCampaignIdStatus(id, payload),
    analytics: (id) => client.getApiV1CampaignsCampaignIdAnalytics(id),
    abTest: (id) => client.getApiV1CampaignsCampaignIdAbTest(id),
    funnel: (id) => client.getApiV1CampaignsCampaignIdAbTest(id),
    summary: (id) => client.getApiV1CampaignsCampaignIdSummary(id),
    variantStats: (id) => client.getApiV1CampaignsCampaignIdVariantStats(id),
    enrollments: (id, status?) => client.getApiV1CampaignsCampaignIdEnrollments(id, status),
    enroll: (id, payload) => client.postApiV1CampaignsCampaignIdEnroll(id, payload),
    steps: (id) => client.getApiV1CampaignsCampaignIdSteps(id),
    addStep: (id, payload) => client.postApiV1CampaignsCampaignIdSteps(id, payload),
  };
}

// ─── Learning (LWE) ──────────────────────────────────────────────────────────

export interface LearningCoursesService {
  list(params?: {
    category?: string;
    level?: string;
    visibility?: string;
    target_audience?: string;
    provider?: string;
    published_only?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<unknown>;
  get(courseId: number | string): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(courseId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  delete(courseId: number | string): Promise<unknown>;
  stats(courseId: number | string): Promise<unknown>;
  effectiveness(courseId: number | string): Promise<unknown>;
  approve(courseId: number | string): Promise<unknown>;
  assign(courseId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  forCompany(companyId: number | string): Promise<unknown>;
}

export interface LearningLessonsService {
  list(courseId: number | string): Promise<unknown>;
  get(courseId: number | string, lessonId: number | string): Promise<unknown>;
  create(courseId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  update(courseId: number | string, lessonId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  delete(courseId: number | string, lessonId: number | string): Promise<unknown>;
}

export interface LearningEnrollmentsService {
  list(params?: { user_id?: number; course_id?: number; limit?: number; offset?: number }): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(enrollmentId: number | string, payload: Record<string, unknown>): Promise<unknown>;
}

export interface LearningQuizzesService {
  get(courseId: number | string): Promise<unknown>;
  create(courseId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  submit(courseId: number | string, quizId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  questions(quizId: number | string): Promise<unknown>;
  addQuestion(quizId: number | string, payload: Record<string, unknown>): Promise<unknown>;
}

export interface LearningCertificatesService {
  mine(): Promise<unknown>;
  all(): Promise<unknown>;
  get(certId: number | string): Promise<unknown>;
  issue(payload: Record<string, unknown>): Promise<unknown>;
}

export interface LearningTutorService {
  sessions(): Promise<unknown>;
  sessionMessages(sessionId: number | string): Promise<unknown>;
  chat(payload: Record<string, unknown>): Promise<unknown>;
}

export interface LearningInterviewService {
  start(payload: Record<string, unknown>): Promise<unknown>;
  answer(sessionId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  history(): Promise<unknown>;
  session(sessionId: number | string): Promise<unknown>;
  report(sessionId: number | string): Promise<unknown>;
}

export interface LearningService {
  courses: LearningCoursesService;
  lessons: LearningLessonsService;
  enrollments: LearningEnrollmentsService;
  quizzes: LearningQuizzesService;
  certificates: LearningCertificatesService;
  tutor: LearningTutorService;
  interview: LearningInterviewService;
  insights(): Promise<unknown>;
  effectiveness(): Promise<unknown>;
  myAssignments(): Promise<unknown>;
  outcomes(payload: Record<string, unknown>): Promise<unknown>;
}

function buildLearningService(client: NidinBOSClient): LearningService {
  return {
    courses: {
      list: (p?) => client.getApiV1LearningCourses(p?.category, p?.level, p?.visibility, p?.target_audience, p?.provider, p?.published_only, p?.limit, p?.offset),
      get: (id) => client.getApiV1LearningCoursesCourseId(id),
      create: (payload) => client.postApiV1LearningCourses(payload),
      update: (id, payload) => client.patchApiV1LearningCoursesCourseId(id, payload),
      delete: (id) => client.deleteApiV1LearningCoursesCourseId(id),
      stats: (id) => client.getApiV1LearningCoursesCourseIdStats(id),
      effectiveness: (id) => client.getApiV1LearningCoursesCourseIdEffectiveness(id),
      approve: (id) => client.postApiV1LearningCoursesCourseIdApprove(id),
      assign: (id, payload) => client.postApiV1LearningCoursesCourseIdAssign(id, payload),
      forCompany: (companyId) => client.getApiV1LearningCompanyCompanyIdCourses(companyId),
    },
    lessons: {
      list: (courseId) => client.getApiV1LearningCoursesCourseIdLessons(courseId),
      get: (courseId, lessonId) => client.getApiV1LearningCoursesCourseIdLessonsLessonId(courseId, lessonId),
      create: (courseId, payload) => client.postApiV1LearningCoursesCourseIdLessons(courseId, payload),
      update: (courseId, lessonId, payload) => client.patchApiV1LearningCoursesCourseIdLessonsLessonId(courseId, lessonId, payload),
      delete: (courseId, lessonId) => client.deleteApiV1LearningCoursesCourseIdLessonsLessonId(courseId, lessonId),
    },
    enrollments: {
      list: (p?) => client.getApiV1LearningEnrollments(p?.user_id, p?.course_id, p?.limit, p?.offset),
      create: (payload) => client.postApiV1LearningEnrollments(payload),
      update: (id, payload) => client.patchApiV1LearningEnrollmentsEnrollmentId(id, payload),
    },
    quizzes: {
      get: (courseId) => client.getApiV1LearningCoursesCourseIdQuiz(courseId),
      create: (courseId, payload) => client.postApiV1LearningCoursesCourseIdQuiz(courseId, payload),
      submit: (courseId, quizId, payload) => client.postApiV1LearningCoursesCourseIdQuizQuizIdSubmit(courseId, quizId, payload),
      questions: (quizId) => client.getApiV1LearningQuizzesQuizIdQuestions(quizId),
      addQuestion: (quizId, payload) => client.postApiV1LearningQuizzesQuizIdQuestions(quizId, payload),
    },
    certificates: {
      mine: () => client.getApiV1LearningCertificatesMe(),
      all: () => client.getApiV1LearningCertificatesAdmin(),
      get: (id) => client.getApiV1LearningCertificatesCertificateId(id),
      issue: (payload) => client.postApiV1LearningCertificatesIssue(payload),
    },
    tutor: {
      sessions: () => client.getApiV1LearningTutorSessions(),
      sessionMessages: (id) => client.getApiV1LearningTutorSessionsSessionIdMessages(id),
      chat: (payload) => client.postApiV1LearningTutorChat(payload),
    },
    interview: {
      start: (payload) => client.postApiV1LearningInterviewStart(payload),
      answer: (id, payload) => client.postApiV1LearningInterviewSessionIdAnswer(id, payload),
      history: () => client.getApiV1LearningInterviewHistory(),
      session: (id) => client.getApiV1LearningInterviewSessionId(id),
      report: (id) => client.getApiV1LearningInterviewSessionIdReport(id),
    },
    insights: () => client.getApiV1LearningInsights(),
    effectiveness: () => client.getApiV1LearningEffectiveness(),
    myAssignments: () => client.getApiV1LearningMyAssignments(),
    outcomes: (payload) => client.postApiV1LearningOutcomes(payload),
  };
}

// ─── Recruitment ─────────────────────────────────────────────────────────────

export interface RecruitmentService {
  pipeline(): Promise<unknown>;
  openings(): Promise<unknown>;
  timeToHire(): Promise<unknown>;
  conversion(): Promise<unknown>;
  analytics: {
    funnel(days?: number): Promise<unknown>;
    placementRate(days?: number): Promise<unknown>;
    recruiterProductivity(days?: number): Promise<unknown>;
    slaCompliance(): Promise<unknown>;
    timeToPlacement(): Promise<unknown>;
  };
  documents: {
    list(): Promise<unknown>;
    get(docId: number | string): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(docId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    delete(docId: number | string): Promise<unknown>;
    extract(docId: number | string): Promise<unknown>;
  };
}

function buildRecruitmentService(client: NidinBOSClient): RecruitmentService {
  return {
    pipeline: () => client.getApiV1RecruitmentPipeline(),
    openings: () => client.getApiV1RecruitmentOpenings(),
    timeToHire: () => client.getApiV1RecruitmentTimeToHire(),
    conversion: () => client.getApiV1RecruitmentConversion(),
    analytics: {
      funnel: (days?) => client.getApiV1RecruitmentAnalyticsFunnel(days),
      placementRate: (days?) => client.getApiV1RecruitmentAnalyticsPlacementRate(days),
      recruiterProductivity: (days?) => client.getApiV1RecruitmentAnalyticsRecruiterProductivity(days),
      slaCompliance: () => client.getApiV1RecruitmentAnalyticsSlaCompliance(),
      timeToPlacement: () => client.getApiV1RecruitmentAnalyticsTimeToPlacement(),
    },
    documents: {
      list: () => client.getApiV1RecruitmentCandidateDocuments(),
      get: (id) => client.getApiV1RecruitmentCandidateDocumentsDocumentId(id),
      create: (payload) => client.postApiV1RecruitmentCandidateDocuments(payload),
      update: (id, payload) => client.patchApiV1RecruitmentCandidateDocumentsDocumentId(id, payload),
      delete: (id) => client.deleteApiV1RecruitmentCandidateDocumentsDocumentId(id),
      extract: (id) => client.postApiV1RecruitmentCandidateDocumentsDocumentIdExtract(id),
    },
  };
}

// ─── Empire Digital ──────────────────────────────────────────────────────────

export interface EmpireDigitalService {
  cockpit(): Promise<unknown>;
  scorecard(): Promise<unknown>;
  founderReport(): Promise<unknown>;
  leads: {
    list(params?: { limit?: number; offset?: number }): Promise<unknown>;
    get(contactId: number | string): Promise<unknown>;
    export(): Promise<unknown>;
    bulkRoute(payload: Record<string, unknown>): Promise<unknown>;
    bulkQualify(payload: Record<string, unknown>): Promise<unknown>;
    escalateStale(): Promise<unknown>;
  };
  routingRules: {
    list(): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(ruleId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  };
  slaPolicy: {
    get(): Promise<unknown>;
    update(payload: Record<string, unknown>): Promise<unknown>;
  };
  analytics: {
    campaigns(limit?: number): Promise<unknown>;
    abTest(campaignId: number | string): Promise<unknown>;
    funnel(campaignId: number | string): Promise<unknown>;
    dailyTrends(): Promise<unknown>;
  };
  socialMedia: {
    pages(): Promise<unknown>;
    getPage(pageId: number | string): Promise<unknown>;
    createPage(payload: Record<string, unknown>): Promise<unknown>;
    updatePage(pageId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    deletePage(pageId: number | string): Promise<unknown>;
    summary(): Promise<unknown>;
    analytics(pageId: number | string): Promise<unknown>;
    analyticsGrowth(pageId: number | string): Promise<unknown>;
    syncAnalytics(pageId: number | string): Promise<unknown>;
    syncAll(): Promise<unknown>;
    credentials(pageId: number | string): Promise<unknown>;
  };
  intelligence: {
    list(staleDays?: number): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    review(itemId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  };
}

function buildEmpireDigitalService(client: NidinBOSClient): EmpireDigitalService {
  return {
    cockpit: () => client.getApiV1EmpireDigitalCockpit(),
    scorecard: () => client.getApiV1EmpireDigitalScorecard(),
    founderReport: () => client.getApiV1EmpireDigitalFounderReport(),
    leads: {
      list: (p?) => client.getApiV1EmpireDigitalLeads(p?.limit, p?.offset),
      get: (id) => client.getApiV1EmpireDigitalLeadsContactId(id),
      export: () => client.getApiV1EmpireDigitalLeadsExport(),
      bulkRoute: (payload) => client.postApiV1EmpireDigitalLeadsBulkRoute(payload),
      bulkQualify: (payload) => client.postApiV1EmpireDigitalLeadsBulkQualify(payload),
      escalateStale: () => client.postApiV1EmpireDigitalLeadsEscalateStale(),
    },
    routingRules: {
      list: () => client.getApiV1EmpireDigitalRoutingRules(),
      create: (payload) => client.postApiV1EmpireDigitalRoutingRules(payload),
      update: (id, payload) => client.patchApiV1EmpireDigitalRoutingRulesRuleId(id, payload),
    },
    slaPolicy: {
      get: () => client.getApiV1EmpireDigitalSlaPolicy(),
      update: (payload) => client.patchApiV1EmpireDigitalSlaPolicy(payload),
    },
    analytics: {
      campaigns: (limit?) => client.getApiV1EmpireDigitalAnalyticsCampaigns(limit),
      abTest: (id) => client.getApiV1EmpireDigitalAnalyticsAbTestCampaignId(id),
      funnel: (id) => client.getApiV1EmpireDigitalAnalyticsFunnelCampaignId(id),
      dailyTrends: () => client.getApiV1EmpireDigitalAnalyticsDailyTrends(),
    },
    socialMedia: {
      pages: () => client.getApiV1EmpireDigitalSocialMediaPages(),
      getPage: (id) => client.getApiV1EmpireDigitalSocialMediaPagesPageId(id),
      createPage: (payload) => client.postApiV1EmpireDigitalSocialMediaPages(payload),
      updatePage: (id, payload) => client.putApiV1EmpireDigitalSocialMediaPagesPageId(id, payload),
      deletePage: (id) => client.deleteApiV1EmpireDigitalSocialMediaPagesPageId(id),
      summary: () => client.getApiV1EmpireDigitalSocialMediaPagesSummary(),
      analytics: (id) => client.getApiV1EmpireDigitalSocialMediaPagesPageIdAnalytics(id),
      analyticsGrowth: (id) => client.getApiV1EmpireDigitalSocialMediaPagesPageIdAnalyticsGrowth(id),
      syncAnalytics: (id) => client.postApiV1EmpireDigitalSocialMediaPagesPageIdAnalyticsSync(id),
      syncAll: () => client.postApiV1EmpireDigitalSocialMediaAnalyticsSyncAll(),
      credentials: (id) => client.getApiV1EmpireDigitalSocialMediaPagesPageIdCredentials(id),
    },
    intelligence: {
      list: (staleDays?) => client.getApiV1EmpireDigitalIntelligence(staleDays),
      create: (payload) => client.postApiV1EmpireDigitalIntelligence(payload),
      review: (id, payload?) => client.postApiV1EmpireDigitalIntelligenceItemIdReview(id, payload),
    },
  };
}

// ─── EGPN ─────────────────────────────────────────────────────────────────────

export interface EgpnService {
  portalStats(): Promise<unknown>;
  admin: {
    partners(params?: unknown): Promise<unknown>;
    getPartner(partnerId: number | string): Promise<unknown>;
    updatePartner(partnerId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    setPartnerStatus(partnerId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    commissions(): Promise<unknown>;
    getCommission(commissionId: number | string): Promise<unknown>;
    createCommission(payload: Record<string, unknown>): Promise<unknown>;
    updateCommission(commissionId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    setCommissionStatus(commissionId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    bulkUpdateCommissions(payload: Record<string, unknown>): Promise<unknown>;
    commissionSummary(): Promise<unknown>;
    agreements(): Promise<unknown>;
    opportunities(): Promise<unknown>;
    networkAnalytics(): Promise<unknown>;
    students(): Promise<unknown>;
    applications(): Promise<unknown>;
  };
  partner: {
    profile(): Promise<unknown>;
    updateProfile(payload: Record<string, unknown>): Promise<unknown>;
    stats(): Promise<unknown>;
    opportunities(params?: unknown): Promise<unknown>;
    recommendedOpportunities(): Promise<unknown>;
    commissions(): Promise<unknown>;
    commissionSummary(): Promise<unknown>;
    requestPayout(): Promise<unknown>;
    agreements(): Promise<unknown>;
    signAgreement(agreementId: number | string): Promise<unknown>;
    documents(): Promise<unknown>;
    uploadDocument(payload: Record<string, unknown>): Promise<unknown>;
    students(): Promise<unknown>;
    submitStudentApplication(payload: Record<string, unknown>): Promise<unknown>;
    team(): Promise<unknown>;
    inviteTeam(payload: Record<string, unknown>): Promise<unknown>;
    leads(payload: Record<string, unknown>): Promise<unknown>;
  };
  register(payload: Record<string, unknown>): Promise<unknown>;
  consumeInviteToken(payload: Record<string, unknown>): Promise<unknown>;
}

function buildEgpnService(client: NidinBOSClient): EgpnService {
  return {
    portalStats: () => client.getApiV1EgpnPortalStats(),
    admin: {
      partners: () => client.getApiV1EgpnAdminPartners(),
      getPartner: (id) => client.getApiV1EgpnAdminPartnersPartnerId(id),
      updatePartner: (id, payload) => client.patchApiV1EgpnAdminPartnersPartnerId(id, payload),
      setPartnerStatus: (id, payload) => client.patchApiV1EgpnAdminPartnersPartnerIdStatus(id, payload),
      commissions: () => client.getApiV1EgpnAdminCommissions(),
      getCommission: (id) => client.getApiV1EgpnAdminCommissionsCommissionId(id),
      createCommission: (payload) => client.postApiV1EgpnAdminCommissions(payload),
      updateCommission: (id, payload) => client.patchApiV1EgpnAdminCommissionsCommissionId(id, payload),
      setCommissionStatus: (id, payload) => client.patchApiV1EgpnAdminCommissionsCommissionIdStatus(id, payload),
      bulkUpdateCommissions: (payload) => client.postApiV1EgpnAdminCommissionsBulkUpdate(payload),
      commissionSummary: () => client.getApiV1EgpnAdminCommissionsSummary(),
      agreements: () => client.getApiV1EgpnAdminAgreements(),
      opportunities: () => client.getApiV1EgpnAdminOpportunities(),
      networkAnalytics: () => client.getApiV1EgpnAdminAnalyticsNetwork(),
      students: () => client.getApiV1EgpnAdminStudents(),
      applications: () => client.getApiV1EgpnAdminApplications(),
    },
    partner: {
      profile: () => client.getApiV1EgpnPartnersProfile(),
      updateProfile: (payload) => client.putApiV1EgpnPartnersProfile(payload),
      stats: () => client.getApiV1EgpnPartnersStats(),
      opportunities: () => client.getApiV1EgpnPartnersOpportunities(),
      recommendedOpportunities: () => client.getApiV1EgpnPartnersOpportunitiesRecommended(),
      commissions: () => client.getApiV1EgpnPartnersCommissions(),
      commissionSummary: () => client.getApiV1EgpnPartnersCommissionsSummary(),
      requestPayout: () => client.postApiV1EgpnPartnersCommissionsPayoutRequest(),
      agreements: () => client.getApiV1EgpnPartnersAgreements(),
      signAgreement: (id) => client.postApiV1EgpnPartnersAgreementsAgreementIdSign(id),
      documents: () => client.getApiV1EgpnPartnersDocuments(),
      uploadDocument: (payload) => client.postApiV1EgpnPartnersDocuments(payload),
      students: () => client.getApiV1EgpnPartnersStudents(),
      submitStudentApplication: (payload) => client.postApiV1EgpnPartnersStudentApplications(payload),
      team: () => client.getApiV1EgpnPartnersTeam(),
      inviteTeam: (payload) => client.postApiV1EgpnPartnersTeamInvite(payload),
      leads: (payload) => client.postApiV1EgpnPartnersLeads(payload),
    },
    register: (payload) => client.postApiV1EgpnRegister(payload),
    consumeInviteToken: (payload) => client.postApiV1EgpnInviteTokensConsume(payload),
  };
}

// ─── Automations ─────────────────────────────────────────────────────────────

export interface AutomationsService {
  rules: {
    list(): Promise<unknown>;
    get(ruleId: number | string): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(ruleId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    delete(ruleId: number | string): Promise<unknown>;
    evaluate(payload: Record<string, unknown>): Promise<unknown>;
    executions(ruleId: number | string): Promise<unknown>;
    allExecutions(): Promise<unknown>;
  };
  triggers: {
    list(): Promise<unknown>;
    get(triggerId: number | string): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(triggerId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    delete(triggerId: number | string): Promise<unknown>;
  };
  workflows: {
    definitions(): Promise<unknown>;
    getDefinition(id: number | string): Promise<unknown>;
    createDefinition(payload: Record<string, unknown>): Promise<unknown>;
    updateDefinition(id: number | string, payload: Record<string, unknown>): Promise<unknown>;
    publishDefinition(id: number | string): Promise<unknown>;
    runDefinition(id: number | string, payload?: Record<string, unknown>): Promise<unknown>;
  };
  copilot: {
    plan(payload: Record<string, unknown>): Promise<unknown>;
    planAndSave(payload: Record<string, unknown>): Promise<unknown>;
  };
  insights(): Promise<unknown>;
  templates(): Promise<unknown>;
}

function buildAutomationsService(client: NidinBOSClient): AutomationsService {
  return {
    rules: {
      list: () => client.getApiV1AutomationsRules(),
      get: (id) => client.getApiV1AutomationsRulesRuleId(id),
      create: (payload) => client.postApiV1AutomationsRules(payload),
      update: (id, payload) => client.patchApiV1AutomationsRulesRuleId(id, payload),
      delete: (id) => client.deleteApiV1AutomationsRulesRuleId(id),
      evaluate: (payload) => client.postApiV1AutomationsRulesEvaluate(payload),
      executions: (id) => client.getApiV1AutomationsRulesRuleIdExecutions(id),
      allExecutions: () => client.getApiV1AutomationsRulesExecutionsAll(),
    },
    triggers: {
      list: () => client.getApiV1AutomationsTriggers(),
      get: (id) => client.getApiV1AutomationsTriggersTriggerId(id),
      create: (payload) => client.postApiV1AutomationsTriggers(payload),
      update: (id, payload) => client.patchApiV1AutomationsTriggersTriggerId(id, payload),
      delete: (id) => client.deleteApiV1AutomationsTriggersTriggerId(id),
    },
    workflows: {
      definitions: () => client.getApiV1AutomationsWorkflowDefinitions(),
      getDefinition: (id) => client.getApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionId(id),
      createDefinition: (payload) => client.postApiV1AutomationsWorkflowDefinitions(payload),
      updateDefinition: (id, payload) => client.patchApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionId(id, payload),
      publishDefinition: (id) => client.postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdPublish(id),
      runDefinition: (id, payload?) => client.postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdRun(id, payload),
    },
    copilot: {
      plan: (payload) => client.postApiV1AutomationsCopilotPlan(payload),
      planAndSave: (payload) => client.postApiV1AutomationsCopilotPlanAndSave(payload),
    },
    insights: () => client.getApiV1AutomationsInsights(),
    templates: () => client.getApiV1AutomationsTemplates(),
  };
}

// ─── Tasks ───────────────────────────────────────────────────────────────────

export interface TasksService {
  list(): Promise<unknown>;
  prioritized(): Promise<unknown>;
  get(taskId: number | string): Promise<unknown>;
  create(payload: Record<string, unknown>): Promise<unknown>;
  update(taskId: number | string, payload: Record<string, unknown>): Promise<unknown>;
  delete(taskId: number | string): Promise<unknown>;
  templates: {
    list(): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(templateId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    delete(templateId: number | string): Promise<unknown>;
    generate(): Promise<unknown>;
  };
}

function buildTasksService(client: NidinBOSClient): TasksService {
  return {
    list: () => client.getApiV1Tasks(),
    prioritized: () => client.getApiV1TasksPrioritized(),
    get: (id) => client.getApiV1Tasks(),
    create: (payload) => client.postApiV1Tasks(payload),
    update: (id, payload) => client.patchApiV1TasksTaskId(id, payload),
    delete: (id) => client.deleteApiV1TasksTaskId(id),
    templates: {
      list: () => client.getApiV1TasksTemplates(),
      create: (payload) => client.postApiV1TasksTemplates(payload),
      update: (id, payload) => client.patchApiV1TasksTemplatesTemplateId(id, payload),
      delete: (id) => client.deleteApiV1TasksTemplatesTemplateId(id),
      generate: () => client.postApiV1TasksTemplatesGenerate(),
    },
  };
}

// ─── After Services (Housing + Settlement) ───────────────────────────────────

export interface AfterServicesService {
  journeys: {
    list(params?: { empire_person_id?: string; journey_type?: string; status?: string; limit?: number; offset?: number }): Promise<unknown>;
    get(journeyId: number | string): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    setStatus(journeyId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    generatePdf(journeyId: number | string): Promise<unknown>;
  };
  settlement: {
    program(): Promise<unknown>;
    tasks(params?: unknown): Promise<unknown>;
    getTask(taskId: number | string): Promise<unknown>;
    completeTask(taskId: number | string): Promise<unknown>;
    assistantMessage(payload: Record<string, unknown>): Promise<unknown>;
  };
  housing: {
    listings(params?: unknown): Promise<unknown>;
    getListing(listingId: number | string): Promise<unknown>;
    myBookings(): Promise<unknown>;
    book(payload: Record<string, unknown>): Promise<unknown>;
    cancelBooking(bookingId: number | string): Promise<unknown>;
  };
}

function buildAfterServicesService(client: NidinBOSClient): AfterServicesService {
  return {
    journeys: {
      list: (p?) => client.getApiV1AfterServicesJourneys(p?.empire_person_id, p?.journey_type, p?.status, p?.limit, p?.offset),
      get: (id) => client.getApiV1AfterServicesJourneysJourneyId(id),
      create: (payload) => client.postApiV1AfterServicesJourneys(payload),
      setStatus: (id, payload) => client.patchApiV1AfterServicesJourneysJourneyIdStatus(id, payload),
      generatePdf: (id) => client.postApiV1SettlementJourneysJourneyIdGeneratePdf(id),
    },
    settlement: {
      program: () => client.getApiV1SettlementProgram(),
      tasks: () => client.getApiV1SettlementTasks(),
      getTask: (id) => client.getApiV1SettlementTasksTaskId(id),
      completeTask: (id) => client.patchApiV1SettlementTasksTaskIdComplete(id),
      assistantMessage: (payload) => client.postApiV1SettlementAssistantMessage(payload),
    },
    housing: {
      listings: () => client.getApiV1HousingListings(),
      getListing: (id) => client.getApiV1HousingListingsListingId(id),
      myBookings: () => client.getApiV1HousingBookingsMy(),
      book: (payload) => client.postApiV1HousingBookings(payload),
      cancelBooking: (id) => client.patchApiV1HousingBookingsBookingIdCancel(id),
    },
  };
}

// ─── Root SDK object ──────────────────────────────────────────────────────────

export interface EmpireSDK {
  /** Flat generated client — use for one-off calls not covered by service groups */
  readonly _client: NidinBOSClient;
  readonly contacts: ContactsService;
  readonly deals: DealsService;
  readonly approvals: ApprovalsService;
  readonly campaigns: CampaignsService;
  readonly learning: LearningService;
  readonly recruitment: RecruitmentService;
  readonly empireDigital: EmpireDigitalService;
  readonly egpn: EgpnService;
  readonly automations: AutomationsService;
  readonly tasks: TasksService;
  readonly afterServices: AfterServicesService;
}

/**
 * Create a fully typed EmpireSDK instance.
 *
 * @example
 * ```ts
 * import { createSDK } from "@empireoe/sdk";
 *
 * const sdk = createSDK({ baseUrl: "https://api.teamempire.org", apiKey: "..." });
 * const contacts = await sdk.contacts.list({ limit: 50 });
 * const courses  = await sdk.learning.courses.list({ published_only: true });
 * ```
 */
export function createSDK(client: NidinBOSClient): EmpireSDK {
  return {
    _client: client,
    contacts: buildContactsService(client),
    deals: buildDealsService(client),
    approvals: buildApprovalsService(client),
    campaigns: buildCampaignsService(client),
    learning: buildLearningService(client),
    recruitment: buildRecruitmentService(client),
    empireDigital: buildEmpireDigitalService(client),
    egpn: buildEgpnService(client),
    automations: buildAutomationsService(client),
    tasks: buildTasksService(client),
    afterServices: buildAfterServicesService(client),
  };
}
