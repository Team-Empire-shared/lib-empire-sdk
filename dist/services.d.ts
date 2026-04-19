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
export interface DealsService {
    list(params?: {
        contact_id?: number;
        stage?: string;
        limit?: number;
        offset?: number;
    }): Promise<unknown>;
    get(dealId: number | string): Promise<unknown>;
    create(payload: Record<string, unknown>): Promise<unknown>;
    update(dealId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    delete(dealId: number | string): Promise<unknown>;
    forecast(): Promise<unknown>;
    forecastPipeline(): Promise<unknown>;
    forecastWinRates(): Promise<unknown>;
    summary(): Promise<unknown>;
}
export interface ApprovalsService {
    list(params?: {
        status?: string;
        limit?: number;
        offset?: number;
    }): Promise<unknown>;
    request(payload: Record<string, unknown>): Promise<unknown>;
    approve(approvalId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
    reject(approvalId: number | string, payload?: Record<string, unknown>): Promise<unknown>;
    timeline(limit?: number, offset?: number): Promise<unknown>;
    patterns(): Promise<unknown>;
    updatePattern(patternId: number | string, payload: Record<string, unknown>): Promise<unknown>;
    deletePattern(patternId: number | string): Promise<unknown>;
}
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
    list(params?: {
        user_id?: number;
        course_id?: number;
        limit?: number;
        offset?: number;
    }): Promise<unknown>;
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
export interface EmpireDigitalService {
    cockpit(): Promise<unknown>;
    scorecard(): Promise<unknown>;
    founderReport(): Promise<unknown>;
    leads: {
        list(params?: {
            limit?: number;
            offset?: number;
        }): Promise<unknown>;
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
export interface AfterServicesService {
    journeys: {
        list(params?: {
            empire_person_id?: string;
            journey_type?: string;
            status?: string;
            limit?: number;
            offset?: number;
        }): Promise<unknown>;
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
export declare function createSDK(client: NidinBOSClient): EmpireSDK;
