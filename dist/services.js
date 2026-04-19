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
function buildContactsService(client) {
    return {
        list: (p) => client.getApiV1Contacts(p?.limit, p?.offset, p?.pipeline_stage, p?.lead_score_min, p?.lead_score_max, p?.relationship, p?.search),
        get: (id) => client.getApiV1ContactsContactId(id),
        create: (payload) => client.postApiV1Contacts(payload),
        update: (id, payload) => client.patchApiV1ContactsContactId(id, payload),
        delete: (id) => client.deleteApiV1ContactsContactId(id),
        timeline: (id, limit) => client.getApiV1ContactsContactIdTimeline(id, limit),
        network: (id, limit) => client.getApiV1ContactsContactIdNetwork(id, limit),
        pipelineAnalytics: () => client.getApiV1ContactsPipelineAnalytics(),
        pipelineSummary: () => client.getApiV1ContactsPipelineSummary(),
        duplicates: (limit) => client.getApiV1ContactsDuplicates(limit),
        followUpDue: (limit) => client.getApiV1ContactsFollowUpDue(limit),
        intelligence: (staleDays) => client.getApiV1ContactsIntelligence(staleDays),
        qualify: (id, payload) => client.postApiV1ContactsContactIdQualify(id, payload),
        route: (id, payload) => client.postApiV1ContactsContactIdRoute(id, payload),
        merge: (payload) => client.postApiV1ContactsMerge(payload),
        enrich: () => client.postApiV1ContactsEnrich(),
        submitInquiry: (payload) => client.postApiV1ContactsContactsInquiry(payload),
    };
}
function buildDealsService(client) {
    return {
        list: (p) => client.getApiV1Deals(p?.contact_id, p?.stage, p?.limit, p?.offset),
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
function buildApprovalsService(client) {
    return {
        list: (p) => client.getApiV1Approvals(p?.status, p?.limit, p?.offset),
        request: (payload) => client.postApiV1ApprovalsRequest(payload),
        approve: (id, payload) => client.postApiV1ApprovalsApprovalIdApprove(id, payload),
        reject: (id, payload) => client.postApiV1ApprovalsApprovalIdReject(id, payload),
        timeline: (limit, offset) => client.getApiV1ApprovalsTimeline(limit, offset),
        patterns: () => client.getApiV1ApprovalsApprovalPatterns(),
        updatePattern: (id, payload) => client.patchApiV1ApprovalsApprovalPatternsPatternId(id, payload),
        deletePattern: (id) => client.deleteApiV1ApprovalsApprovalPatternsPatternId(id),
    };
}
function buildCampaignsService(client) {
    return {
        list: (status) => client.getApiV1Campaigns(status),
        get: (id) => client.getApiV1CampaignsCampaignId(id),
        create: (payload) => client.postApiV1Campaigns(payload),
        setStatus: (id, payload) => client.patchApiV1CampaignsCampaignIdStatus(id, payload),
        analytics: (id) => client.getApiV1CampaignsCampaignIdAnalytics(id),
        abTest: (id) => client.getApiV1CampaignsCampaignIdAbTest(id),
        funnel: (id) => client.getApiV1CampaignsCampaignIdAbTest(id),
        summary: (id) => client.getApiV1CampaignsCampaignIdSummary(id),
        variantStats: (id) => client.getApiV1CampaignsCampaignIdVariantStats(id),
        enrollments: (id, status) => client.getApiV1CampaignsCampaignIdEnrollments(id, status),
        enroll: (id, payload) => client.postApiV1CampaignsCampaignIdEnroll(id, payload),
        steps: (id) => client.getApiV1CampaignsCampaignIdSteps(id),
        addStep: (id, payload) => client.postApiV1CampaignsCampaignIdSteps(id, payload),
    };
}
function buildLearningService(client) {
    return {
        courses: {
            list: (p) => client.getApiV1LearningCourses(p?.category, p?.level, p?.visibility, p?.target_audience, p?.provider, p?.published_only, p?.limit, p?.offset),
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
            list: (p) => client.getApiV1LearningEnrollments(p?.user_id, p?.course_id, p?.limit, p?.offset),
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
function buildRecruitmentService(client) {
    return {
        pipeline: () => client.getApiV1RecruitmentPipeline(),
        openings: () => client.getApiV1RecruitmentOpenings(),
        timeToHire: () => client.getApiV1RecruitmentTimeToHire(),
        conversion: () => client.getApiV1RecruitmentConversion(),
        analytics: {
            funnel: (days) => client.getApiV1RecruitmentAnalyticsFunnel(days),
            placementRate: (days) => client.getApiV1RecruitmentAnalyticsPlacementRate(days),
            recruiterProductivity: (days) => client.getApiV1RecruitmentAnalyticsRecruiterProductivity(days),
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
function buildEmpireDigitalService(client) {
    return {
        cockpit: () => client.getApiV1EmpireDigitalCockpit(),
        scorecard: () => client.getApiV1EmpireDigitalScorecard(),
        founderReport: () => client.getApiV1EmpireDigitalFounderReport(),
        leads: {
            list: (p) => client.getApiV1EmpireDigitalLeads(p?.limit, p?.offset),
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
            campaigns: (limit) => client.getApiV1EmpireDigitalAnalyticsCampaigns(limit),
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
            list: (staleDays) => client.getApiV1EmpireDigitalIntelligence(staleDays),
            create: (payload) => client.postApiV1EmpireDigitalIntelligence(payload),
            review: (id, payload) => client.postApiV1EmpireDigitalIntelligenceItemIdReview(id, payload),
        },
    };
}
function buildEgpnService(client) {
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
function buildAutomationsService(client) {
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
            runDefinition: (id, payload) => client.postApiV1AutomationsWorkflowDefinitionsWorkflowDefinitionIdRun(id, payload),
        },
        copilot: {
            plan: (payload) => client.postApiV1AutomationsCopilotPlan(payload),
            planAndSave: (payload) => client.postApiV1AutomationsCopilotPlanAndSave(payload),
        },
        insights: () => client.getApiV1AutomationsInsights(),
        templates: () => client.getApiV1AutomationsTemplates(),
    };
}
function buildTasksService(client) {
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
function buildAfterServicesService(client) {
    return {
        journeys: {
            list: (p) => client.getApiV1AfterServicesJourneys(p?.empire_person_id, p?.journey_type, p?.status, p?.limit, p?.offset),
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
export function createSDK(client) {
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
