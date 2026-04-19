export declare const endpoints: {
    readonly activityGoals: {
        readonly listActivityGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/activity-goals";
        };
        readonly createActivityGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/activity-goals";
        };
        readonly getProgres: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRecord: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReset: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listActivityGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/activity-goals";
        };
        readonly createActivityGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/activity-goals";
        };
        readonly getProgres2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRecord2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReset2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly activityTimeline: {
        readonly listTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/activity/timeline";
        };
        readonly listTimeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/activity/timeline";
        };
    };
    readonly afterServicesAdmin: {
        readonly listAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/analytics";
        };
        readonly listBookings: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/bookings";
        };
        readonly updateBooking: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createResolve: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listListings: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/listings";
        };
        readonly deleteListing: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateListing: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/payouts";
        };
        readonly createPayout: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/payouts";
        };
        readonly updateStatu: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createProgram: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/settlement/programs";
        };
        readonly deleteProgram: (program_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateProgram: (program_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/settlement/tasks";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/settlement/tasks";
        };
        readonly deleteTask: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/analytics";
        };
        readonly listBookings2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/bookings";
        };
        readonly updateBooking2: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createResolve2: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listListings2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/listings";
        };
        readonly deleteListing2: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateListing2: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/payouts";
        };
        readonly createPayout2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/payouts";
        };
        readonly updateStatu2: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createProgram2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/settlement/programs";
        };
        readonly deleteProgram2: (program_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateProgram2: (program_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/settlement/tasks";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/settlement/tasks";
        };
        readonly deleteTask2: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly afterServicesHousing: {
        readonly createBooking: {
            readonly method: "POST";
            readonly path: "/api/v1/housing/bookings";
        };
        readonly listMy: {
            readonly method: "GET";
            readonly path: "/api/v1/housing/bookings/my";
        };
        readonly updateCancel: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings: {
            readonly method: "GET";
            readonly path: "/api/v1/housing/listings";
        };
        readonly getListing: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createBooking2: {
            readonly method: "POST";
            readonly path: "/api/v2/housing/bookings";
        };
        readonly listMy2: {
            readonly method: "GET";
            readonly path: "/api/v2/housing/bookings/my";
        };
        readonly updateCancel2: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings2: {
            readonly method: "GET";
            readonly path: "/api/v2/housing/listings";
        };
        readonly getListing2: (listing_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly afterServicesLandlord: {
        readonly listBookings: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/bookings";
        };
        readonly updateBooking: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/listings";
        };
        readonly createListing: {
            readonly method: "POST";
            readonly path: "/api/v1/landlord/listings";
        };
        readonly updateListing: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/payouts";
        };
        readonly createRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/landlord/payouts/request";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/stats";
        };
        readonly listBookings2: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/bookings";
        };
        readonly updateBooking2: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings2: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/listings";
        };
        readonly createListing2: {
            readonly method: "POST";
            readonly path: "/api/v2/landlord/listings";
        };
        readonly updateListing2: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts2: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/payouts";
        };
        readonly createRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/landlord/payouts/request";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/stats";
        };
    };
    readonly afterServicesPersonJourney: {
        readonly listJourneys: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services/journeys/";
        };
        readonly createJourney: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services/journeys/";
        };
        readonly getJourney: (journey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu: (journey_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listJourneys2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services/journeys/";
        };
        readonly createJourney2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services/journeys/";
        };
        readonly getJourney2: (journey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu2: (journey_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly afterServicesSettlement: {
        readonly createMessage: {
            readonly method: "POST";
            readonly path: "/api/v1/settlement/assistant/message";
        };
        readonly listProgram: {
            readonly method: "GET";
            readonly path: "/api/v1/settlement/program";
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/settlement/tasks";
        };
        readonly getTask: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateComplete: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createMessage2: {
            readonly method: "POST";
            readonly path: "/api/v2/settlement/assistant/message";
        };
        readonly listProgram2: {
            readonly method: "GET";
            readonly path: "/api/v2/settlement/program";
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v2/settlement/tasks";
        };
        readonly getTask2: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateComplete2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly agentTasks: {
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/agent-tasks/stats";
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/agent-tasks/tasks";
        };
        readonly getTask: (number: string) => {
            method: "GET";
            path: string;
        };
        readonly createApprove: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createReject: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/agent-tasks/webhook";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/agent-tasks/stats";
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v2/agent-tasks/tasks";
        };
        readonly getTask2: (number: string) => {
            method: "GET";
            path: string;
        };
        readonly createApprove2: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createReject2: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/agent-tasks/webhook";
        };
    };
    readonly agents: {
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/api/v1/agents/chat";
        };
        readonly createMultiTurn: {
            readonly method: "POST";
            readonly path: "/api/v1/agents/multi-turn";
        };
        readonly createChat2: {
            readonly method: "POST";
            readonly path: "/api/v2/agents/chat";
        };
        readonly createMultiTurn2: {
            readonly method: "POST";
            readonly path: "/api/v2/agents/multi-turn";
        };
    };
    readonly apiKeys: {
        readonly listApiKeys: {
            readonly method: "GET";
            readonly path: "/api/v1/api-keys";
        };
        readonly createApiKey: {
            readonly method: "POST";
            readonly path: "/api/v1/api-keys";
        };
        readonly deleteApiKey: (key_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listApiKeys2: {
            readonly method: "GET";
            readonly path: "/api/v2/api-keys";
        };
        readonly createApiKey2: {
            readonly method: "POST";
            readonly path: "/api/v2/api-keys";
        };
        readonly deleteApiKey2: (key_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly approvalWorkflows: {
        readonly listApprovalWorkflows: {
            readonly method: "GET";
            readonly path: "/api/v1/approval-workflows";
        };
        readonly createApprovalWorkflow: {
            readonly method: "POST";
            readonly path: "/api/v1/approval-workflows";
        };
        readonly deleteApprovalWorkflow: (workflow_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getApprovalWorkflow: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listApprovalWorkflows2: {
            readonly method: "GET";
            readonly path: "/api/v2/approval-workflows";
        };
        readonly createApprovalWorkflow2: {
            readonly method: "POST";
            readonly path: "/api/v2/approval-workflows";
        };
        readonly deleteApprovalWorkflow2: (workflow_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getApprovalWorkflow2: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps2: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly approvals: {
        readonly listApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals";
        };
        readonly listApprovalPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals/approval-patterns";
        };
        readonly deleteApprovalPattern: (pattern_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateApprovalPattern: (pattern_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/approvals/request";
        };
        readonly listTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals/timeline";
        };
        readonly createApprove: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals";
        };
        readonly listApprovalPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals/approval-patterns";
        };
        readonly deleteApprovalPattern2: (pattern_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateApprovalPattern2: (pattern_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/approvals/request";
        };
        readonly listTimeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals/timeline";
        };
        readonly createApprove2: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject2: (approval_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly auditTrail: {
        readonly listAuditTrail: {
            readonly method: "GET";
            readonly path: "/api/v1/audit-trail";
        };
        readonly createAuditTrail: {
            readonly method: "POST";
            readonly path: "/api/v1/audit-trail";
        };
        readonly getHistory: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/audit-trail/stats";
        };
        readonly listAuditTrail2: {
            readonly method: "GET";
            readonly path: "/api/v2/audit-trail";
        };
        readonly createAuditTrail2: {
            readonly method: "POST";
            readonly path: "/api/v2/audit-trail";
        };
        readonly getHistory2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/audit-trail/stats";
        };
    };
    readonly auth: {
        readonly createChangePassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/change-password";
        };
        readonly deleteDeleteAccount: {
            readonly method: "DELETE";
            readonly path: "/api/v1/auth/delete-account";
        };
        readonly createForgotPassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/forgot-password";
        };
        readonly createLogin: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/login";
        };
        readonly createLoginJson: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/login-json";
        };
        readonly createLogout: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/logout";
        };
        readonly createMagicLink: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/magic-link";
        };
        readonly createVerify: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/magic-link/verify";
        };
        readonly listMe: {
            readonly method: "GET";
            readonly path: "/api/v1/auth/me";
        };
        readonly createPushToken: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/push-token";
        };
        readonly createRefresh: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/refresh";
        };
        readonly createRegister: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/register";
        };
        readonly createResetPassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/reset-password";
        };
        readonly createChangePassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/change-password";
        };
        readonly deleteDeleteAccount2: {
            readonly method: "DELETE";
            readonly path: "/api/v2/auth/delete-account";
        };
        readonly createForgotPassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/forgot-password";
        };
        readonly createLogin2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/login";
        };
        readonly createLoginJson2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/login-json";
        };
        readonly createLogout2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/logout";
        };
        readonly createMagicLink2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/magic-link";
        };
        readonly createVerify2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/magic-link/verify";
        };
        readonly listMe2: {
            readonly method: "GET";
            readonly path: "/api/v2/auth/me";
        };
        readonly createPushToken2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/push-token";
        };
        readonly createRefresh2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/refresh";
        };
        readonly createRegister2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/register";
        };
        readonly createResetPassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/reset-password";
        };
    };
    readonly automations: {
        readonly createPlan: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/copilot/plan";
        };
        readonly createPlanAndSave: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/copilot/plan-and-save";
        };
        readonly listInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/insights";
        };
        readonly listJobQueueStats: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/job-queue-stats";
        };
        readonly listRules: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/rules";
        };
        readonly createRule: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/rules";
        };
        readonly createEvaluate: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/rules/evaluate";
        };
        readonly listAll: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/rules/executions/all";
        };
        readonly deleteRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExecutions: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/templates";
        };
        readonly createCreate: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTriggers: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/triggers";
        };
        readonly createTrigger: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/triggers";
        };
        readonly deleteTrigger: (trigger_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTrigger: (trigger_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTrigger: (trigger_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWorkflowDefinitions: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflow-definitions";
        };
        readonly createWorkflowDefinition: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/workflow-definitions";
        };
        readonly getWorkflowDefinition: (workflow_definition_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkflowDefinition: (workflow_definition_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createPublish: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRunPreview: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflowRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflow-runs";
        };
        readonly getWorkflowRun: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createPause: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflows: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflows";
        };
        readonly createWorkflow: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/workflows";
        };
        readonly getWorkflow: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAdvance: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/copilot/plan";
        };
        readonly createPlanAndSave2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/copilot/plan-and-save";
        };
        readonly listInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/insights";
        };
        readonly listJobQueueStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/job-queue-stats";
        };
        readonly listRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/rules";
        };
        readonly createRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/rules";
        };
        readonly createEvaluate2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/rules/evaluate";
        };
        readonly listAll2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/rules/executions/all";
        };
        readonly deleteRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExecutions2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/templates";
        };
        readonly createCreate2: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTriggers2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/triggers";
        };
        readonly createTrigger2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/triggers";
        };
        readonly deleteTrigger2: (trigger_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTrigger2: (trigger_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTrigger2: (trigger_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWorkflowDefinitions2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflow-definitions";
        };
        readonly createWorkflowDefinition2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/workflow-definitions";
        };
        readonly getWorkflowDefinition2: (workflow_definition_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkflowDefinition2: (workflow_definition_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createPublish2: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun3: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRunPreview2: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflowRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflow-runs";
        };
        readonly getWorkflowRun2: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createPause2: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume3: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry2: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflows2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflows";
        };
        readonly createWorkflow2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/workflows";
        };
        readonly getWorkflow2: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAdvance2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume4: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun4: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly beta: {
        readonly listActivityGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/activity-goals";
        };
        readonly createActivityGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/activity-goals";
        };
        readonly getProgres: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRecord: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReset: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/activity/timeline";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/agent-tasks/stats";
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/agent-tasks/tasks";
        };
        readonly getTask: (number: string) => {
            method: "GET";
            path: string;
        };
        readonly createApprove: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createReject: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/agent-tasks/webhook";
        };
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/api/v1/agents/chat";
        };
        readonly createMultiTurn: {
            readonly method: "POST";
            readonly path: "/api/v1/agents/multi-turn";
        };
        readonly listFlags: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/flags";
        };
        readonly createResolve: (flag_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInvites: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/invites";
        };
        readonly createInvite: {
            readonly method: "POST";
            readonly path: "/api/v1/api/v1/employee-onboarding/invites";
        };
        readonly listToken: (invite_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSubmissions: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/submissions";
        };
        readonly getSubmission: (submission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReview: (submission_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listActions: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/actions";
        };
        readonly createCeoGuide: {
            readonly method: "POST";
            readonly path: "/api/v1/api/v1/manager-watch/ceo-guide";
        };
        readonly listCeoGuideHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/ceo-guide-history";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/stats";
        };
        readonly getOnboard: (token: string) => {
            method: "GET";
            path: string;
        };
        readonly createSave: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly listApprovalWorkflows: {
            readonly method: "GET";
            readonly path: "/api/v1/approval-workflows";
        };
        readonly createApprovalWorkflow: {
            readonly method: "POST";
            readonly path: "/api/v1/approval-workflows";
        };
        readonly deleteApprovalWorkflow: (workflow_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getApprovalWorkflow: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPlan: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/copilot/plan";
        };
        readonly createPlanAndSave: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/copilot/plan-and-save";
        };
        readonly listInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/insights";
        };
        readonly listJobQueueStats: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/job-queue-stats";
        };
        readonly listRules: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/rules";
        };
        readonly createRule: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/rules";
        };
        readonly createEvaluate: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/rules/evaluate";
        };
        readonly listAll: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/rules/executions/all";
        };
        readonly deleteRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExecutions: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/templates";
        };
        readonly createCreate: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTriggers: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/triggers";
        };
        readonly createTrigger: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/triggers";
        };
        readonly deleteTrigger: (trigger_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTrigger: (trigger_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTrigger: (trigger_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWorkflowDefinitions: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflow-definitions";
        };
        readonly createWorkflowDefinition: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/workflow-definitions";
        };
        readonly getWorkflowDefinition: (workflow_definition_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkflowDefinition: (workflow_definition_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createPublish: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRunPreview: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflowRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflow-runs";
        };
        readonly getWorkflowRun: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createPause: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflows: {
            readonly method: "GET";
            readonly path: "/api/v1/automations/workflows";
        };
        readonly createWorkflow: {
            readonly method: "POST";
            readonly path: "/api/v1/automations/workflows";
        };
        readonly getWorkflow: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAdvance: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createCtoStrategicReview: {
            readonly method: "POST";
            readonly path: "/api/v1/brain/cto-strategic-review";
        };
        readonly listExecutive: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/executive";
        };
        readonly listPlans: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/plans";
        };
        readonly createDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/briefing/plans/draft";
        };
        readonly createApprove2: (plan_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDone: (plan_id: number, task_index: string) => {
            method: "POST";
            path: string;
        };
        readonly listTeam: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/team";
        };
        readonly listToday: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/today";
        };
        readonly listBulkActionLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/bulk-action-logs";
        };
        readonly createBulkActionLog: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk-action-logs";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/bulk-action-logs/summary";
        };
        readonly getBulkActionLog: (log_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCallLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/call-logs";
        };
        readonly createCallLog: {
            readonly method: "POST";
            readonly path: "/api/v1/call-logs";
        };
        readonly listStats3: {
            readonly method: "GET";
            readonly path: "/api/v1/call-logs/stats";
        };
        readonly getCallLog: (call_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/campaigns";
        };
        readonly createCampaign: {
            readonly method: "POST";
            readonly path: "/api/v1/campaigns";
        };
        readonly getCampaign: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAbTest: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEnroll: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu: (campaign_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSummary2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVariantStats: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createVariant: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEvent2: (campaign_id: number, variant_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStream: {
            readonly method: "POST";
            readonly path: "/api/v1/chat/stream";
        };
        readonly createMemory: {
            readonly method: "POST";
            readonly path: "/api/v1/clone/memory";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/clone/memory/search";
        };
        readonly listStats4: {
            readonly method: "GET";
            readonly path: "/api/v1/clone/memory/stats";
        };
        readonly createReinforce: (memory_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCoaching: {
            readonly method: "GET";
            readonly path: "/api/v1/coaching";
        };
        readonly createDepartment: (department_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEmployee: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInsights2: {
            readonly method: "GET";
            readonly path: "/api/v1/coaching/insights";
        };
        readonly createOrg: {
            readonly method: "POST";
            readonly path: "/api/v1/coaching/org";
        };
        readonly createOutcome: {
            readonly method: "POST";
            readonly path: "/api/v1/coaching/outcomes";
        };
        readonly listRecommendations: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReport: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getCoaching: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApprove: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateReject: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/activity";
        };
        readonly listAiUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/ai-usage";
        };
        readonly listCockpit: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/cockpit";
        };
        readonly listProjects: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/projects";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/projects";
        };
        readonly deleteProject: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/scorecard";
        };
        readonly listSprints: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/sprints";
        };
        readonly createSprint: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/sprints";
        };
        readonly deleteSprint: (sprint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSprint: (sprint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSprint: (sprint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/tasks";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/tasks";
        };
        readonly deleteTask: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTask2: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommands: {
            readonly method: "GET";
            readonly path: "/api/v1/commands";
        };
        readonly createCommand: {
            readonly method: "POST";
            readonly path: "/api/v1/commands";
        };
        readonly listPayouts: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/payouts";
        };
        readonly createPayout: {
            readonly method: "POST";
            readonly path: "/api/v1/commissions/payouts";
        };
        readonly updatePayout: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRules2: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/rules";
        };
        readonly createRule2: {
            readonly method: "POST";
            readonly path: "/api/v1/commissions/rules";
        };
        readonly deleteRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary3: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/summary";
        };
        readonly listCompetitors: {
            readonly method: "GET";
            readonly path: "/api/v1/competitors";
        };
        readonly createCompetitor: {
            readonly method: "POST";
            readonly path: "/api/v1/competitors";
        };
        readonly createDealLink: {
            readonly method: "POST";
            readonly path: "/api/v1/competitors/deal-link";
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWinLossStats: {
            readonly method: "GET";
            readonly path: "/api/v1/competitors/win-loss-stats";
        };
        readonly deleteCompetitor: (competitor_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCompetitor: (competitor_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompetitor: (competitor_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listCounts: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-lifecycle/counts";
        };
        readonly getCurrent: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getHistory: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-lifecycle/transition";
        };
        readonly listContactMergeLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-merge-logs";
        };
        readonly createContactMergeLog: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-merge-logs";
        };
        readonly listStats5: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-merge-logs/stats";
        };
        readonly getContactMergeLog: (merge_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactRelationships: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-relationships";
        };
        readonly createContactRelationship: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-relationships";
        };
        readonly deleteContactRelationship: (rel_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactRelationship: (rel_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createContactScore: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-scores";
        };
        readonly getContactScore: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactSegments: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-segments";
        };
        readonly createContactSegment: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-segments";
        };
        readonly deleteContactSegment: (segment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactSegment: (segment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate: (segment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent3: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-timeline/events";
        };
        readonly getEvent: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listConversionFunnels: {
            readonly method: "GET";
            readonly path: "/api/v1/conversion-funnels";
        };
        readonly createConversionFunnel: {
            readonly method: "POST";
            readonly path: "/api/v1/conversion-funnels";
        };
        readonly getBottleneck: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getSummary2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly listCustomReports: {
            readonly method: "GET";
            readonly path: "/api/v1/custom-reports";
        };
        readonly createCustomReport: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-reports";
        };
        readonly deleteCustomReport: (report_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCustomReport: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCustomReport: (report_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createRun3: (report_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCustomerHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/customer-health";
        };
        readonly createCustomerHealth: {
            readonly method: "POST";
            readonly path: "/api/v1/customer-health";
        };
        readonly listSummary4: {
            readonly method: "GET";
            readonly path: "/api/v1/customer-health/summary";
        };
        readonly getCustomerHealth: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDashboardWidgets: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard-widgets";
        };
        readonly createDashboardWidget: {
            readonly method: "POST";
            readonly path: "/api/v1/dashboard-widgets";
        };
        readonly listCatalog: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard-widgets/catalog";
        };
        readonly deleteDashboardWidget: (widget_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDashboardWidget: (widget_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDataRetention: {
            readonly method: "GET";
            readonly path: "/api/v1/data-retention";
        };
        readonly createDataRetention: {
            readonly method: "POST";
            readonly path: "/api/v1/data-retention";
        };
        readonly deleteDataRetention: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDataRetention: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate2: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVerify: {
            readonly method: "GET";
            readonly path: "/api/v1/data-security/audit/verify";
        };
        readonly listDsr: {
            readonly method: "GET";
            readonly path: "/api/v1/data-security/dsr/";
        };
        readonly createDsr: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/dsr/";
        };
        readonly getDsr: (dsr_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove3: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute2: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject2: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createScan: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/hygiene/scan";
        };
        readonly createRun4: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/retention/run";
        };
        readonly listPower: {
            readonly method: "GET";
            readonly path: "/api/v1/data/branding/power";
        };
        readonly createCollect: {
            readonly method: "POST";
            readonly path: "/api/v1/data/collect";
        };
        readonly listBoundary: {
            readonly method: "GET";
            readonly path: "/api/v1/data/ethics/boundary";
        };
        readonly createDetect: {
            readonly method: "POST";
            readonly path: "/api/v1/data/fraud/detect";
        };
        readonly listLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/data/fraud/layer";
        };
        readonly listLayer2: {
            readonly method: "GET";
            readonly path: "/api/v1/data/media/layer";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v1/data/media/projects";
        };
        readonly createMeetingCoach: {
            readonly method: "POST";
            readonly path: "/api/v1/data/meeting-coach";
        };
        readonly createAnalyze: {
            readonly method: "POST";
            readonly path: "/api/v1/data/mobile-capture/analyze";
        };
        readonly createUploadAnalyze: {
            readonly method: "POST";
            readonly path: "/api/v1/data/mobile-capture/upload-analyze";
        };
        readonly createDigest: {
            readonly method: "POST";
            readonly path: "/api/v1/data/news/digest";
        };
        readonly getOcrJob: (job_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUploadAnalyze2: {
            readonly method: "POST";
            readonly path: "/api/v1/data/photo-character/upload-analyze";
        };
        readonly listManagementLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/data/social/management-layer";
        };
        readonly createDetect2: {
            readonly method: "POST";
            readonly path: "/api/v1/data/threats/detect";
        };
        readonly listLayer3: {
            readonly method: "GET";
            readonly path: "/api/v1/data/threats/layer";
        };
        readonly createTrain: {
            readonly method: "POST";
            readonly path: "/api/v1/data/threats/train";
        };
        readonly createTrainPro: {
            readonly method: "POST";
            readonly path: "/api/v1/data/train-pro";
        };
        readonly createDealCollaborator: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-collaborators";
        };
        readonly getUser: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealCollaborator: (collab_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealCollaborator: (collab_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly getDealCollaborator: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDealDependency: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-dependencies";
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBlockers: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealDependency: (dep_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateResolve: (dep_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listDealRisks: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-risks";
        };
        readonly createDealRisk: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-risks";
        };
        readonly listSummary5: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-risks/summary";
        };
        readonly getDealRisk: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDealRotations: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-rotations";
        };
        readonly createDealRotation: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-rotations";
        };
        readonly deleteDealRotation: (queue_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDealRotation: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDealRotation: (queue_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createAssign: (queue_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAssignments: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listFairness: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDealSplit: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-splits";
        };
        readonly getDeal3: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary6: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealSplit: (split_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealSplit: (split_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listBottlenecks: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-velocity/bottlenecks";
        };
        readonly getHistory2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition2: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-velocity/transition";
        };
        readonly listVelocity: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-velocity/velocity";
        };
        readonly listPipeline: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast/pipeline";
        };
        readonly listWinRates: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast/win-rates";
        };
        readonly listRequirements: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/requirements";
        };
        readonly createRequirement: {
            readonly method: "POST";
            readonly path: "/api/v1/deals/requirements";
        };
        readonly getChecklist: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly getValidate: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteRequirement: (req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly createCheck: (req_id: number, deal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDecisionCards: {
            readonly method: "GET";
            readonly path: "/api/v1/decision-cards";
        };
        readonly createDecisionCard: {
            readonly method: "POST";
            readonly path: "/api/v1/decision-cards";
        };
        readonly listPendingCount: {
            readonly method: "GET";
            readonly path: "/api/v1/decision-cards/pending-count";
        };
        readonly getDecisionCard: (card_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecide: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDefer: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDedupRules: {
            readonly method: "GET";
            readonly path: "/api/v1/dedup-rules";
        };
        readonly createDedupRule: {
            readonly method: "POST";
            readonly path: "/api/v1/dedup-rules";
        };
        readonly createCheck2: {
            readonly method: "POST";
            readonly path: "/api/v1/dedup-rules/check";
        };
        readonly deleteDedupRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDedupRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDedupRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listDocumentSigning: {
            readonly method: "GET";
            readonly path: "/api/v1/document-signing";
        };
        readonly createDocumentSigning: {
            readonly method: "POST";
            readonly path: "/api/v1/document-signing";
        };
        readonly listStats6: {
            readonly method: "GET";
            readonly path: "/api/v1/document-signing/stats";
        };
        readonly getDocumentSigning: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecline: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSign: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDocumentTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/document-templates";
        };
        readonly createDocumentTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/document-templates";
        };
        readonly deleteDocumentTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDocumentTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDocumentTemplate: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/drip-analytics/events";
        };
        readonly createEvent4: {
            readonly method: "POST";
            readonly path: "/api/v1/drip-analytics/events";
        };
        readonly getStep: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary3: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDripCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/drip-campaigns";
        };
        readonly createDripCampaign: {
            readonly method: "POST";
            readonly path: "/api/v1/drip-campaigns";
        };
        readonly createUnsubscribe: (enrollment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteDripCampaign: (campaign_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDripCampaign: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDripCampaign: (campaign_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createEnroll2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps3: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep3: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDuplicates: {
            readonly method: "GET";
            readonly path: "/api/v1/duplicates";
        };
        readonly createCheck3: {
            readonly method: "POST";
            readonly path: "/api/v1/duplicates/check";
        };
        readonly listContacts: {
            readonly method: "GET";
            readonly path: "/api/v1/duplicates/scan/contacts";
        };
        readonly updateResolve2: (match_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEmailAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/email-analytics";
        };
        readonly createEmailAnalytic: {
            readonly method: "POST";
            readonly path: "/api/v1/email-analytics";
        };
        readonly listEngagement: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMetrics: (email_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOverview: {
            readonly method: "GET";
            readonly path: "/api/v1/email-analytics/overview";
        };
        readonly listEmailSequences: {
            readonly method: "GET";
            readonly path: "/api/v1/email-sequences";
        };
        readonly createEmailSequence: {
            readonly method: "POST";
            readonly path: "/api/v1/email-sequences";
        };
        readonly listStats7: {
            readonly method: "GET";
            readonly path: "/api/v1/email-sequences/stats";
        };
        readonly deleteEmailSequence: (sequence_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailSequence: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailSequence: (sequence_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps4: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep4: (sequence_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteStep: (sequence_id: number, step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailSuppressions: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions";
        };
        readonly createEmailSuppression: {
            readonly method: "POST";
            readonly path: "/api/v1/email-suppressions";
        };
        readonly listCheck: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions/check";
        };
        readonly listStats8: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions/stats";
        };
        readonly deleteEmailSuppression: (suppression_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailWarmup: {
            readonly method: "GET";
            readonly path: "/api/v1/email-warmup";
        };
        readonly createEmailWarmup: {
            readonly method: "POST";
            readonly path: "/api/v1/email-warmup";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/email-warmup/status";
        };
        readonly updateAdvance: (warmup_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listEnrichmentQueue: {
            readonly method: "GET";
            readonly path: "/api/v1/enrichment-queue";
        };
        readonly createEnrichmentQueue: {
            readonly method: "POST";
            readonly path: "/api/v1/enrichment-queue";
        };
        readonly createBatch: {
            readonly method: "POST";
            readonly path: "/api/v1/enrichment-queue/batch";
        };
        readonly listStats9: {
            readonly method: "GET";
            readonly path: "/api/v1/enrichment-queue/stats";
        };
        readonly updateComplete: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCountries: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/countries";
        };
        readonly createCountry: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/countries";
        };
        readonly deleteCountry: (country_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCountry: (country_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCountry: (country_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCourses: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/courses";
        };
        readonly createCours: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/courses";
        };
        readonly createMatch: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/courses/match";
        };
        readonly deleteCours: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScholarships: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/scholarships";
        };
        readonly createScholarship: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/scholarships";
        };
        readonly createMatch2: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/scholarships/match";
        };
        readonly deleteScholarship: (scholarship_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getScholarship: (scholarship_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateScholarship: (scholarship_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listVisaRequirements: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/visa-requirements";
        };
        readonly createVisaRequirement: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/visa-requirements";
        };
        readonly deleteVisaRequirement: (visa_req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getVisaRequirement: (visa_req_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateVisaRequirement: (visa_req_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExperiments: {
            readonly method: "GET";
            readonly path: "/api/v1/experiments";
        };
        readonly createExperiment: {
            readonly method: "POST";
            readonly path: "/api/v1/experiments";
        };
        readonly listVelocity2: {
            readonly method: "GET";
            readonly path: "/api/v1/experiments/velocity";
        };
        readonly createComplete: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart2: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFeatureRequests: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-requests";
        };
        readonly createFeatureRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/feature-requests";
        };
        readonly listStats10: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-requests/stats";
        };
        readonly getFeatureRequest: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureRequest: (request_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createVote: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createFieldAudit: {
            readonly method: "POST";
            readonly path: "/api/v1/field-audit";
        };
        readonly createBatch2: {
            readonly method: "POST";
            readonly path: "/api/v1/field-audit/batch";
        };
        readonly getEntity: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getField: (entity_type: string, entity_id: number, field_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listRecent: {
            readonly method: "GET";
            readonly path: "/api/v1/field-audit/recent";
        };
        readonly listForecastRollups: {
            readonly method: "GET";
            readonly path: "/api/v1/forecast-rollups";
        };
        readonly createForecastRollup: {
            readonly method: "POST";
            readonly path: "/api/v1/forecast-rollups";
        };
        readonly getSummary4: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getForecastRollup: (rollup_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listForecastScenarios: {
            readonly method: "GET";
            readonly path: "/api/v1/forecast-scenarios";
        };
        readonly createForecastScenario: {
            readonly method: "POST";
            readonly path: "/api/v1/forecast-scenarios";
        };
        readonly getCompare: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteForecastScenario: (scenario_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForecastScenario: (scenario_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForecastScenario: (scenario_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listForms: {
            readonly method: "GET";
            readonly path: "/api/v1/forms";
        };
        readonly createForm: {
            readonly method: "POST";
            readonly path: "/api/v1/forms";
        };
        readonly deleteForm: (form_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForm: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForm: (form_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSubmissions2: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSubmit2: (form_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createApplyGovernance: {
            readonly method: "POST";
            readonly path: "/api/v1/github/apply-governance";
        };
        readonly createCeoSync: {
            readonly method: "POST";
            readonly path: "/api/v1/github/ceo-sync";
        };
        readonly listRisks: {
            readonly method: "GET";
            readonly path: "/api/v1/github/risks";
        };
        readonly listSummary7: {
            readonly method: "GET";
            readonly path: "/api/v1/github/summary";
        };
        readonly listGoalCascades: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades";
        };
        readonly createGoalCascade: {
            readonly method: "POST";
            readonly path: "/api/v1/goal-cascades";
        };
        readonly listChildren: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/children";
        };
        readonly listParents: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/parents";
        };
        readonly listTree: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/tree";
        };
        readonly deleteGoalCascade: (link_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listAutomationLevel: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/automation-level";
        };
        readonly listDashboard: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/dashboard";
        };
        readonly createEvaluate2: {
            readonly method: "POST";
            readonly path: "/api/v1/governance/evaluate";
        };
        readonly listPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policies";
        };
        readonly createPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/governance/policies";
        };
        readonly updatePolicy: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPolicyDrift: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-drift";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-drift/trend";
        };
        readonly listPolicyEffectiveness: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-effectiveness";
        };
        readonly listTrend3: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listViolations: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/violations";
        };
        readonly createResolve2: (violation_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAlerts: {
            readonly method: "GET";
            readonly path: "/api/v1/health-monitor/alerts";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v1/health-monitor/status";
        };
        readonly listImportExportPresets: {
            readonly method: "GET";
            readonly path: "/api/v1/import-export-presets";
        };
        readonly createImportExportPreset: {
            readonly method: "POST";
            readonly path: "/api/v1/import-export-presets";
        };
        readonly deleteImportExportPreset: (preset_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listImportMappings: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings";
        };
        readonly createImportMapping: {
            readonly method: "POST";
            readonly path: "/api/v1/import-mappings";
        };
        readonly createImport: {
            readonly method: "POST";
            readonly path: "/api/v1/import-mappings/imports";
        };
        readonly listHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings/imports/history";
        };
        readonly listStats11: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings/imports/stats";
        };
        readonly deleteImportMapping: (mapping_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getImportMapping: (mapping_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateImportMapping: (mapping_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listAnomalies: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/anomalies";
        };
        readonly listCrossLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/cross-layer";
        };
        readonly listDiff: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/diff";
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/health";
        };
        readonly listPredictions: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/predictions";
        };
        readonly listSummary8: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/summary";
        };
        readonly listTraces: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/traces";
        };
        readonly listInternalComments: {
            readonly method: "GET";
            readonly path: "/api/v1/internal-comments";
        };
        readonly createInternalComment: {
            readonly method: "POST";
            readonly path: "/api/v1/internal-comments";
        };
        readonly deleteInternalComment: (comment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listKnowledgeBase: {
            readonly method: "GET";
            readonly path: "/api/v1/knowledge-base";
        };
        readonly createKnowledgeBase: {
            readonly method: "POST";
            readonly path: "/api/v1/knowledge-base";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v1/knowledge-base/search";
        };
        readonly deleteKnowledgeBase: (article_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getKnowledgeBase: (article_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateKnowledgeBase: (article_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createHelpful: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createView: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAiSkillRouting: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/ai-skill-routing";
        };
        readonly listBrandingPower: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/branding-power";
        };
        readonly listCloneMarketingSales: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/clone-marketing-sales";
        };
        readonly listCloneTraining: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/clone-training";
        };
        readonly listEmployeeManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/employee-management";
        };
        readonly listEmployeePerformance: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/employee-performance";
        };
        readonly listEthicalBoundary: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/ethical-boundary";
        };
        readonly listFraudDetection: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/fraud-detection";
        };
        readonly listMarketing: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/marketing";
        };
        readonly listMediaEditing: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/media-editing";
        };
        readonly listOpportunityAssociation: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/opportunity-association";
        };
        readonly listRevenueManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/revenue-management";
        };
        readonly createSnapshot: {
            readonly method: "POST";
            readonly path: "/api/v1/layers/snapshot";
        };
        readonly listSocialManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/social-management";
        };
        readonly listStaffProsperity: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/staff-prosperity";
        };
        readonly listStudy: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/study";
        };
        readonly listThreatDetection: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/threat-detection";
        };
        readonly listTraining: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/training";
        };
        readonly listTrainingStaff: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/training-staff";
        };
        readonly getTrend: (layer_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/trends";
        };
        readonly listCompanies: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-routing/companies";
        };
        readonly createResolve3: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-routing/resolve";
        };
        readonly listRules3: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-routing/rules";
        };
        readonly createRule3: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-routing/rules";
        };
        readonly deleteRule3: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule3: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listLeadScoreRules: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-score-rules";
        };
        readonly createLeadScoreRule: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-score-rules";
        };
        readonly createEvaluate3: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-score-rules/evaluate";
        };
        readonly deleteLeadScoreRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLeadScoreRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeadScoreRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLeaderboard: {
            readonly method: "GET";
            readonly path: "/api/v1/leaderboard";
        };
        readonly createLeaderboard: {
            readonly method: "POST";
            readonly path: "/api/v1/leaderboard";
        };
        readonly getHistory3: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listActive: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/active";
        };
        readonly createCheckin: {
            readonly method: "POST";
            readonly path: "/api/v1/locations/checkin";
        };
        readonly createCheckout: (checkin_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCheckins: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/checkins";
        };
        readonly listConsent: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/consent";
        };
        readonly updateConsent: {
            readonly method: "PATCH";
            readonly path: "/api/v1/locations/consent";
        };
        readonly listAll2: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/consent/all";
        };
        readonly listHistory2: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/history";
        };
        readonly createTrack: {
            readonly method: "POST";
            readonly path: "/api/v1/locations/track";
        };
        readonly listMedia: {
            readonly method: "GET";
            readonly path: "/api/v1/media";
        };
        readonly listReport: {
            readonly method: "GET";
            readonly path: "/api/v1/media/report";
        };
        readonly listSearch3: {
            readonly method: "GET";
            readonly path: "/api/v1/media/search";
        };
        readonly listStats12: {
            readonly method: "GET";
            readonly path: "/api/v1/media/stats";
        };
        readonly createUpload: {
            readonly method: "POST";
            readonly path: "/api/v1/media/upload";
        };
        readonly createBulk: {
            readonly method: "POST";
            readonly path: "/api/v1/media/upload/bulk";
        };
        readonly deleteMedia: (attachment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMedia: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMedia: (attachment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAnalyze2: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDownload: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createOrganize: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listMeetingNotes: {
            readonly method: "GET";
            readonly path: "/api/v1/meeting-notes";
        };
        readonly createMeetingNote: {
            readonly method: "POST";
            readonly path: "/api/v1/meeting-notes";
        };
        readonly deleteMeetingNote: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMeetingNote: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMeetingNote: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContext: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/context";
        };
        readonly createContext: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/context";
        };
        readonly listProfile: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/profile";
        };
        readonly createProfile: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/profile";
        };
        readonly deleteProfile: (entry_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listTeam2: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/team";
        };
        readonly createTeam: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/team";
        };
        readonly updateTeam: (member_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotificationRules: {
            readonly method: "GET";
            readonly path: "/api/v1/notification-rules";
        };
        readonly createNotificationRule: {
            readonly method: "POST";
            readonly path: "/api/v1/notification-rules";
        };
        readonly listEvaluate3: {
            readonly method: "GET";
            readonly path: "/api/v1/notification-rules/evaluate";
        };
        readonly deleteNotificationRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateNotificationRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAiCalls: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-calls";
        };
        readonly listAiCosts: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-costs";
        };
        readonly listAiReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-reliability";
        };
        readonly listDecisionSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-summary";
        };
        readonly listDecisionTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-timeline";
        };
        readonly listDecisionTraces: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-traces";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/events";
        };
        readonly listSchedulerHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/scheduler-health";
        };
        readonly listSignals: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/signals";
        };
        readonly listStorage: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/storage";
        };
        readonly listSummary9: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/summary";
        };
        readonly listWebhookReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/webhook-reliability";
        };
        readonly listPlan: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/plan";
        };
        readonly getLimit: (resource: string) => {
            method: "GET";
            path: string;
        };
        readonly createSignup: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/signup";
        };
        readonly createUpgrade: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/upgrade";
        };
        readonly listApiUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/api-usage";
        };
        readonly createDispatchPlan: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/dispatch-plan";
        };
        readonly createFeedback: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/feedback";
        };
        readonly listIdentityMap: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/identity-map";
        };
        readonly createIdentityMap: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/identity-map";
        };
        readonly createProfile2: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/profile";
        };
        readonly getProfile: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScores: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/scores";
        };
        readonly listSummary10: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/summary";
        };
        readonly createTrain2: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/train";
        };
        readonly listTrainingPlan: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/training-plan";
        };
        readonly createGenerate: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/training-plan/generate";
        };
        readonly updateTrainingPlan: (plan_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createWeeklyMetric: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/compute/weekly-metrics";
        };
        readonly createDailyRun: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/daily-run";
        };
        readonly listDailyRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/daily-runs";
        };
        readonly listDecisionLog: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/decision-log";
        };
        readonly createDecisionLog: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/decision-log";
        };
        readonly listEmployees: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/employees";
        };
        readonly createEmployee2: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/employees";
        };
        readonly getEmployee: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmployee: (employee_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createOffboard: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents3: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/events";
        };
        readonly listCommandMode: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/incident/command-mode";
        };
        readonly listTrend4: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/incident/command-mode/trend";
        };
        readonly listTeamWorkSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/integrations/team-work-summary";
        };
        readonly listPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/policies";
        };
        readonly createActivate: (policy_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createGenerate2: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/policy/generate";
        };
        readonly createProject3: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/projects";
        };
        readonly updateStatu2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deletePurge: (entity_type: string, entity_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWeekly: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/reports/weekly";
        };
        readonly createWeekly: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/reports/weekly";
        };
        readonly createRestore: (entity_type: string, entity_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createClickup: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/clickup";
        };
        readonly createGithub: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/github";
        };
        readonly createGithubCicd: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/github-cicd";
        };
        readonly createGmail: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/gmail";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/tasks";
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTeamActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/team-activity";
        };
        readonly listBriefing: {
            readonly method: "GET";
            readonly path: "/api/v1/orchestrator/briefing";
        };
        readonly getWorkspaceHealth: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOutboundWebhooks: {
            readonly method: "GET";
            readonly path: "/api/v1/outbound-webhooks";
        };
        readonly createOutboundWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/outbound-webhooks";
        };
        readonly listTestMatch: {
            readonly method: "GET";
            readonly path: "/api/v1/outbound-webhooks/test-match";
        };
        readonly deleteOutboundWebhook: (webhook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateOutboundWebhook: (webhook_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAlerts2: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/alerts";
        };
        readonly getDepartment: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOkrProgress: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getEmployee2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCoaching: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLearningInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/learning-insights";
        };
        readonly listOrg: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/org";
        };
        readonly listOrgChart: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/org-chart";
        };
        readonly createOutcome2: {
            readonly method: "POST";
            readonly path: "/api/v1/performance/outcomes";
        };
        readonly listSkillsMatrix: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/skills-matrix";
        };
        readonly listTop: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/top";
        };
        readonly listWorkloadBalance: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/workload-balance";
        };
        readonly listDashboard2: {
            readonly method: "GET";
            readonly path: "/api/v1/personas/dashboard";
        };
        readonly listPipelineSnapshots: {
            readonly method: "GET";
            readonly path: "/api/v1/pipeline-snapshots";
        };
        readonly createPipelineSnapshot: {
            readonly method: "POST";
            readonly path: "/api/v1/pipeline-snapshots";
        };
        readonly listTrend5: {
            readonly method: "GET";
            readonly path: "/api/v1/pipeline-snapshots/trend";
        };
        readonly getPipelineSnapshot: (snapshot_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDevices: {
            readonly method: "GET";
            readonly path: "/api/v1/platform-analytics/devices";
        };
        readonly listSummary11: {
            readonly method: "GET";
            readonly path: "/api/v1/platform-analytics/summary";
        };
        readonly listPlaybooks: {
            readonly method: "GET";
            readonly path: "/api/v1/playbooks";
        };
        readonly createPlaybook: {
            readonly method: "POST";
            readonly path: "/api/v1/playbooks";
        };
        readonly deleteStep2: (step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deletePlaybook: (playbook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPlaybook: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePlaybook: (playbook_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSteps5: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep5: (playbook_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProductBundles: {
            readonly method: "GET";
            readonly path: "/api/v1/product-bundles";
        };
        readonly createProductBundle: {
            readonly method: "POST";
            readonly path: "/api/v1/product-bundles";
        };
        readonly deleteProductBundle: (bundle_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProductBundle: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProductBundle: (bundle_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listItems: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createItem: (bundle_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPricing: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listQuoteApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/quote-approvals";
        };
        readonly createQuoteApproval: {
            readonly method: "POST";
            readonly path: "/api/v1/quote-approvals";
        };
        readonly listPending: {
            readonly method: "GET";
            readonly path: "/api/v1/quote-approvals/pending";
        };
        readonly updateDecide: (approval_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRateLimits: {
            readonly method: "GET";
            readonly path: "/api/v1/rate-limits";
        };
        readonly createRateLimit: {
            readonly method: "POST";
            readonly path: "/api/v1/rate-limits";
        };
        readonly listUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/rate-limits/usage";
        };
        readonly deleteRateLimit: (config_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRateLimit: (config_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRecurringInvoices: {
            readonly method: "GET";
            readonly path: "/api/v1/recurring-invoices";
        };
        readonly createRecurringInvoice: {
            readonly method: "POST";
            readonly path: "/api/v1/recurring-invoices";
        };
        readonly listDue: {
            readonly method: "GET";
            readonly path: "/api/v1/recurring-invoices/due";
        };
        readonly deleteRecurringInvoice: (invoice_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecurringInvoice: (invoice_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createGenerate3: (invoice_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReferrals: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals";
        };
        readonly createReferral: {
            readonly method: "POST";
            readonly path: "/api/v1/referrals";
        };
        readonly listSources: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals/sources";
        };
        readonly createSource: {
            readonly method: "POST";
            readonly path: "/api/v1/referrals/sources";
        };
        readonly getSource: (source_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats13: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals/stats";
        };
        readonly createConvert: (referral_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSchedules: {
            readonly method: "GET";
            readonly path: "/api/v1/reports/schedules";
        };
        readonly createSchedule: {
            readonly method: "POST";
            readonly path: "/api/v1/reports/schedules";
        };
        readonly deleteSchedule: (schedule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSchedule: (schedule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRevenue: {
            readonly method: "GET";
            readonly path: "/api/v1/revenue";
        };
        readonly createRevenue: {
            readonly method: "POST";
            readonly path: "/api/v1/revenue";
        };
        readonly listRevenueGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/revenue-goals";
        };
        readonly createRevenueGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/revenue-goals";
        };
        readonly getGapAnalysi: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly updateProgres: (goal_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly getSummary5: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getRevenue: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRevenue: (entry_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRoleDashboards: {
            readonly method: "GET";
            readonly path: "/api/v1/role-dashboards";
        };
        readonly updateRoleDashboard: {
            readonly method: "PUT";
            readonly path: "/api/v1/role-dashboards";
        };
        readonly getRoleDashboard: (role: string) => {
            method: "GET";
            path: string;
        };
        readonly getEmployeeStat: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listInteractions: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/interactions";
        };
        readonly createInteraction: {
            readonly method: "POST";
            readonly path: "/api/v1/sales/interactions";
        };
        readonly listLossPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/loss-patterns";
        };
        readonly listPlaybook: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/playbook";
        };
        readonly listWinPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/win-patterns";
        };
        readonly listSavedFilters: {
            readonly method: "GET";
            readonly path: "/api/v1/saved-filters";
        };
        readonly createSavedFilter: {
            readonly method: "POST";
            readonly path: "/api/v1/saved-filters";
        };
        readonly deleteSavedFilter: (filter_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSavedFilter: (filter_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScoreDecay: {
            readonly method: "GET";
            readonly path: "/api/v1/score-decay";
        };
        readonly createScoreDecay: {
            readonly method: "POST";
            readonly path: "/api/v1/score-decay";
        };
        readonly deleteScoreDecay: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoreDecay: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSimulate: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScorecard2: {
            readonly method: "GET";
            readonly path: "/api/v1/scorecard";
        };
        readonly listScoringRules: {
            readonly method: "GET";
            readonly path: "/api/v1/scoring-rules";
        };
        readonly createScoringRule: {
            readonly method: "POST";
            readonly path: "/api/v1/scoring-rules";
        };
        readonly createScore: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteScoringRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoringRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSharePackets: {
            readonly method: "GET";
            readonly path: "/api/v1/share-packets";
        };
        readonly createSharePacket: {
            readonly method: "POST";
            readonly path: "/api/v1/share-packets";
        };
        readonly getSharePacket: (packet_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDecide2: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSlaPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies";
        };
        readonly createSlaPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/sla-policies";
        };
        readonly listBreaches: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies/breaches";
        };
        readonly createBreache: {
            readonly method: "POST";
            readonly path: "/api/v1/sla-policies/breaches";
        };
        readonly listCheck2: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies/check";
        };
        readonly deleteSlaPolicy: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSlaPolicy: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCommand2: {
            readonly method: "POST";
            readonly path: "/api/v1/slack/commands";
        };
        readonly listPosts: {
            readonly method: "GET";
            readonly path: "/api/v1/social/posts";
        };
        readonly createPost: {
            readonly method: "POST";
            readonly path: "/api/v1/social/posts";
        };
        readonly createApprove4: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPublish2: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu3: (post_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary12: {
            readonly method: "GET";
            readonly path: "/api/v1/social/summary";
        };
        readonly listStageGates: {
            readonly method: "GET";
            readonly path: "/api/v1/stage-gates";
        };
        readonly createStageGate: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates";
        };
        readonly createOverride: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates/overrides";
        };
        readonly listList: {
            readonly method: "GET";
            readonly path: "/api/v1/stage-gates/overrides/list";
        };
        readonly createValidate: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates/validate";
        };
        readonly deleteStageGate: (gate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStageGate: (gate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStageGate: (gate_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSubscriptions: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions";
        };
        readonly createSubscription: {
            readonly method: "POST";
            readonly path: "/api/v1/subscriptions";
        };
        readonly listMrrSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions/mrr-summary";
        };
        readonly listPlans2: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions/plans";
        };
        readonly createPlan2: {
            readonly method: "POST";
            readonly path: "/api/v1/subscriptions/plans";
        };
        readonly getSubscription: (sub_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSubscription: (sub_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createCancel: (sub_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSurveys: {
            readonly method: "GET";
            readonly path: "/api/v1/surveys";
        };
        readonly createSurvey: {
            readonly method: "POST";
            readonly path: "/api/v1/surveys";
        };
        readonly deleteSurvey: (survey_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSurvey: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSurvey: (survey_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listNps: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listResponses: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRespons: (survey_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health";
        };
        readonly listAutopsy: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health/autopsy";
        };
        readonly listEvents4: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health/events";
        };
        readonly listTeamQuotas: {
            readonly method: "GET";
            readonly path: "/api/v1/team-quotas";
        };
        readonly createTeamQuota: {
            readonly method: "POST";
            readonly path: "/api/v1/team-quotas";
        };
        readonly listProgress: {
            readonly method: "GET";
            readonly path: "/api/v1/team-quotas/progress";
        };
        readonly deleteTeamQuota: (quota_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTeamQuota: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres2: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTerritories: {
            readonly method: "GET";
            readonly path: "/api/v1/territories";
        };
        readonly createTerritory: {
            readonly method: "POST";
            readonly path: "/api/v1/territories";
        };
        readonly deleteTerritory: (territory_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTerritory: (territory_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTerritory: (territory_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listTerritoryAssignments: {
            readonly method: "GET";
            readonly path: "/api/v1/territory-assignments";
        };
        readonly createTerritoryAssignment: {
            readonly method: "POST";
            readonly path: "/api/v1/territory-assignments";
        };
        readonly listCoverage: {
            readonly method: "GET";
            readonly path: "/api/v1/territory-assignments/coverage";
        };
        readonly deleteTerritoryAssignment: (assignment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listUserActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity";
        };
        readonly createUserActivity: {
            readonly method: "POST";
            readonly path: "/api/v1/user-activity";
        };
        readonly listHeatmap: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity/heatmap";
        };
        readonly listTopFeatures: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity/top-features";
        };
        readonly listWebhookDeliveries: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-deliveries";
        };
        readonly listStats14: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-deliveries/stats";
        };
        readonly listWebhookEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-events";
        };
        readonly createWebhookEvent: {
            readonly method: "POST";
            readonly path: "/api/v1/webhook-events";
        };
        readonly listStats15: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-events/stats";
        };
        readonly getWebhookEvent: (event_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createProces: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReplay: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWebhookRetries: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries";
        };
        readonly createWebhookRetry: {
            readonly method: "POST";
            readonly path: "/api/v1/webhook-retries";
        };
        readonly listPending2: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries/pending";
        };
        readonly listStats16: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries/stats";
        };
        readonly listWinLoss: {
            readonly method: "GET";
            readonly path: "/api/v1/win-loss";
        };
        readonly createWinLos: {
            readonly method: "POST";
            readonly path: "/api/v1/win-loss";
        };
        readonly listAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v1/win-loss/analytics";
        };
        readonly getTopReason: (outcome: string) => {
            method: "GET";
            path: string;
        };
        readonly getWinLos: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAiPlans: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/ai-plans";
        };
        readonly listApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/approvals";
        };
        readonly listFailures: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/failures";
        };
        readonly listRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/runs";
        };
        readonly getRun: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary13: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/summary";
        };
        readonly listActivityGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/activity-goals";
        };
        readonly createActivityGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/activity-goals";
        };
        readonly getProgres2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRecord2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReset2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/activity/timeline";
        };
        readonly listStats17: {
            readonly method: "GET";
            readonly path: "/api/v2/agent-tasks/stats";
        };
        readonly listTasks3: {
            readonly method: "GET";
            readonly path: "/api/v2/agent-tasks/tasks";
        };
        readonly getTask3: (number: string) => {
            method: "GET";
            path: string;
        };
        readonly createApprove5: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createReject3: (number: string) => {
            method: "POST";
            path: string;
        };
        readonly createWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/agent-tasks/webhook";
        };
        readonly createChat2: {
            readonly method: "POST";
            readonly path: "/api/v2/agents/chat";
        };
        readonly createMultiTurn2: {
            readonly method: "POST";
            readonly path: "/api/v2/agents/multi-turn";
        };
        readonly listFlags2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/flags";
        };
        readonly createResolve4: (flag_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInvites2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/invites";
        };
        readonly createInvite2: {
            readonly method: "POST";
            readonly path: "/api/v2/api/v1/employee-onboarding/invites";
        };
        readonly listToken2: (invite_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSubmissions3: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/submissions";
        };
        readonly getSubmission2: (submission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReview2: (submission_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listActions2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/actions";
        };
        readonly createCeoGuide2: {
            readonly method: "POST";
            readonly path: "/api/v2/api/v1/manager-watch/ceo-guide";
        };
        readonly listCeoGuideHistory2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/ceo-guide-history";
        };
        readonly listStats18: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/stats";
        };
        readonly getOnboard2: (token: string) => {
            method: "GET";
            path: string;
        };
        readonly createSave2: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit3: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly listApprovalWorkflows2: {
            readonly method: "GET";
            readonly path: "/api/v2/approval-workflows";
        };
        readonly createApprovalWorkflow2: {
            readonly method: "POST";
            readonly path: "/api/v2/approval-workflows";
        };
        readonly deleteApprovalWorkflow2: (workflow_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getApprovalWorkflow2: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps6: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep6: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPlan3: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/copilot/plan";
        };
        readonly createPlanAndSave2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/copilot/plan-and-save";
        };
        readonly listInsights3: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/insights";
        };
        readonly listJobQueueStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/job-queue-stats";
        };
        readonly listRules4: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/rules";
        };
        readonly createRule4: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/rules";
        };
        readonly createEvaluate4: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/rules/evaluate";
        };
        readonly listAll3: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/rules/executions/all";
        };
        readonly deleteRule4: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRule4: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExecutions2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/templates";
        };
        readonly createCreate2: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTriggers2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/triggers";
        };
        readonly createTrigger2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/triggers";
        };
        readonly deleteTrigger2: (trigger_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTrigger2: (trigger_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTrigger2: (trigger_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWorkflowDefinitions2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflow-definitions";
        };
        readonly createWorkflowDefinition2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/workflow-definitions";
        };
        readonly getWorkflowDefinition2: (workflow_definition_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkflowDefinition2: (workflow_definition_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createPublish3: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun5: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRunPreview2: (workflow_definition_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflowRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflow-runs";
        };
        readonly getWorkflowRun2: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createPause2: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume3: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry2: (workflow_run_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkflows2: {
            readonly method: "GET";
            readonly path: "/api/v2/automations/workflows";
        };
        readonly createWorkflow2: {
            readonly method: "POST";
            readonly path: "/api/v2/automations/workflows";
        };
        readonly getWorkflow2: (workflow_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAdvance2: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute3: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResume4: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRun6: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart3: (workflow_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createCtoStrategicReview2: {
            readonly method: "POST";
            readonly path: "/api/v2/brain/cto-strategic-review";
        };
        readonly listExecutive2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/executive";
        };
        readonly listPlans3: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/plans";
        };
        readonly createDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/briefing/plans/draft";
        };
        readonly createApprove6: (plan_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDone2: (plan_id: number, task_index: string) => {
            method: "POST";
            path: string;
        };
        readonly listTeam3: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/team";
        };
        readonly listToday2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/today";
        };
        readonly listBulkActionLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/bulk-action-logs";
        };
        readonly createBulkActionLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk-action-logs";
        };
        readonly listSummary14: {
            readonly method: "GET";
            readonly path: "/api/v2/bulk-action-logs/summary";
        };
        readonly getBulkActionLog2: (log_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCallLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/call-logs";
        };
        readonly createCallLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/call-logs";
        };
        readonly listStats19: {
            readonly method: "GET";
            readonly path: "/api/v2/call-logs/stats";
        };
        readonly getCallLog2: (call_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/campaigns";
        };
        readonly createCampaign2: {
            readonly method: "POST";
            readonly path: "/api/v2/campaigns";
        };
        readonly getCampaign2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAbTest2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics3: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEnroll3: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments3: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent5: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu4: (campaign_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps7: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep7: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSummary15: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVariantStats2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createVariant2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEvent6: (campaign_id: number, variant_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStream2: {
            readonly method: "POST";
            readonly path: "/api/v2/chat/stream";
        };
        readonly createMemory2: {
            readonly method: "POST";
            readonly path: "/api/v2/clone/memory";
        };
        readonly listSearch4: {
            readonly method: "GET";
            readonly path: "/api/v2/clone/memory/search";
        };
        readonly listStats20: {
            readonly method: "GET";
            readonly path: "/api/v2/clone/memory/stats";
        };
        readonly createReinforce2: (memory_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCoaching2: {
            readonly method: "GET";
            readonly path: "/api/v2/coaching";
        };
        readonly createDepartment2: (department_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEmployee3: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInsights4: {
            readonly method: "GET";
            readonly path: "/api/v2/coaching/insights";
        };
        readonly createOrg2: {
            readonly method: "POST";
            readonly path: "/api/v2/coaching/org";
        };
        readonly createOutcome3: {
            readonly method: "POST";
            readonly path: "/api/v2/coaching/outcomes";
        };
        readonly listRecommendations2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReport2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getCoaching2: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApprove2: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateReject2: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/activity";
        };
        readonly listAiUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/ai-usage";
        };
        readonly listCockpit2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/cockpit";
        };
        readonly listProjects2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/projects";
        };
        readonly createProject4: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/projects";
        };
        readonly deleteProject2: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject2: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard3: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/scorecard";
        };
        readonly listSprints2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/sprints";
        };
        readonly createSprint2: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/sprints";
        };
        readonly deleteSprint2: (sprint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSprint2: (sprint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSprint2: (sprint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks4: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/tasks";
        };
        readonly createTask3: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/tasks";
        };
        readonly deleteTask2: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTask4: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTask3: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommands2: {
            readonly method: "GET";
            readonly path: "/api/v2/commands";
        };
        readonly createCommand3: {
            readonly method: "POST";
            readonly path: "/api/v2/commands";
        };
        readonly listPayouts2: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/payouts";
        };
        readonly createPayout2: {
            readonly method: "POST";
            readonly path: "/api/v2/commissions/payouts";
        };
        readonly updatePayout2: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRules5: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/rules";
        };
        readonly createRule5: {
            readonly method: "POST";
            readonly path: "/api/v2/commissions/rules";
        };
        readonly deleteRule5: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule5: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary16: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/summary";
        };
        readonly listCompetitors2: {
            readonly method: "GET";
            readonly path: "/api/v2/competitors";
        };
        readonly createCompetitor2: {
            readonly method: "POST";
            readonly path: "/api/v2/competitors";
        };
        readonly createDealLink2: {
            readonly method: "POST";
            readonly path: "/api/v2/competitors/deal-link";
        };
        readonly getDeal4: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWinLossStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/competitors/win-loss-stats";
        };
        readonly deleteCompetitor2: (competitor_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCompetitor2: (competitor_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompetitor2: (competitor_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listCounts2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-lifecycle/counts";
        };
        readonly getCurrent2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getHistory4: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition3: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-lifecycle/transition";
        };
        readonly listContactMergeLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-merge-logs";
        };
        readonly createContactMergeLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-merge-logs";
        };
        readonly listStats21: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-merge-logs/stats";
        };
        readonly getContactMergeLog2: (merge_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactRelationships2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-relationships";
        };
        readonly createContactRelationship2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-relationships";
        };
        readonly deleteContactRelationship2: (rel_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactRelationship2: (rel_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createContactScore2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-scores";
        };
        readonly getContactScore2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend6: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactSegments2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-segments";
        };
        readonly createContactSegment2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-segments";
        };
        readonly deleteContactSegment2: (segment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactSegment2: (segment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate4: (segment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent7: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-timeline/events";
        };
        readonly getEvent2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary6: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listConversionFunnels2: {
            readonly method: "GET";
            readonly path: "/api/v2/conversion-funnels";
        };
        readonly createConversionFunnel2: {
            readonly method: "POST";
            readonly path: "/api/v2/conversion-funnels";
        };
        readonly getBottleneck2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getSummary7: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly listCustomReports2: {
            readonly method: "GET";
            readonly path: "/api/v2/custom-reports";
        };
        readonly createCustomReport2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-reports";
        };
        readonly deleteCustomReport2: (report_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCustomReport2: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCustomReport2: (report_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createRun7: (report_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCustomerHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/customer-health";
        };
        readonly createCustomerHealth2: {
            readonly method: "POST";
            readonly path: "/api/v2/customer-health";
        };
        readonly listSummary17: {
            readonly method: "GET";
            readonly path: "/api/v2/customer-health/summary";
        };
        readonly getCustomerHealth2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDashboardWidgets2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard-widgets";
        };
        readonly createDashboardWidget2: {
            readonly method: "POST";
            readonly path: "/api/v2/dashboard-widgets";
        };
        readonly listCatalog2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard-widgets/catalog";
        };
        readonly deleteDashboardWidget2: (widget_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDashboardWidget2: (widget_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDataRetention2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-retention";
        };
        readonly createDataRetention2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-retention";
        };
        readonly deleteDataRetention2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDataRetention2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate5: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVerify2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-security/audit/verify";
        };
        readonly listDsr2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-security/dsr/";
        };
        readonly createDsr2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/dsr/";
        };
        readonly getDsr2: (dsr_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove7: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute4: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject4: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createScan2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/hygiene/scan";
        };
        readonly createRun8: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/retention/run";
        };
        readonly listPower2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/branding/power";
        };
        readonly createCollect2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/collect";
        };
        readonly listBoundary2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/ethics/boundary";
        };
        readonly createDetect3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/fraud/detect";
        };
        readonly listLayer4: {
            readonly method: "GET";
            readonly path: "/api/v2/data/fraud/layer";
        };
        readonly listLayer5: {
            readonly method: "GET";
            readonly path: "/api/v2/data/media/layer";
        };
        readonly createProject5: {
            readonly method: "POST";
            readonly path: "/api/v2/data/media/projects";
        };
        readonly createMeetingCoach2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/meeting-coach";
        };
        readonly createAnalyze3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/mobile-capture/analyze";
        };
        readonly createUploadAnalyze3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/mobile-capture/upload-analyze";
        };
        readonly createDigest2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/news/digest";
        };
        readonly getOcrJob2: (job_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUploadAnalyze4: {
            readonly method: "POST";
            readonly path: "/api/v2/data/photo-character/upload-analyze";
        };
        readonly listManagementLayer2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/social/management-layer";
        };
        readonly createDetect4: {
            readonly method: "POST";
            readonly path: "/api/v2/data/threats/detect";
        };
        readonly listLayer6: {
            readonly method: "GET";
            readonly path: "/api/v2/data/threats/layer";
        };
        readonly createTrain3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/threats/train";
        };
        readonly createTrainPro2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/train-pro";
        };
        readonly createDealCollaborator2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-collaborators";
        };
        readonly getUser2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealCollaborator2: (collab_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealCollaborator2: (collab_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly getDealCollaborator2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDealDependency2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-dependencies";
        };
        readonly getDeal5: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBlockers2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealDependency2: (dep_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateResolve3: (dep_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listDealRisks2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-risks";
        };
        readonly createDealRisk2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-risks";
        };
        readonly listSummary18: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-risks/summary";
        };
        readonly getDealRisk2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDealRotations2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-rotations";
        };
        readonly createDealRotation2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-rotations";
        };
        readonly deleteDealRotation2: (queue_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDealRotation2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDealRotation2: (queue_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createAssign2: (queue_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAssignments2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listFairness2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDealSplit2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-splits";
        };
        readonly getDeal6: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary19: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealSplit2: (split_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealSplit2: (split_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listBottlenecks2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-velocity/bottlenecks";
        };
        readonly getHistory5: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition4: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-velocity/transition";
        };
        readonly listVelocity3: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-velocity/velocity";
        };
        readonly listPipeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast/pipeline";
        };
        readonly listWinRates2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast/win-rates";
        };
        readonly listRequirements2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/requirements";
        };
        readonly createRequirement2: {
            readonly method: "POST";
            readonly path: "/api/v2/deals/requirements";
        };
        readonly getChecklist2: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly getValidate2: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteRequirement2: (req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly createCheck4: (req_id: number, deal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDecisionCards2: {
            readonly method: "GET";
            readonly path: "/api/v2/decision-cards";
        };
        readonly createDecisionCard2: {
            readonly method: "POST";
            readonly path: "/api/v2/decision-cards";
        };
        readonly listPendingCount2: {
            readonly method: "GET";
            readonly path: "/api/v2/decision-cards/pending-count";
        };
        readonly getDecisionCard2: (card_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecide3: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDefer2: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDedupRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/dedup-rules";
        };
        readonly createDedupRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/dedup-rules";
        };
        readonly createCheck5: {
            readonly method: "POST";
            readonly path: "/api/v2/dedup-rules/check";
        };
        readonly deleteDedupRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDedupRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDedupRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listDocumentSigning2: {
            readonly method: "GET";
            readonly path: "/api/v2/document-signing";
        };
        readonly createDocumentSigning2: {
            readonly method: "POST";
            readonly path: "/api/v2/document-signing";
        };
        readonly listStats22: {
            readonly method: "GET";
            readonly path: "/api/v2/document-signing/stats";
        };
        readonly getDocumentSigning2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecline2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSign2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDocumentTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/document-templates";
        };
        readonly createDocumentTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/document-templates";
        };
        readonly deleteDocumentTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDocumentTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDocumentTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender2: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents5: {
            readonly method: "GET";
            readonly path: "/api/v2/drip-analytics/events";
        };
        readonly createEvent8: {
            readonly method: "POST";
            readonly path: "/api/v2/drip-analytics/events";
        };
        readonly getStep2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary8: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDripCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/drip-campaigns";
        };
        readonly createDripCampaign2: {
            readonly method: "POST";
            readonly path: "/api/v2/drip-campaigns";
        };
        readonly createUnsubscribe2: (enrollment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteDripCampaign2: (campaign_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDripCampaign2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDripCampaign2: (campaign_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createEnroll4: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments4: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps8: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep8: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDuplicates2: {
            readonly method: "GET";
            readonly path: "/api/v2/duplicates";
        };
        readonly createCheck6: {
            readonly method: "POST";
            readonly path: "/api/v2/duplicates/check";
        };
        readonly listContacts2: {
            readonly method: "GET";
            readonly path: "/api/v2/duplicates/scan/contacts";
        };
        readonly updateResolve4: (match_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEmailAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-analytics";
        };
        readonly createEmailAnalytic2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-analytics";
        };
        readonly listEngagement2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMetrics2: (email_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOverview2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-analytics/overview";
        };
        readonly listEmailSequences2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-sequences";
        };
        readonly createEmailSequence2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-sequences";
        };
        readonly listStats23: {
            readonly method: "GET";
            readonly path: "/api/v2/email-sequences/stats";
        };
        readonly deleteEmailSequence2: (sequence_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailSequence2: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailSequence2: (sequence_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps9: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep9: (sequence_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteStep3: (sequence_id: number, step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailSuppressions2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions";
        };
        readonly createEmailSuppression2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-suppressions";
        };
        readonly listCheck3: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions/check";
        };
        readonly listStats24: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions/stats";
        };
        readonly deleteEmailSuppression2: (suppression_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailWarmup2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-warmup";
        };
        readonly createEmailWarmup2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-warmup";
        };
        readonly listStatus3: {
            readonly method: "GET";
            readonly path: "/api/v2/email-warmup/status";
        };
        readonly updateAdvance2: (warmup_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listEnrichmentQueue2: {
            readonly method: "GET";
            readonly path: "/api/v2/enrichment-queue";
        };
        readonly createEnrichmentQueue2: {
            readonly method: "POST";
            readonly path: "/api/v2/enrichment-queue";
        };
        readonly createBatch3: {
            readonly method: "POST";
            readonly path: "/api/v2/enrichment-queue/batch";
        };
        readonly listStats25: {
            readonly method: "GET";
            readonly path: "/api/v2/enrichment-queue/stats";
        };
        readonly updateComplete2: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCountries2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/countries";
        };
        readonly createCountry2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/countries";
        };
        readonly deleteCountry2: (country_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCountry2: (country_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCountry2: (country_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCourses2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/courses";
        };
        readonly createCours2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/courses";
        };
        readonly createMatch3: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/courses/match";
        };
        readonly deleteCours2: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours2: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScholarships2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/scholarships";
        };
        readonly createScholarship2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/scholarships";
        };
        readonly createMatch4: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/scholarships/match";
        };
        readonly deleteScholarship2: (scholarship_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getScholarship2: (scholarship_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateScholarship2: (scholarship_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listVisaRequirements2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/visa-requirements";
        };
        readonly createVisaRequirement2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/visa-requirements";
        };
        readonly deleteVisaRequirement2: (visa_req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getVisaRequirement2: (visa_req_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateVisaRequirement2: (visa_req_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listExperiments2: {
            readonly method: "GET";
            readonly path: "/api/v2/experiments";
        };
        readonly createExperiment2: {
            readonly method: "POST";
            readonly path: "/api/v2/experiments";
        };
        readonly listVelocity4: {
            readonly method: "GET";
            readonly path: "/api/v2/experiments/velocity";
        };
        readonly createComplete2: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart4: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFeatureRequests2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-requests";
        };
        readonly createFeatureRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/feature-requests";
        };
        readonly listStats26: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-requests/stats";
        };
        readonly getFeatureRequest2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureRequest2: (request_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createVote2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createFieldAudit2: {
            readonly method: "POST";
            readonly path: "/api/v2/field-audit";
        };
        readonly createBatch4: {
            readonly method: "POST";
            readonly path: "/api/v2/field-audit/batch";
        };
        readonly getEntity2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getField2: (entity_type: string, entity_id: number, field_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listRecent2: {
            readonly method: "GET";
            readonly path: "/api/v2/field-audit/recent";
        };
        readonly listForecastRollups2: {
            readonly method: "GET";
            readonly path: "/api/v2/forecast-rollups";
        };
        readonly createForecastRollup2: {
            readonly method: "POST";
            readonly path: "/api/v2/forecast-rollups";
        };
        readonly getSummary9: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getForecastRollup2: (rollup_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listForecastScenarios2: {
            readonly method: "GET";
            readonly path: "/api/v2/forecast-scenarios";
        };
        readonly createForecastScenario2: {
            readonly method: "POST";
            readonly path: "/api/v2/forecast-scenarios";
        };
        readonly getCompare2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteForecastScenario2: (scenario_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForecastScenario2: (scenario_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForecastScenario2: (scenario_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listForms2: {
            readonly method: "GET";
            readonly path: "/api/v2/forms";
        };
        readonly createForm2: {
            readonly method: "POST";
            readonly path: "/api/v2/forms";
        };
        readonly deleteForm2: (form_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForm2: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForm2: (form_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSubmissions4: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSubmit4: (form_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createApplyGovernance2: {
            readonly method: "POST";
            readonly path: "/api/v2/github/apply-governance";
        };
        readonly createCeoSync2: {
            readonly method: "POST";
            readonly path: "/api/v2/github/ceo-sync";
        };
        readonly listRisks2: {
            readonly method: "GET";
            readonly path: "/api/v2/github/risks";
        };
        readonly listSummary20: {
            readonly method: "GET";
            readonly path: "/api/v2/github/summary";
        };
        readonly listGoalCascades2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades";
        };
        readonly createGoalCascade2: {
            readonly method: "POST";
            readonly path: "/api/v2/goal-cascades";
        };
        readonly listChildren2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/children";
        };
        readonly listParents2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/parents";
        };
        readonly listTree2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/tree";
        };
        readonly deleteGoalCascade2: (link_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listAutomationLevel2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/automation-level";
        };
        readonly listDashboard3: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/dashboard";
        };
        readonly createEvaluate5: {
            readonly method: "POST";
            readonly path: "/api/v2/governance/evaluate";
        };
        readonly listPolicies3: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policies";
        };
        readonly createPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/governance/policies";
        };
        readonly updatePolicy2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPolicyDrift2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-drift";
        };
        readonly listTrend7: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-drift/trend";
        };
        readonly listPolicyEffectiveness2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-effectiveness";
        };
        readonly listTrend8: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listViolations2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/violations";
        };
        readonly createResolve5: (violation_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAlerts3: {
            readonly method: "GET";
            readonly path: "/api/v2/health-monitor/alerts";
        };
        readonly listStatus4: {
            readonly method: "GET";
            readonly path: "/api/v2/health-monitor/status";
        };
        readonly listImportExportPresets2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-export-presets";
        };
        readonly createImportExportPreset2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-export-presets";
        };
        readonly deleteImportExportPreset2: (preset_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listImportMappings2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings";
        };
        readonly createImportMapping2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-mappings";
        };
        readonly createImport2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-mappings/imports";
        };
        readonly listHistory3: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings/imports/history";
        };
        readonly listStats27: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings/imports/stats";
        };
        readonly deleteImportMapping2: (mapping_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getImportMapping2: (mapping_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateImportMapping2: (mapping_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listAnomalies2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/anomalies";
        };
        readonly listCrossLayer2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/cross-layer";
        };
        readonly listDiff2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/diff";
        };
        readonly listHealth3: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/health";
        };
        readonly listPredictions2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/predictions";
        };
        readonly listSummary21: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/summary";
        };
        readonly listTraces2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/traces";
        };
        readonly listInternalComments2: {
            readonly method: "GET";
            readonly path: "/api/v2/internal-comments";
        };
        readonly createInternalComment2: {
            readonly method: "POST";
            readonly path: "/api/v2/internal-comments";
        };
        readonly deleteInternalComment2: (comment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listKnowledgeBase2: {
            readonly method: "GET";
            readonly path: "/api/v2/knowledge-base";
        };
        readonly createKnowledgeBase2: {
            readonly method: "POST";
            readonly path: "/api/v2/knowledge-base";
        };
        readonly listSearch5: {
            readonly method: "GET";
            readonly path: "/api/v2/knowledge-base/search";
        };
        readonly deleteKnowledgeBase2: (article_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getKnowledgeBase2: (article_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateKnowledgeBase2: (article_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createHelpful2: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createView2: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAiSkillRouting2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/ai-skill-routing";
        };
        readonly listBrandingPower2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/branding-power";
        };
        readonly listCloneMarketingSales2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/clone-marketing-sales";
        };
        readonly listCloneTraining2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/clone-training";
        };
        readonly listEmployeeManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/employee-management";
        };
        readonly listEmployeePerformance2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/employee-performance";
        };
        readonly listEthicalBoundary2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/ethical-boundary";
        };
        readonly listFraudDetection2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/fraud-detection";
        };
        readonly listMarketing2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/marketing";
        };
        readonly listMediaEditing2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/media-editing";
        };
        readonly listOpportunityAssociation2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/opportunity-association";
        };
        readonly listRevenueManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/revenue-management";
        };
        readonly createSnapshot2: {
            readonly method: "POST";
            readonly path: "/api/v2/layers/snapshot";
        };
        readonly listSocialManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/social-management";
        };
        readonly listStaffProsperity2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/staff-prosperity";
        };
        readonly listStudy2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/study";
        };
        readonly listThreatDetection2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/threat-detection";
        };
        readonly listTraining2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/training";
        };
        readonly listTrainingStaff2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/training-staff";
        };
        readonly getTrend2: (layer_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/trends";
        };
        readonly listCompanies2: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-routing/companies";
        };
        readonly createResolve6: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-routing/resolve";
        };
        readonly listRules6: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-routing/rules";
        };
        readonly createRule6: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-routing/rules";
        };
        readonly deleteRule6: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule6: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listLeadScoreRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-score-rules";
        };
        readonly createLeadScoreRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-score-rules";
        };
        readonly createEvaluate6: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-score-rules/evaluate";
        };
        readonly deleteLeadScoreRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLeadScoreRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeadScoreRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLeaderboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/leaderboard";
        };
        readonly createLeaderboard2: {
            readonly method: "POST";
            readonly path: "/api/v2/leaderboard";
        };
        readonly getHistory6: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listActive2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/active";
        };
        readonly createCheckin2: {
            readonly method: "POST";
            readonly path: "/api/v2/locations/checkin";
        };
        readonly createCheckout2: (checkin_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCheckins2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/checkins";
        };
        readonly listConsent2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/consent";
        };
        readonly updateConsent2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/locations/consent";
        };
        readonly listAll4: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/consent/all";
        };
        readonly listHistory4: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/history";
        };
        readonly createTrack2: {
            readonly method: "POST";
            readonly path: "/api/v2/locations/track";
        };
        readonly listMedia2: {
            readonly method: "GET";
            readonly path: "/api/v2/media";
        };
        readonly listReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/media/report";
        };
        readonly listSearch6: {
            readonly method: "GET";
            readonly path: "/api/v2/media/search";
        };
        readonly listStats28: {
            readonly method: "GET";
            readonly path: "/api/v2/media/stats";
        };
        readonly createUpload2: {
            readonly method: "POST";
            readonly path: "/api/v2/media/upload";
        };
        readonly createBulk2: {
            readonly method: "POST";
            readonly path: "/api/v2/media/upload/bulk";
        };
        readonly deleteMedia2: (attachment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMedia2: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMedia2: (attachment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAnalyze4: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDownload2: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createOrganize2: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listMeetingNotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/meeting-notes";
        };
        readonly createMeetingNote2: {
            readonly method: "POST";
            readonly path: "/api/v2/meeting-notes";
        };
        readonly deleteMeetingNote2: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMeetingNote2: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMeetingNote2: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContext2: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/context";
        };
        readonly createContext2: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/context";
        };
        readonly listProfile2: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/profile";
        };
        readonly createProfile3: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/profile";
        };
        readonly deleteProfile2: (entry_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listTeam4: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/team";
        };
        readonly createTeam2: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/team";
        };
        readonly updateTeam2: (member_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotificationRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/notification-rules";
        };
        readonly createNotificationRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/notification-rules";
        };
        readonly listEvaluate6: {
            readonly method: "GET";
            readonly path: "/api/v2/notification-rules/evaluate";
        };
        readonly deleteNotificationRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateNotificationRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAiCalls2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-calls";
        };
        readonly listAiCosts2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-costs";
        };
        readonly listAiReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-reliability";
        };
        readonly listDecisionSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-summary";
        };
        readonly listDecisionTimeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-timeline";
        };
        readonly listDecisionTraces2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-traces";
        };
        readonly listEvents6: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/events";
        };
        readonly listSchedulerHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/scheduler-health";
        };
        readonly listSignals2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/signals";
        };
        readonly listStorage2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/storage";
        };
        readonly listSummary22: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/summary";
        };
        readonly listWebhookReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/webhook-reliability";
        };
        readonly listPlan2: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/plan";
        };
        readonly getLimit2: (resource: string) => {
            method: "GET";
            path: string;
        };
        readonly createSignup2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/signup";
        };
        readonly createUpgrade2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/upgrade";
        };
        readonly listApiUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/api-usage";
        };
        readonly createDispatchPlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/dispatch-plan";
        };
        readonly createFeedback2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/feedback";
        };
        readonly listIdentityMap2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/identity-map";
        };
        readonly createIdentityMap2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/identity-map";
        };
        readonly createProfile4: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/profile";
        };
        readonly getProfile2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScores2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/scores";
        };
        readonly listSummary23: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/summary";
        };
        readonly createTrain4: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/train";
        };
        readonly listTrainingPlan2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/training-plan";
        };
        readonly createGenerate4: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/training-plan/generate";
        };
        readonly updateTrainingPlan2: (plan_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createWeeklyMetric2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/compute/weekly-metrics";
        };
        readonly createDailyRun2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/daily-run";
        };
        readonly listDailyRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/daily-runs";
        };
        readonly listDecisionLog2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/decision-log";
        };
        readonly createDecisionLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/decision-log";
        };
        readonly listEmployees2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/employees";
        };
        readonly createEmployee4: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/employees";
        };
        readonly getEmployee3: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmployee2: (employee_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createOffboard2: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents7: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/events";
        };
        readonly listCommandMode2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/incident/command-mode";
        };
        readonly listTrend9: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/incident/command-mode/trend";
        };
        readonly listTeamWorkSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/integrations/team-work-summary";
        };
        readonly listPolicies4: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/policies";
        };
        readonly createActivate2: (policy_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createGenerate5: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/policy/generate";
        };
        readonly createProject6: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/projects";
        };
        readonly updateStatu5: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deletePurge2: (entity_type: string, entity_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWeekly2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/reports/weekly";
        };
        readonly createWeekly2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/reports/weekly";
        };
        readonly createRestore2: (entity_type: string, entity_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createClickup2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/clickup";
        };
        readonly createGithub2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/github";
        };
        readonly createGithubCicd2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/github-cicd";
        };
        readonly createGmail2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/gmail";
        };
        readonly createTask4: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/tasks";
        };
        readonly updateTask4: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTeamActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/team-activity";
        };
        readonly listBriefing2: {
            readonly method: "GET";
            readonly path: "/api/v2/orchestrator/briefing";
        };
        readonly getWorkspaceHealth2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOutboundWebhooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/outbound-webhooks";
        };
        readonly createOutboundWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/outbound-webhooks";
        };
        readonly listTestMatch2: {
            readonly method: "GET";
            readonly path: "/api/v2/outbound-webhooks/test-match";
        };
        readonly deleteOutboundWebhook2: (webhook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateOutboundWebhook2: (webhook_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAlerts4: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/alerts";
        };
        readonly getDepartment2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOkrProgress2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getEmployee4: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCoaching2: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLearningInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/learning-insights";
        };
        readonly listOrg2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/org";
        };
        readonly listOrgChart2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/org-chart";
        };
        readonly createOutcome4: {
            readonly method: "POST";
            readonly path: "/api/v2/performance/outcomes";
        };
        readonly listSkillsMatrix2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/skills-matrix";
        };
        readonly listTop2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/top";
        };
        readonly listWorkloadBalance2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/workload-balance";
        };
        readonly listDashboard4: {
            readonly method: "GET";
            readonly path: "/api/v2/personas/dashboard";
        };
        readonly listPipelineSnapshots2: {
            readonly method: "GET";
            readonly path: "/api/v2/pipeline-snapshots";
        };
        readonly createPipelineSnapshot2: {
            readonly method: "POST";
            readonly path: "/api/v2/pipeline-snapshots";
        };
        readonly listTrend10: {
            readonly method: "GET";
            readonly path: "/api/v2/pipeline-snapshots/trend";
        };
        readonly getPipelineSnapshot2: (snapshot_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDevices2: {
            readonly method: "GET";
            readonly path: "/api/v2/platform-analytics/devices";
        };
        readonly listSummary24: {
            readonly method: "GET";
            readonly path: "/api/v2/platform-analytics/summary";
        };
        readonly listPlaybooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/playbooks";
        };
        readonly createPlaybook2: {
            readonly method: "POST";
            readonly path: "/api/v2/playbooks";
        };
        readonly deleteStep4: (step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deletePlaybook2: (playbook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPlaybook2: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePlaybook2: (playbook_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSteps10: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep10: (playbook_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProductBundles2: {
            readonly method: "GET";
            readonly path: "/api/v2/product-bundles";
        };
        readonly createProductBundle2: {
            readonly method: "POST";
            readonly path: "/api/v2/product-bundles";
        };
        readonly deleteProductBundle2: (bundle_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProductBundle2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProductBundle2: (bundle_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listItems2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createItem2: (bundle_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPricing2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listQuoteApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/quote-approvals";
        };
        readonly createQuoteApproval2: {
            readonly method: "POST";
            readonly path: "/api/v2/quote-approvals";
        };
        readonly listPending3: {
            readonly method: "GET";
            readonly path: "/api/v2/quote-approvals/pending";
        };
        readonly updateDecide2: (approval_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRateLimits2: {
            readonly method: "GET";
            readonly path: "/api/v2/rate-limits";
        };
        readonly createRateLimit2: {
            readonly method: "POST";
            readonly path: "/api/v2/rate-limits";
        };
        readonly listUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/rate-limits/usage";
        };
        readonly deleteRateLimit2: (config_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRateLimit2: (config_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRecurringInvoices2: {
            readonly method: "GET";
            readonly path: "/api/v2/recurring-invoices";
        };
        readonly createRecurringInvoice2: {
            readonly method: "POST";
            readonly path: "/api/v2/recurring-invoices";
        };
        readonly listDue2: {
            readonly method: "GET";
            readonly path: "/api/v2/recurring-invoices/due";
        };
        readonly deleteRecurringInvoice2: (invoice_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecurringInvoice2: (invoice_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createGenerate6: (invoice_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReferrals2: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals";
        };
        readonly createReferral2: {
            readonly method: "POST";
            readonly path: "/api/v2/referrals";
        };
        readonly listSources2: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals/sources";
        };
        readonly createSource2: {
            readonly method: "POST";
            readonly path: "/api/v2/referrals/sources";
        };
        readonly getSource2: (source_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats29: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals/stats";
        };
        readonly createConvert2: (referral_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSchedules2: {
            readonly method: "GET";
            readonly path: "/api/v2/reports/schedules";
        };
        readonly createSchedule2: {
            readonly method: "POST";
            readonly path: "/api/v2/reports/schedules";
        };
        readonly deleteSchedule2: (schedule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSchedule2: (schedule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRevenue2: {
            readonly method: "GET";
            readonly path: "/api/v2/revenue";
        };
        readonly createRevenue2: {
            readonly method: "POST";
            readonly path: "/api/v2/revenue";
        };
        readonly listRevenueGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/revenue-goals";
        };
        readonly createRevenueGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/revenue-goals";
        };
        readonly getGapAnalysi2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly updateProgres3: (goal_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly getSummary10: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getRevenue2: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRevenue2: (entry_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRoleDashboards2: {
            readonly method: "GET";
            readonly path: "/api/v2/role-dashboards";
        };
        readonly updateRoleDashboard2: {
            readonly method: "PUT";
            readonly path: "/api/v2/role-dashboards";
        };
        readonly getRoleDashboard2: (role: string) => {
            method: "GET";
            path: string;
        };
        readonly getEmployeeStat2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listInteractions2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/interactions";
        };
        readonly createInteraction2: {
            readonly method: "POST";
            readonly path: "/api/v2/sales/interactions";
        };
        readonly listLossPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/loss-patterns";
        };
        readonly listPlaybook2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/playbook";
        };
        readonly listWinPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/win-patterns";
        };
        readonly listSavedFilters2: {
            readonly method: "GET";
            readonly path: "/api/v2/saved-filters";
        };
        readonly createSavedFilter2: {
            readonly method: "POST";
            readonly path: "/api/v2/saved-filters";
        };
        readonly deleteSavedFilter2: (filter_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSavedFilter2: (filter_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScoreDecay2: {
            readonly method: "GET";
            readonly path: "/api/v2/score-decay";
        };
        readonly createScoreDecay2: {
            readonly method: "POST";
            readonly path: "/api/v2/score-decay";
        };
        readonly deleteScoreDecay2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoreDecay2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSimulate2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScorecard4: {
            readonly method: "GET";
            readonly path: "/api/v2/scorecard";
        };
        readonly listScoringRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/scoring-rules";
        };
        readonly createScoringRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/scoring-rules";
        };
        readonly createScore2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteScoringRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoringRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSharePackets2: {
            readonly method: "GET";
            readonly path: "/api/v2/share-packets";
        };
        readonly createSharePacket2: {
            readonly method: "POST";
            readonly path: "/api/v2/share-packets";
        };
        readonly getSharePacket2: (packet_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply2: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDecide4: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSlaPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies";
        };
        readonly createSlaPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/sla-policies";
        };
        readonly listBreaches2: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies/breaches";
        };
        readonly createBreache2: {
            readonly method: "POST";
            readonly path: "/api/v2/sla-policies/breaches";
        };
        readonly listCheck4: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies/check";
        };
        readonly deleteSlaPolicy2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSlaPolicy2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCommand4: {
            readonly method: "POST";
            readonly path: "/api/v2/slack/commands";
        };
        readonly listPosts2: {
            readonly method: "GET";
            readonly path: "/api/v2/social/posts";
        };
        readonly createPost2: {
            readonly method: "POST";
            readonly path: "/api/v2/social/posts";
        };
        readonly createApprove8: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPublish4: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu6: (post_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary25: {
            readonly method: "GET";
            readonly path: "/api/v2/social/summary";
        };
        readonly listStageGates2: {
            readonly method: "GET";
            readonly path: "/api/v2/stage-gates";
        };
        readonly createStageGate2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates";
        };
        readonly createOverride2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates/overrides";
        };
        readonly listList2: {
            readonly method: "GET";
            readonly path: "/api/v2/stage-gates/overrides/list";
        };
        readonly createValidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates/validate";
        };
        readonly deleteStageGate2: (gate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStageGate2: (gate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStageGate2: (gate_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSubscriptions2: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions";
        };
        readonly createSubscription2: {
            readonly method: "POST";
            readonly path: "/api/v2/subscriptions";
        };
        readonly listMrrSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions/mrr-summary";
        };
        readonly listPlans4: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions/plans";
        };
        readonly createPlan4: {
            readonly method: "POST";
            readonly path: "/api/v2/subscriptions/plans";
        };
        readonly getSubscription2: (sub_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSubscription2: (sub_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createCancel2: (sub_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSurveys2: {
            readonly method: "GET";
            readonly path: "/api/v2/surveys";
        };
        readonly createSurvey2: {
            readonly method: "POST";
            readonly path: "/api/v2/surveys";
        };
        readonly deleteSurvey2: (survey_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSurvey2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSurvey2: (survey_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listNps2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listResponses2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRespons2: (survey_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listHealth4: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health";
        };
        readonly listAutopsy2: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health/autopsy";
        };
        readonly listEvents8: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health/events";
        };
        readonly listTeamQuotas2: {
            readonly method: "GET";
            readonly path: "/api/v2/team-quotas";
        };
        readonly createTeamQuota2: {
            readonly method: "POST";
            readonly path: "/api/v2/team-quotas";
        };
        readonly listProgress2: {
            readonly method: "GET";
            readonly path: "/api/v2/team-quotas/progress";
        };
        readonly deleteTeamQuota2: (quota_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTeamQuota2: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres4: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTerritories2: {
            readonly method: "GET";
            readonly path: "/api/v2/territories";
        };
        readonly createTerritory2: {
            readonly method: "POST";
            readonly path: "/api/v2/territories";
        };
        readonly deleteTerritory2: (territory_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTerritory2: (territory_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTerritory2: (territory_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listTerritoryAssignments2: {
            readonly method: "GET";
            readonly path: "/api/v2/territory-assignments";
        };
        readonly createTerritoryAssignment2: {
            readonly method: "POST";
            readonly path: "/api/v2/territory-assignments";
        };
        readonly listCoverage2: {
            readonly method: "GET";
            readonly path: "/api/v2/territory-assignments/coverage";
        };
        readonly deleteTerritoryAssignment2: (assignment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listUserActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity";
        };
        readonly createUserActivity2: {
            readonly method: "POST";
            readonly path: "/api/v2/user-activity";
        };
        readonly listHeatmap2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity/heatmap";
        };
        readonly listTopFeatures2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity/top-features";
        };
        readonly listWebhookDeliveries2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-deliveries";
        };
        readonly listStats30: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-deliveries/stats";
        };
        readonly listWebhookEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-events";
        };
        readonly createWebhookEvent2: {
            readonly method: "POST";
            readonly path: "/api/v2/webhook-events";
        };
        readonly listStats31: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-events/stats";
        };
        readonly getWebhookEvent2: (event_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createProces2: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReplay2: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWebhookRetries2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries";
        };
        readonly createWebhookRetry2: {
            readonly method: "POST";
            readonly path: "/api/v2/webhook-retries";
        };
        readonly listPending4: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries/pending";
        };
        readonly listStats32: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries/stats";
        };
        readonly listWinLoss2: {
            readonly method: "GET";
            readonly path: "/api/v2/win-loss";
        };
        readonly createWinLos2: {
            readonly method: "POST";
            readonly path: "/api/v2/win-loss";
        };
        readonly listAnalytics4: {
            readonly method: "GET";
            readonly path: "/api/v2/win-loss/analytics";
        };
        readonly getTopReason2: (outcome: string) => {
            method: "GET";
            path: string;
        };
        readonly getWinLos2: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAiPlans2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/ai-plans";
        };
        readonly listApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/approvals";
        };
        readonly listFailures2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/failures";
        };
        readonly listRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/runs";
        };
        readonly getRun2: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary26: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/summary";
        };
    };
    readonly briefingTaskPlans: {
        readonly listExecutive: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/executive";
        };
        readonly listPlans: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/plans";
        };
        readonly createDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/briefing/plans/draft";
        };
        readonly createApprove: (plan_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDone: (plan_id: number, task_index: string) => {
            method: "POST";
            path: string;
        };
        readonly listTeam: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/team";
        };
        readonly listToday: {
            readonly method: "GET";
            readonly path: "/api/v1/briefing/today";
        };
        readonly listExecutive2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/executive";
        };
        readonly listPlans2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/plans";
        };
        readonly createDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/briefing/plans/draft";
        };
        readonly createApprove2: (plan_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDone2: (plan_id: number, task_index: string) => {
            method: "POST";
            path: string;
        };
        readonly listTeam2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/team";
        };
        readonly listToday2: {
            readonly method: "GET";
            readonly path: "/api/v2/briefing/today";
        };
    };
    readonly bulkActionLogs: {
        readonly listBulkActionLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/bulk-action-logs";
        };
        readonly createBulkActionLog: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk-action-logs";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/bulk-action-logs/summary";
        };
        readonly getBulkActionLog: (log_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBulkActionLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/bulk-action-logs";
        };
        readonly createBulkActionLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk-action-logs";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/bulk-action-logs/summary";
        };
        readonly getBulkActionLog2: (log_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly bulkOperations: {
        readonly createDelete: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/contacts/delete";
        };
        readonly createUpdateStage: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/contacts/update-stage";
        };
        readonly createContact: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/contacts";
        };
        readonly createDeal: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/deals";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/tasks";
        };
        readonly createDelete2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/contacts/delete";
        };
        readonly createUpdateStage2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/contacts/update-stage";
        };
        readonly createContact2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/contacts";
        };
        readonly createDeal2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/deals";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/tasks";
        };
    };
    readonly callLogs: {
        readonly listCallLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/call-logs";
        };
        readonly createCallLog: {
            readonly method: "POST";
            readonly path: "/api/v1/call-logs";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/call-logs/stats";
        };
        readonly getCallLog: (call_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCallLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/call-logs";
        };
        readonly createCallLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/call-logs";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/call-logs/stats";
        };
        readonly getCallLog2: (call_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly campaignAnalytics: {
        readonly listAbTest: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVariantStats: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createVariant: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEvent: (campaign_id: number, variant_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAbTest2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listVariantStats2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createVariant2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEvent2: (campaign_id: number, variant_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly ceoControl: {
        readonly createBackup: {
            readonly method: "POST";
            readonly path: "/api/v1/control/backup";
        };
        readonly listList: {
            readonly method: "GET";
            readonly path: "/api/v1/control/backup/list";
        };
        readonly createLimitationsClaude: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/limitations-claude";
        };
        readonly createSelfLearningTrain: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/self-learning-train";
        };
        readonly createTrainDataDriven: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/train-data-driven";
        };
        readonly listMorningBrief: {
            readonly method: "GET";
            readonly path: "/api/v1/control/ceo/morning-brief";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/control/ceo/status";
        };
        readonly listMultiOrg: {
            readonly method: "GET";
            readonly path: "/api/v1/control/cockpit/multi-org";
        };
        readonly listReport: {
            readonly method: "GET";
            readonly path: "/api/v1/control/compliance/report";
        };
        readonly createRun: {
            readonly method: "POST";
            readonly path: "/api/v1/control/compliance/run";
        };
        readonly listContactPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly createContactPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly deleteContactPolicy: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly createMoneyMatrice: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/control/cron/health";
        };
        readonly listCompanies: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies";
        };
        readonly listComparison: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies/comparison";
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies/trends";
        };
        readonly listControlSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/control-summary";
        };
        readonly listDataQuality: {
            readonly method: "GET";
            readonly path: "/api/v1/control/data-quality";
        };
        readonly listDeadLetter: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dead-letter";
        };
        readonly listCounts: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dead-letter/counts";
        };
        readonly getDeadLetter: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createArchive: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResolve: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLog: {
            readonly method: "GET";
            readonly path: "/api/v1/control/decisions/log";
        };
        readonly createExecutePlan: {
            readonly method: "POST";
            readonly path: "/api/v1/control/execute-plan";
        };
        readonly listToday: {
            readonly method: "GET";
            readonly path: "/api/v1/control/founder-playbook/today";
        };
        readonly listGithubIdentityMap: {
            readonly method: "GET";
            readonly path: "/api/v1/control/github-identity-map";
        };
        readonly createUpsert: {
            readonly method: "POST";
            readonly path: "/api/v1/control/github-identity-map/upsert";
        };
        readonly listHealthSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/control/health-summary";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v1/control/integrations/health";
        };
        readonly createReplay: {
            readonly method: "POST";
            readonly path: "/api/v1/control/jobs/replay";
        };
        readonly listRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/control/jobs/runs";
        };
        readonly createCanSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/can-send";
        };
        readonly createRecordSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/record-send";
        };
        readonly createRequestMoneyApproval: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/request-money-approval";
        };
        readonly createRouteLead: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/route-lead";
        };
        readonly createApplicationMilestone: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/risk-status";
        };
        readonly createMessageDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/control/message-draft";
        };
        readonly listControlReport: {
            readonly method: "GET";
            readonly path: "/api/v1/control/observability/control-report";
        };
        readonly listCounters: {
            readonly method: "GET";
            readonly path: "/api/v1/control/platform/counters";
        };
        readonly createAssignOwner: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/assign-owner";
        };
        readonly createCandidateStage: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/candidate-stage";
        };
        readonly getCandidate: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/candidates";
        };
        readonly createConfirmPlacement: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/confirm-placement";
        };
        readonly listPlacements: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/placements";
        };
        readonly createRouteCandidate: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/route-candidate";
        };
        readonly createSimulate: {
            readonly method: "POST";
            readonly path: "/api/v1/control/scenario/simulate";
        };
        readonly listSlo: {
            readonly method: "GET";
            readonly path: "/api/v1/control/scheduler/slo";
        };
        readonly listPosture: {
            readonly method: "GET";
            readonly path: "/api/v1/control/security/posture";
        };
        readonly listRecent: {
            readonly method: "GET";
            readonly path: "/api/v1/control/signals/recent";
        };
        readonly listManager: {
            readonly method: "GET";
            readonly path: "/api/v1/control/sla/manager";
        };
        readonly listMetrics: {
            readonly method: "GET";
            readonly path: "/api/v1/control/storage/metrics";
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/control/stream/events";
        };
        readonly listSystemHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/control/system-health";
        };
        readonly listMetrics2: {
            readonly method: "GET";
            readonly path: "/api/v1/control/trend/metrics";
        };
        readonly listReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/control/webhook/reliability";
        };
        readonly listWeeklyBoardPacket: {
            readonly method: "GET";
            readonly path: "/api/v1/control/weekly-board-packet";
        };
        readonly createBackup2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/backup";
        };
        readonly listList2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/backup/list";
        };
        readonly createLimitationsClaude2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/limitations-claude";
        };
        readonly createSelfLearningTrain2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/self-learning-train";
        };
        readonly createTrainDataDriven2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/train-data-driven";
        };
        readonly listMorningBrief2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/ceo/morning-brief";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/ceo/status";
        };
        readonly listMultiOrg2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/cockpit/multi-org";
        };
        readonly listReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/compliance/report";
        };
        readonly createRun2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/compliance/run";
        };
        readonly listContactPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly createContactPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly deleteContactPolicy2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy2: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly createMoneyMatrice2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice2: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice2: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listHealth3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/cron/health";
        };
        readonly listCompanies2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies";
        };
        readonly listComparison2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies/comparison";
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies/trends";
        };
        readonly listControlSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/control-summary";
        };
        readonly listDataQuality2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/data-quality";
        };
        readonly listDeadLetter2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dead-letter";
        };
        readonly listCounts2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dead-letter/counts";
        };
        readonly getDeadLetter2: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createArchive2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResolve2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLog2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/decisions/log";
        };
        readonly createExecutePlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/execute-plan";
        };
        readonly listToday2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/founder-playbook/today";
        };
        readonly listGithubIdentityMap2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/github-identity-map";
        };
        readonly createUpsert2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/github-identity-map/upsert";
        };
        readonly listHealthSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/health-summary";
        };
        readonly listHealth4: {
            readonly method: "GET";
            readonly path: "/api/v2/control/integrations/health";
        };
        readonly createReplay2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/jobs/replay";
        };
        readonly listRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/jobs/runs";
        };
        readonly createCanSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/can-send";
        };
        readonly createRecordSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/record-send";
        };
        readonly createRequestMoneyApproval2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/request-money-approval";
        };
        readonly createRouteLead2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/route-lead";
        };
        readonly createApplicationMilestone2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/risk-status";
        };
        readonly createMessageDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/message-draft";
        };
        readonly listControlReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/observability/control-report";
        };
        readonly listCounters2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/platform/counters";
        };
        readonly createAssignOwner2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/assign-owner";
        };
        readonly createCandidateStage2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/candidate-stage";
        };
        readonly getCandidate2: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/candidates";
        };
        readonly createConfirmPlacement2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/confirm-placement";
        };
        readonly listPlacements2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/placements";
        };
        readonly createRouteCandidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/route-candidate";
        };
        readonly createSimulate2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/scenario/simulate";
        };
        readonly listSlo2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/scheduler/slo";
        };
        readonly listPosture2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/security/posture";
        };
        readonly listRecent2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/signals/recent";
        };
        readonly listManager2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/sla/manager";
        };
        readonly listMetrics3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/storage/metrics";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/stream/events";
        };
        readonly listSystemHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/system-health";
        };
        readonly listMetrics4: {
            readonly method: "GET";
            readonly path: "/api/v2/control/trend/metrics";
        };
        readonly listReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/webhook/reliability";
        };
        readonly listWeeklyBoardPacket2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/weekly-board-packet";
        };
    };
    readonly ceoOrchestrator: {
        readonly listBriefing: {
            readonly method: "GET";
            readonly path: "/api/v1/orchestrator/briefing";
        };
        readonly getWorkspaceHealth: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBriefing2: {
            readonly method: "GET";
            readonly path: "/api/v2/orchestrator/briefing";
        };
        readonly getWorkspaceHealth2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly chatStream: {
        readonly createStream: {
            readonly method: "POST";
            readonly path: "/api/v1/chat/stream";
        };
        readonly createStream2: {
            readonly method: "POST";
            readonly path: "/api/v2/chat/stream";
        };
    };
    readonly coaching: {
        readonly listCoaching: {
            readonly method: "GET";
            readonly path: "/api/v1/coaching";
        };
        readonly createDepartment: (department_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEmployee: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/coaching/insights";
        };
        readonly createOrg: {
            readonly method: "POST";
            readonly path: "/api/v1/coaching/org";
        };
        readonly createOutcome: {
            readonly method: "POST";
            readonly path: "/api/v1/coaching/outcomes";
        };
        readonly listRecommendations: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReport: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getCoaching: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApprove: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateReject: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCoaching2: {
            readonly method: "GET";
            readonly path: "/api/v2/coaching";
        };
        readonly createDepartment2: (department_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createEmployee2: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/coaching/insights";
        };
        readonly createOrg2: {
            readonly method: "POST";
            readonly path: "/api/v2/coaching/org";
        };
        readonly createOutcome2: {
            readonly method: "POST";
            readonly path: "/api/v2/coaching/outcomes";
        };
        readonly listRecommendations2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReport2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getCoaching2: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApprove2: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateReject2: (report_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly codnovAi: {
        readonly listActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/activity";
        };
        readonly listAiUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/ai-usage";
        };
        readonly listCockpit: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/cockpit";
        };
        readonly listProjects: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/projects";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/projects";
        };
        readonly deleteProject: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/scorecard";
        };
        readonly listSprints: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/sprints";
        };
        readonly createSprint: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/sprints";
        };
        readonly deleteSprint: (sprint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSprint: (sprint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSprint: (sprint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/codnov/tasks";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/codnov/tasks";
        };
        readonly deleteTask: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTask: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/activity";
        };
        readonly listAiUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/ai-usage";
        };
        readonly listCockpit2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/cockpit";
        };
        readonly listProjects2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/projects";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/projects";
        };
        readonly deleteProject2: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject2: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/scorecard";
        };
        readonly listSprints2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/sprints";
        };
        readonly createSprint2: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/sprints";
        };
        readonly deleteSprint2: (sprint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSprint2: (sprint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSprint2: (sprint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v2/codnov/tasks";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v2/codnov/tasks";
        };
        readonly deleteTask2: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTask2: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly commands: {
        readonly listCommands: {
            readonly method: "GET";
            readonly path: "/api/v1/commands";
        };
        readonly createCommand: {
            readonly method: "POST";
            readonly path: "/api/v1/commands";
        };
        readonly listCommands2: {
            readonly method: "GET";
            readonly path: "/api/v2/commands";
        };
        readonly createCommand2: {
            readonly method: "POST";
            readonly path: "/api/v2/commands";
        };
    };
    readonly commissions: {
        readonly listPayouts: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/payouts";
        };
        readonly createPayout: {
            readonly method: "POST";
            readonly path: "/api/v1/commissions/payouts";
        };
        readonly updatePayout: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRules: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/rules";
        };
        readonly createRule: {
            readonly method: "POST";
            readonly path: "/api/v1/commissions/rules";
        };
        readonly deleteRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/commissions/summary";
        };
        readonly listPayouts2: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/payouts";
        };
        readonly createPayout2: {
            readonly method: "POST";
            readonly path: "/api/v2/commissions/payouts";
        };
        readonly updatePayout2: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/rules";
        };
        readonly createRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/commissions/rules";
        };
        readonly deleteRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/commissions/summary";
        };
    };
    readonly companies: {
        readonly listCompanies: {
            readonly method: "GET";
            readonly path: "/api/v1/companies";
        };
        readonly createCompany: {
            readonly method: "POST";
            readonly path: "/api/v1/companies";
        };
        readonly listFounder: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/dashboard/founder";
        };
        readonly listDomains: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/domains";
        };
        readonly createDomain: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/domains";
        };
        readonly createHandoff: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/handoff";
        };
        readonly listProducts: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/products";
        };
        readonly createProduct: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/products";
        };
        readonly listPublic: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/public";
        };
        readonly getCompany: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompany: (company_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCompanies2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies";
        };
        readonly createCompany2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies";
        };
        readonly listFounder2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/dashboard/founder";
        };
        readonly listDomains2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/domains";
        };
        readonly createDomain2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/domains";
        };
        readonly createHandoff2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/handoff";
        };
        readonly listProducts2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/products";
        };
        readonly createProduct2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/products";
        };
        readonly listPublic2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/public";
        };
        readonly getCompany2: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompany2: (company_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly competitors: {
        readonly listCompetitors: {
            readonly method: "GET";
            readonly path: "/api/v1/competitors";
        };
        readonly createCompetitor: {
            readonly method: "POST";
            readonly path: "/api/v1/competitors";
        };
        readonly createDealLink: {
            readonly method: "POST";
            readonly path: "/api/v1/competitors/deal-link";
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWinLossStats: {
            readonly method: "GET";
            readonly path: "/api/v1/competitors/win-loss-stats";
        };
        readonly deleteCompetitor: (competitor_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCompetitor: (competitor_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompetitor: (competitor_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listCompetitors2: {
            readonly method: "GET";
            readonly path: "/api/v2/competitors";
        };
        readonly createCompetitor2: {
            readonly method: "POST";
            readonly path: "/api/v2/competitors";
        };
        readonly createDealLink2: {
            readonly method: "POST";
            readonly path: "/api/v2/competitors/deal-link";
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWinLossStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/competitors/win-loss-stats";
        };
        readonly deleteCompetitor2: (competitor_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCompetitor2: (competitor_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompetitor2: (competitor_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly contactLifecycle: {
        readonly listCounts: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-lifecycle/counts";
        };
        readonly getCurrent: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getHistory: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-lifecycle/transition";
        };
        readonly listCounts2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-lifecycle/counts";
        };
        readonly getCurrent2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getHistory2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-lifecycle/transition";
        };
    };
    readonly contactMergeLogs: {
        readonly listContactMergeLogs: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-merge-logs";
        };
        readonly createContactMergeLog: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-merge-logs";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-merge-logs/stats";
        };
        readonly getContactMergeLog: (merge_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactMergeLogs2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-merge-logs";
        };
        readonly createContactMergeLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-merge-logs";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-merge-logs/stats";
        };
        readonly getContactMergeLog2: (merge_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly contactRelationships: {
        readonly listContactRelationships: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-relationships";
        };
        readonly createContactRelationship: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-relationships";
        };
        readonly deleteContactRelationship: (rel_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactRelationship: (rel_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContactRelationships2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-relationships";
        };
        readonly createContactRelationship2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-relationships";
        };
        readonly deleteContactRelationship2: (rel_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactRelationship2: (rel_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly contactScores: {
        readonly createContactScore: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-scores";
        };
        readonly getContactScore: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createContactScore2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-scores";
        };
        readonly getContactScore2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly contactScoring: {
        readonly listScoringRules: {
            readonly method: "GET";
            readonly path: "/api/v1/scoring-rules";
        };
        readonly createScoringRule: {
            readonly method: "POST";
            readonly path: "/api/v1/scoring-rules";
        };
        readonly createScore: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteScoringRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoringRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScoringRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/scoring-rules";
        };
        readonly createScoringRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/scoring-rules";
        };
        readonly createScore2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteScoringRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoringRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly contactSegments: {
        readonly listContactSegments: {
            readonly method: "GET";
            readonly path: "/api/v1/contact-segments";
        };
        readonly createContactSegment: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-segments";
        };
        readonly deleteContactSegment: (segment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactSegment: (segment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate: (segment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listContactSegments2: {
            readonly method: "GET";
            readonly path: "/api/v2/contact-segments";
        };
        readonly createContactSegment2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-segments";
        };
        readonly deleteContactSegment2: (segment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactSegment2: (segment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate2: (segment_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly contactTimeline: {
        readonly createEvent: {
            readonly method: "POST";
            readonly path: "/api/v1/contact-timeline/events";
        };
        readonly getEvent: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent2: {
            readonly method: "POST";
            readonly path: "/api/v2/contact-timeline/events";
        };
        readonly getEvent2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly contacts: {
        readonly listContacts: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts";
        };
        readonly createContact: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts";
        };
        readonly createInquiry: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/contacts/inquiry";
        };
        readonly listDuplicates: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/duplicates";
        };
        readonly createEnrich: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/enrich";
        };
        readonly listFollowUpDue: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/follow-up-due";
        };
        readonly listIntelligence: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/intelligence";
        };
        readonly createRescore: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/intelligence/rescore";
        };
        readonly createMerge: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/merge";
        };
        readonly listPipelineAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/pipeline-analytics";
        };
        readonly listPipelineSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/pipeline-summary";
        };
        readonly deleteContact: (contact_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContact: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContact: (contact_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMergeHistory: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listNetwork: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQualify: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRoute: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnmerge: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listContacts2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts";
        };
        readonly createContact2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts";
        };
        readonly createInquiry2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/contacts/inquiry";
        };
        readonly listDuplicates2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/duplicates";
        };
        readonly createEnrich2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/enrich";
        };
        readonly listFollowUpDue2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/follow-up-due";
        };
        readonly listIntelligence2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/intelligence";
        };
        readonly createRescore2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/intelligence/rescore";
        };
        readonly createMerge2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/merge";
        };
        readonly listPipelineAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/pipeline-analytics";
        };
        readonly listPipelineSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/pipeline-summary";
        };
        readonly deleteContact2: (contact_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContact2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContact2: (contact_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMergeHistory2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listNetwork2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQualify2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRoute2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnmerge2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly contracts: {
        readonly listContracts: {
            readonly method: "GET";
            readonly path: "/api/v1/contracts";
        };
        readonly createContract: {
            readonly method: "POST";
            readonly path: "/api/v1/contracts";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/contracts/summary";
        };
        readonly deleteContract: (contract_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContract: (contract_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContract: (contract_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listContracts2: {
            readonly method: "GET";
            readonly path: "/api/v2/contracts";
        };
        readonly createContract2: {
            readonly method: "POST";
            readonly path: "/api/v2/contracts";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/contracts/summary";
        };
        readonly deleteContract2: (contract_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContract2: (contract_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContract2: (contract_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly controlConfig: {
        readonly listContactPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly createContactPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly deleteContactPolicy: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly createMoneyMatrice: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listContactPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly createContactPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly deleteContactPolicy2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy2: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly createMoneyMatrice2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice2: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice2: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly controlDashboard: {
        readonly listControlSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/control-summary";
        };
        readonly listControlSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/control-summary";
        };
    };
    readonly controlLevers: {
        readonly createCanSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/can-send";
        };
        readonly createRecordSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/record-send";
        };
        readonly createRequestMoneyApproval: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/request-money-approval";
        };
        readonly createRouteLead: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/route-lead";
        };
        readonly createApplicationMilestone: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/risk-status";
        };
        readonly createCanSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/can-send";
        };
        readonly createRecordSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/record-send";
        };
        readonly createRequestMoneyApproval2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/request-money-approval";
        };
        readonly createRouteLead2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/route-lead";
        };
        readonly createApplicationMilestone2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/risk-status";
        };
    };
    readonly controlObservability: {
        readonly listControlReport: {
            readonly method: "GET";
            readonly path: "/api/v1/control/observability/control-report";
        };
        readonly listControlReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/observability/control-report";
        };
    };
    readonly controlSse: {
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/control/stream/events";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/stream/events";
        };
    };
    readonly conversionFunnels: {
        readonly listConversionFunnels: {
            readonly method: "GET";
            readonly path: "/api/v1/conversion-funnels";
        };
        readonly createConversionFunnel: {
            readonly method: "POST";
            readonly path: "/api/v1/conversion-funnels";
        };
        readonly getBottleneck: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getSummary: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly listConversionFunnels2: {
            readonly method: "GET";
            readonly path: "/api/v2/conversion-funnels";
        };
        readonly createConversionFunnel2: {
            readonly method: "POST";
            readonly path: "/api/v2/conversion-funnels";
        };
        readonly getBottleneck2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getSummary2: (period: string) => {
            method: "GET";
            path: string;
        };
    };
    readonly customFields: {
        readonly listDefinitions: {
            readonly method: "GET";
            readonly path: "/api/v1/custom-fields/definitions";
        };
        readonly createDefinition: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-fields/definitions";
        };
        readonly deleteDefinition: (defn_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDefinition: (defn_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createValue: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-fields/values";
        };
        readonly getValue: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDefinitions2: {
            readonly method: "GET";
            readonly path: "/api/v2/custom-fields/definitions";
        };
        readonly createDefinition2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-fields/definitions";
        };
        readonly deleteDefinition2: (defn_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDefinition2: (defn_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createValue2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-fields/values";
        };
        readonly getValue2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly customReports: {
        readonly listCustomReports: {
            readonly method: "GET";
            readonly path: "/api/v1/custom-reports";
        };
        readonly createCustomReport: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-reports";
        };
        readonly deleteCustomReport: (report_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCustomReport: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCustomReport: (report_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createRun: (report_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCustomReports2: {
            readonly method: "GET";
            readonly path: "/api/v2/custom-reports";
        };
        readonly createCustomReport2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-reports";
        };
        readonly deleteCustomReport2: (report_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCustomReport2: (report_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCustomReport2: (report_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createRun2: (report_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly customerHealth: {
        readonly listCustomerHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/customer-health";
        };
        readonly createCustomerHealth: {
            readonly method: "POST";
            readonly path: "/api/v1/customer-health";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/customer-health/summary";
        };
        readonly getCustomerHealth: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCustomerHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/customer-health";
        };
        readonly createCustomerHealth2: {
            readonly method: "POST";
            readonly path: "/api/v2/customer-health";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/customer-health/summary";
        };
        readonly getCustomerHealth2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dashboard: {
        readonly listAnomalies: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/anomalies";
        };
        readonly listKpis: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/kpis";
        };
        readonly listLayout: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/layout";
        };
        readonly updateLayout: {
            readonly method: "PUT";
            readonly path: "/api/v1/dashboard/layout";
        };
        readonly listRevenueForecast: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/revenue-forecast";
        };
        readonly listTeamWorkload: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/team-workload";
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/trends";
        };
        readonly listAnomalies2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/anomalies";
        };
        readonly listKpis2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/kpis";
        };
        readonly listLayout2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/layout";
        };
        readonly updateLayout2: {
            readonly method: "PUT";
            readonly path: "/api/v2/dashboard/layout";
        };
        readonly listRevenueForecast2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/revenue-forecast";
        };
        readonly listTeamWorkload2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/team-workload";
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/trends";
        };
    };
    readonly dashboardWidgets: {
        readonly listDashboardWidgets: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard-widgets";
        };
        readonly createDashboardWidget: {
            readonly method: "POST";
            readonly path: "/api/v1/dashboard-widgets";
        };
        readonly listCatalog: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard-widgets/catalog";
        };
        readonly deleteDashboardWidget: (widget_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDashboardWidget: (widget_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDashboardWidgets2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard-widgets";
        };
        readonly createDashboardWidget2: {
            readonly method: "POST";
            readonly path: "/api/v2/dashboard-widgets";
        };
        readonly listCatalog2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard-widgets/catalog";
        };
        readonly deleteDashboardWidget2: (widget_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDashboardWidget2: (widget_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly dataCollection: {
        readonly listPower: {
            readonly method: "GET";
            readonly path: "/api/v1/data/branding/power";
        };
        readonly createCollect: {
            readonly method: "POST";
            readonly path: "/api/v1/data/collect";
        };
        readonly listBoundary: {
            readonly method: "GET";
            readonly path: "/api/v1/data/ethics/boundary";
        };
        readonly createDetect: {
            readonly method: "POST";
            readonly path: "/api/v1/data/fraud/detect";
        };
        readonly listLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/data/fraud/layer";
        };
        readonly listLayer2: {
            readonly method: "GET";
            readonly path: "/api/v1/data/media/layer";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/data/media/projects";
        };
        readonly createMeetingCoach: {
            readonly method: "POST";
            readonly path: "/api/v1/data/meeting-coach";
        };
        readonly createAnalyze: {
            readonly method: "POST";
            readonly path: "/api/v1/data/mobile-capture/analyze";
        };
        readonly createUploadAnalyze: {
            readonly method: "POST";
            readonly path: "/api/v1/data/mobile-capture/upload-analyze";
        };
        readonly createDigest: {
            readonly method: "POST";
            readonly path: "/api/v1/data/news/digest";
        };
        readonly getOcrJob: (job_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUploadAnalyze2: {
            readonly method: "POST";
            readonly path: "/api/v1/data/photo-character/upload-analyze";
        };
        readonly listManagementLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/data/social/management-layer";
        };
        readonly createDetect2: {
            readonly method: "POST";
            readonly path: "/api/v1/data/threats/detect";
        };
        readonly listLayer3: {
            readonly method: "GET";
            readonly path: "/api/v1/data/threats/layer";
        };
        readonly createTrain: {
            readonly method: "POST";
            readonly path: "/api/v1/data/threats/train";
        };
        readonly createTrainPro: {
            readonly method: "POST";
            readonly path: "/api/v1/data/train-pro";
        };
        readonly listPower2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/branding/power";
        };
        readonly createCollect2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/collect";
        };
        readonly listBoundary2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/ethics/boundary";
        };
        readonly createDetect3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/fraud/detect";
        };
        readonly listLayer4: {
            readonly method: "GET";
            readonly path: "/api/v2/data/fraud/layer";
        };
        readonly listLayer5: {
            readonly method: "GET";
            readonly path: "/api/v2/data/media/layer";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/media/projects";
        };
        readonly createMeetingCoach2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/meeting-coach";
        };
        readonly createAnalyze2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/mobile-capture/analyze";
        };
        readonly createUploadAnalyze3: {
            readonly method: "POST";
            readonly path: "/api/v2/data/mobile-capture/upload-analyze";
        };
        readonly createDigest2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/news/digest";
        };
        readonly getOcrJob2: (job_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUploadAnalyze4: {
            readonly method: "POST";
            readonly path: "/api/v2/data/photo-character/upload-analyze";
        };
        readonly listManagementLayer2: {
            readonly method: "GET";
            readonly path: "/api/v2/data/social/management-layer";
        };
        readonly createDetect4: {
            readonly method: "POST";
            readonly path: "/api/v2/data/threats/detect";
        };
        readonly listLayer6: {
            readonly method: "GET";
            readonly path: "/api/v2/data/threats/layer";
        };
        readonly createTrain2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/threats/train";
        };
        readonly createTrainPro2: {
            readonly method: "POST";
            readonly path: "/api/v2/data/train-pro";
        };
    };
    readonly dataRetention: {
        readonly listDataRetention: {
            readonly method: "GET";
            readonly path: "/api/v1/data-retention";
        };
        readonly createDataRetention: {
            readonly method: "POST";
            readonly path: "/api/v1/data-retention";
        };
        readonly deleteDataRetention: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDataRetention: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDataRetention2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-retention";
        };
        readonly createDataRetention2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-retention";
        };
        readonly deleteDataRetention2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDataRetention2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEvaluate2: (policy_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dataSecurity: {
        readonly listVerify: {
            readonly method: "GET";
            readonly path: "/api/v1/data-security/audit/verify";
        };
        readonly listDsr: {
            readonly method: "GET";
            readonly path: "/api/v1/data-security/dsr/";
        };
        readonly createDsr: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/dsr/";
        };
        readonly getDsr: (dsr_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createScan: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/hygiene/scan";
        };
        readonly createRun: {
            readonly method: "POST";
            readonly path: "/api/v1/data-security/retention/run";
        };
        readonly listVerify2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-security/audit/verify";
        };
        readonly listDsr2: {
            readonly method: "GET";
            readonly path: "/api/v2/data-security/dsr/";
        };
        readonly createDsr2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/dsr/";
        };
        readonly getDsr2: (dsr_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove2: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createExecute2: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject2: (dsr_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createScan2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/hygiene/scan";
        };
        readonly createRun2: {
            readonly method: "POST";
            readonly path: "/api/v2/data-security/retention/run";
        };
    };
    readonly dealCollaborators: {
        readonly createDealCollaborator: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-collaborators";
        };
        readonly getUser: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealCollaborator: (collab_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealCollaborator: (collab_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly getDealCollaborator: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDealCollaborator2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-collaborators";
        };
        readonly getUser2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealCollaborator2: (collab_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealCollaborator2: (collab_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly getDealCollaborator2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dealDependencies: {
        readonly createDealDependency: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-dependencies";
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBlockers: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealDependency: (dep_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateResolve: (dep_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createDealDependency2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-dependencies";
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBlockers2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealDependency2: (dep_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateResolve2: (dep_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly dealForecasting: {
        readonly listPipeline: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast/pipeline";
        };
        readonly listWinRates: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast/win-rates";
        };
        readonly listPipeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast/pipeline";
        };
        readonly listWinRates2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast/win-rates";
        };
    };
    readonly dealRisks: {
        readonly listDealRisks: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-risks";
        };
        readonly createDealRisk: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-risks";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-risks/summary";
        };
        readonly getDealRisk: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDealRisks2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-risks";
        };
        readonly createDealRisk2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-risks";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-risks/summary";
        };
        readonly getDealRisk2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dealRotations: {
        readonly listDealRotations: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-rotations";
        };
        readonly createDealRotation: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-rotations";
        };
        readonly deleteDealRotation: (queue_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDealRotation: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDealRotation: (queue_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createAssign: (queue_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAssignments: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listFairness: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDealRotations2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-rotations";
        };
        readonly createDealRotation2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-rotations";
        };
        readonly deleteDealRotation2: (queue_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDealRotation2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDealRotation2: (queue_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createAssign2: (queue_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAssignments2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listFairness2: (queue_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dealSplits: {
        readonly createDealSplit: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-splits";
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealSplit: (split_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealSplit: (split_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createDealSplit2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-splits";
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly deleteDealSplit2: (split_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDealSplit2: (split_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly dealStageRequirements: {
        readonly listRequirements: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/requirements";
        };
        readonly createRequirement: {
            readonly method: "POST";
            readonly path: "/api/v1/deals/requirements";
        };
        readonly getChecklist: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly getValidate: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteRequirement: (req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly createCheck: (req_id: number, deal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRequirements2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/requirements";
        };
        readonly createRequirement2: {
            readonly method: "POST";
            readonly path: "/api/v2/deals/requirements";
        };
        readonly getChecklist2: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly getValidate2: (deal_id: number, stage: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteRequirement2: (req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly createCheck2: (req_id: number, deal_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly dealVelocity: {
        readonly listBottlenecks: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-velocity/bottlenecks";
        };
        readonly getHistory: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition: {
            readonly method: "POST";
            readonly path: "/api/v1/deal-velocity/transition";
        };
        readonly listVelocity: {
            readonly method: "GET";
            readonly path: "/api/v1/deal-velocity/velocity";
        };
        readonly listBottlenecks2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-velocity/bottlenecks";
        };
        readonly getHistory2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTransition2: {
            readonly method: "POST";
            readonly path: "/api/v2/deal-velocity/transition";
        };
        readonly listVelocity2: {
            readonly method: "GET";
            readonly path: "/api/v2/deal-velocity/velocity";
        };
    };
    readonly deals: {
        readonly listDeals: {
            readonly method: "GET";
            readonly path: "/api/v1/deals";
        };
        readonly createDeal: {
            readonly method: "POST";
            readonly path: "/api/v1/deals";
        };
        readonly listForecast: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/summary";
        };
        readonly deleteDeal: (deal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDeal: (deal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDeals2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals";
        };
        readonly createDeal2: {
            readonly method: "POST";
            readonly path: "/api/v2/deals";
        };
        readonly listForecast2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/summary";
        };
        readonly deleteDeal2: (deal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDeal2: (deal_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly decisionCards: {
        readonly listDecisionCards: {
            readonly method: "GET";
            readonly path: "/api/v1/decision-cards";
        };
        readonly createDecisionCard: {
            readonly method: "POST";
            readonly path: "/api/v1/decision-cards";
        };
        readonly listPendingCount: {
            readonly method: "GET";
            readonly path: "/api/v1/decision-cards/pending-count";
        };
        readonly getDecisionCard: (card_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecide: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDefer: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDecisionCards2: {
            readonly method: "GET";
            readonly path: "/api/v2/decision-cards";
        };
        readonly createDecisionCard2: {
            readonly method: "POST";
            readonly path: "/api/v2/decision-cards";
        };
        readonly listPendingCount2: {
            readonly method: "GET";
            readonly path: "/api/v2/decision-cards/pending-count";
        };
        readonly getDecisionCard2: (card_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecide2: (card_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDefer2: (card_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly dedupRules: {
        readonly listDedupRules: {
            readonly method: "GET";
            readonly path: "/api/v1/dedup-rules";
        };
        readonly createDedupRule: {
            readonly method: "POST";
            readonly path: "/api/v1/dedup-rules";
        };
        readonly createCheck: {
            readonly method: "POST";
            readonly path: "/api/v1/dedup-rules/check";
        };
        readonly deleteDedupRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDedupRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDedupRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listDedupRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/dedup-rules";
        };
        readonly createDedupRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/dedup-rules";
        };
        readonly createCheck2: {
            readonly method: "POST";
            readonly path: "/api/v2/dedup-rules/check";
        };
        readonly deleteDedupRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDedupRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDedupRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly departments: {
        readonly listDepartments: {
            readonly method: "GET";
            readonly path: "/api/v1/departments";
        };
        readonly createDepartment: {
            readonly method: "POST";
            readonly path: "/api/v1/departments";
        };
        readonly deleteDepartment: (department_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDepartment: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDepartment: (department_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDepartments2: {
            readonly method: "GET";
            readonly path: "/api/v2/departments";
        };
        readonly createDepartment2: {
            readonly method: "POST";
            readonly path: "/api/v2/departments";
        };
        readonly deleteDepartment2: (department_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDepartment2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDepartment2: (department_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly documentSigning: {
        readonly listDocumentSigning: {
            readonly method: "GET";
            readonly path: "/api/v1/document-signing";
        };
        readonly createDocumentSigning: {
            readonly method: "POST";
            readonly path: "/api/v1/document-signing";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/document-signing/stats";
        };
        readonly getDocumentSigning: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecline: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSign: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDocumentSigning2: {
            readonly method: "GET";
            readonly path: "/api/v2/document-signing";
        };
        readonly createDocumentSigning2: {
            readonly method: "POST";
            readonly path: "/api/v2/document-signing";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/document-signing/stats";
        };
        readonly getDocumentSigning2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createDecline2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSign2: (request_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly documentTemplates: {
        readonly listDocumentTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/document-templates";
        };
        readonly createDocumentTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/document-templates";
        };
        readonly deleteDocumentTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDocumentTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDocumentTemplate: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDocumentTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/document-templates";
        };
        readonly createDocumentTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/document-templates";
        };
        readonly deleteDocumentTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDocumentTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDocumentTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender2: (template_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly dripAnalytics: {
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/drip-analytics/events";
        };
        readonly createEvent: {
            readonly method: "POST";
            readonly path: "/api/v1/drip-analytics/events";
        };
        readonly getStep: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/drip-analytics/events";
        };
        readonly createEvent2: {
            readonly method: "POST";
            readonly path: "/api/v2/drip-analytics/events";
        };
        readonly getStep2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getSummary2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly dripCampaigns: {
        readonly listDripCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/drip-campaigns";
        };
        readonly createDripCampaign: {
            readonly method: "POST";
            readonly path: "/api/v1/drip-campaigns";
        };
        readonly createUnsubscribe: (enrollment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteDripCampaign: (campaign_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDripCampaign: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDripCampaign: (campaign_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createEnroll: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDripCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/drip-campaigns";
        };
        readonly createDripCampaign2: {
            readonly method: "POST";
            readonly path: "/api/v2/drip-campaigns";
        };
        readonly createUnsubscribe2: (enrollment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteDripCampaign2: (campaign_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDripCampaign2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDripCampaign2: (campaign_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createEnroll2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSteps2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly duplicateDetection: {
        readonly listDuplicates: {
            readonly method: "GET";
            readonly path: "/api/v1/duplicates";
        };
        readonly createCheck: {
            readonly method: "POST";
            readonly path: "/api/v1/duplicates/check";
        };
        readonly listContacts: {
            readonly method: "GET";
            readonly path: "/api/v1/duplicates/scan/contacts";
        };
        readonly updateResolve: (match_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDuplicates2: {
            readonly method: "GET";
            readonly path: "/api/v2/duplicates";
        };
        readonly createCheck2: {
            readonly method: "POST";
            readonly path: "/api/v2/duplicates/check";
        };
        readonly listContacts2: {
            readonly method: "GET";
            readonly path: "/api/v2/duplicates/scan/contacts";
        };
        readonly updateResolve2: (match_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly email: {
        readonly listAuthUrl: {
            readonly method: "GET";
            readonly path: "/api/v1/email/auth-url";
        };
        readonly listCallback: {
            readonly method: "GET";
            readonly path: "/api/v1/email/callback";
        };
        readonly createCompose: {
            readonly method: "POST";
            readonly path: "/api/v1/email/compose";
        };
        readonly listPendingDigest: {
            readonly method: "GET";
            readonly path: "/api/v1/email/control/pending-digest";
        };
        readonly createDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/email/control/pending-digest/draft";
        };
        readonly createProces: {
            readonly method: "POST";
            readonly path: "/api/v1/email/control/process";
        };
        readonly listReportTemplate: {
            readonly method: "GET";
            readonly path: "/api/v1/email/control/report-template";
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/email/health";
        };
        readonly listInbox: {
            readonly method: "GET";
            readonly path: "/api/v1/email/inbox";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/email/search";
        };
        readonly createSync: {
            readonly method: "POST";
            readonly path: "/api/v1/email/sync";
        };
        readonly getThread: (thread_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSummarize: (thread_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDraftReply: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRead: (email_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createSend: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStrategize: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSummarize2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAuthUrl2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/auth-url";
        };
        readonly listCallback2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/callback";
        };
        readonly createCompose2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/compose";
        };
        readonly listPendingDigest2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/control/pending-digest";
        };
        readonly createDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/control/pending-digest/draft";
        };
        readonly createProces2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/control/process";
        };
        readonly listReportTemplate2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/control/report-template";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/health";
        };
        readonly listInbox2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/inbox";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/search";
        };
        readonly createSync2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/sync";
        };
        readonly getThread2: (thread_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSummarize3: (thread_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDraftReply2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRead2: (email_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createSend2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStrategize2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSummarize4: (email_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly emailAnalytics: {
        readonly listEmailAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/email-analytics";
        };
        readonly createEmailAnalytic: {
            readonly method: "POST";
            readonly path: "/api/v1/email-analytics";
        };
        readonly listEngagement: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMetrics: (email_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOverview: {
            readonly method: "GET";
            readonly path: "/api/v1/email-analytics/overview";
        };
        readonly listEmailAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-analytics";
        };
        readonly createEmailAnalytic2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-analytics";
        };
        readonly listEngagement2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMetrics2: (email_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOverview2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-analytics/overview";
        };
    };
    readonly emailCampaigns: {
        readonly listCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/campaigns";
        };
        readonly createCampaign: {
            readonly method: "POST";
            readonly path: "/api/v1/campaigns";
        };
        readonly getCampaign: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEnroll: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu: (campaign_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSummary: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/campaigns";
        };
        readonly createCampaign2: {
            readonly method: "POST";
            readonly path: "/api/v2/campaigns";
        };
        readonly getCampaign2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEnroll2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEnrollments2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEvent2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu2: (campaign_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (campaign_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSummary2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly emailSequences: {
        readonly listEmailSequences: {
            readonly method: "GET";
            readonly path: "/api/v1/email-sequences";
        };
        readonly createEmailSequence: {
            readonly method: "POST";
            readonly path: "/api/v1/email-sequences";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/email-sequences/stats";
        };
        readonly deleteEmailSequence: (sequence_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailSequence: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailSequence: (sequence_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (sequence_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteStep: (sequence_id: number, step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailSequences2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-sequences";
        };
        readonly createEmailSequence2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-sequences";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-sequences/stats";
        };
        readonly deleteEmailSequence2: (sequence_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailSequence2: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailSequence2: (sequence_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps2: (sequence_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (sequence_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteStep2: (sequence_id: number, step_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly emailSuppressions: {
        readonly listEmailSuppressions: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions";
        };
        readonly createEmailSuppression: {
            readonly method: "POST";
            readonly path: "/api/v1/email-suppressions";
        };
        readonly listCheck: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions/check";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/email-suppressions/stats";
        };
        readonly deleteEmailSuppression: (suppression_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listEmailSuppressions2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions";
        };
        readonly createEmailSuppression2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-suppressions";
        };
        readonly listCheck2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions/check";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-suppressions/stats";
        };
        readonly deleteEmailSuppression2: (suppression_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly emailTemplates: {
        readonly listEmailTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/email-templates";
        };
        readonly createEmailTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/email-templates";
        };
        readonly deleteEmailTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailTemplate: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEmailTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-templates";
        };
        readonly createEmailTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-templates";
        };
        readonly deleteEmailTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender2: (template_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly emailWarmup: {
        readonly listEmailWarmup: {
            readonly method: "GET";
            readonly path: "/api/v1/email-warmup";
        };
        readonly createEmailWarmup: {
            readonly method: "POST";
            readonly path: "/api/v1/email-warmup";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/email-warmup/status";
        };
        readonly updateAdvance: (warmup_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listEmailWarmup2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-warmup";
        };
        readonly createEmailWarmup2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-warmup";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-warmup/status";
        };
        readonly updateAdvance2: (warmup_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly empireDigital: {
        readonly listCockpit: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/cockpit";
        };
        readonly listFounderReport: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/founder-report";
        };
        readonly listIntelligence: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/intelligence";
        };
        readonly createIntelligence: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/intelligence";
        };
        readonly createReview: (item_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeads: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/leads";
        };
        readonly createBulkQualify: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/bulk-qualify";
        };
        readonly createBulkRoute: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/bulk-route";
        };
        readonly createEscalateStale: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/escalate-stale";
        };
        readonly listExport: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/leads/export";
        };
        readonly getLead: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listRoutingRules: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/routing-rules";
        };
        readonly createRoutingRule: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/routing-rules";
        };
        readonly updateRoutingRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/scorecard";
        };
        readonly listSlaPolicy: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/sla-policy";
        };
        readonly updateSlaPolicy: {
            readonly method: "PATCH";
            readonly path: "/api/v1/empire-digital/sla-policy";
        };
        readonly listCockpit2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/cockpit";
        };
        readonly listFounderReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/founder-report";
        };
        readonly listIntelligence2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/intelligence";
        };
        readonly createIntelligence2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/intelligence";
        };
        readonly createReview2: (item_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeads2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/leads";
        };
        readonly createBulkQualify2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/bulk-qualify";
        };
        readonly createBulkRoute2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/bulk-route";
        };
        readonly createEscalateStale2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/escalate-stale";
        };
        readonly listExport2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/leads/export";
        };
        readonly getLead2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listRoutingRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/routing-rules";
        };
        readonly createRoutingRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/routing-rules";
        };
        readonly updateRoutingRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/scorecard";
        };
        readonly listSlaPolicy2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/sla-policy";
        };
        readonly updateSlaPolicy2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/empire-digital/sla-policy";
        };
    };
    readonly empireDigitalAnalytics: {
        readonly getAbTest: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital-analytics/campaigns";
        };
        readonly listDailyTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital-analytics/daily-trends";
        };
        readonly getFunnel: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getAbTest2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital-analytics/campaigns";
        };
        readonly listDailyTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital-analytics/daily-trends";
        };
        readonly getFunnel2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly employeeOnboarding: {
        readonly listFlags: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/flags";
        };
        readonly createResolve: (flag_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInvites: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/invites";
        };
        readonly createInvite: {
            readonly method: "POST";
            readonly path: "/api/v1/api/v1/employee-onboarding/invites";
        };
        readonly listToken: (invite_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSubmissions: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/employee-onboarding/submissions";
        };
        readonly getSubmission: (submission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReview: (submission_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFlags2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/flags";
        };
        readonly createResolve2: (flag_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listInvites2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/invites";
        };
        readonly createInvite2: {
            readonly method: "POST";
            readonly path: "/api/v2/api/v1/employee-onboarding/invites";
        };
        readonly listToken2: (invite_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSubmissions2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/employee-onboarding/submissions";
        };
        readonly getSubmission2: (submission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createReview2: (submission_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly enrichmentQueue: {
        readonly listEnrichmentQueue: {
            readonly method: "GET";
            readonly path: "/api/v1/enrichment-queue";
        };
        readonly createEnrichmentQueue: {
            readonly method: "POST";
            readonly path: "/api/v1/enrichment-queue";
        };
        readonly createBatch: {
            readonly method: "POST";
            readonly path: "/api/v1/enrichment-queue/batch";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/enrichment-queue/stats";
        };
        readonly updateComplete: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listEnrichmentQueue2: {
            readonly method: "GET";
            readonly path: "/api/v2/enrichment-queue";
        };
        readonly createEnrichmentQueue2: {
            readonly method: "POST";
            readonly path: "/api/v2/enrichment-queue";
        };
        readonly createBatch2: {
            readonly method: "POST";
            readonly path: "/api/v2/enrichment-queue/batch";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/enrichment-queue/stats";
        };
        readonly updateComplete2: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly eoeCatalog: {
        readonly listCountries: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/countries";
        };
        readonly createCountry: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/countries";
        };
        readonly deleteCountry: (country_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCountry: (country_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCountry: (country_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCourses: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/courses";
        };
        readonly createCours: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/courses";
        };
        readonly createMatch: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/courses/match";
        };
        readonly deleteCours: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScholarships: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/scholarships";
        };
        readonly createScholarship: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/scholarships";
        };
        readonly createMatch2: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/scholarships/match";
        };
        readonly deleteScholarship: (scholarship_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getScholarship: (scholarship_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateScholarship: (scholarship_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listVisaRequirements: {
            readonly method: "GET";
            readonly path: "/api/v1/eoe-catalog/visa-requirements";
        };
        readonly createVisaRequirement: {
            readonly method: "POST";
            readonly path: "/api/v1/eoe-catalog/visa-requirements";
        };
        readonly deleteVisaRequirement: (visa_req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getVisaRequirement: (visa_req_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateVisaRequirement: (visa_req_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCountries2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/countries";
        };
        readonly createCountry2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/countries";
        };
        readonly deleteCountry2: (country_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCountry2: (country_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCountry2: (country_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCourses2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/courses";
        };
        readonly createCours2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/courses";
        };
        readonly createMatch3: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/courses/match";
        };
        readonly deleteCours2: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours2: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScholarships2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/scholarships";
        };
        readonly createScholarship2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/scholarships";
        };
        readonly createMatch4: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/scholarships/match";
        };
        readonly deleteScholarship2: (scholarship_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getScholarship2: (scholarship_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateScholarship2: (scholarship_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listVisaRequirements2: {
            readonly method: "GET";
            readonly path: "/api/v2/eoe-catalog/visa-requirements";
        };
        readonly createVisaRequirement2: {
            readonly method: "POST";
            readonly path: "/api/v2/eoe-catalog/visa-requirements";
        };
        readonly deleteVisaRequirement2: (visa_req_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getVisaRequirement2: (visa_req_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateVisaRequirement2: (visa_req_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly executions: {
        readonly listExecutions: {
            readonly method: "GET";
            readonly path: "/api/v1/executions";
        };
        readonly listExecutions2: {
            readonly method: "GET";
            readonly path: "/api/v2/executions";
        };
    };
    readonly export: {
        readonly listExport: {
            readonly method: "GET";
            readonly path: "/api/v1/export";
        };
        readonly listContacts: {
            readonly method: "GET";
            readonly path: "/api/v1/export/contacts";
        };
        readonly listDeals: {
            readonly method: "GET";
            readonly path: "/api/v1/export/deals";
        };
        readonly listFinance: {
            readonly method: "GET";
            readonly path: "/api/v1/export/finance";
        };
        readonly listExport2: {
            readonly method: "GET";
            readonly path: "/api/v2/export";
        };
        readonly listContacts2: {
            readonly method: "GET";
            readonly path: "/api/v2/export/contacts";
        };
        readonly listDeals2: {
            readonly method: "GET";
            readonly path: "/api/v2/export/deals";
        };
        readonly listFinance2: {
            readonly method: "GET";
            readonly path: "/api/v2/export/finance";
        };
    };
    readonly featureRequests: {
        readonly listFeatureRequests: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-requests";
        };
        readonly createFeatureRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/feature-requests";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-requests/stats";
        };
        readonly getFeatureRequest: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureRequest: (request_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createVote: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFeatureRequests2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-requests";
        };
        readonly createFeatureRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/feature-requests";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-requests/stats";
        };
        readonly getFeatureRequest2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureRequest2: (request_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createVote2: (request_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly fieldAudit: {
        readonly createFieldAudit: {
            readonly method: "POST";
            readonly path: "/api/v1/field-audit";
        };
        readonly createBatch: {
            readonly method: "POST";
            readonly path: "/api/v1/field-audit/batch";
        };
        readonly getEntity: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getField: (entity_type: string, entity_id: number, field_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listRecent: {
            readonly method: "GET";
            readonly path: "/api/v1/field-audit/recent";
        };
        readonly createFieldAudit2: {
            readonly method: "POST";
            readonly path: "/api/v2/field-audit";
        };
        readonly createBatch2: {
            readonly method: "POST";
            readonly path: "/api/v2/field-audit/batch";
        };
        readonly getEntity2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getField2: (entity_type: string, entity_id: number, field_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listRecent2: {
            readonly method: "GET";
            readonly path: "/api/v2/field-audit/recent";
        };
    };
    readonly finance: {
        readonly listFinance: {
            readonly method: "GET";
            readonly path: "/api/v1/finance";
        };
        readonly createFinance: {
            readonly method: "POST";
            readonly path: "/api/v1/finance";
        };
        readonly listBudgets: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/budgets";
        };
        readonly createBudget: {
            readonly method: "POST";
            readonly path: "/api/v1/finance/budgets";
        };
        readonly listEfficiency: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/efficiency";
        };
        readonly listEntityRollup: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/entity-rollup";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/summary";
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/trends";
        };
        readonly listFinance2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance";
        };
        readonly createFinance2: {
            readonly method: "POST";
            readonly path: "/api/v2/finance";
        };
        readonly listBudgets2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/budgets";
        };
        readonly createBudget2: {
            readonly method: "POST";
            readonly path: "/api/v2/finance/budgets";
        };
        readonly listEfficiency2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/efficiency";
        };
        readonly listEntityRollup2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/entity-rollup";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/summary";
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/trends";
        };
    };
    readonly forecastRollups: {
        readonly listForecastRollups: {
            readonly method: "GET";
            readonly path: "/api/v1/forecast-rollups";
        };
        readonly createForecastRollup: {
            readonly method: "POST";
            readonly path: "/api/v1/forecast-rollups";
        };
        readonly getSummary: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getForecastRollup: (rollup_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listForecastRollups2: {
            readonly method: "GET";
            readonly path: "/api/v2/forecast-rollups";
        };
        readonly createForecastRollup2: {
            readonly method: "POST";
            readonly path: "/api/v2/forecast-rollups";
        };
        readonly getSummary2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getForecastRollup2: (rollup_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly forecastScenarios: {
        readonly listForecastScenarios: {
            readonly method: "GET";
            readonly path: "/api/v1/forecast-scenarios";
        };
        readonly createForecastScenario: {
            readonly method: "POST";
            readonly path: "/api/v1/forecast-scenarios";
        };
        readonly getCompare: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteForecastScenario: (scenario_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForecastScenario: (scenario_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForecastScenario: (scenario_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listForecastScenarios2: {
            readonly method: "GET";
            readonly path: "/api/v2/forecast-scenarios";
        };
        readonly createForecastScenario2: {
            readonly method: "POST";
            readonly path: "/api/v2/forecast-scenarios";
        };
        readonly getCompare2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly deleteForecastScenario2: (scenario_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForecastScenario2: (scenario_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForecastScenario2: (scenario_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly forms: {
        readonly listForms: {
            readonly method: "GET";
            readonly path: "/api/v1/forms";
        };
        readonly createForm: {
            readonly method: "POST";
            readonly path: "/api/v1/forms";
        };
        readonly deleteForm: (form_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForm: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForm: (form_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSubmissions: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSubmit: (form_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listForms2: {
            readonly method: "GET";
            readonly path: "/api/v2/forms";
        };
        readonly createForm2: {
            readonly method: "POST";
            readonly path: "/api/v2/forms";
        };
        readonly deleteForm2: (form_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getForm2: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateForm2: (form_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSubmissions2: (form_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSubmit2: (form_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly gdpr: {
        readonly listConsent: {
            readonly method: "GET";
            readonly path: "/api/v1/gdpr/consent";
        };
        readonly createConsent: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/consent";
        };
        readonly createDelete: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/delete";
        };
        readonly createExport: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/export";
        };
        readonly listConsent2: {
            readonly method: "GET";
            readonly path: "/api/v2/gdpr/consent";
        };
        readonly createConsent2: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/consent";
        };
        readonly createDelete2: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/delete";
        };
        readonly createExport2: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/export";
        };
    };
    readonly githubGovernance: {
        readonly createApplyGovernance: {
            readonly method: "POST";
            readonly path: "/api/v1/github/apply-governance";
        };
        readonly createCeoSync: {
            readonly method: "POST";
            readonly path: "/api/v1/github/ceo-sync";
        };
        readonly listRisks: {
            readonly method: "GET";
            readonly path: "/api/v1/github/risks";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/github/summary";
        };
        readonly createApplyGovernance2: {
            readonly method: "POST";
            readonly path: "/api/v2/github/apply-governance";
        };
        readonly createCeoSync2: {
            readonly method: "POST";
            readonly path: "/api/v2/github/ceo-sync";
        };
        readonly listRisks2: {
            readonly method: "GET";
            readonly path: "/api/v2/github/risks";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/github/summary";
        };
    };
    readonly goalCascades: {
        readonly listGoalCascades: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades";
        };
        readonly createGoalCascade: {
            readonly method: "POST";
            readonly path: "/api/v1/goal-cascades";
        };
        readonly listChildren: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/children";
        };
        readonly listParents: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/parents";
        };
        readonly listTree: {
            readonly method: "GET";
            readonly path: "/api/v1/goal-cascades/tree";
        };
        readonly deleteGoalCascade: (link_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listGoalCascades2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades";
        };
        readonly createGoalCascade2: {
            readonly method: "POST";
            readonly path: "/api/v2/goal-cascades";
        };
        readonly listChildren2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/children";
        };
        readonly listParents2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/parents";
        };
        readonly listTree2: {
            readonly method: "GET";
            readonly path: "/api/v2/goal-cascades/tree";
        };
        readonly deleteGoalCascade2: (link_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly goals: {
        readonly listGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/goals";
        };
        readonly createGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/goals";
        };
        readonly deleteGoal: (goal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getGoal: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listKeyResults: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createKeyResult: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteKeyResult: (goal_id: number, kr_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateKeyResult: (goal_id: number, kr_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listProjects: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/goals";
        };
        readonly createGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/goals";
        };
        readonly deleteGoal2: (goal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getGoal2: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listKeyResults2: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createKeyResult2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteKeyResult2: (goal_id: number, kr_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateKeyResult2: (goal_id: number, kr_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres2: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listProjects2: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu2: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly governance: {
        readonly listAutomationLevel: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/automation-level";
        };
        readonly listDashboard: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/dashboard";
        };
        readonly createEvaluate: {
            readonly method: "POST";
            readonly path: "/api/v1/governance/evaluate";
        };
        readonly listPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policies";
        };
        readonly createPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/governance/policies";
        };
        readonly updatePolicy: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPolicyDrift: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-drift";
        };
        readonly listTrend: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-drift/trend";
        };
        readonly listViolations: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/violations";
        };
        readonly createResolve: (violation_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutomationLevel2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/automation-level";
        };
        readonly listDashboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/dashboard";
        };
        readonly createEvaluate2: {
            readonly method: "POST";
            readonly path: "/api/v2/governance/evaluate";
        };
        readonly listPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policies";
        };
        readonly createPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/governance/policies";
        };
        readonly updatePolicy2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPolicyDrift2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-drift";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-drift/trend";
        };
        readonly listViolations2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/violations";
        };
        readonly createResolve2: (violation_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly health: {
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/health";
        };
        readonly listLive: {
            readonly method: "GET";
            readonly path: "/api/v1/health/live";
        };
        readonly listReady: {
            readonly method: "GET";
            readonly path: "/api/v1/health/ready";
        };
        readonly listWorker: {
            readonly method: "GET";
            readonly path: "/api/v1/health/worker";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/health";
        };
        readonly listLive2: {
            readonly method: "GET";
            readonly path: "/api/v2/health/live";
        };
        readonly listReady2: {
            readonly method: "GET";
            readonly path: "/api/v2/health/ready";
        };
        readonly listWorker2: {
            readonly method: "GET";
            readonly path: "/api/v2/health/worker";
        };
    };
    readonly healthMonitor: {
        readonly listAlerts: {
            readonly method: "GET";
            readonly path: "/api/v1/health-monitor/alerts";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/health-monitor/status";
        };
        readonly listAlerts2: {
            readonly method: "GET";
            readonly path: "/api/v2/health-monitor/alerts";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v2/health-monitor/status";
        };
    };
    readonly hrAttendance: {
        readonly listAttendance: {
            readonly method: "GET";
            readonly path: "/api/v1/hr/attendance";
        };
        readonly createCheckIn: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/attendance/check-in";
        };
        readonly createUpsert: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/attendance/upsert";
        };
        readonly getAttendance: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCheckOut: (record_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAttendance2: {
            readonly method: "GET";
            readonly path: "/api/v2/hr/attendance";
        };
        readonly createCheckIn2: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/attendance/check-in";
        };
        readonly createUpsert2: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/attendance/upsert";
        };
        readonly getAttendance2: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCheckOut2: (record_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly hrLeaveRequests: {
        readonly listLeaveRequests: {
            readonly method: "GET";
            readonly path: "/api/v1/hr/leave-requests";
        };
        readonly createLeaveRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/leave-requests";
        };
        readonly getLeaveRequest: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeaveRequest: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCancel: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReview: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeaveRequests2: {
            readonly method: "GET";
            readonly path: "/api/v2/hr/leave-requests";
        };
        readonly createLeaveRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/leave-requests";
        };
        readonly getLeaveRequest2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeaveRequest2: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCancel2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReview2: (request_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly importExportPresets: {
        readonly listImportExportPresets: {
            readonly method: "GET";
            readonly path: "/api/v1/import-export-presets";
        };
        readonly createImportExportPreset: {
            readonly method: "POST";
            readonly path: "/api/v1/import-export-presets";
        };
        readonly deleteImportExportPreset: (preset_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listImportExportPresets2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-export-presets";
        };
        readonly createImportExportPreset2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-export-presets";
        };
        readonly deleteImportExportPreset2: (preset_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly importMappings: {
        readonly listImportMappings: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings";
        };
        readonly createImportMapping: {
            readonly method: "POST";
            readonly path: "/api/v1/import-mappings";
        };
        readonly createImport: {
            readonly method: "POST";
            readonly path: "/api/v1/import-mappings/imports";
        };
        readonly listHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings/imports/history";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/import-mappings/imports/stats";
        };
        readonly deleteImportMapping: (mapping_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getImportMapping: (mapping_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateImportMapping: (mapping_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listImportMappings2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings";
        };
        readonly createImportMapping2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-mappings";
        };
        readonly createImport2: {
            readonly method: "POST";
            readonly path: "/api/v2/import-mappings/imports";
        };
        readonly listHistory2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings/imports/history";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/import-mappings/imports/stats";
        };
        readonly deleteImportMapping2: (mapping_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getImportMapping2: (mapping_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateImportMapping2: (mapping_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly inbox: {
        readonly listConversations: {
            readonly method: "GET";
            readonly path: "/api/v1/inbox/conversations";
        };
        readonly updateAssign: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateState: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUnified: {
            readonly method: "GET";
            readonly path: "/api/v1/inbox/unified";
        };
        readonly listConversations2: {
            readonly method: "GET";
            readonly path: "/api/v2/inbox/conversations";
        };
        readonly updateAssign2: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateState2: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUnified2: {
            readonly method: "GET";
            readonly path: "/api/v2/inbox/unified";
        };
    };
    readonly innovation: {
        readonly createCtoStrategicReview: {
            readonly method: "POST";
            readonly path: "/api/v1/brain/cto-strategic-review";
        };
        readonly createMemory: {
            readonly method: "POST";
            readonly path: "/api/v1/clone/memory";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/clone/memory/search";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/clone/memory/stats";
        };
        readonly createReinforce: (memory_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listExperiments: {
            readonly method: "GET";
            readonly path: "/api/v1/experiments";
        };
        readonly createExperiment: {
            readonly method: "POST";
            readonly path: "/api/v1/experiments";
        };
        readonly listVelocity: {
            readonly method: "GET";
            readonly path: "/api/v1/experiments/velocity";
        };
        readonly createComplete: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPolicyEffectiveness: {
            readonly method: "GET";
            readonly path: "/api/v1/governance/policy-effectiveness";
        };
        readonly listTrend: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCrossLayer: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/cross-layer";
        };
        readonly createSnapshot: {
            readonly method: "POST";
            readonly path: "/api/v1/layers/snapshot";
        };
        readonly getTrend: (layer_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/trends";
        };
        readonly getEmployeeStat: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listInteractions: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/interactions";
        };
        readonly createInteraction: {
            readonly method: "POST";
            readonly path: "/api/v1/sales/interactions";
        };
        readonly listLossPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/loss-patterns";
        };
        readonly listPlaybook: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/playbook";
        };
        readonly listWinPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/sales/win-patterns";
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health";
        };
        readonly listAutopsy: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health/autopsy";
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/system/health/events";
        };
        readonly createCtoStrategicReview2: {
            readonly method: "POST";
            readonly path: "/api/v2/brain/cto-strategic-review";
        };
        readonly createMemory2: {
            readonly method: "POST";
            readonly path: "/api/v2/clone/memory";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/clone/memory/search";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/clone/memory/stats";
        };
        readonly createReinforce2: (memory_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listExperiments2: {
            readonly method: "GET";
            readonly path: "/api/v2/experiments";
        };
        readonly createExperiment2: {
            readonly method: "POST";
            readonly path: "/api/v2/experiments";
        };
        readonly listVelocity2: {
            readonly method: "GET";
            readonly path: "/api/v2/experiments/velocity";
        };
        readonly createComplete2: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStart2: (experiment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPolicyEffectiveness2: {
            readonly method: "GET";
            readonly path: "/api/v2/governance/policy-effectiveness";
        };
        readonly listTrend2: (policy_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCrossLayer2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/cross-layer";
        };
        readonly createSnapshot2: {
            readonly method: "POST";
            readonly path: "/api/v2/layers/snapshot";
        };
        readonly getTrend2: (layer_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/trends";
        };
        readonly getEmployeeStat2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listInteractions2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/interactions";
        };
        readonly createInteraction2: {
            readonly method: "POST";
            readonly path: "/api/v2/sales/interactions";
        };
        readonly listLossPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/loss-patterns";
        };
        readonly listPlaybook2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/playbook";
        };
        readonly listWinPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/sales/win-patterns";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health";
        };
        readonly listAutopsy2: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health/autopsy";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/system/health/events";
        };
    };
    readonly integrations: {
        readonly listIntegrations: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations";
        };
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/chat";
        };
        readonly createChat2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/chat";
        };
        readonly listCodingDiscovery: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/coding-discovery";
        };
        readonly listCodingDiscovery2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/coding-discovery";
        };
        readonly listModels: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/models";
        };
        readonly listModels2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/models";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/status";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/status";
        };
        readonly createTest: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/test";
        };
        readonly createTest2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/test";
        };
        readonly createConnect: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect2: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect2: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect3: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/connect";
        };
        readonly createConnect4: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/connect";
        };
        readonly listStatus3: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/calendly/status";
        };
        readonly listStatus4: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/calendly/status";
        };
        readonly createSync: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/sync";
        };
        readonly createSync2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/sync";
        };
        readonly createConnect5: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/connect";
        };
        readonly createConnect6: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/connect";
        };
        readonly listStatus5: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/clickup/status";
        };
        readonly listStatus6: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/clickup/status";
        };
        readonly createSync3: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/sync";
        };
        readonly createSync4: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/sync";
        };
        readonly createConnect7: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/connect";
        };
        readonly createConnect8: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/connect";
        };
        readonly createConnect9: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/connect";
        };
        readonly listStatus7: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/digitalocean/status";
        };
        readonly listStatus8: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/digitalocean/status";
        };
        readonly createSync5: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/sync";
        };
        readonly createSync6: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/sync";
        };
        readonly createConnect10: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/connect";
        };
        readonly createConnect11: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/connect";
        };
        readonly listStatus9: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/elevenlabs/status";
        };
        readonly listStatus10: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/elevenlabs/status";
        };
        readonly createTt: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/tts";
        };
        readonly createTt2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/tts";
        };
        readonly createConnect12: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/connect";
        };
        readonly createConnect13: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/connect";
        };
        readonly createDiscoverInstallation: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/discover-installation";
        };
        readonly createDiscoverInstallation2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/discover-installation";
        };
        readonly listStatus11: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/github/status";
        };
        readonly listStatus12: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/github/status";
        };
        readonly createSync7: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/sync";
        };
        readonly createSync8: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/sync";
        };
        readonly createConnect14: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/connect";
        };
        readonly createConnect15: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/connect";
        };
        readonly listStatus13: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-analytics/status";
        };
        readonly listStatus14: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-analytics/status";
        };
        readonly createSync9: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/sync";
        };
        readonly createSync10: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/sync";
        };
        readonly listAuthUrl: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/auth-url";
        };
        readonly listAuthUrl2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/auth-url";
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/events";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/events";
        };
        readonly createCallback: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/oauth/callback";
        };
        readonly createCallback2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/oauth/callback";
        };
        readonly createSync11: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/sync";
        };
        readonly createSync12: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/sync";
        };
        readonly listHealthDashboard: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/health-dashboard";
        };
        readonly createConnect16: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/connect";
        };
        readonly createConnect17: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/connect";
        };
        readonly listStatus15: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/hubspot/status";
        };
        readonly listStatus16: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/hubspot/status";
        };
        readonly createSync13: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/sync";
        };
        readonly createSync14: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/sync";
        };
        readonly createConnect18: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/connect";
        };
        readonly createConnect19: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/connect";
        };
        readonly createPublish: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/publish";
        };
        readonly createPublish2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/publish";
        };
        readonly listStatus17: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/linkedin/status";
        };
        readonly listStatus18: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/linkedin/status";
        };
        readonly createConnect20: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/connect";
        };
        readonly createConnect21: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/connect";
        };
        readonly listStatus19: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/notion/status";
        };
        readonly listStatus20: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/notion/status";
        };
        readonly createSync15: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/sync";
        };
        readonly createSync16: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/sync";
        };
        readonly createConnect22: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/connect";
        };
        readonly createConnect23: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/connect";
        };
        readonly createSearch: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/search";
        };
        readonly createSearch2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/search";
        };
        readonly listStatus21: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/perplexity/status";
        };
        readonly listStatus22: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/perplexity/status";
        };
        readonly listSecurityCenter: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/security-center";
        };
        readonly listTrend: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/security-center/trend";
        };
        readonly listSetupGuide: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/setup-guide";
        };
        readonly createConnect24: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/connect";
        };
        readonly createConnect25: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/connect";
        };
        readonly createSend: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/send";
        };
        readonly createSend2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/send";
        };
        readonly listStatus23: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/slack/status";
        };
        readonly listStatus24: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/slack/status";
        };
        readonly createSync17: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/sync";
        };
        readonly createSync18: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/sync";
        };
        readonly createConnect26: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/connect";
        };
        readonly createConnect27: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/connect";
        };
        readonly listStatus25: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/stripe/status";
        };
        readonly listStatus26: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/stripe/status";
        };
        readonly createSync19: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/sync";
        };
        readonly createSync20: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/sync";
        };
        readonly createConnect28: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/supabase/connect";
        };
        readonly createConnect29: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/supabase/connect";
        };
        readonly deleteDisconnect: {
            readonly method: "DELETE";
            readonly path: "/api/v1/integrations/supabase/disconnect";
        };
        readonly deleteDisconnect2: {
            readonly method: "DELETE";
            readonly path: "/api/v1/integrations/supabase/disconnect";
        };
        readonly listRealtimeStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/realtime-status";
        };
        readonly listRealtimeStatus2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/realtime-status";
        };
        readonly listStatus27: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/status";
        };
        readonly listStatus28: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/status";
        };
        readonly listTokenHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/token-health";
        };
        readonly createTokenRotate: (integration_type: string) => {
            method: "POST";
            path: string;
        };
        readonly createSendTest: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/whatsapp/send-test";
        };
        readonly createSendTest2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/whatsapp/send-test";
        };
        readonly createDisconnect3: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createForceSync: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResetError: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createTest3: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listIntegrations2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations";
        };
        readonly createChat3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/chat";
        };
        readonly createChat4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/chat";
        };
        readonly listCodingDiscovery3: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/coding-discovery";
        };
        readonly listCodingDiscovery4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/coding-discovery";
        };
        readonly listModels3: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/models";
        };
        readonly listModels4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/models";
        };
        readonly listStatus29: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/status";
        };
        readonly listStatus30: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/status";
        };
        readonly createTest4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/test";
        };
        readonly createTest5: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/test";
        };
        readonly createConnect30: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect31: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect4: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect5: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect32: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/connect";
        };
        readonly createConnect33: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/connect";
        };
        readonly listStatus31: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/calendly/status";
        };
        readonly listStatus32: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/calendly/status";
        };
        readonly createSync21: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/sync";
        };
        readonly createSync22: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/sync";
        };
        readonly createConnect34: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/connect";
        };
        readonly createConnect35: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/connect";
        };
        readonly listStatus33: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/clickup/status";
        };
        readonly listStatus34: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/clickup/status";
        };
        readonly createSync23: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/sync";
        };
        readonly createSync24: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/sync";
        };
        readonly createConnect36: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/connect";
        };
        readonly createConnect37: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/connect";
        };
        readonly createConnect38: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/connect";
        };
        readonly listStatus35: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/digitalocean/status";
        };
        readonly listStatus36: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/digitalocean/status";
        };
        readonly createSync25: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/sync";
        };
        readonly createSync26: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/sync";
        };
        readonly createConnect39: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/connect";
        };
        readonly createConnect40: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/connect";
        };
        readonly listStatus37: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/elevenlabs/status";
        };
        readonly listStatus38: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/elevenlabs/status";
        };
        readonly createTt3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/tts";
        };
        readonly createTt4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/tts";
        };
        readonly createConnect41: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/connect";
        };
        readonly createConnect42: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/connect";
        };
        readonly createDiscoverInstallation3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/discover-installation";
        };
        readonly createDiscoverInstallation4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/discover-installation";
        };
        readonly listStatus39: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/github/status";
        };
        readonly listStatus40: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/github/status";
        };
        readonly createSync27: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/sync";
        };
        readonly createSync28: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/sync";
        };
        readonly createConnect43: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/connect";
        };
        readonly createConnect44: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/connect";
        };
        readonly listStatus41: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-analytics/status";
        };
        readonly listStatus42: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-analytics/status";
        };
        readonly createSync29: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/sync";
        };
        readonly createSync30: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/sync";
        };
        readonly listAuthUrl3: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/auth-url";
        };
        readonly listAuthUrl4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/auth-url";
        };
        readonly listEvents3: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/events";
        };
        readonly listEvents4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/events";
        };
        readonly createCallback3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/oauth/callback";
        };
        readonly createCallback4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/oauth/callback";
        };
        readonly createSync31: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/sync";
        };
        readonly createSync32: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/sync";
        };
        readonly listHealthDashboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/health-dashboard";
        };
        readonly createConnect45: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/connect";
        };
        readonly createConnect46: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/connect";
        };
        readonly listStatus43: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/hubspot/status";
        };
        readonly listStatus44: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/hubspot/status";
        };
        readonly createSync33: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/sync";
        };
        readonly createSync34: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/sync";
        };
        readonly createConnect47: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/connect";
        };
        readonly createConnect48: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/connect";
        };
        readonly createPublish3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/publish";
        };
        readonly createPublish4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/publish";
        };
        readonly listStatus45: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/linkedin/status";
        };
        readonly listStatus46: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/linkedin/status";
        };
        readonly createConnect49: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/connect";
        };
        readonly createConnect50: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/connect";
        };
        readonly listStatus47: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/notion/status";
        };
        readonly listStatus48: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/notion/status";
        };
        readonly createSync35: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/sync";
        };
        readonly createSync36: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/sync";
        };
        readonly createConnect51: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/connect";
        };
        readonly createConnect52: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/connect";
        };
        readonly createSearch3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/search";
        };
        readonly createSearch4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/search";
        };
        readonly listStatus49: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/perplexity/status";
        };
        readonly listStatus50: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/perplexity/status";
        };
        readonly listSecurityCenter2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/security-center";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/security-center/trend";
        };
        readonly listSetupGuide2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/setup-guide";
        };
        readonly createConnect53: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/connect";
        };
        readonly createConnect54: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/connect";
        };
        readonly createSend3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/send";
        };
        readonly createSend4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/send";
        };
        readonly listStatus51: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/slack/status";
        };
        readonly listStatus52: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/slack/status";
        };
        readonly createSync37: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/sync";
        };
        readonly createSync38: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/sync";
        };
        readonly createConnect55: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/connect";
        };
        readonly createConnect56: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/connect";
        };
        readonly listStatus53: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/stripe/status";
        };
        readonly listStatus54: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/stripe/status";
        };
        readonly createSync39: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/sync";
        };
        readonly createSync40: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/sync";
        };
        readonly createConnect57: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/supabase/connect";
        };
        readonly createConnect58: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/supabase/connect";
        };
        readonly deleteDisconnect3: {
            readonly method: "DELETE";
            readonly path: "/api/v2/integrations/supabase/disconnect";
        };
        readonly deleteDisconnect4: {
            readonly method: "DELETE";
            readonly path: "/api/v2/integrations/supabase/disconnect";
        };
        readonly listRealtimeStatus3: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/realtime-status";
        };
        readonly listRealtimeStatus4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/realtime-status";
        };
        readonly listStatus55: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/status";
        };
        readonly listStatus56: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/status";
        };
        readonly listTokenHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/token-health";
        };
        readonly createTokenRotate2: (integration_type: string) => {
            method: "POST";
            path: string;
        };
        readonly createSendTest3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/whatsapp/send-test";
        };
        readonly createSendTest4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/whatsapp/send-test";
        };
        readonly createDisconnect6: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createForceSync2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResetError2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createTest6: (integration_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly intelligence: {
        readonly listAnomalies: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/anomalies";
        };
        readonly listDiff: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/diff";
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/health";
        };
        readonly listPredictions: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/predictions";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/summary";
        };
        readonly listTraces: {
            readonly method: "GET";
            readonly path: "/api/v1/intelligence/traces";
        };
        readonly listAnomalies2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/anomalies";
        };
        readonly listDiff2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/diff";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/health";
        };
        readonly listPredictions2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/predictions";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/summary";
        };
        readonly listTraces2: {
            readonly method: "GET";
            readonly path: "/api/v2/intelligence/traces";
        };
    };
    readonly internalComments: {
        readonly listInternalComments: {
            readonly method: "GET";
            readonly path: "/api/v1/internal-comments";
        };
        readonly createInternalComment: {
            readonly method: "POST";
            readonly path: "/api/v1/internal-comments";
        };
        readonly deleteInternalComment: (comment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listInternalComments2: {
            readonly method: "GET";
            readonly path: "/api/v2/internal-comments";
        };
        readonly createInternalComment2: {
            readonly method: "POST";
            readonly path: "/api/v2/internal-comments";
        };
        readonly deleteInternalComment2: (comment_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly jobListings: {
        readonly listJobListings: {
            readonly method: "GET";
            readonly path: "/api/v1/job-listings";
        };
        readonly createJobListing: {
            readonly method: "POST";
            readonly path: "/api/v1/job-listings";
        };
        readonly deleteJobListing: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getJobListing: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateJobListing: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listJobListings2: {
            readonly method: "GET";
            readonly path: "/api/v2/job-listings";
        };
        readonly createJobListing2: {
            readonly method: "POST";
            readonly path: "/api/v2/job-listings";
        };
        readonly deleteJobListing2: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getJobListing2: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateJobListing2: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly knowledgeBase: {
        readonly listKnowledgeBase: {
            readonly method: "GET";
            readonly path: "/api/v1/knowledge-base";
        };
        readonly createKnowledgeBase: {
            readonly method: "POST";
            readonly path: "/api/v1/knowledge-base";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/knowledge-base/search";
        };
        readonly deleteKnowledgeBase: (article_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getKnowledgeBase: (article_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateKnowledgeBase: (article_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createHelpful: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createView: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listKnowledgeBase2: {
            readonly method: "GET";
            readonly path: "/api/v2/knowledge-base";
        };
        readonly createKnowledgeBase2: {
            readonly method: "POST";
            readonly path: "/api/v2/knowledge-base";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/knowledge-base/search";
        };
        readonly deleteKnowledgeBase2: (article_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getKnowledgeBase2: (article_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateKnowledgeBase2: (article_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createHelpful2: (article_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createView2: (article_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly layers: {
        readonly listAiSkillRouting: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/ai-skill-routing";
        };
        readonly listBrandingPower: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/branding-power";
        };
        readonly listCloneMarketingSales: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/clone-marketing-sales";
        };
        readonly listCloneTraining: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/clone-training";
        };
        readonly listEmployeeManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/employee-management";
        };
        readonly listEmployeePerformance: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/employee-performance";
        };
        readonly listEthicalBoundary: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/ethical-boundary";
        };
        readonly listFraudDetection: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/fraud-detection";
        };
        readonly listMarketing: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/marketing";
        };
        readonly listMediaEditing: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/media-editing";
        };
        readonly listOpportunityAssociation: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/opportunity-association";
        };
        readonly listRevenueManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/revenue-management";
        };
        readonly listSocialManagement: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/social-management";
        };
        readonly listStaffProsperity: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/staff-prosperity";
        };
        readonly listStudy: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/study";
        };
        readonly listThreatDetection: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/threat-detection";
        };
        readonly listTraining: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/training";
        };
        readonly listTrainingStaff: {
            readonly method: "GET";
            readonly path: "/api/v1/layers/training-staff";
        };
        readonly listAiSkillRouting2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/ai-skill-routing";
        };
        readonly listBrandingPower2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/branding-power";
        };
        readonly listCloneMarketingSales2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/clone-marketing-sales";
        };
        readonly listCloneTraining2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/clone-training";
        };
        readonly listEmployeeManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/employee-management";
        };
        readonly listEmployeePerformance2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/employee-performance";
        };
        readonly listEthicalBoundary2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/ethical-boundary";
        };
        readonly listFraudDetection2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/fraud-detection";
        };
        readonly listMarketing2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/marketing";
        };
        readonly listMediaEditing2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/media-editing";
        };
        readonly listOpportunityAssociation2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/opportunity-association";
        };
        readonly listRevenueManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/revenue-management";
        };
        readonly listSocialManagement2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/social-management";
        };
        readonly listStaffProsperity2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/staff-prosperity";
        };
        readonly listStudy2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/study";
        };
        readonly listThreatDetection2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/threat-detection";
        };
        readonly listTraining2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/training";
        };
        readonly listTrainingStaff2: {
            readonly method: "GET";
            readonly path: "/api/v2/layers/training-staff";
        };
    };
    readonly leadRouting: {
        readonly listCompanies: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-routing/companies";
        };
        readonly createResolve: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-routing/resolve";
        };
        readonly listRules: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-routing/rules";
        };
        readonly createRule: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-routing/rules";
        };
        readonly deleteRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCompanies2: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-routing/companies";
        };
        readonly createResolve2: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-routing/resolve";
        };
        readonly listRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-routing/rules";
        };
        readonly createRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-routing/rules";
        };
        readonly deleteRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly leadScoreRules: {
        readonly listLeadScoreRules: {
            readonly method: "GET";
            readonly path: "/api/v1/lead-score-rules";
        };
        readonly createLeadScoreRule: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-score-rules";
        };
        readonly createEvaluate: {
            readonly method: "POST";
            readonly path: "/api/v1/lead-score-rules/evaluate";
        };
        readonly deleteLeadScoreRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLeadScoreRule: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeadScoreRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLeadScoreRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/lead-score-rules";
        };
        readonly createLeadScoreRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-score-rules";
        };
        readonly createEvaluate2: {
            readonly method: "POST";
            readonly path: "/api/v2/lead-score-rules/evaluate";
        };
        readonly deleteLeadScoreRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLeadScoreRule2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeadScoreRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly leaderboard: {
        readonly listLeaderboard: {
            readonly method: "GET";
            readonly path: "/api/v1/leaderboard";
        };
        readonly createLeaderboard: {
            readonly method: "POST";
            readonly path: "/api/v1/leaderboard";
        };
        readonly getHistory: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listLeaderboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/leaderboard";
        };
        readonly createLeaderboard2: {
            readonly method: "POST";
            readonly path: "/api/v2/leaderboard";
        };
        readonly getHistory2: (user_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly leads: {
        readonly createIngestSocial: {
            readonly method: "POST";
            readonly path: "/api/v1/leads/ingest-social";
        };
        readonly createIngestSocial2: {
            readonly method: "POST";
            readonly path: "/api/v2/leads/ingest-social";
        };
    };
    readonly learningLwe: {
        readonly listAdmin: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/certificates/admin";
        };
        readonly createIssue: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/certificates/issue";
        };
        readonly listMe: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/certificates/me";
        };
        readonly getCertificate: (certificate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/courses";
        };
        readonly createCours: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/courses";
        };
        readonly deleteCours: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createApprove: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createAssign: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEffectiveness: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEscalate: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLessons: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLesson: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteLesson: (course_id: number, lesson_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLesson: (course_id: number, lesson_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLesson: (course_id: number, lesson_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuiz: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuiz: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit: (course_id: number, quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listEffectiveness2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/effectiveness";
        };
        readonly listEnrollments: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/enrollments";
        };
        readonly createEnrollment: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/enrollments";
        };
        readonly updateEnrollment: (enrollment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createEnroll: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/gtp/enroll";
        };
        readonly listExport: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/export";
        };
        readonly listMe2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/me";
        };
        readonly listPrograms: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/programs";
        };
        readonly listInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/insights";
        };
        readonly listHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/interview/history";
        };
        readonly createStart: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/interview/start";
        };
        readonly getInterview: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAnswer: (session_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReport: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMyAssignments: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/my-assignments";
        };
        readonly createOutcome: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/outcomes";
        };
        readonly listQuestions: (quiz_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuestion: (quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/runs";
        };
        readonly listSignals: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/signals";
        };
        readonly createTrainWeekly: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/train-weekly";
        };
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/tutor/chat";
        };
        readonly listSessions: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/tutor/sessions";
        };
        readonly listMessages: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAdmin2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/certificates/admin";
        };
        readonly createIssue2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/certificates/issue";
        };
        readonly listMe3: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/certificates/me";
        };
        readonly getCertificate2: (certificate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses3: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/courses";
        };
        readonly createCours2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/courses";
        };
        readonly deleteCours2: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours2: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createApprove2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createAssign2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEffectiveness3: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEscalate2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLessons2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLesson2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteLesson2: (course_id: number, lesson_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLesson2: (course_id: number, lesson_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLesson2: (course_id: number, lesson_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuiz2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuiz2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit2: (course_id: number, quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listEffectiveness4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/effectiveness";
        };
        readonly listEnrollments2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/enrollments";
        };
        readonly createEnrollment2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/enrollments";
        };
        readonly updateEnrollment2: (enrollment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createEnroll2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/gtp/enroll";
        };
        readonly listExport2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/export";
        };
        readonly listMe4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/me";
        };
        readonly listPrograms2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/programs";
        };
        readonly listInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/insights";
        };
        readonly listHistory2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/interview/history";
        };
        readonly createStart2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/interview/start";
        };
        readonly getInterview2: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAnswer2: (session_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReport2: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMyAssignments2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/my-assignments";
        };
        readonly createOutcome2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/outcomes";
        };
        readonly listQuestions2: (quiz_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuestion2: (quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/runs";
        };
        readonly listSignals2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/signals";
        };
        readonly createTrainWeekly2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/train-weekly";
        };
        readonly createChat2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/tutor/chat";
        };
        readonly listSessions2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/tutor/sessions";
        };
        readonly listMessages2: (session_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly locations: {
        readonly listActive: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/active";
        };
        readonly createCheckin: {
            readonly method: "POST";
            readonly path: "/api/v1/locations/checkin";
        };
        readonly createCheckout: (checkin_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCheckins: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/checkins";
        };
        readonly listConsent: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/consent";
        };
        readonly updateConsent: {
            readonly method: "PATCH";
            readonly path: "/api/v1/locations/consent";
        };
        readonly listAll: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/consent/all";
        };
        readonly listHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/locations/history";
        };
        readonly createTrack: {
            readonly method: "POST";
            readonly path: "/api/v1/locations/track";
        };
        readonly listActive2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/active";
        };
        readonly createCheckin2: {
            readonly method: "POST";
            readonly path: "/api/v2/locations/checkin";
        };
        readonly createCheckout2: (checkin_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCheckins2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/checkins";
        };
        readonly listConsent2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/consent";
        };
        readonly updateConsent2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/locations/consent";
        };
        readonly listAll2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/consent/all";
        };
        readonly listHistory2: {
            readonly method: "GET";
            readonly path: "/api/v2/locations/history";
        };
        readonly createTrack2: {
            readonly method: "POST";
            readonly path: "/api/v2/locations/track";
        };
    };
    readonly managerWatch: {
        readonly listActions: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/actions";
        };
        readonly createCeoGuide: {
            readonly method: "POST";
            readonly path: "/api/v1/api/v1/manager-watch/ceo-guide";
        };
        readonly listCeoGuideHistory: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/ceo-guide-history";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/api/v1/manager-watch/stats";
        };
        readonly listActions2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/actions";
        };
        readonly createCeoGuide2: {
            readonly method: "POST";
            readonly path: "/api/v2/api/v1/manager-watch/ceo-guide";
        };
        readonly listCeoGuideHistory2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/ceo-guide-history";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/api/v1/manager-watch/stats";
        };
    };
    readonly media: {
        readonly listMedia: {
            readonly method: "GET";
            readonly path: "/api/v1/media";
        };
        readonly listReport: {
            readonly method: "GET";
            readonly path: "/api/v1/media/report";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/media/search";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/media/stats";
        };
        readonly createUpload: {
            readonly method: "POST";
            readonly path: "/api/v1/media/upload";
        };
        readonly createBulk: {
            readonly method: "POST";
            readonly path: "/api/v1/media/upload/bulk";
        };
        readonly deleteMedia: (attachment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMedia: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMedia: (attachment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAnalyze: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDownload: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createOrganize: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listMedia2: {
            readonly method: "GET";
            readonly path: "/api/v2/media";
        };
        readonly listReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/media/report";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/media/search";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/media/stats";
        };
        readonly createUpload2: {
            readonly method: "POST";
            readonly path: "/api/v2/media/upload";
        };
        readonly createBulk2: {
            readonly method: "POST";
            readonly path: "/api/v2/media/upload/bulk";
        };
        readonly deleteMedia2: (attachment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMedia2: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMedia2: (attachment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAnalyze2: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listDownload2: (attachment_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createOrganize2: (attachment_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly meetingNotes: {
        readonly listMeetingNotes: {
            readonly method: "GET";
            readonly path: "/api/v1/meeting-notes";
        };
        readonly createMeetingNote: {
            readonly method: "POST";
            readonly path: "/api/v1/meeting-notes";
        };
        readonly deleteMeetingNote: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMeetingNote: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMeetingNote: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMeetingNotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/meeting-notes";
        };
        readonly createMeetingNote2: {
            readonly method: "POST";
            readonly path: "/api/v2/meeting-notes";
        };
        readonly deleteMeetingNote2: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getMeetingNote2: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateMeetingNote2: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly meetings: {
        readonly createAvailability: {
            readonly method: "POST";
            readonly path: "/api/v1/meetings/availability";
        };
        readonly deleteAvailability: (slot_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getAvailability: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBookings: {
            readonly method: "GET";
            readonly path: "/api/v1/meetings/bookings";
        };
        readonly createBooking: {
            readonly method: "POST";
            readonly path: "/api/v1/meetings/bookings";
        };
        readonly createCancel: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createAvailability2: {
            readonly method: "POST";
            readonly path: "/api/v2/meetings/availability";
        };
        readonly deleteAvailability2: (slot_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getAvailability2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBookings2: {
            readonly method: "GET";
            readonly path: "/api/v2/meetings/bookings";
        };
        readonly createBooking2: {
            readonly method: "POST";
            readonly path: "/api/v2/meetings/bookings";
        };
        readonly createCancel2: (booking_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly memory: {
        readonly listContext: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/context";
        };
        readonly createContext: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/context";
        };
        readonly listProfile: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/profile";
        };
        readonly createProfile: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/profile";
        };
        readonly deleteProfile: (entry_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listTeam: {
            readonly method: "GET";
            readonly path: "/api/v1/memory/team";
        };
        readonly createTeam: {
            readonly method: "POST";
            readonly path: "/api/v1/memory/team";
        };
        readonly updateTeam: (member_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContext2: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/context";
        };
        readonly createContext2: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/context";
        };
        readonly listProfile2: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/profile";
        };
        readonly createProfile2: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/profile";
        };
        readonly deleteProfile2: (entry_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listTeam2: {
            readonly method: "GET";
            readonly path: "/api/v2/memory/team";
        };
        readonly createTeam2: {
            readonly method: "POST";
            readonly path: "/api/v2/memory/team";
        };
        readonly updateTeam2: (member_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly mfa: {
        readonly createConfirm: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/confirm";
        };
        readonly createDisable: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/disable";
        };
        readonly createSetup: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/setup";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/mfa/status";
        };
        readonly createConfirm2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/confirm";
        };
        readonly createDisable2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/disable";
        };
        readonly createSetup2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/setup";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v2/mfa/status";
        };
    };
    readonly misc: {
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/health";
        };
        readonly listLivez: {
            readonly method: "GET";
            readonly path: "/livez";
        };
        readonly listMe: {
            readonly method: "GET";
            readonly path: "/me";
        };
        readonly listReadyz: {
            readonly method: "GET";
            readonly path: "/readyz";
        };
        readonly createToken: {
            readonly method: "POST";
            readonly path: "/token";
        };
    };
    readonly notes: {
        readonly listNotes: {
            readonly method: "GET";
            readonly path: "/api/v1/notes";
        };
        readonly createNote: {
            readonly method: "POST";
            readonly path: "/api/v1/notes";
        };
        readonly deleteNote: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getNote: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateNote: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/notes";
        };
        readonly createNote2: {
            readonly method: "POST";
            readonly path: "/api/v2/notes";
        };
        readonly deleteNote2: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getNote2: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateNote2: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly notificationRules: {
        readonly listNotificationRules: {
            readonly method: "GET";
            readonly path: "/api/v1/notification-rules";
        };
        readonly createNotificationRule: {
            readonly method: "POST";
            readonly path: "/api/v1/notification-rules";
        };
        readonly listEvaluate: {
            readonly method: "GET";
            readonly path: "/api/v1/notification-rules/evaluate";
        };
        readonly deleteNotificationRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateNotificationRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotificationRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/notification-rules";
        };
        readonly createNotificationRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/notification-rules";
        };
        readonly listEvaluate2: {
            readonly method: "GET";
            readonly path: "/api/v2/notification-rules/evaluate";
        };
        readonly deleteNotificationRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateNotificationRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly notifications: {
        readonly listNotifications: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications";
        };
        readonly listCount: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/count";
        };
        readonly listLive: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/live";
        };
        readonly createMarkRead: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/mark-read";
        };
        readonly listPreferences: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/preferences";
        };
        readonly updatePreference: {
            readonly method: "PATCH";
            readonly path: "/api/v1/notifications/preferences";
        };
        readonly createRunAlert: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/run-alerts";
        };
        readonly createSend: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/send";
        };
        readonly listStream: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/stream";
        };
        readonly listNotifications2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications";
        };
        readonly listCount2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/count";
        };
        readonly listLive2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/live";
        };
        readonly createMarkRead2: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/mark-read";
        };
        readonly listPreferences2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/preferences";
        };
        readonly updatePreference2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/notifications/preferences";
        };
        readonly createRunAlert2: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/run-alerts";
        };
        readonly createSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/send";
        };
        readonly listStream2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/stream";
        };
    };
    readonly observability: {
        readonly listAiCalls: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-calls";
        };
        readonly listAiCosts: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-costs";
        };
        readonly listAiReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/ai-reliability";
        };
        readonly listDecisionSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-summary";
        };
        readonly listDecisionTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-timeline";
        };
        readonly listDecisionTraces: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/decision-traces";
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/events";
        };
        readonly listSchedulerHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/scheduler-health";
        };
        readonly listSignals: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/signals";
        };
        readonly listStorage: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/storage";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/summary";
        };
        readonly listWebhookReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/observability/webhook-reliability";
        };
        readonly listAiCalls2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-calls";
        };
        readonly listAiCosts2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-costs";
        };
        readonly listAiReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/ai-reliability";
        };
        readonly listDecisionSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-summary";
        };
        readonly listDecisionTimeline2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-timeline";
        };
        readonly listDecisionTraces2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/decision-traces";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/events";
        };
        readonly listSchedulerHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/scheduler-health";
        };
        readonly listSignals2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/signals";
        };
        readonly listStorage2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/storage";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/summary";
        };
        readonly listWebhookReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/observability/webhook-reliability";
        };
    };
    readonly onboarding: {
        readonly listChecklists: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/checklists";
        };
        readonly createChecklist: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/checklists";
        };
        readonly getChecklist: (checklist_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCompleteStep: (checklist_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlan: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/plan";
        };
        readonly getLimit: (resource: string) => {
            method: "GET";
            path: string;
        };
        readonly createSignup: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/signup";
        };
        readonly listTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/templates";
        };
        readonly createTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/templates";
        };
        readonly deleteTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTemplate: (template_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createUpgrade: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/upgrade";
        };
        readonly listChecklists2: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/checklists";
        };
        readonly createChecklist2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/checklists";
        };
        readonly getChecklist2: (checklist_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCompleteStep2: (checklist_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlan2: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/plan";
        };
        readonly getLimit2: (resource: string) => {
            method: "GET";
            path: string;
        };
        readonly createSignup2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/signup";
        };
        readonly listTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/templates";
        };
        readonly createTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/templates";
        };
        readonly deleteTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTemplate2: (template_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createUpgrade2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/upgrade";
        };
    };
    readonly onboardingPortal: {
        readonly getOnboard: (token: string) => {
            method: "GET";
            path: string;
        };
        readonly createSave: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly getOnboard2: (token: string) => {
            method: "GET";
            path: string;
        };
        readonly createSave2: (token: string) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit2: (token: string) => {
            method: "POST";
            path: string;
        };
    };
    readonly ops: {
        readonly listApiUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/api-usage";
        };
        readonly createWeeklyMetric: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/compute/weekly-metrics";
        };
        readonly createDailyRun: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/daily-run";
        };
        readonly listDailyRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/daily-runs";
        };
        readonly listDecisionLog: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/decision-log";
        };
        readonly createDecisionLog: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/decision-log";
        };
        readonly listEmployees: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/employees";
        };
        readonly createEmployee: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/employees";
        };
        readonly getEmployee: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmployee: (employee_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createOffboard: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/events";
        };
        readonly listCommandMode: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/incident/command-mode";
        };
        readonly listTrend: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/incident/command-mode/trend";
        };
        readonly listTeamWorkSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/integrations/team-work-summary";
        };
        readonly listPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/policies";
        };
        readonly createActivate: (policy_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createGenerate: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/policy/generate";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/projects";
        };
        readonly updateStatu: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deletePurge: (entity_type: string, entity_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWeekly: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/reports/weekly";
        };
        readonly createWeekly: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/reports/weekly";
        };
        readonly createRestore: (entity_type: string, entity_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createClickup: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/clickup";
        };
        readonly createGithub: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/github";
        };
        readonly createGithubCicd: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/github-cicd";
        };
        readonly createGmail: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/sync/gmail";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/tasks";
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTeamActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/team-activity";
        };
        readonly listApiUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/api-usage";
        };
        readonly createWeeklyMetric2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/compute/weekly-metrics";
        };
        readonly createDailyRun2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/daily-run";
        };
        readonly listDailyRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/daily-runs";
        };
        readonly listDecisionLog2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/decision-log";
        };
        readonly createDecisionLog2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/decision-log";
        };
        readonly listEmployees2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/employees";
        };
        readonly createEmployee2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/employees";
        };
        readonly getEmployee2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmployee2: (employee_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createOffboard2: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/events";
        };
        readonly listCommandMode2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/incident/command-mode";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/incident/command-mode/trend";
        };
        readonly listTeamWorkSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/integrations/team-work-summary";
        };
        readonly listPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/policies";
        };
        readonly createActivate2: (policy_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createGenerate2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/policy/generate";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/projects";
        };
        readonly updateStatu2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deletePurge2: (entity_type: string, entity_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWeekly2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/reports/weekly";
        };
        readonly createWeekly2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/reports/weekly";
        };
        readonly createRestore2: (entity_type: string, entity_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createClickup2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/clickup";
        };
        readonly createGithub2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/github";
        };
        readonly createGithubCicd2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/github-cicd";
        };
        readonly createGmail2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/sync/gmail";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/tasks";
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTeamActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/team-activity";
        };
    };
    readonly opsClones: {
        readonly createDispatchPlan: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/dispatch-plan";
        };
        readonly createFeedback: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/feedback";
        };
        readonly listIdentityMap: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/identity-map";
        };
        readonly createIdentityMap: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/identity-map";
        };
        readonly createProfile: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/profile";
        };
        readonly getProfile: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScores: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/scores";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/summary";
        };
        readonly createTrain: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/train";
        };
        readonly listTrainingPlan: {
            readonly method: "GET";
            readonly path: "/api/v1/ops/clones/training-plan";
        };
        readonly createGenerate: {
            readonly method: "POST";
            readonly path: "/api/v1/ops/clones/training-plan/generate";
        };
        readonly updateTrainingPlan: (plan_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createDispatchPlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/dispatch-plan";
        };
        readonly createFeedback2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/feedback";
        };
        readonly listIdentityMap2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/identity-map";
        };
        readonly createIdentityMap2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/identity-map";
        };
        readonly createProfile2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/profile";
        };
        readonly getProfile2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScores2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/scores";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/summary";
        };
        readonly createTrain2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/train";
        };
        readonly listTrainingPlan2: {
            readonly method: "GET";
            readonly path: "/api/v2/ops/clones/training-plan";
        };
        readonly createGenerate2: {
            readonly method: "POST";
            readonly path: "/api/v2/ops/clones/training-plan/generate";
        };
        readonly updateTrainingPlan2: (plan_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly organizations: {
        readonly listOrgs: {
            readonly method: "GET";
            readonly path: "/api/v1/orgs";
        };
        readonly createOrg: {
            readonly method: "POST";
            readonly path: "/api/v1/orgs";
        };
        readonly updateOrg: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listFeatureFlags: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureFlag: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listOrgs2: {
            readonly method: "GET";
            readonly path: "/api/v2/orgs";
        };
        readonly createOrg2: {
            readonly method: "POST";
            readonly path: "/api/v2/orgs";
        };
        readonly updateOrg2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listFeatureFlags2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureFlag2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember2: (org_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly outboundWebhooks: {
        readonly listOutboundWebhooks: {
            readonly method: "GET";
            readonly path: "/api/v1/outbound-webhooks";
        };
        readonly createOutboundWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/outbound-webhooks";
        };
        readonly listTestMatch: {
            readonly method: "GET";
            readonly path: "/api/v1/outbound-webhooks/test-match";
        };
        readonly deleteOutboundWebhook: (webhook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateOutboundWebhook: (webhook_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listOutboundWebhooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/outbound-webhooks";
        };
        readonly createOutboundWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/outbound-webhooks";
        };
        readonly listTestMatch2: {
            readonly method: "GET";
            readonly path: "/api/v2/outbound-webhooks/test-match";
        };
        readonly deleteOutboundWebhook2: (webhook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateOutboundWebhook2: (webhook_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly performance: {
        readonly listAlerts: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/alerts";
        };
        readonly getDepartment: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOkrProgress: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getEmployee: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCoaching: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLearningInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/learning-insights";
        };
        readonly listOrg: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/org";
        };
        readonly listOrgChart: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/org-chart";
        };
        readonly createOutcome: {
            readonly method: "POST";
            readonly path: "/api/v1/performance/outcomes";
        };
        readonly listSkillsMatrix: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/skills-matrix";
        };
        readonly listTop: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/top";
        };
        readonly listWorkloadBalance: {
            readonly method: "GET";
            readonly path: "/api/v1/performance/workload-balance";
        };
        readonly listAlerts2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/alerts";
        };
        readonly getDepartment2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listOkrProgress2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly getEmployee2: (employee_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCoaching2: (employee_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLearningInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/learning-insights";
        };
        readonly listOrg2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/org";
        };
        readonly listOrgChart2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/org-chart";
        };
        readonly createOutcome2: {
            readonly method: "POST";
            readonly path: "/api/v2/performance/outcomes";
        };
        readonly listSkillsMatrix2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/skills-matrix";
        };
        readonly listTop2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/top";
        };
        readonly listWorkloadBalance2: {
            readonly method: "GET";
            readonly path: "/api/v2/performance/workload-balance";
        };
    };
    readonly personas: {
        readonly listDashboard: {
            readonly method: "GET";
            readonly path: "/api/v1/personas/dashboard";
        };
        readonly listDashboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/personas/dashboard";
        };
    };
    readonly pipelineSnapshots: {
        readonly listPipelineSnapshots: {
            readonly method: "GET";
            readonly path: "/api/v1/pipeline-snapshots";
        };
        readonly createPipelineSnapshot: {
            readonly method: "POST";
            readonly path: "/api/v1/pipeline-snapshots";
        };
        readonly listTrend: {
            readonly method: "GET";
            readonly path: "/api/v1/pipeline-snapshots/trend";
        };
        readonly getPipelineSnapshot: (snapshot_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listPipelineSnapshots2: {
            readonly method: "GET";
            readonly path: "/api/v2/pipeline-snapshots";
        };
        readonly createPipelineSnapshot2: {
            readonly method: "POST";
            readonly path: "/api/v2/pipeline-snapshots";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v2/pipeline-snapshots/trend";
        };
        readonly getPipelineSnapshot2: (snapshot_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly platformAnalytics: {
        readonly listDevices: {
            readonly method: "GET";
            readonly path: "/api/v1/platform-analytics/devices";
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/platform-analytics/summary";
        };
        readonly listDevices2: {
            readonly method: "GET";
            readonly path: "/api/v2/platform-analytics/devices";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/platform-analytics/summary";
        };
    };
    readonly playbooks: {
        readonly listPlaybooks: {
            readonly method: "GET";
            readonly path: "/api/v1/playbooks";
        };
        readonly createPlaybook: {
            readonly method: "POST";
            readonly path: "/api/v1/playbooks";
        };
        readonly deleteStep: (step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deletePlaybook: (playbook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPlaybook: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePlaybook: (playbook_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSteps: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep: (playbook_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlaybooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/playbooks";
        };
        readonly createPlaybook2: {
            readonly method: "POST";
            readonly path: "/api/v2/playbooks";
        };
        readonly deleteStep2: (step_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deletePlaybook2: (playbook_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPlaybook2: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePlaybook2: (playbook_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listSteps2: (playbook_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createStep2: (playbook_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly productBundles: {
        readonly listProductBundles: {
            readonly method: "GET";
            readonly path: "/api/v1/product-bundles";
        };
        readonly createProductBundle: {
            readonly method: "POST";
            readonly path: "/api/v1/product-bundles";
        };
        readonly deleteProductBundle: (bundle_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProductBundle: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProductBundle: (bundle_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listItems: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createItem: (bundle_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPricing: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listProductBundles2: {
            readonly method: "GET";
            readonly path: "/api/v2/product-bundles";
        };
        readonly createProductBundle2: {
            readonly method: "POST";
            readonly path: "/api/v2/product-bundles";
        };
        readonly deleteProductBundle2: (bundle_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProductBundle2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProductBundle2: (bundle_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listItems2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createItem2: (bundle_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPricing2: (bundle_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly products: {
        readonly listProducts: {
            readonly method: "GET";
            readonly path: "/api/v1/products";
        };
        readonly createProduct: {
            readonly method: "POST";
            readonly path: "/api/v1/products";
        };
        readonly deleteProduct: (product_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProduct: (product_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProduct: (product_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listProducts2: {
            readonly method: "GET";
            readonly path: "/api/v2/products";
        };
        readonly createProduct2: {
            readonly method: "POST";
            readonly path: "/api/v2/products";
        };
        readonly deleteProduct2: (product_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProduct2: (product_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProduct2: (product_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly projects: {
        readonly listProjects: {
            readonly method: "GET";
            readonly path: "/api/v1/projects";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/projects";
        };
        readonly deleteProject: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listProjects2: {
            readonly method: "GET";
            readonly path: "/api/v2/projects";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v2/projects";
        };
        readonly deleteProject2: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject2: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly quoteApprovals: {
        readonly listQuoteApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/quote-approvals";
        };
        readonly createQuoteApproval: {
            readonly method: "POST";
            readonly path: "/api/v1/quote-approvals";
        };
        readonly listPending: {
            readonly method: "GET";
            readonly path: "/api/v1/quote-approvals/pending";
        };
        readonly updateDecide: (approval_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listQuoteApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/quote-approvals";
        };
        readonly createQuoteApproval2: {
            readonly method: "POST";
            readonly path: "/api/v2/quote-approvals";
        };
        readonly listPending2: {
            readonly method: "GET";
            readonly path: "/api/v2/quote-approvals/pending";
        };
        readonly updateDecide2: (approval_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly quotes: {
        readonly listQuotes: {
            readonly method: "GET";
            readonly path: "/api/v1/quotes";
        };
        readonly createQuote: {
            readonly method: "POST";
            readonly path: "/api/v1/quotes";
        };
        readonly deleteLine: (item_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deleteQuote: (quote_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getQuote: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateQuote: (quote_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLines: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLine: (quote_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listQuotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/quotes";
        };
        readonly createQuote2: {
            readonly method: "POST";
            readonly path: "/api/v2/quotes";
        };
        readonly deleteLine2: (item_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deleteQuote2: (quote_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getQuote2: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateQuote2: (quote_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLines2: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLine2: (quote_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly rateLimits: {
        readonly listRateLimits: {
            readonly method: "GET";
            readonly path: "/api/v1/rate-limits";
        };
        readonly createRateLimit: {
            readonly method: "POST";
            readonly path: "/api/v1/rate-limits";
        };
        readonly listUsage: {
            readonly method: "GET";
            readonly path: "/api/v1/rate-limits/usage";
        };
        readonly deleteRateLimit: (config_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRateLimit: (config_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRateLimits2: {
            readonly method: "GET";
            readonly path: "/api/v2/rate-limits";
        };
        readonly createRateLimit2: {
            readonly method: "POST";
            readonly path: "/api/v2/rate-limits";
        };
        readonly listUsage2: {
            readonly method: "GET";
            readonly path: "/api/v2/rate-limits/usage";
        };
        readonly deleteRateLimit2: (config_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRateLimit2: (config_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly recruitment: {
        readonly listCandidates: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidates";
        };
        readonly createCandidate: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidates";
        };
        readonly createRoute: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidates/route";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidates/search";
        };
        readonly deleteCandidate: (candidate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidate: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidate: (candidate_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAssignOwner: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStage: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlacements: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/placements";
        };
        readonly createPlacement: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/placements";
        };
        readonly getPlacement: (placement_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidates";
        };
        readonly createCandidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidates";
        };
        readonly createRoute2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidates/route";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidates/search";
        };
        readonly deleteCandidate2: (candidate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidate2: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidate2: (candidate_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAssignOwner2: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStage2: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlacements2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/placements";
        };
        readonly createPlacement2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/placements";
        };
        readonly getPlacement2: (placement_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly recruitmentAnalytics: {
        readonly listFunnel: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/funnel";
        };
        readonly listPlacementRate: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/placement-rate";
        };
        readonly listRecruiterProductivity: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/recruiter-productivity";
        };
        readonly listSlaCompliance: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/sla-compliance";
        };
        readonly listTimeToPlacement: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/time-to-placement";
        };
        readonly listFunnel2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/funnel";
        };
        readonly listPlacementRate2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/placement-rate";
        };
        readonly listRecruiterProductivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/recruiter-productivity";
        };
        readonly listSlaCompliance2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/sla-compliance";
        };
        readonly listTimeToPlacement2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/time-to-placement";
        };
    };
    readonly recruitmentCandidateDocuments: {
        readonly listCandidateDocuments: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidate-documents";
        };
        readonly createCandidateDocument: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidate-documents";
        };
        readonly deleteCandidateDocument: (document_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidateDocument: (document_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidateDocument: (document_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createExtract: (document_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCandidateDocuments2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidate-documents";
        };
        readonly createCandidateDocument2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidate-documents";
        };
        readonly deleteCandidateDocument2: (document_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidateDocument2: (document_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidateDocument2: (document_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createExtract2: (document_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly recruitmentControl: {
        readonly createAssignOwner: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/assign-owner";
        };
        readonly createCandidateStage: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/candidate-stage";
        };
        readonly getCandidate: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/candidates";
        };
        readonly createConfirmPlacement: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/confirm-placement";
        };
        readonly listPlacements: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/placements";
        };
        readonly createRouteCandidate: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/route-candidate";
        };
        readonly createAssignOwner2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/assign-owner";
        };
        readonly createCandidateStage2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/candidate-stage";
        };
        readonly getCandidate2: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/candidates";
        };
        readonly createConfirmPlacement2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/confirm-placement";
        };
        readonly listPlacements2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/placements";
        };
        readonly createRouteCandidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/route-candidate";
        };
    };
    readonly recurringInvoices: {
        readonly listRecurringInvoices: {
            readonly method: "GET";
            readonly path: "/api/v1/recurring-invoices";
        };
        readonly createRecurringInvoice: {
            readonly method: "POST";
            readonly path: "/api/v1/recurring-invoices";
        };
        readonly listDue: {
            readonly method: "GET";
            readonly path: "/api/v1/recurring-invoices/due";
        };
        readonly deleteRecurringInvoice: (invoice_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecurringInvoice: (invoice_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createGenerate: (invoice_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRecurringInvoices2: {
            readonly method: "GET";
            readonly path: "/api/v2/recurring-invoices";
        };
        readonly createRecurringInvoice2: {
            readonly method: "POST";
            readonly path: "/api/v2/recurring-invoices";
        };
        readonly listDue2: {
            readonly method: "GET";
            readonly path: "/api/v2/recurring-invoices/due";
        };
        readonly deleteRecurringInvoice2: (invoice_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecurringInvoice2: (invoice_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createGenerate2: (invoice_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly referrals: {
        readonly listReferrals: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals";
        };
        readonly createReferral: {
            readonly method: "POST";
            readonly path: "/api/v1/referrals";
        };
        readonly listSources: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals/sources";
        };
        readonly createSource: {
            readonly method: "POST";
            readonly path: "/api/v1/referrals/sources";
        };
        readonly getSource: (source_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/referrals/stats";
        };
        readonly createConvert: (referral_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReferrals2: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals";
        };
        readonly createReferral2: {
            readonly method: "POST";
            readonly path: "/api/v2/referrals";
        };
        readonly listSources2: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals/sources";
        };
        readonly createSource2: {
            readonly method: "POST";
            readonly path: "/api/v2/referrals/sources";
        };
        readonly getSource2: (source_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/referrals/stats";
        };
        readonly createConvert2: (referral_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly reportSchedules: {
        readonly listSchedules: {
            readonly method: "GET";
            readonly path: "/api/v1/reports/schedules";
        };
        readonly createSchedule: {
            readonly method: "POST";
            readonly path: "/api/v1/reports/schedules";
        };
        readonly deleteSchedule: (schedule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSchedule: (schedule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSchedules2: {
            readonly method: "GET";
            readonly path: "/api/v2/reports/schedules";
        };
        readonly createSchedule2: {
            readonly method: "POST";
            readonly path: "/api/v2/reports/schedules";
        };
        readonly deleteSchedule2: (schedule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSchedule2: (schedule_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly revenue: {
        readonly listRevenue: {
            readonly method: "GET";
            readonly path: "/api/v1/revenue";
        };
        readonly createRevenue: {
            readonly method: "POST";
            readonly path: "/api/v1/revenue";
        };
        readonly getSummary: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getRevenue: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRevenue: (entry_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listRevenue2: {
            readonly method: "GET";
            readonly path: "/api/v2/revenue";
        };
        readonly createRevenue2: {
            readonly method: "POST";
            readonly path: "/api/v2/revenue";
        };
        readonly getSummary2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly getRevenue2: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateRevenue2: (entry_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly revenueGoals: {
        readonly listRevenueGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/revenue-goals";
        };
        readonly createRevenueGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/revenue-goals";
        };
        readonly getGapAnalysi: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly updateProgres: (goal_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRevenueGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/revenue-goals";
        };
        readonly createRevenueGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/revenue-goals";
        };
        readonly getGapAnalysi2: (period: string) => {
            method: "GET";
            path: string;
        };
        readonly updateProgres2: (goal_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly roleDashboards: {
        readonly listRoleDashboards: {
            readonly method: "GET";
            readonly path: "/api/v1/role-dashboards";
        };
        readonly updateRoleDashboard: {
            readonly method: "PUT";
            readonly path: "/api/v1/role-dashboards";
        };
        readonly getRoleDashboard: (role: string) => {
            method: "GET";
            path: string;
        };
        readonly listRoleDashboards2: {
            readonly method: "GET";
            readonly path: "/api/v2/role-dashboards";
        };
        readonly updateRoleDashboard2: {
            readonly method: "PUT";
            readonly path: "/api/v2/role-dashboards";
        };
        readonly getRoleDashboard2: (role: string) => {
            method: "GET";
            path: string;
        };
    };
    readonly savedFilters: {
        readonly listSavedFilters: {
            readonly method: "GET";
            readonly path: "/api/v1/saved-filters";
        };
        readonly createSavedFilter: {
            readonly method: "POST";
            readonly path: "/api/v1/saved-filters";
        };
        readonly deleteSavedFilter: (filter_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSavedFilter: (filter_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSavedFilters2: {
            readonly method: "GET";
            readonly path: "/api/v2/saved-filters";
        };
        readonly createSavedFilter2: {
            readonly method: "POST";
            readonly path: "/api/v2/saved-filters";
        };
        readonly deleteSavedFilter2: (filter_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSavedFilter2: (filter_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly scoreDecay: {
        readonly listScoreDecay: {
            readonly method: "GET";
            readonly path: "/api/v1/score-decay";
        };
        readonly createScoreDecay: {
            readonly method: "POST";
            readonly path: "/api/v1/score-decay";
        };
        readonly deleteScoreDecay: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoreDecay: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSimulate: (rule_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listScoreDecay2: {
            readonly method: "GET";
            readonly path: "/api/v2/score-decay";
        };
        readonly createScoreDecay2: {
            readonly method: "POST";
            readonly path: "/api/v2/score-decay";
        };
        readonly deleteScoreDecay2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateScoreDecay2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSimulate2: (rule_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly scorecard: {
        readonly listScorecard: {
            readonly method: "GET";
            readonly path: "/api/v1/scorecard";
        };
        readonly listScorecard2: {
            readonly method: "GET";
            readonly path: "/api/v2/scorecard";
        };
    };
    readonly search: {
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/search";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v2/search";
        };
    };
    readonly sharePackets: {
        readonly listSharePackets: {
            readonly method: "GET";
            readonly path: "/api/v1/share-packets";
        };
        readonly createSharePacket: {
            readonly method: "POST";
            readonly path: "/api/v1/share-packets";
        };
        readonly getSharePacket: (packet_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDecide: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSharePackets2: {
            readonly method: "GET";
            readonly path: "/api/v2/share-packets";
        };
        readonly createSharePacket2: {
            readonly method: "POST";
            readonly path: "/api/v2/share-packets";
        };
        readonly getSharePacket2: (packet_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply2: (packet_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDecide2: (packet_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly slaPolicies: {
        readonly listSlaPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies";
        };
        readonly createSlaPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/sla-policies";
        };
        readonly listBreaches: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies/breaches";
        };
        readonly createBreache: {
            readonly method: "POST";
            readonly path: "/api/v1/sla-policies/breaches";
        };
        readonly listCheck: {
            readonly method: "GET";
            readonly path: "/api/v1/sla-policies/check";
        };
        readonly deleteSlaPolicy: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSlaPolicy: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSlaPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies";
        };
        readonly createSlaPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/sla-policies";
        };
        readonly listBreaches2: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies/breaches";
        };
        readonly createBreache2: {
            readonly method: "POST";
            readonly path: "/api/v2/sla-policies/breaches";
        };
        readonly listCheck2: {
            readonly method: "GET";
            readonly path: "/api/v2/sla-policies/check";
        };
        readonly deleteSlaPolicy2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateSlaPolicy2: (policy_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly slackCommands: {
        readonly createCommand: {
            readonly method: "POST";
            readonly path: "/api/v1/slack/commands";
        };
        readonly createCommand2: {
            readonly method: "POST";
            readonly path: "/api/v2/slack/commands";
        };
    };
    readonly social: {
        readonly listPosts: {
            readonly method: "GET";
            readonly path: "/api/v1/social/posts";
        };
        readonly createPost: {
            readonly method: "POST";
            readonly path: "/api/v1/social/posts";
        };
        readonly createApprove: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPublish: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu: (post_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/social/summary";
        };
        readonly listPosts2: {
            readonly method: "GET";
            readonly path: "/api/v2/social/posts";
        };
        readonly createPost2: {
            readonly method: "POST";
            readonly path: "/api/v2/social/posts";
        };
        readonly createApprove2: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createPublish2: (post_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateStatu2: (post_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/social/summary";
        };
    };
    readonly stable: {
        readonly listVerify: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/audit/verify";
        };
        readonly listOrgs: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/orgs";
        };
        readonly listReadiness: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/orgs/readiness";
        };
        readonly createAutonomyDryRun: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyGates: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAutonomyPolicy: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyPolicy: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHistory: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRollback: (org_id: number, version_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTemplate: (org_id: number, template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyRollout: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyRollout: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommandCenterConfig: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommandCenterConfig: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createReset: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deletePurge: (org_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listReadiness2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWhatsappWebhookFailures: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnlockAccount: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listUsers: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/users";
        };
        readonly createGrantSuper: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeSuper: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/analytics";
        };
        readonly listBookings: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/bookings";
        };
        readonly updateBooking: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createResolve: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listListings: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/listings";
        };
        readonly deleteListing: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateListing: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/payouts";
        };
        readonly createPayout: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/payouts";
        };
        readonly updateStatu: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createProgram: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/settlement/programs";
        };
        readonly deleteProgram: (program_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateProgram: (program_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services-admin/settlement/tasks";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services-admin/settlement/tasks";
        };
        readonly deleteTask: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listJourneys: {
            readonly method: "GET";
            readonly path: "/api/v1/after-services/journeys/";
        };
        readonly createJourney: {
            readonly method: "POST";
            readonly path: "/api/v1/after-services/journeys/";
        };
        readonly getJourney: (journey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu2: (journey_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listApiKeys: {
            readonly method: "GET";
            readonly path: "/api/v1/api-keys";
        };
        readonly createApiKey: {
            readonly method: "POST";
            readonly path: "/api/v1/api-keys";
        };
        readonly deleteApiKey: (key_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals";
        };
        readonly listApprovalPatterns: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals/approval-patterns";
        };
        readonly deleteApprovalPattern: (pattern_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateApprovalPattern: (pattern_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/approvals/request";
        };
        readonly listTimeline: {
            readonly method: "GET";
            readonly path: "/api/v1/approvals/timeline";
        };
        readonly createApprove: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAuditTrail: {
            readonly method: "GET";
            readonly path: "/api/v1/audit-trail";
        };
        readonly createAuditTrail: {
            readonly method: "POST";
            readonly path: "/api/v1/audit-trail";
        };
        readonly getHistory: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/audit-trail/stats";
        };
        readonly createChangePassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/change-password";
        };
        readonly deleteDeleteAccount: {
            readonly method: "DELETE";
            readonly path: "/api/v1/auth/delete-account";
        };
        readonly createForgotPassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/forgot-password";
        };
        readonly createLogin: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/login";
        };
        readonly createLoginJson: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/login-json";
        };
        readonly createLogout: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/logout";
        };
        readonly createMagicLink: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/magic-link";
        };
        readonly createVerify: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/magic-link/verify";
        };
        readonly listMe: {
            readonly method: "GET";
            readonly path: "/api/v1/auth/me";
        };
        readonly createPushToken: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/push-token";
        };
        readonly createRefresh: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/refresh";
        };
        readonly createRegister: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/register";
        };
        readonly createResetPassword: {
            readonly method: "POST";
            readonly path: "/api/v1/auth/reset-password";
        };
        readonly createDelete: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/contacts/delete";
        };
        readonly createUpdateStage: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/contacts/update-stage";
        };
        readonly createContact: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/contacts";
        };
        readonly createDeal: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/deals";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v1/bulk/import/tasks";
        };
        readonly listCompanies: {
            readonly method: "GET";
            readonly path: "/api/v1/companies";
        };
        readonly createCompany: {
            readonly method: "POST";
            readonly path: "/api/v1/companies";
        };
        readonly listFounder: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/dashboard/founder";
        };
        readonly listDomains: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/domains";
        };
        readonly createDomain: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/domains";
        };
        readonly createHandoff: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/handoff";
        };
        readonly listProducts: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/products";
        };
        readonly createProduct: {
            readonly method: "POST";
            readonly path: "/api/v1/companies/products";
        };
        readonly listPublic: {
            readonly method: "GET";
            readonly path: "/api/v1/companies/public";
        };
        readonly getCompany: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompany: (company_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContacts: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts";
        };
        readonly createContact2: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts";
        };
        readonly createInquiry: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/contacts/inquiry";
        };
        readonly listDuplicates: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/duplicates";
        };
        readonly createEnrich: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/enrich";
        };
        readonly listFollowUpDue: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/follow-up-due";
        };
        readonly listIntelligence: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/intelligence";
        };
        readonly createRescore: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/intelligence/rescore";
        };
        readonly createMerge: {
            readonly method: "POST";
            readonly path: "/api/v1/contacts/merge";
        };
        readonly listPipelineAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/pipeline-analytics";
        };
        readonly listPipelineSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/contacts/pipeline-summary";
        };
        readonly deleteContact: (contact_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContact: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContact: (contact_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMergeHistory: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listNetwork: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQualify: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRoute: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnmerge: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listContracts: {
            readonly method: "GET";
            readonly path: "/api/v1/contracts";
        };
        readonly createContract: {
            readonly method: "POST";
            readonly path: "/api/v1/contracts";
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v1/contracts/summary";
        };
        readonly deleteContract: (contract_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContract: (contract_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContract: (contract_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createBackup: {
            readonly method: "POST";
            readonly path: "/api/v1/control/backup";
        };
        readonly listList: {
            readonly method: "GET";
            readonly path: "/api/v1/control/backup/list";
        };
        readonly createLimitationsClaude: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/limitations-claude";
        };
        readonly createSelfLearningTrain: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/self-learning-train";
        };
        readonly createTrainDataDriven: {
            readonly method: "POST";
            readonly path: "/api/v1/control/brain/train-data-driven";
        };
        readonly listMorningBrief: {
            readonly method: "GET";
            readonly path: "/api/v1/control/ceo/morning-brief";
        };
        readonly listStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/control/ceo/status";
        };
        readonly listMultiOrg: {
            readonly method: "GET";
            readonly path: "/api/v1/control/cockpit/multi-org";
        };
        readonly listReport: {
            readonly method: "GET";
            readonly path: "/api/v1/control/compliance/report";
        };
        readonly createRun: {
            readonly method: "POST";
            readonly path: "/api/v1/control/compliance/run";
        };
        readonly listContactPolicies: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly createContactPolicy: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/contact-policies";
        };
        readonly deleteContactPolicy: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly createMoneyMatrice: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules: {
            readonly method: "GET";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule: {
            readonly method: "POST";
            readonly path: "/api/v1/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/control/cron/health";
        };
        readonly listCompanies2: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies";
        };
        readonly listComparison: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies/comparison";
        };
        readonly listTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/companies/trends";
        };
        readonly listControlSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dashboard/control-summary";
        };
        readonly listDataQuality: {
            readonly method: "GET";
            readonly path: "/api/v1/control/data-quality";
        };
        readonly listDeadLetter: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dead-letter";
        };
        readonly listCounts: {
            readonly method: "GET";
            readonly path: "/api/v1/control/dead-letter/counts";
        };
        readonly getDeadLetter: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createArchive: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResolve2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLog: {
            readonly method: "GET";
            readonly path: "/api/v1/control/decisions/log";
        };
        readonly createExecutePlan: {
            readonly method: "POST";
            readonly path: "/api/v1/control/execute-plan";
        };
        readonly listToday: {
            readonly method: "GET";
            readonly path: "/api/v1/control/founder-playbook/today";
        };
        readonly listGithubIdentityMap: {
            readonly method: "GET";
            readonly path: "/api/v1/control/github-identity-map";
        };
        readonly createUpsert: {
            readonly method: "POST";
            readonly path: "/api/v1/control/github-identity-map/upsert";
        };
        readonly listHealthSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/control/health-summary";
        };
        readonly listHealth2: {
            readonly method: "GET";
            readonly path: "/api/v1/control/integrations/health";
        };
        readonly createReplay: {
            readonly method: "POST";
            readonly path: "/api/v1/control/jobs/replay";
        };
        readonly listRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/control/jobs/runs";
        };
        readonly createCanSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/can-send";
        };
        readonly createRecordSend: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/record-send";
        };
        readonly createRequestMoneyApproval: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/request-money-approval";
        };
        readonly createRouteLead: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/route-lead";
        };
        readonly createApplicationMilestone: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu: {
            readonly method: "POST";
            readonly path: "/api/v1/control/levers/study-abroad/risk-status";
        };
        readonly createMessageDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/control/message-draft";
        };
        readonly listControlReport: {
            readonly method: "GET";
            readonly path: "/api/v1/control/observability/control-report";
        };
        readonly listCounters: {
            readonly method: "GET";
            readonly path: "/api/v1/control/platform/counters";
        };
        readonly createAssignOwner: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/assign-owner";
        };
        readonly createCandidateStage: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/candidate-stage";
        };
        readonly getCandidate: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/candidates";
        };
        readonly createConfirmPlacement: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/confirm-placement";
        };
        readonly listPlacements: {
            readonly method: "GET";
            readonly path: "/api/v1/control/recruitment/placements";
        };
        readonly createRouteCandidate: {
            readonly method: "POST";
            readonly path: "/api/v1/control/recruitment/route-candidate";
        };
        readonly createSimulate: {
            readonly method: "POST";
            readonly path: "/api/v1/control/scenario/simulate";
        };
        readonly listSlo: {
            readonly method: "GET";
            readonly path: "/api/v1/control/scheduler/slo";
        };
        readonly listPosture: {
            readonly method: "GET";
            readonly path: "/api/v1/control/security/posture";
        };
        readonly listRecent: {
            readonly method: "GET";
            readonly path: "/api/v1/control/signals/recent";
        };
        readonly listManager: {
            readonly method: "GET";
            readonly path: "/api/v1/control/sla/manager";
        };
        readonly listMetrics: {
            readonly method: "GET";
            readonly path: "/api/v1/control/storage/metrics";
        };
        readonly listEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/control/stream/events";
        };
        readonly listSystemHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/control/system-health";
        };
        readonly listMetrics2: {
            readonly method: "GET";
            readonly path: "/api/v1/control/trend/metrics";
        };
        readonly listReliability: {
            readonly method: "GET";
            readonly path: "/api/v1/control/webhook/reliability";
        };
        readonly listWeeklyBoardPacket: {
            readonly method: "GET";
            readonly path: "/api/v1/control/weekly-board-packet";
        };
        readonly listDefinitions: {
            readonly method: "GET";
            readonly path: "/api/v1/custom-fields/definitions";
        };
        readonly createDefinition: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-fields/definitions";
        };
        readonly deleteDefinition: (defn_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDefinition: (defn_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createValue: {
            readonly method: "POST";
            readonly path: "/api/v1/custom-fields/values";
        };
        readonly getValue: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnomalies: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/anomalies";
        };
        readonly listKpis: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/kpis";
        };
        readonly listLayout: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/layout";
        };
        readonly updateLayout: {
            readonly method: "PUT";
            readonly path: "/api/v1/dashboard/layout";
        };
        readonly listRevenueForecast: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/revenue-forecast";
        };
        readonly listTeamWorkload: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/team-workload";
        };
        readonly listTrends2: {
            readonly method: "GET";
            readonly path: "/api/v1/dashboard/trends";
        };
        readonly listDeals: {
            readonly method: "GET";
            readonly path: "/api/v1/deals";
        };
        readonly createDeal2: {
            readonly method: "POST";
            readonly path: "/api/v1/deals";
        };
        readonly listForecast: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/forecast";
        };
        readonly listSummary3: {
            readonly method: "GET";
            readonly path: "/api/v1/deals/summary";
        };
        readonly deleteDeal: (deal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDeal: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDeal: (deal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDepartments: {
            readonly method: "GET";
            readonly path: "/api/v1/departments";
        };
        readonly createDepartment: {
            readonly method: "POST";
            readonly path: "/api/v1/departments";
        };
        readonly deleteDepartment: (department_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDepartment: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDepartment: (department_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAgreements: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/agreements";
        };
        readonly createAgreement: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/agreements";
        };
        readonly deleteAgreement: (agreement_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateAgreement: (agreement_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNetwork2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/analytics/network";
        };
        readonly listApplications: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/applications";
        };
        readonly updateStatu3: (app_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommissions: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/commissions";
        };
        readonly createCommission: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/commissions";
        };
        readonly createBulkUpdate: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/commissions/bulk-update";
        };
        readonly listSummary4: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/commissions/summary";
        };
        readonly deleteCommission: (commission_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCommission: (commission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommission: (commission_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu4: (commission_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listInviteTokens: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/invite-tokens";
        };
        readonly createInviteToken: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/invite-tokens";
        };
        readonly listOpportunities: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/opportunities";
        };
        readonly createOpportunity: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/opportunities";
        };
        readonly deleteOpportunity: (opp_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listRecommendedPartners: (opp_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listPartners: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/partners";
        };
        readonly deletePartner: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPartner: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePartner: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAgreements2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDocuments: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateReject: (partner_id: number, doc_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateVerify: (partner_id: number, doc_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu5: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listStudentApplications: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/student-applications";
        };
        readonly createStudentApplication: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/student-applications";
        };
        readonly deleteStudentApplication: (app_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateStatu6: (app_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listStudents: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/admin/students";
        };
        readonly createStudent: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/admin/students";
        };
        readonly deleteStudent: (student_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStudent: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStudent: (student_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listApplications2: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStage: (student_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createConsume: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/invite-tokens/consume";
        };
        readonly listAgreements3: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/agreements";
        };
        readonly getAgreement: (agreement_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSign: (agreement_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCommissions2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/commissions";
        };
        readonly createPayoutRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/commissions/payout-request";
        };
        readonly listSummary5: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/commissions/summary";
        };
        readonly getCommission2: (commission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDocuments2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/documents";
        };
        readonly createDocument: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/documents";
        };
        readonly createLead: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/leads";
        };
        readonly listOpportunities2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/opportunities";
        };
        readonly listRecommended: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/opportunities/recommended";
        };
        readonly getOpportunity: (opp_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply: (opp_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProfile: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/profile";
        };
        readonly updateProfile: {
            readonly method: "PUT";
            readonly path: "/api/v1/egpn/partners/profile";
        };
        readonly createRegister2: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/register";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/stats";
        };
        readonly createStudentApplication2: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/student-applications";
        };
        readonly listStudents2: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/students";
        };
        readonly createStudent2: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/students";
        };
        readonly getStudent2: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTeam: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/partners/team";
        };
        readonly createInvite: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/partners/team/invite";
        };
        readonly listAgreementPdf: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove2: (partner_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats3: {
            readonly method: "GET";
            readonly path: "/api/v1/egpn/portal/stats";
        };
        readonly createStudent3: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/portal/students";
        };
        readonly createApplication: (student_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRegister3: {
            readonly method: "POST";
            readonly path: "/api/v1/egpn/register";
        };
        readonly listEmailTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/email-templates";
        };
        readonly createEmailTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/email-templates";
        };
        readonly deleteEmailTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailTemplate: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAuthUrl: {
            readonly method: "GET";
            readonly path: "/api/v1/email/auth-url";
        };
        readonly listCallback: {
            readonly method: "GET";
            readonly path: "/api/v1/email/callback";
        };
        readonly createCompose: {
            readonly method: "POST";
            readonly path: "/api/v1/email/compose";
        };
        readonly listPendingDigest: {
            readonly method: "GET";
            readonly path: "/api/v1/email/control/pending-digest";
        };
        readonly createDraft: {
            readonly method: "POST";
            readonly path: "/api/v1/email/control/pending-digest/draft";
        };
        readonly createProces: {
            readonly method: "POST";
            readonly path: "/api/v1/email/control/process";
        };
        readonly listReportTemplate: {
            readonly method: "GET";
            readonly path: "/api/v1/email/control/report-template";
        };
        readonly listHealth3: {
            readonly method: "GET";
            readonly path: "/api/v1/email/health";
        };
        readonly listInbox: {
            readonly method: "GET";
            readonly path: "/api/v1/email/inbox";
        };
        readonly listSearch: {
            readonly method: "GET";
            readonly path: "/api/v1/email/search";
        };
        readonly createSync: {
            readonly method: "POST";
            readonly path: "/api/v1/email/sync";
        };
        readonly getThread: (thread_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSummarize: (thread_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDraftReply: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRead: (email_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createSend: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStrategize: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSummarize2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getAbTest: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital-analytics/campaigns";
        };
        readonly listDailyTrends: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital-analytics/daily-trends";
        };
        readonly getFunnel: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCockpit: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/cockpit";
        };
        readonly listFounderReport: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/founder-report";
        };
        readonly listIntelligence2: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/intelligence";
        };
        readonly createIntelligence: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/intelligence";
        };
        readonly createReview: (item_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeads: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/leads";
        };
        readonly createBulkQualify: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/bulk-qualify";
        };
        readonly createBulkRoute: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/bulk-route";
        };
        readonly createEscalateStale: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/leads/escalate-stale";
        };
        readonly listExport: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/leads/export";
        };
        readonly getLead: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listRoutingRules: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/routing-rules";
        };
        readonly createRoutingRule: {
            readonly method: "POST";
            readonly path: "/api/v1/empire-digital/routing-rules";
        };
        readonly updateRoutingRule: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/scorecard";
        };
        readonly listSlaPolicy: {
            readonly method: "GET";
            readonly path: "/api/v1/empire-digital/sla-policy";
        };
        readonly updateSlaPolicy: {
            readonly method: "PATCH";
            readonly path: "/api/v1/empire-digital/sla-policy";
        };
        readonly listExecutions: {
            readonly method: "GET";
            readonly path: "/api/v1/executions";
        };
        readonly listExport2: {
            readonly method: "GET";
            readonly path: "/api/v1/export";
        };
        readonly listContacts2: {
            readonly method: "GET";
            readonly path: "/api/v1/export/contacts";
        };
        readonly listDeals2: {
            readonly method: "GET";
            readonly path: "/api/v1/export/deals";
        };
        readonly listFinance: {
            readonly method: "GET";
            readonly path: "/api/v1/export/finance";
        };
        readonly listFeatureFlags: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-flags/";
        };
        readonly getCheck: (flag_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listGlobal: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-flags/global";
        };
        readonly createInvalidateCache: {
            readonly method: "POST";
            readonly path: "/api/v1/feature-flags/invalidate-cache";
        };
        readonly listFinance2: {
            readonly method: "GET";
            readonly path: "/api/v1/finance";
        };
        readonly createFinance: {
            readonly method: "POST";
            readonly path: "/api/v1/finance";
        };
        readonly listBudgets: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/budgets";
        };
        readonly createBudget: {
            readonly method: "POST";
            readonly path: "/api/v1/finance/budgets";
        };
        readonly listEfficiency: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/efficiency";
        };
        readonly listEntityRollup: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/entity-rollup";
        };
        readonly listSummary6: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/summary";
        };
        readonly listTrends3: {
            readonly method: "GET";
            readonly path: "/api/v1/finance/trends";
        };
        readonly listConsent: {
            readonly method: "GET";
            readonly path: "/api/v1/gdpr/consent";
        };
        readonly createConsent: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/consent";
        };
        readonly createDelete2: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/delete";
        };
        readonly createExport: {
            readonly method: "POST";
            readonly path: "/api/v1/gdpr/export";
        };
        readonly listGoals: {
            readonly method: "GET";
            readonly path: "/api/v1/goals";
        };
        readonly createGoal: {
            readonly method: "POST";
            readonly path: "/api/v1/goals";
        };
        readonly deleteGoal: (goal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getGoal: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listKeyResults: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createKeyResult: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteKeyResult: (goal_id: number, kr_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateKeyResult: (goal_id: number, kr_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listProjects: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu7: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHealth4: {
            readonly method: "GET";
            readonly path: "/api/v1/health";
        };
        readonly listLive: {
            readonly method: "GET";
            readonly path: "/api/v1/health/live";
        };
        readonly listReady: {
            readonly method: "GET";
            readonly path: "/api/v1/health/ready";
        };
        readonly listWorker: {
            readonly method: "GET";
            readonly path: "/api/v1/health/worker";
        };
        readonly createBooking: {
            readonly method: "POST";
            readonly path: "/api/v1/housing/bookings";
        };
        readonly listMy: {
            readonly method: "GET";
            readonly path: "/api/v1/housing/bookings/my";
        };
        readonly updateCancel: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings2: {
            readonly method: "GET";
            readonly path: "/api/v1/housing/listings";
        };
        readonly getListing: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAttendance: {
            readonly method: "GET";
            readonly path: "/api/v1/hr/attendance";
        };
        readonly createCheckIn: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/attendance/check-in";
        };
        readonly createUpsert2: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/attendance/upsert";
        };
        readonly getAttendance: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCheckOut: (record_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeaveRequests: {
            readonly method: "GET";
            readonly path: "/api/v1/hr/leave-requests";
        };
        readonly createLeaveRequest: {
            readonly method: "POST";
            readonly path: "/api/v1/hr/leave-requests";
        };
        readonly getLeaveRequest: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeaveRequest: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCancel: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReview2: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listConversations: {
            readonly method: "GET";
            readonly path: "/api/v1/inbox/conversations";
        };
        readonly updateAssign: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateState: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUnified: {
            readonly method: "GET";
            readonly path: "/api/v1/inbox/unified";
        };
        readonly listIntegrations: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations";
        };
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/chat";
        };
        readonly listCodingDiscovery: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/coding-discovery";
        };
        readonly listModels: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/models";
        };
        readonly listStatus2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/ai/status";
        };
        readonly createTest: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/ai/test";
        };
        readonly createConnect: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/connect";
        };
        readonly listStatus3: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/calendly/status";
        };
        readonly createSync2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/calendly/sync";
        };
        readonly createConnect3: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/connect";
        };
        readonly listStatus4: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/clickup/status";
        };
        readonly createSync3: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/clickup/sync";
        };
        readonly createConnect4: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/connect";
        };
        readonly createConnect5: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/connect";
        };
        readonly listStatus5: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/digitalocean/status";
        };
        readonly createSync4: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/digitalocean/sync";
        };
        readonly createConnect6: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/connect";
        };
        readonly listStatus6: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/elevenlabs/status";
        };
        readonly createTt: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/elevenlabs/tts";
        };
        readonly createConnect7: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/connect";
        };
        readonly createDiscoverInstallation: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/discover-installation";
        };
        readonly listStatus7: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/github/status";
        };
        readonly createSync5: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/github/sync";
        };
        readonly createConnect8: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/connect";
        };
        readonly listStatus8: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-analytics/status";
        };
        readonly createSync6: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-analytics/sync";
        };
        readonly listAuthUrl2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/auth-url";
        };
        readonly listEvents2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/google-calendar/events";
        };
        readonly createCallback: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/oauth/callback";
        };
        readonly createSync7: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/google-calendar/sync";
        };
        readonly listHealthDashboard: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/health-dashboard";
        };
        readonly createConnect9: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/connect";
        };
        readonly listStatus9: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/hubspot/status";
        };
        readonly createSync8: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/hubspot/sync";
        };
        readonly createConnect10: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/connect";
        };
        readonly createPublish: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/linkedin/publish";
        };
        readonly listStatus10: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/linkedin/status";
        };
        readonly createConnect11: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/connect";
        };
        readonly listStatus11: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/notion/status";
        };
        readonly createSync9: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/notion/sync";
        };
        readonly createConnect12: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/connect";
        };
        readonly createSearch: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/perplexity/search";
        };
        readonly listStatus12: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/perplexity/status";
        };
        readonly listSecurityCenter: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/security-center";
        };
        readonly listTrend2: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/security-center/trend";
        };
        readonly listSetupGuide: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/setup-guide";
        };
        readonly createConnect13: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/connect";
        };
        readonly createSend2: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/send";
        };
        readonly listStatus13: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/slack/status";
        };
        readonly createSync10: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/slack/sync";
        };
        readonly createConnect14: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/connect";
        };
        readonly listStatus14: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/stripe/status";
        };
        readonly createSync11: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/stripe/sync";
        };
        readonly createConnect15: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/supabase/connect";
        };
        readonly deleteDisconnect: {
            readonly method: "DELETE";
            readonly path: "/api/v1/integrations/supabase/disconnect";
        };
        readonly listRealtimeStatus: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/realtime-status";
        };
        readonly listStatus15: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/supabase/status";
        };
        readonly listTokenHealth: {
            readonly method: "GET";
            readonly path: "/api/v1/integrations/token-health";
        };
        readonly createTokenRotate: (integration_type: string) => {
            method: "POST";
            path: string;
        };
        readonly createSendTest: {
            readonly method: "POST";
            readonly path: "/api/v1/integrations/whatsapp/send-test";
        };
        readonly createDisconnect2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createForceSync: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResetError: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createTest2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listJobListings: {
            readonly method: "GET";
            readonly path: "/api/v1/job-listings";
        };
        readonly createJobListing: {
            readonly method: "POST";
            readonly path: "/api/v1/job-listings";
        };
        readonly deleteJobListing: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getJobListing: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateJobListing: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listBookings2: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/bookings";
        };
        readonly updateBooking2: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings3: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/listings";
        };
        readonly createListing: {
            readonly method: "POST";
            readonly path: "/api/v1/landlord/listings";
        };
        readonly updateListing2: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts2: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/payouts";
        };
        readonly createRequest2: {
            readonly method: "POST";
            readonly path: "/api/v1/landlord/payouts/request";
        };
        readonly listStats4: {
            readonly method: "GET";
            readonly path: "/api/v1/landlord/stats";
        };
        readonly createIngestSocial: {
            readonly method: "POST";
            readonly path: "/api/v1/leads/ingest-social";
        };
        readonly listAdmin: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/certificates/admin";
        };
        readonly createIssue: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/certificates/issue";
        };
        readonly listMe2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/certificates/me";
        };
        readonly getCertificate: (certificate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/courses";
        };
        readonly createCours: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/courses";
        };
        readonly deleteCours: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createApprove3: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createAssign: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEffectiveness: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEscalate: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLessons: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLesson: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteLesson: (course_id: number, lesson_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLesson: (course_id: number, lesson_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLesson: (course_id: number, lesson_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuiz: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuiz: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit: (course_id: number, quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats5: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listEffectiveness2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/effectiveness";
        };
        readonly listEnrollments: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/enrollments";
        };
        readonly createEnrollment: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/enrollments";
        };
        readonly updateEnrollment: (enrollment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createEnroll: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/gtp/enroll";
        };
        readonly listExport3: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/export";
        };
        readonly listMe3: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/me";
        };
        readonly listPrograms: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/gtp/programs";
        };
        readonly listInsights: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/insights";
        };
        readonly listHistory2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/interview/history";
        };
        readonly createStart: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/interview/start";
        };
        readonly getInterview: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAnswer: (session_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReport2: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMyAssignments: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/my-assignments";
        };
        readonly createOutcome: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/outcomes";
        };
        readonly listQuestions: (quiz_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuestion: (quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRuns2: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/runs";
        };
        readonly listSignals: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/signals";
        };
        readonly createTrainWeekly: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/train-weekly";
        };
        readonly createChat2: {
            readonly method: "POST";
            readonly path: "/api/v1/learning/tutor/chat";
        };
        readonly listSessions: {
            readonly method: "GET";
            readonly path: "/api/v1/learning/tutor/sessions";
        };
        readonly listMessages: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAvailability: {
            readonly method: "POST";
            readonly path: "/api/v1/meetings/availability";
        };
        readonly deleteAvailability: (slot_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getAvailability: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBookings3: {
            readonly method: "GET";
            readonly path: "/api/v1/meetings/bookings";
        };
        readonly createBooking2: {
            readonly method: "POST";
            readonly path: "/api/v1/meetings/bookings";
        };
        readonly createCancel2: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createConfirm: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/confirm";
        };
        readonly createDisable: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/disable";
        };
        readonly createSetup: {
            readonly method: "POST";
            readonly path: "/api/v1/mfa/setup";
        };
        readonly listStatus16: {
            readonly method: "GET";
            readonly path: "/api/v1/mfa/status";
        };
        readonly listNotes: {
            readonly method: "GET";
            readonly path: "/api/v1/notes";
        };
        readonly createNote: {
            readonly method: "POST";
            readonly path: "/api/v1/notes";
        };
        readonly deleteNote: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getNote: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateNote: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotifications: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications";
        };
        readonly listCount: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/count";
        };
        readonly listLive2: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/live";
        };
        readonly createMarkRead: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/mark-read";
        };
        readonly listPreferences: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/preferences";
        };
        readonly updatePreference: {
            readonly method: "PATCH";
            readonly path: "/api/v1/notifications/preferences";
        };
        readonly createRunAlert: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/run-alerts";
        };
        readonly createSend3: {
            readonly method: "POST";
            readonly path: "/api/v1/notifications/send";
        };
        readonly listStream: {
            readonly method: "GET";
            readonly path: "/api/v1/notifications/stream";
        };
        readonly listChecklists: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/checklists";
        };
        readonly createChecklist: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/checklists";
        };
        readonly getChecklist: (checklist_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCompleteStep: (checklist_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v1/onboarding/templates";
        };
        readonly createTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v1/onboarding/templates";
        };
        readonly deleteTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTemplate: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTemplate: (template_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listOrgs2: {
            readonly method: "GET";
            readonly path: "/api/v1/orgs";
        };
        readonly createOrg: {
            readonly method: "POST";
            readonly path: "/api/v1/orgs";
        };
        readonly updateOrg: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listFeatureFlags2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureFlag: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProducts2: {
            readonly method: "GET";
            readonly path: "/api/v1/products";
        };
        readonly createProduct2: {
            readonly method: "POST";
            readonly path: "/api/v1/products";
        };
        readonly deleteProduct: (product_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProduct: (product_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProduct: (product_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listProjects2: {
            readonly method: "GET";
            readonly path: "/api/v1/projects";
        };
        readonly createProject: {
            readonly method: "POST";
            readonly path: "/api/v1/projects";
        };
        readonly deleteProject: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu8: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuotes: {
            readonly method: "GET";
            readonly path: "/api/v1/quotes";
        };
        readonly createQuote: {
            readonly method: "POST";
            readonly path: "/api/v1/quotes";
        };
        readonly deleteLine: (item_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deleteQuote: (quote_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getQuote: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateQuote: (quote_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLines: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLine: (quote_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFunnel: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/funnel";
        };
        readonly listPlacementRate: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/placement-rate";
        };
        readonly listRecruiterProductivity: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/recruiter-productivity";
        };
        readonly listSlaCompliance: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/sla-compliance";
        };
        readonly listTimeToPlacement: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/analytics/time-to-placement";
        };
        readonly listCandidateDocuments: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidate-documents";
        };
        readonly createCandidateDocument: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidate-documents";
        };
        readonly deleteCandidateDocument: (document_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidateDocument: (document_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidateDocument: (document_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createExtract: (document_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCandidates2: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidates";
        };
        readonly createCandidate: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidates";
        };
        readonly createRoute2: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/candidates/route";
        };
        readonly listSearch2: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/candidates/search";
        };
        readonly deleteCandidate: (candidate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidate2: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidate: (candidate_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAssignOwner2: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStage: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlacements2: {
            readonly method: "GET";
            readonly path: "/api/v1/recruitment/placements";
        };
        readonly createPlacement: {
            readonly method: "POST";
            readonly path: "/api/v1/recruitment/placements";
        };
        readonly getPlacement: (placement_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSearch3: {
            readonly method: "GET";
            readonly path: "/api/v1/search";
        };
        readonly createMessage: {
            readonly method: "POST";
            readonly path: "/api/v1/settlement/assistant/message";
        };
        readonly listProgram: {
            readonly method: "GET";
            readonly path: "/api/v1/settlement/program";
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v1/settlement/tasks";
        };
        readonly getTask: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateComplete: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/stripe/webhook";
        };
        readonly listApplications3: {
            readonly method: "GET";
            readonly path: "/api/v1/study-abroad/applications";
        };
        readonly createApplication2: {
            readonly method: "POST";
            readonly path: "/api/v1/study-abroad/applications";
        };
        readonly getApplication: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApplication: (application_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createComplete: (application_id: number, step_key: string) => {
            method: "POST";
            path: string;
        };
        readonly listMilestoneTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/study-abroad/milestone-templates";
        };
        readonly createMilestoneTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/study-abroad/milestone-templates";
        };
        readonly listTags: {
            readonly method: "GET";
            readonly path: "/api/v1/tags";
        };
        readonly createTag: {
            readonly method: "POST";
            readonly path: "/api/v1/tags";
        };
        readonly createMerge2: {
            readonly method: "POST";
            readonly path: "/api/v1/tags/merge";
        };
        readonly deleteTag: (tag_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTag: (tag_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks3: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks";
        };
        readonly createTask3: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks";
        };
        readonly listPrioritized: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks/prioritized";
        };
        readonly listTemplates3: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks/templates";
        };
        readonly createTemplate3: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks/templates";
        };
        readonly createGenerate: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks/templates/generate";
        };
        readonly deleteTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deleteTask2: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUniversityPartners: {
            readonly method: "GET";
            readonly path: "/api/v1/university-partners";
        };
        readonly createUniversityPartner: {
            readonly method: "POST";
            readonly path: "/api/v1/university-partners";
        };
        readonly deleteUniversityPartner: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getUniversityPartner: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateUniversityPartner: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUsers2: {
            readonly method: "GET";
            readonly path: "/api/v1/users";
        };
        readonly createUser: {
            readonly method: "POST";
            readonly path: "/api/v1/users";
        };
        readonly createInvite2: {
            readonly method: "POST";
            readonly path: "/api/v1/users/invites";
        };
        readonly createTeamMember: {
            readonly method: "POST";
            readonly path: "/api/v1/users/team-member";
        };
        readonly updateActive: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createForceResetPassword: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createLinkEmployee: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeToken: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRole: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWebhooks: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks";
        };
        readonly createWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v1/webhooks";
        };
        readonly listAll: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks/deliveries/all";
        };
        readonly listDeadLetter2: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks/deliveries/dead-letter";
        };
        readonly createReplay2: (delivery_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteWebhook: (endpoint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getWebhook: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWebhook: (endpoint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDeliveries: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTest3: (endpoint_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkspacePerms: {
            readonly method: "GET";
            readonly path: "/api/v1/workspace-perms";
        };
        readonly listMy2: {
            readonly method: "GET";
            readonly path: "/api/v1/workspace-perms/my";
        };
        readonly getCheckAcces: (workspace_id: number, user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMembers2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember2: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember: (workspace_id: number, user_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWorkspaces: {
            readonly method: "GET";
            readonly path: "/api/v1/workspaces";
        };
        readonly createWorkspace: {
            readonly method: "POST";
            readonly path: "/api/v1/workspaces";
        };
        readonly getWorkspace: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkspace: (workspace_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers3: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember3: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember2: (workspace_id: number, member_user_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listVerify2: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/audit/verify";
        };
        readonly listOrgs3: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/orgs";
        };
        readonly listReadiness3: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/orgs/readiness";
        };
        readonly createAutonomyDryRun2: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyGates2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAutonomyPolicy2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyPolicy2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHistory3: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRollback2: (org_id: number, version_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates4: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTemplate4: (org_id: number, template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyRollout2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyRollout2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommandCenterConfig2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommandCenterConfig2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createReset2: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deletePurge2: (org_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listReadiness4: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend3: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary7: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWhatsappWebhookFailures2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnlockAccount2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listUsers3: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/users";
        };
        readonly createGrantSuper2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeSuper2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAnalytics3: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/analytics";
        };
        readonly listBookings4: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/bookings";
        };
        readonly updateBooking3: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createResolve3: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listListings4: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/listings";
        };
        readonly deleteListing2: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateListing3: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts3: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/payouts";
        };
        readonly createPayout2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/payouts";
        };
        readonly updateStatu9: (payout_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createProgram2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/settlement/programs";
        };
        readonly deleteProgram2: (program_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateProgram2: (program_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks4: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services-admin/settlement/tasks";
        };
        readonly createTask4: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services-admin/settlement/tasks";
        };
        readonly deleteTask3: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask3: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listJourneys2: {
            readonly method: "GET";
            readonly path: "/api/v2/after-services/journeys/";
        };
        readonly createJourney2: {
            readonly method: "POST";
            readonly path: "/api/v2/after-services/journeys/";
        };
        readonly getJourney2: (journey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu10: (journey_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listApiKeys2: {
            readonly method: "GET";
            readonly path: "/api/v2/api-keys";
        };
        readonly createApiKey2: {
            readonly method: "POST";
            readonly path: "/api/v2/api-keys";
        };
        readonly deleteApiKey2: (key_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals";
        };
        readonly listApprovalPatterns2: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals/approval-patterns";
        };
        readonly deleteApprovalPattern2: (pattern_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateApprovalPattern2: (pattern_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRequest3: {
            readonly method: "POST";
            readonly path: "/api/v2/approvals/request";
        };
        readonly listTimeline3: {
            readonly method: "GET";
            readonly path: "/api/v2/approvals/timeline";
        };
        readonly createApprove4: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReject2: (approval_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAuditTrail2: {
            readonly method: "GET";
            readonly path: "/api/v2/audit-trail";
        };
        readonly createAuditTrail2: {
            readonly method: "POST";
            readonly path: "/api/v2/audit-trail";
        };
        readonly getHistory2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listStats6: {
            readonly method: "GET";
            readonly path: "/api/v2/audit-trail/stats";
        };
        readonly createChangePassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/change-password";
        };
        readonly deleteDeleteAccount2: {
            readonly method: "DELETE";
            readonly path: "/api/v2/auth/delete-account";
        };
        readonly createForgotPassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/forgot-password";
        };
        readonly createLogin2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/login";
        };
        readonly createLoginJson2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/login-json";
        };
        readonly createLogout2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/logout";
        };
        readonly createMagicLink2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/magic-link";
        };
        readonly createVerify2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/magic-link/verify";
        };
        readonly listMe4: {
            readonly method: "GET";
            readonly path: "/api/v2/auth/me";
        };
        readonly createPushToken2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/push-token";
        };
        readonly createRefresh2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/refresh";
        };
        readonly createRegister4: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/register";
        };
        readonly createResetPassword2: {
            readonly method: "POST";
            readonly path: "/api/v2/auth/reset-password";
        };
        readonly createDelete3: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/contacts/delete";
        };
        readonly createUpdateStage2: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/contacts/update-stage";
        };
        readonly createContact3: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/contacts";
        };
        readonly createDeal3: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/deals";
        };
        readonly createTask5: {
            readonly method: "POST";
            readonly path: "/api/v2/bulk/import/tasks";
        };
        readonly listCompanies3: {
            readonly method: "GET";
            readonly path: "/api/v2/companies";
        };
        readonly createCompany2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies";
        };
        readonly listFounder2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/dashboard/founder";
        };
        readonly listDomains2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/domains";
        };
        readonly createDomain2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/domains";
        };
        readonly createHandoff2: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/handoff";
        };
        readonly listProducts3: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/products";
        };
        readonly createProduct3: {
            readonly method: "POST";
            readonly path: "/api/v2/companies/products";
        };
        readonly listPublic2: {
            readonly method: "GET";
            readonly path: "/api/v2/companies/public";
        };
        readonly getCompany2: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCompany2: (company_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listContacts3: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts";
        };
        readonly createContact4: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts";
        };
        readonly createInquiry2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/contacts/inquiry";
        };
        readonly listDuplicates2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/duplicates";
        };
        readonly createEnrich2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/enrich";
        };
        readonly listFollowUpDue2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/follow-up-due";
        };
        readonly listIntelligence3: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/intelligence";
        };
        readonly createRescore2: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/intelligence/rescore";
        };
        readonly createMerge3: {
            readonly method: "POST";
            readonly path: "/api/v2/contacts/merge";
        };
        readonly listPipelineAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/pipeline-analytics";
        };
        readonly listPipelineSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/contacts/pipeline-summary";
        };
        readonly deleteContact2: (contact_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContact2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContact2: (contact_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMergeHistory2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listNetwork3: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQualify2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRoute3: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTimeline4: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnmerge2: (contact_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listContracts2: {
            readonly method: "GET";
            readonly path: "/api/v2/contracts";
        };
        readonly createContract2: {
            readonly method: "POST";
            readonly path: "/api/v2/contracts";
        };
        readonly listSummary8: {
            readonly method: "GET";
            readonly path: "/api/v2/contracts/summary";
        };
        readonly deleteContract2: (contract_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getContract2: (contract_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateContract2: (contract_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createBackup2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/backup";
        };
        readonly listList2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/backup/list";
        };
        readonly createLimitationsClaude2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/limitations-claude";
        };
        readonly createSelfLearningTrain2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/self-learning-train";
        };
        readonly createTrainDataDriven2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/brain/train-data-driven";
        };
        readonly listMorningBrief2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/ceo/morning-brief";
        };
        readonly listStatus17: {
            readonly method: "GET";
            readonly path: "/api/v2/control/ceo/status";
        };
        readonly listMultiOrg2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/cockpit/multi-org";
        };
        readonly listReport3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/compliance/report";
        };
        readonly createRun2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/compliance/run";
        };
        readonly listContactPolicies2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly createContactPolicy2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/contact-policies";
        };
        readonly deleteContactPolicy2: (policy_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateContactPolicy2: (policy_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listMoneyMatrices2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly createMoneyMatrice2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/money-matrices";
        };
        readonly deleteMoneyMatrice2: (matrix_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateMoneyMatrice2: (matrix_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listRecruitmentRoutingRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly createRecruitmentRoutingRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/config/recruitment-routing-rules";
        };
        readonly deleteRecruitmentRoutingRule2: (rule_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateRecruitmentRoutingRule2: (rule_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listHealth5: {
            readonly method: "GET";
            readonly path: "/api/v2/control/cron/health";
        };
        readonly listCompanies4: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies";
        };
        readonly listComparison2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies/comparison";
        };
        readonly listTrends4: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/companies/trends";
        };
        readonly listControlSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dashboard/control-summary";
        };
        readonly listDataQuality2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/data-quality";
        };
        readonly listDeadLetter3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dead-letter";
        };
        readonly listCounts2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/dead-letter/counts";
        };
        readonly getDeadLetter2: (entry_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createArchive2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResolve4: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRetry2: (entry_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLog2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/decisions/log";
        };
        readonly createExecutePlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/execute-plan";
        };
        readonly listToday2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/founder-playbook/today";
        };
        readonly listGithubIdentityMap2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/github-identity-map";
        };
        readonly createUpsert3: {
            readonly method: "POST";
            readonly path: "/api/v2/control/github-identity-map/upsert";
        };
        readonly listHealthSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/health-summary";
        };
        readonly listHealth6: {
            readonly method: "GET";
            readonly path: "/api/v2/control/integrations/health";
        };
        readonly createReplay3: {
            readonly method: "POST";
            readonly path: "/api/v2/control/jobs/replay";
        };
        readonly listRuns3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/jobs/runs";
        };
        readonly createCanSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/can-send";
        };
        readonly createRecordSend2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/record-send";
        };
        readonly createRequestMoneyApproval2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/request-money-approval";
        };
        readonly createRouteLead2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/route-lead";
        };
        readonly createApplicationMilestone2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/application-milestones";
        };
        readonly createRiskStatu2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/levers/study-abroad/risk-status";
        };
        readonly createMessageDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/message-draft";
        };
        readonly listControlReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/observability/control-report";
        };
        readonly listCounters2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/platform/counters";
        };
        readonly createAssignOwner3: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/assign-owner";
        };
        readonly createCandidateStage2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/candidate-stage";
        };
        readonly getCandidate3: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCandidates3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/candidates";
        };
        readonly createConfirmPlacement2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/confirm-placement";
        };
        readonly listPlacements3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/recruitment/placements";
        };
        readonly createRouteCandidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/recruitment/route-candidate";
        };
        readonly createSimulate2: {
            readonly method: "POST";
            readonly path: "/api/v2/control/scenario/simulate";
        };
        readonly listSlo2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/scheduler/slo";
        };
        readonly listPosture2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/security/posture";
        };
        readonly listRecent2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/signals/recent";
        };
        readonly listManager2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/sla/manager";
        };
        readonly listMetrics3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/storage/metrics";
        };
        readonly listEvents3: {
            readonly method: "GET";
            readonly path: "/api/v2/control/stream/events";
        };
        readonly listSystemHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/system-health";
        };
        readonly listMetrics4: {
            readonly method: "GET";
            readonly path: "/api/v2/control/trend/metrics";
        };
        readonly listReliability2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/webhook/reliability";
        };
        readonly listWeeklyBoardPacket2: {
            readonly method: "GET";
            readonly path: "/api/v2/control/weekly-board-packet";
        };
        readonly listDefinitions2: {
            readonly method: "GET";
            readonly path: "/api/v2/custom-fields/definitions";
        };
        readonly createDefinition2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-fields/definitions";
        };
        readonly deleteDefinition2: (defn_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateDefinition2: (defn_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createValue2: {
            readonly method: "POST";
            readonly path: "/api/v2/custom-fields/values";
        };
        readonly getValue2: (entity_type: string, entity_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnomalies2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/anomalies";
        };
        readonly listKpis2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/kpis";
        };
        readonly listLayout2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/layout";
        };
        readonly updateLayout2: {
            readonly method: "PUT";
            readonly path: "/api/v2/dashboard/layout";
        };
        readonly listRevenueForecast2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/revenue-forecast";
        };
        readonly listTeamWorkload2: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/team-workload";
        };
        readonly listTrends5: {
            readonly method: "GET";
            readonly path: "/api/v2/dashboard/trends";
        };
        readonly listDeals3: {
            readonly method: "GET";
            readonly path: "/api/v2/deals";
        };
        readonly createDeal4: {
            readonly method: "POST";
            readonly path: "/api/v2/deals";
        };
        readonly listForecast2: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/forecast";
        };
        readonly listSummary9: {
            readonly method: "GET";
            readonly path: "/api/v2/deals/summary";
        };
        readonly deleteDeal2: (deal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDeal2: (deal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDeal2: (deal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDepartments2: {
            readonly method: "GET";
            readonly path: "/api/v2/departments";
        };
        readonly createDepartment2: {
            readonly method: "POST";
            readonly path: "/api/v2/departments";
        };
        readonly deleteDepartment2: (department_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getDepartment2: (department_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateDepartment2: (department_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAgreements4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/agreements";
        };
        readonly createAgreement2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/agreements";
        };
        readonly deleteAgreement2: (agreement_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateAgreement2: (agreement_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNetwork4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/analytics/network";
        };
        readonly listApplications4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/applications";
        };
        readonly updateStatu11: (app_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommissions3: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/commissions";
        };
        readonly createCommission2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/commissions";
        };
        readonly createBulkUpdate2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/commissions/bulk-update";
        };
        readonly listSummary10: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/commissions/summary";
        };
        readonly deleteCommission2: (commission_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCommission3: (commission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommission2: (commission_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu12: (commission_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listInviteTokens2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/invite-tokens";
        };
        readonly createInviteToken2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/invite-tokens";
        };
        readonly listOpportunities3: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/opportunities";
        };
        readonly createOpportunity2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/opportunities";
        };
        readonly deleteOpportunity2: (opp_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listRecommendedPartners2: (opp_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listPartners2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/partners";
        };
        readonly deletePartner2: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getPartner2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updatePartner2: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listAgreements5: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAnalytics4: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDocuments3: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateReject2: (partner_id: number, doc_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateVerify2: (partner_id: number, doc_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu13: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listStudentApplications2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/student-applications";
        };
        readonly createStudentApplication3: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/student-applications";
        };
        readonly deleteStudentApplication2: (app_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateStatu14: (app_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listStudents3: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/admin/students";
        };
        readonly createStudent4: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/admin/students";
        };
        readonly deleteStudent2: (student_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStudent3: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStudent2: (student_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listApplications5: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStage2: (student_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createConsume2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/invite-tokens/consume";
        };
        readonly listAgreements6: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/agreements";
        };
        readonly getAgreement2: (agreement_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSign2: (agreement_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCommissions4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/commissions";
        };
        readonly createPayoutRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/commissions/payout-request";
        };
        readonly listSummary11: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/commissions/summary";
        };
        readonly getCommission4: (commission_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listDocuments4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/documents";
        };
        readonly createDocument2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/documents";
        };
        readonly createLead2: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/leads";
        };
        readonly listOpportunities4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/opportunities";
        };
        readonly listRecommended2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/opportunities/recommended";
        };
        readonly getOpportunity2: (opp_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApply2: (opp_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProfile2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/profile";
        };
        readonly updateProfile2: {
            readonly method: "PUT";
            readonly path: "/api/v2/egpn/partners/profile";
        };
        readonly createRegister5: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/register";
        };
        readonly listStats7: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/stats";
        };
        readonly createStudentApplication4: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/student-applications";
        };
        readonly listStudents4: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/students";
        };
        readonly createStudent5: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/students";
        };
        readonly getStudent4: (student_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTeam2: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/partners/team";
        };
        readonly createInvite3: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/partners/team/invite";
        };
        readonly listAgreementPdf2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createApprove5: (partner_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats8: {
            readonly method: "GET";
            readonly path: "/api/v2/egpn/portal/stats";
        };
        readonly createStudent6: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/portal/students";
        };
        readonly createApplication3: (student_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRegister6: {
            readonly method: "POST";
            readonly path: "/api/v2/egpn/register";
        };
        readonly listEmailTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/email-templates";
        };
        readonly createEmailTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/email-templates";
        };
        readonly deleteEmailTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getEmailTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateEmailTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createRender2: (template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAuthUrl3: {
            readonly method: "GET";
            readonly path: "/api/v2/email/auth-url";
        };
        readonly listCallback2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/callback";
        };
        readonly createCompose2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/compose";
        };
        readonly listPendingDigest2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/control/pending-digest";
        };
        readonly createDraft2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/control/pending-digest/draft";
        };
        readonly createProces2: {
            readonly method: "POST";
            readonly path: "/api/v2/email/control/process";
        };
        readonly listReportTemplate2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/control/report-template";
        };
        readonly listHealth7: {
            readonly method: "GET";
            readonly path: "/api/v2/email/health";
        };
        readonly listInbox2: {
            readonly method: "GET";
            readonly path: "/api/v2/email/inbox";
        };
        readonly listSearch4: {
            readonly method: "GET";
            readonly path: "/api/v2/email/search";
        };
        readonly createSync12: {
            readonly method: "POST";
            readonly path: "/api/v2/email/sync";
        };
        readonly getThread2: (thread_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createSummarize3: (thread_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createDraftReply2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRead2: (email_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createSend4: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStrategize2: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSummarize4: (email_id: number) => {
            method: "POST";
            path: string;
        };
        readonly getAbTest2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCampaigns2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital-analytics/campaigns";
        };
        readonly listDailyTrends2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital-analytics/daily-trends";
        };
        readonly getFunnel2: (campaign_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCockpit2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/cockpit";
        };
        readonly listFounderReport2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/founder-report";
        };
        readonly listIntelligence4: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/intelligence";
        };
        readonly createIntelligence2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/intelligence";
        };
        readonly createReview3: (item_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeads2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/leads";
        };
        readonly createBulkQualify2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/bulk-qualify";
        };
        readonly createBulkRoute2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/bulk-route";
        };
        readonly createEscalateStale2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/leads/escalate-stale";
        };
        readonly listExport4: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/leads/export";
        };
        readonly getLead2: (contact_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listRoutingRules2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/routing-rules";
        };
        readonly createRoutingRule2: {
            readonly method: "POST";
            readonly path: "/api/v2/empire-digital/routing-rules";
        };
        readonly updateRoutingRule2: (rule_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listScorecard2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/scorecard";
        };
        readonly listSlaPolicy2: {
            readonly method: "GET";
            readonly path: "/api/v2/empire-digital/sla-policy";
        };
        readonly updateSlaPolicy2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/empire-digital/sla-policy";
        };
        readonly listExecutions2: {
            readonly method: "GET";
            readonly path: "/api/v2/executions";
        };
        readonly listExport5: {
            readonly method: "GET";
            readonly path: "/api/v2/export";
        };
        readonly listContacts4: {
            readonly method: "GET";
            readonly path: "/api/v2/export/contacts";
        };
        readonly listDeals4: {
            readonly method: "GET";
            readonly path: "/api/v2/export/deals";
        };
        readonly listFinance3: {
            readonly method: "GET";
            readonly path: "/api/v2/export/finance";
        };
        readonly listFeatureFlags3: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-flags/";
        };
        readonly getCheck2: (flag_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listGlobal2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-flags/global";
        };
        readonly createInvalidateCache2: {
            readonly method: "POST";
            readonly path: "/api/v2/feature-flags/invalidate-cache";
        };
        readonly listFinance4: {
            readonly method: "GET";
            readonly path: "/api/v2/finance";
        };
        readonly createFinance2: {
            readonly method: "POST";
            readonly path: "/api/v2/finance";
        };
        readonly listBudgets2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/budgets";
        };
        readonly createBudget2: {
            readonly method: "POST";
            readonly path: "/api/v2/finance/budgets";
        };
        readonly listEfficiency2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/efficiency";
        };
        readonly listEntityRollup2: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/entity-rollup";
        };
        readonly listSummary12: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/summary";
        };
        readonly listTrends6: {
            readonly method: "GET";
            readonly path: "/api/v2/finance/trends";
        };
        readonly listConsent2: {
            readonly method: "GET";
            readonly path: "/api/v2/gdpr/consent";
        };
        readonly createConsent2: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/consent";
        };
        readonly createDelete4: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/delete";
        };
        readonly createExport2: {
            readonly method: "POST";
            readonly path: "/api/v2/gdpr/export";
        };
        readonly listGoals2: {
            readonly method: "GET";
            readonly path: "/api/v2/goals";
        };
        readonly createGoal2: {
            readonly method: "POST";
            readonly path: "/api/v2/goals";
        };
        readonly deleteGoal2: (goal_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getGoal2: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listKeyResults2: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createKeyResult2: (goal_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteKeyResult2: (goal_id: number, kr_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateKeyResult2: (goal_id: number, kr_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres2: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listProjects3: (goal_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStatu15: (goal_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHealth8: {
            readonly method: "GET";
            readonly path: "/api/v2/health";
        };
        readonly listLive3: {
            readonly method: "GET";
            readonly path: "/api/v2/health/live";
        };
        readonly listReady2: {
            readonly method: "GET";
            readonly path: "/api/v2/health/ready";
        };
        readonly listWorker2: {
            readonly method: "GET";
            readonly path: "/api/v2/health/worker";
        };
        readonly createBooking3: {
            readonly method: "POST";
            readonly path: "/api/v2/housing/bookings";
        };
        readonly listMy3: {
            readonly method: "GET";
            readonly path: "/api/v2/housing/bookings/my";
        };
        readonly updateCancel2: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings5: {
            readonly method: "GET";
            readonly path: "/api/v2/housing/listings";
        };
        readonly getListing2: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAttendance2: {
            readonly method: "GET";
            readonly path: "/api/v2/hr/attendance";
        };
        readonly createCheckIn2: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/attendance/check-in";
        };
        readonly createUpsert4: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/attendance/upsert";
        };
        readonly getAttendance2: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCheckOut2: (record_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLeaveRequests2: {
            readonly method: "GET";
            readonly path: "/api/v2/hr/leave-requests";
        };
        readonly createLeaveRequest2: {
            readonly method: "POST";
            readonly path: "/api/v2/hr/leave-requests";
        };
        readonly getLeaveRequest2: (request_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLeaveRequest2: (request_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createCancel3: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReview4: (request_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listConversations2: {
            readonly method: "GET";
            readonly path: "/api/v2/inbox/conversations";
        };
        readonly updateAssign2: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateState2: (conversation_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUnified2: {
            readonly method: "GET";
            readonly path: "/api/v2/inbox/unified";
        };
        readonly listIntegrations2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations";
        };
        readonly createChat3: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/chat";
        };
        readonly listCodingDiscovery2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/coding-discovery";
        };
        readonly listModels2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/models";
        };
        readonly listStatus18: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/ai/status";
        };
        readonly createTest4: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/ai/test";
        };
        readonly createConnect16: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createDisconnect3: (provider: string) => {
            method: "POST";
            path: string;
        };
        readonly createConnect17: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/connect";
        };
        readonly listStatus19: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/calendly/status";
        };
        readonly createSync13: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/calendly/sync";
        };
        readonly createConnect18: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/connect";
        };
        readonly listStatus20: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/clickup/status";
        };
        readonly createSync14: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/clickup/sync";
        };
        readonly createConnect19: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/connect";
        };
        readonly createConnect20: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/connect";
        };
        readonly listStatus21: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/digitalocean/status";
        };
        readonly createSync15: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/digitalocean/sync";
        };
        readonly createConnect21: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/connect";
        };
        readonly listStatus22: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/elevenlabs/status";
        };
        readonly createTt2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/elevenlabs/tts";
        };
        readonly createConnect22: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/connect";
        };
        readonly createDiscoverInstallation2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/discover-installation";
        };
        readonly listStatus23: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/github/status";
        };
        readonly createSync16: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/github/sync";
        };
        readonly createConnect23: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/connect";
        };
        readonly listStatus24: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-analytics/status";
        };
        readonly createSync17: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-analytics/sync";
        };
        readonly listAuthUrl4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/auth-url";
        };
        readonly listEvents4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/google-calendar/events";
        };
        readonly createCallback2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/oauth/callback";
        };
        readonly createSync18: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/google-calendar/sync";
        };
        readonly listHealthDashboard2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/health-dashboard";
        };
        readonly createConnect24: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/connect";
        };
        readonly listStatus25: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/hubspot/status";
        };
        readonly createSync19: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/hubspot/sync";
        };
        readonly createConnect25: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/connect";
        };
        readonly createPublish2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/linkedin/publish";
        };
        readonly listStatus26: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/linkedin/status";
        };
        readonly createConnect26: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/connect";
        };
        readonly listStatus27: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/notion/status";
        };
        readonly createSync20: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/notion/sync";
        };
        readonly createConnect27: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/connect";
        };
        readonly createSearch2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/perplexity/search";
        };
        readonly listStatus28: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/perplexity/status";
        };
        readonly listSecurityCenter2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/security-center";
        };
        readonly listTrend4: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/security-center/trend";
        };
        readonly listSetupGuide2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/setup-guide";
        };
        readonly createConnect28: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/connect";
        };
        readonly createSend5: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/send";
        };
        readonly listStatus29: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/slack/status";
        };
        readonly createSync21: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/slack/sync";
        };
        readonly createConnect29: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/connect";
        };
        readonly listStatus30: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/stripe/status";
        };
        readonly createSync22: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/stripe/sync";
        };
        readonly createConnect30: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/supabase/connect";
        };
        readonly deleteDisconnect2: {
            readonly method: "DELETE";
            readonly path: "/api/v2/integrations/supabase/disconnect";
        };
        readonly listRealtimeStatus2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/realtime-status";
        };
        readonly listStatus31: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/supabase/status";
        };
        readonly listTokenHealth2: {
            readonly method: "GET";
            readonly path: "/api/v2/integrations/token-health";
        };
        readonly createTokenRotate2: (integration_type: string) => {
            method: "POST";
            path: string;
        };
        readonly createSendTest2: {
            readonly method: "POST";
            readonly path: "/api/v2/integrations/whatsapp/send-test";
        };
        readonly createDisconnect4: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createForceSync2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createResetError2: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createTest5: (integration_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listJobListings2: {
            readonly method: "GET";
            readonly path: "/api/v2/job-listings";
        };
        readonly createJobListing2: {
            readonly method: "POST";
            readonly path: "/api/v2/job-listings";
        };
        readonly deleteJobListing2: (listing_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getJobListing2: (listing_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateJobListing2: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listBookings5: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/bookings";
        };
        readonly updateBooking4: (booking_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listListings6: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/listings";
        };
        readonly createListing2: {
            readonly method: "POST";
            readonly path: "/api/v2/landlord/listings";
        };
        readonly updateListing4: (listing_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listPayouts4: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/payouts";
        };
        readonly createRequest4: {
            readonly method: "POST";
            readonly path: "/api/v2/landlord/payouts/request";
        };
        readonly listStats9: {
            readonly method: "GET";
            readonly path: "/api/v2/landlord/stats";
        };
        readonly createIngestSocial2: {
            readonly method: "POST";
            readonly path: "/api/v2/leads/ingest-social";
        };
        readonly listAdmin2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/certificates/admin";
        };
        readonly createIssue2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/certificates/issue";
        };
        readonly listMe5: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/certificates/me";
        };
        readonly getCertificate2: (certificate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses3: (company_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listCourses4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/courses";
        };
        readonly createCours2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/courses";
        };
        readonly deleteCours2: (course_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCours2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCours2: (course_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createApprove6: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createAssign2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listEffectiveness3: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createEscalate2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listLessons2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLesson2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteLesson2: (course_id: number, lesson_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getLesson2: (course_id: number, lesson_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateLesson2: (course_id: number, lesson_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuiz2: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuiz2: (course_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createSubmit2: (course_id: number, quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listStats10: (course_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listEffectiveness4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/effectiveness";
        };
        readonly listEnrollments2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/enrollments";
        };
        readonly createEnrollment2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/enrollments";
        };
        readonly updateEnrollment2: (enrollment_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createEnroll2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/gtp/enroll";
        };
        readonly listExport6: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/export";
        };
        readonly listMe6: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/me";
        };
        readonly listPrograms2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/gtp/programs";
        };
        readonly listInsights2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/insights";
        };
        readonly listHistory4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/interview/history";
        };
        readonly createStart2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/interview/start";
        };
        readonly getInterview2: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAnswer2: (session_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listReport4: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMyAssignments2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/my-assignments";
        };
        readonly createOutcome2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/outcomes";
        };
        readonly listQuestions2: (quiz_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createQuestion2: (quiz_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listRuns4: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/runs";
        };
        readonly listSignals2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/signals";
        };
        readonly createTrainWeekly2: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/train-weekly";
        };
        readonly createChat4: {
            readonly method: "POST";
            readonly path: "/api/v2/learning/tutor/chat";
        };
        readonly listSessions2: {
            readonly method: "GET";
            readonly path: "/api/v2/learning/tutor/sessions";
        };
        readonly listMessages2: (session_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createAvailability2: {
            readonly method: "POST";
            readonly path: "/api/v2/meetings/availability";
        };
        readonly deleteAvailability2: (slot_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getAvailability2: (user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listBookings6: {
            readonly method: "GET";
            readonly path: "/api/v2/meetings/bookings";
        };
        readonly createBooking4: {
            readonly method: "POST";
            readonly path: "/api/v2/meetings/bookings";
        };
        readonly createCancel4: (booking_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createConfirm2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/confirm";
        };
        readonly createDisable2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/disable";
        };
        readonly createSetup2: {
            readonly method: "POST";
            readonly path: "/api/v2/mfa/setup";
        };
        readonly listStatus32: {
            readonly method: "GET";
            readonly path: "/api/v2/mfa/status";
        };
        readonly listNotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/notes";
        };
        readonly createNote2: {
            readonly method: "POST";
            readonly path: "/api/v2/notes";
        };
        readonly deleteNote2: (note_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getNote2: (note_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateNote2: (note_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listNotifications2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications";
        };
        readonly listCount2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/count";
        };
        readonly listLive4: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/live";
        };
        readonly createMarkRead2: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/mark-read";
        };
        readonly listPreferences2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/preferences";
        };
        readonly updatePreference2: {
            readonly method: "PATCH";
            readonly path: "/api/v2/notifications/preferences";
        };
        readonly createRunAlert2: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/run-alerts";
        };
        readonly createSend6: {
            readonly method: "POST";
            readonly path: "/api/v2/notifications/send";
        };
        readonly listStream2: {
            readonly method: "GET";
            readonly path: "/api/v2/notifications/stream";
        };
        readonly listChecklists2: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/checklists";
        };
        readonly createChecklist2: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/checklists";
        };
        readonly getChecklist2: (checklist_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createCompleteStep2: (checklist_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates5: {
            readonly method: "GET";
            readonly path: "/api/v2/onboarding/templates";
        };
        readonly createTemplate5: {
            readonly method: "POST";
            readonly path: "/api/v2/onboarding/templates";
        };
        readonly deleteTemplate3: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTemplate2: (template_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTemplate3: (template_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listOrgs4: {
            readonly method: "GET";
            readonly path: "/api/v2/orgs";
        };
        readonly createOrg2: {
            readonly method: "POST";
            readonly path: "/api/v2/orgs";
        };
        readonly updateOrg2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listFeatureFlags4: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateFeatureFlag2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers4: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember4: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listProducts4: {
            readonly method: "GET";
            readonly path: "/api/v2/products";
        };
        readonly createProduct4: {
            readonly method: "POST";
            readonly path: "/api/v2/products";
        };
        readonly deleteProduct2: (product_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProduct2: (product_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProduct2: (product_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listProjects4: {
            readonly method: "GET";
            readonly path: "/api/v2/projects";
        };
        readonly createProject2: {
            readonly method: "POST";
            readonly path: "/api/v2/projects";
        };
        readonly deleteProject2: (project_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getProject2: (project_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateProject2: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateStatu16: (project_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listQuotes2: {
            readonly method: "GET";
            readonly path: "/api/v2/quotes";
        };
        readonly createQuote2: {
            readonly method: "POST";
            readonly path: "/api/v2/quotes";
        };
        readonly deleteLine2: (item_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly deleteQuote2: (quote_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getQuote2: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateQuote2: (quote_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listLines2: (quote_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createLine2: (quote_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listFunnel2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/funnel";
        };
        readonly listPlacementRate2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/placement-rate";
        };
        readonly listRecruiterProductivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/recruiter-productivity";
        };
        readonly listSlaCompliance2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/sla-compliance";
        };
        readonly listTimeToPlacement2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/analytics/time-to-placement";
        };
        readonly listCandidateDocuments2: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidate-documents";
        };
        readonly createCandidateDocument2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidate-documents";
        };
        readonly deleteCandidateDocument2: (document_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidateDocument2: (document_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidateDocument2: (document_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createExtract2: (document_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listCandidates4: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidates";
        };
        readonly createCandidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidates";
        };
        readonly createRoute4: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/candidates/route";
        };
        readonly listSearch5: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/candidates/search";
        };
        readonly deleteCandidate2: (candidate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getCandidate4: (candidate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCandidate2: (candidate_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createAssignOwner4: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createStage2: (candidate_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listPlacements4: {
            readonly method: "GET";
            readonly path: "/api/v2/recruitment/placements";
        };
        readonly createPlacement2: {
            readonly method: "POST";
            readonly path: "/api/v2/recruitment/placements";
        };
        readonly getPlacement2: (placement_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSearch6: {
            readonly method: "GET";
            readonly path: "/api/v2/search";
        };
        readonly createMessage2: {
            readonly method: "POST";
            readonly path: "/api/v2/settlement/assistant/message";
        };
        readonly listProgram2: {
            readonly method: "GET";
            readonly path: "/api/v2/settlement/program";
        };
        readonly listTasks5: {
            readonly method: "GET";
            readonly path: "/api/v2/settlement/tasks";
        };
        readonly getTask2: (task_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateComplete2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createWebhook3: {
            readonly method: "POST";
            readonly path: "/api/v2/stripe/webhook";
        };
        readonly listApplications6: {
            readonly method: "GET";
            readonly path: "/api/v2/study-abroad/applications";
        };
        readonly createApplication4: {
            readonly method: "POST";
            readonly path: "/api/v2/study-abroad/applications";
        };
        readonly getApplication2: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApplication2: (application_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps2: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createComplete2: (application_id: number, step_key: string) => {
            method: "POST";
            path: string;
        };
        readonly listMilestoneTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/study-abroad/milestone-templates";
        };
        readonly createMilestoneTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/study-abroad/milestone-templates";
        };
        readonly listTags2: {
            readonly method: "GET";
            readonly path: "/api/v2/tags";
        };
        readonly createTag2: {
            readonly method: "POST";
            readonly path: "/api/v2/tags";
        };
        readonly createMerge4: {
            readonly method: "POST";
            readonly path: "/api/v2/tags/merge";
        };
        readonly deleteTag2: (tag_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTag2: (tag_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks6: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks";
        };
        readonly createTask6: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks";
        };
        readonly listPrioritized2: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks/prioritized";
        };
        readonly listTemplates6: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks/templates";
        };
        readonly createTemplate6: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks/templates";
        };
        readonly createGenerate2: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks/templates/generate";
        };
        readonly deleteTemplate4: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTemplate4: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deleteTask4: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask4: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUniversityPartners2: {
            readonly method: "GET";
            readonly path: "/api/v2/university-partners";
        };
        readonly createUniversityPartner2: {
            readonly method: "POST";
            readonly path: "/api/v2/university-partners";
        };
        readonly deleteUniversityPartner2: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getUniversityPartner2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateUniversityPartner2: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUsers4: {
            readonly method: "GET";
            readonly path: "/api/v2/users";
        };
        readonly createUser2: {
            readonly method: "POST";
            readonly path: "/api/v2/users";
        };
        readonly createInvite4: {
            readonly method: "POST";
            readonly path: "/api/v2/users/invites";
        };
        readonly createTeamMember2: {
            readonly method: "POST";
            readonly path: "/api/v2/users/team-member";
        };
        readonly updateActive2: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createForceResetPassword2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createLinkEmployee2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeToken2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRole2: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listWebhooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks";
        };
        readonly createWebhook4: {
            readonly method: "POST";
            readonly path: "/api/v2/webhooks";
        };
        readonly listAll2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks/deliveries/all";
        };
        readonly listDeadLetter4: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks/deliveries/dead-letter";
        };
        readonly createReplay4: (delivery_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteWebhook2: (endpoint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getWebhook2: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWebhook2: (endpoint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDeliveries2: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTest6: (endpoint_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWorkspacePerms2: {
            readonly method: "GET";
            readonly path: "/api/v2/workspace-perms";
        };
        readonly listMy4: {
            readonly method: "GET";
            readonly path: "/api/v2/workspace-perms/my";
        };
        readonly getCheckAcces2: (workspace_id: number, user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMembers5: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember5: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember3: (workspace_id: number, user_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWorkspaces2: {
            readonly method: "GET";
            readonly path: "/api/v2/workspaces";
        };
        readonly createWorkspace2: {
            readonly method: "POST";
            readonly path: "/api/v2/workspaces";
        };
        readonly getWorkspace2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkspace2: (workspace_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers6: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember6: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember4: (workspace_id: number, member_user_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly stageGates: {
        readonly listStageGates: {
            readonly method: "GET";
            readonly path: "/api/v1/stage-gates";
        };
        readonly createStageGate: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates";
        };
        readonly createOverride: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates/overrides";
        };
        readonly listList: {
            readonly method: "GET";
            readonly path: "/api/v1/stage-gates/overrides/list";
        };
        readonly createValidate: {
            readonly method: "POST";
            readonly path: "/api/v1/stage-gates/validate";
        };
        readonly deleteStageGate: (gate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStageGate: (gate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStageGate: (gate_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listStageGates2: {
            readonly method: "GET";
            readonly path: "/api/v2/stage-gates";
        };
        readonly createStageGate2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates";
        };
        readonly createOverride2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates/overrides";
        };
        readonly listList2: {
            readonly method: "GET";
            readonly path: "/api/v2/stage-gates/overrides/list";
        };
        readonly createValidate2: {
            readonly method: "POST";
            readonly path: "/api/v2/stage-gates/validate";
        };
        readonly deleteStageGate2: (gate_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getStageGate2: (gate_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateStageGate2: (gate_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly stripeWebhooks: {
        readonly createWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/stripe/webhook";
        };
        readonly createWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/stripe/webhook";
        };
    };
    readonly studyAbroad: {
        readonly listApplications: {
            readonly method: "GET";
            readonly path: "/api/v1/study-abroad/applications";
        };
        readonly createApplication: {
            readonly method: "POST";
            readonly path: "/api/v1/study-abroad/applications";
        };
        readonly getApplication: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApplication: (application_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createComplete: (application_id: number, step_key: string) => {
            method: "POST";
            path: string;
        };
        readonly listMilestoneTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/study-abroad/milestone-templates";
        };
        readonly createMilestoneTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/study-abroad/milestone-templates";
        };
        readonly listApplications2: {
            readonly method: "GET";
            readonly path: "/api/v2/study-abroad/applications";
        };
        readonly createApplication2: {
            readonly method: "POST";
            readonly path: "/api/v2/study-abroad/applications";
        };
        readonly getApplication2: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateApplication2: (application_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listSteps2: (application_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createComplete2: (application_id: number, step_key: string) => {
            method: "POST";
            path: string;
        };
        readonly listMilestoneTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/study-abroad/milestone-templates";
        };
        readonly createMilestoneTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/study-abroad/milestone-templates";
        };
    };
    readonly subscriptions: {
        readonly listSubscriptions: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions";
        };
        readonly createSubscription: {
            readonly method: "POST";
            readonly path: "/api/v1/subscriptions";
        };
        readonly listMrrSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions/mrr-summary";
        };
        readonly listPlans: {
            readonly method: "GET";
            readonly path: "/api/v1/subscriptions/plans";
        };
        readonly createPlan: {
            readonly method: "POST";
            readonly path: "/api/v1/subscriptions/plans";
        };
        readonly getSubscription: (sub_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSubscription: (sub_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createCancel: (sub_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSubscriptions2: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions";
        };
        readonly createSubscription2: {
            readonly method: "POST";
            readonly path: "/api/v2/subscriptions";
        };
        readonly listMrrSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions/mrr-summary";
        };
        readonly listPlans2: {
            readonly method: "GET";
            readonly path: "/api/v2/subscriptions/plans";
        };
        readonly createPlan2: {
            readonly method: "POST";
            readonly path: "/api/v2/subscriptions/plans";
        };
        readonly getSubscription2: (sub_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSubscription2: (sub_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly createCancel2: (sub_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly superAdmin: {
        readonly listVerify: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/audit/verify";
        };
        readonly listOrgs: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/orgs";
        };
        readonly listReadiness: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/orgs/readiness";
        };
        readonly createAutonomyDryRun: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyGates: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAutonomyPolicy: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyPolicy: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHistory: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRollback: (org_id: number, version_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTemplate: (org_id: number, template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyRollout: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyRollout: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommandCenterConfig: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommandCenterConfig: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createReset: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deletePurge: (org_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listReadiness2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWhatsappWebhookFailures: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnlockAccount: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listUsers: {
            readonly method: "GET";
            readonly path: "/api/v1/admin/users";
        };
        readonly createGrantSuper: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeSuper: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listVerify2: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/audit/verify";
        };
        readonly listOrgs2: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/orgs";
        };
        readonly listReadiness3: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/orgs/readiness";
        };
        readonly createAutonomyDryRun2: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyGates2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listAutonomyPolicy2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyPolicy2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listHistory2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRollback2: (org_id: number, version_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listTemplates2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTemplate2: (org_id: number, template_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listAutonomyRollout2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateAutonomyRollout2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listCommandCenterConfig2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateCommandCenterConfig2: (org_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createReset2: (org_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deletePurge2: (org_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listReadiness4: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listTrend2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWhatsappWebhookFailures2: (org_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createUnlockAccount2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listUsers2: {
            readonly method: "GET";
            readonly path: "/api/v2/admin/users";
        };
        readonly createGrantSuper2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeSuper2: (user_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly surveys: {
        readonly listSurveys: {
            readonly method: "GET";
            readonly path: "/api/v1/surveys";
        };
        readonly createSurvey: {
            readonly method: "POST";
            readonly path: "/api/v1/surveys";
        };
        readonly deleteSurvey: (survey_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSurvey: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSurvey: (survey_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listNps: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listResponses: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRespons: (survey_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listSurveys2: {
            readonly method: "GET";
            readonly path: "/api/v2/surveys";
        };
        readonly createSurvey2: {
            readonly method: "POST";
            readonly path: "/api/v2/surveys";
        };
        readonly deleteSurvey2: (survey_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getSurvey2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateSurvey2: (survey_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listNps2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listResponses2: (survey_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createRespons2: (survey_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly system: {
        readonly listFeatureFlags: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-flags/";
        };
        readonly getCheck: (flag_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listGlobal: {
            readonly method: "GET";
            readonly path: "/api/v1/feature-flags/global";
        };
        readonly createInvalidateCache: {
            readonly method: "POST";
            readonly path: "/api/v1/feature-flags/invalidate-cache";
        };
        readonly listFeatureFlags2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-flags/";
        };
        readonly getCheck2: (flag_name: string) => {
            method: "GET";
            path: string;
        };
        readonly listGlobal2: {
            readonly method: "GET";
            readonly path: "/api/v2/feature-flags/global";
        };
        readonly createInvalidateCache2: {
            readonly method: "POST";
            readonly path: "/api/v2/feature-flags/invalidate-cache";
        };
    };
    readonly tags: {
        readonly listTags: {
            readonly method: "GET";
            readonly path: "/api/v1/tags";
        };
        readonly createTag: {
            readonly method: "POST";
            readonly path: "/api/v1/tags";
        };
        readonly createMerge: {
            readonly method: "POST";
            readonly path: "/api/v1/tags/merge";
        };
        readonly deleteTag: (tag_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTag: (tag_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTags2: {
            readonly method: "GET";
            readonly path: "/api/v2/tags";
        };
        readonly createTag2: {
            readonly method: "POST";
            readonly path: "/api/v2/tags";
        };
        readonly createMerge2: {
            readonly method: "POST";
            readonly path: "/api/v2/tags/merge";
        };
        readonly deleteTag2: (tag_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTag2: (tag_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly tasks: {
        readonly listTasks: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks";
        };
        readonly createTask: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks";
        };
        readonly listPrioritized: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks/prioritized";
        };
        readonly listTemplates: {
            readonly method: "GET";
            readonly path: "/api/v1/tasks/templates";
        };
        readonly createTemplate: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks/templates";
        };
        readonly createGenerate: {
            readonly method: "POST";
            readonly path: "/api/v1/tasks/templates/generate";
        };
        readonly deleteTemplate: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTemplate: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deleteTask: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTasks2: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks";
        };
        readonly createTask2: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks";
        };
        readonly listPrioritized2: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks/prioritized";
        };
        readonly listTemplates2: {
            readonly method: "GET";
            readonly path: "/api/v2/tasks/templates";
        };
        readonly createTemplate2: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks/templates";
        };
        readonly createGenerate2: {
            readonly method: "POST";
            readonly path: "/api/v2/tasks/templates/generate";
        };
        readonly deleteTemplate2: (template_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTemplate2: (template_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly deleteTask2: (task_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTask2: (task_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly teamQuotas: {
        readonly listTeamQuotas: {
            readonly method: "GET";
            readonly path: "/api/v1/team-quotas";
        };
        readonly createTeamQuota: {
            readonly method: "POST";
            readonly path: "/api/v1/team-quotas";
        };
        readonly listProgress: {
            readonly method: "GET";
            readonly path: "/api/v1/team-quotas/progress";
        };
        readonly deleteTeamQuota: (quota_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTeamQuota: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listTeamQuotas2: {
            readonly method: "GET";
            readonly path: "/api/v2/team-quotas";
        };
        readonly createTeamQuota2: {
            readonly method: "POST";
            readonly path: "/api/v2/team-quotas";
        };
        readonly listProgress2: {
            readonly method: "GET";
            readonly path: "/api/v2/team-quotas/progress";
        };
        readonly deleteTeamQuota2: (quota_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly updateTeamQuota2: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly updateProgres2: (quota_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly territories: {
        readonly listTerritories: {
            readonly method: "GET";
            readonly path: "/api/v1/territories";
        };
        readonly createTerritory: {
            readonly method: "POST";
            readonly path: "/api/v1/territories";
        };
        readonly deleteTerritory: (territory_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTerritory: (territory_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTerritory: (territory_id: number) => {
            method: "PUT";
            path: string;
        };
        readonly listTerritories2: {
            readonly method: "GET";
            readonly path: "/api/v2/territories";
        };
        readonly createTerritory2: {
            readonly method: "POST";
            readonly path: "/api/v2/territories";
        };
        readonly deleteTerritory2: (territory_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getTerritory2: (territory_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateTerritory2: (territory_id: number) => {
            method: "PUT";
            path: string;
        };
    };
    readonly territoryAssignments: {
        readonly listTerritoryAssignments: {
            readonly method: "GET";
            readonly path: "/api/v1/territory-assignments";
        };
        readonly createTerritoryAssignment: {
            readonly method: "POST";
            readonly path: "/api/v1/territory-assignments";
        };
        readonly listCoverage: {
            readonly method: "GET";
            readonly path: "/api/v1/territory-assignments/coverage";
        };
        readonly deleteTerritoryAssignment: (assignment_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listTerritoryAssignments2: {
            readonly method: "GET";
            readonly path: "/api/v2/territory-assignments";
        };
        readonly createTerritoryAssignment2: {
            readonly method: "POST";
            readonly path: "/api/v2/territory-assignments";
        };
        readonly listCoverage2: {
            readonly method: "GET";
            readonly path: "/api/v2/territory-assignments/coverage";
        };
        readonly deleteTerritoryAssignment2: (assignment_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly universityPartners: {
        readonly listUniversityPartners: {
            readonly method: "GET";
            readonly path: "/api/v1/university-partners";
        };
        readonly createUniversityPartner: {
            readonly method: "POST";
            readonly path: "/api/v1/university-partners";
        };
        readonly deleteUniversityPartner: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getUniversityPartner: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateUniversityPartner: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUniversityPartners2: {
            readonly method: "GET";
            readonly path: "/api/v2/university-partners";
        };
        readonly createUniversityPartner2: {
            readonly method: "POST";
            readonly path: "/api/v2/university-partners";
        };
        readonly deleteUniversityPartner2: (partner_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getUniversityPartner2: (partner_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateUniversityPartner2: (partner_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly userActivity: {
        readonly listUserActivity: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity";
        };
        readonly createUserActivity: {
            readonly method: "POST";
            readonly path: "/api/v1/user-activity";
        };
        readonly listHeatmap: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity/heatmap";
        };
        readonly listTopFeatures: {
            readonly method: "GET";
            readonly path: "/api/v1/user-activity/top-features";
        };
        readonly listUserActivity2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity";
        };
        readonly createUserActivity2: {
            readonly method: "POST";
            readonly path: "/api/v2/user-activity";
        };
        readonly listHeatmap2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity/heatmap";
        };
        readonly listTopFeatures2: {
            readonly method: "GET";
            readonly path: "/api/v2/user-activity/top-features";
        };
    };
    readonly users: {
        readonly listUsers: {
            readonly method: "GET";
            readonly path: "/api/v1/users";
        };
        readonly createUser: {
            readonly method: "POST";
            readonly path: "/api/v1/users";
        };
        readonly createInvite: {
            readonly method: "POST";
            readonly path: "/api/v1/users/invites";
        };
        readonly createTeamMember: {
            readonly method: "POST";
            readonly path: "/api/v1/users/team-member";
        };
        readonly updateActive: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createForceResetPassword: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createLinkEmployee: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeToken: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRole: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listUsers2: {
            readonly method: "GET";
            readonly path: "/api/v2/users";
        };
        readonly createUser2: {
            readonly method: "POST";
            readonly path: "/api/v2/users";
        };
        readonly createInvite2: {
            readonly method: "POST";
            readonly path: "/api/v2/users/invites";
        };
        readonly createTeamMember2: {
            readonly method: "POST";
            readonly path: "/api/v2/users/team-member";
        };
        readonly updateActive2: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly createForceResetPassword2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createLinkEmployee2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createRevokeToken2: (user_id: number) => {
            method: "POST";
            path: string;
        };
        readonly updateRole2: (user_id: number) => {
            method: "PATCH";
            path: string;
        };
    };
    readonly webAuth: {
        readonly createLogin: {
            readonly method: "POST";
            readonly path: "/web/login";
        };
        readonly createLogout: {
            readonly method: "POST";
            readonly path: "/web/logout";
        };
        readonly listSession: {
            readonly method: "GET";
            readonly path: "/web/session";
        };
    };
    readonly webChat: {
        readonly createChat: {
            readonly method: "POST";
            readonly path: "/web/agents/chat";
        };
        readonly createDailyRun: {
            readonly method: "POST";
            readonly path: "/web/ops/daily-run";
        };
        readonly createPushDecision: {
            readonly method: "POST";
            readonly path: "/web/strategy/push-decision";
        };
        readonly createRule: {
            readonly method: "POST";
            readonly path: "/web/strategy/rules";
        };
    };
    readonly webhookDeliveries: {
        readonly listWebhookDeliveries: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-deliveries";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-deliveries/stats";
        };
        readonly listWebhookDeliveries2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-deliveries";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-deliveries/stats";
        };
    };
    readonly webhookEvents: {
        readonly listWebhookEvents: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-events";
        };
        readonly createWebhookEvent: {
            readonly method: "POST";
            readonly path: "/api/v1/webhook-events";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-events/stats";
        };
        readonly getWebhookEvent: (event_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createProces: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReplay: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWebhookEvents2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-events";
        };
        readonly createWebhookEvent2: {
            readonly method: "POST";
            readonly path: "/api/v2/webhook-events";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-events/stats";
        };
        readonly getWebhookEvent2: (event_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createProces2: (event_id: number) => {
            method: "POST";
            path: string;
        };
        readonly createReplay2: (event_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly webhookRetries: {
        readonly listWebhookRetries: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries";
        };
        readonly createWebhookRetry: {
            readonly method: "POST";
            readonly path: "/api/v1/webhook-retries";
        };
        readonly listPending: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries/pending";
        };
        readonly listStats: {
            readonly method: "GET";
            readonly path: "/api/v1/webhook-retries/stats";
        };
        readonly listWebhookRetries2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries";
        };
        readonly createWebhookRetry2: {
            readonly method: "POST";
            readonly path: "/api/v2/webhook-retries";
        };
        readonly listPending2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries/pending";
        };
        readonly listStats2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhook-retries/stats";
        };
    };
    readonly webhooks: {
        readonly listWebhooks: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks";
        };
        readonly createWebhook: {
            readonly method: "POST";
            readonly path: "/api/v1/webhooks";
        };
        readonly listAll: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks/deliveries/all";
        };
        readonly listDeadLetter: {
            readonly method: "GET";
            readonly path: "/api/v1/webhooks/deliveries/dead-letter";
        };
        readonly createReplay: (delivery_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteWebhook: (endpoint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getWebhook: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWebhook: (endpoint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDeliveries: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTest: (endpoint_id: number) => {
            method: "POST";
            path: string;
        };
        readonly listWebhooks2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks";
        };
        readonly createWebhook2: {
            readonly method: "POST";
            readonly path: "/api/v2/webhooks";
        };
        readonly listAll2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks/deliveries/all";
        };
        readonly listDeadLetter2: {
            readonly method: "GET";
            readonly path: "/api/v2/webhooks/deliveries/dead-letter";
        };
        readonly createReplay2: (delivery_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteWebhook2: (endpoint_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly getWebhook2: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWebhook2: (endpoint_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listDeliveries2: (endpoint_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createTest2: (endpoint_id: number) => {
            method: "POST";
            path: string;
        };
    };
    readonly winLoss: {
        readonly listWinLoss: {
            readonly method: "GET";
            readonly path: "/api/v1/win-loss";
        };
        readonly createWinLos: {
            readonly method: "POST";
            readonly path: "/api/v1/win-loss";
        };
        readonly listAnalytics: {
            readonly method: "GET";
            readonly path: "/api/v1/win-loss/analytics";
        };
        readonly getTopReason: (outcome: string) => {
            method: "GET";
            path: string;
        };
        readonly getWinLos: (record_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listWinLoss2: {
            readonly method: "GET";
            readonly path: "/api/v2/win-loss";
        };
        readonly createWinLos2: {
            readonly method: "POST";
            readonly path: "/api/v2/win-loss";
        };
        readonly listAnalytics2: {
            readonly method: "GET";
            readonly path: "/api/v2/win-loss/analytics";
        };
        readonly getTopReason2: (outcome: string) => {
            method: "GET";
            path: string;
        };
        readonly getWinLos2: (record_id: number) => {
            method: "GET";
            path: string;
        };
    };
    readonly workflowObservability: {
        readonly listAiPlans: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/ai-plans";
        };
        readonly listApprovals: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/approvals";
        };
        readonly listFailures: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/failures";
        };
        readonly listRuns: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/runs";
        };
        readonly getRun: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary: {
            readonly method: "GET";
            readonly path: "/api/v1/workflow-observability/summary";
        };
        readonly listAiPlans2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/ai-plans";
        };
        readonly listApprovals2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/approvals";
        };
        readonly listFailures2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/failures";
        };
        readonly listRuns2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/runs";
        };
        readonly getRun2: (workflow_run_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listSummary2: {
            readonly method: "GET";
            readonly path: "/api/v2/workflow-observability/summary";
        };
    };
    readonly workspacePermissions: {
        readonly listWorkspacePerms: {
            readonly method: "GET";
            readonly path: "/api/v1/workspace-perms";
        };
        readonly listMy: {
            readonly method: "GET";
            readonly path: "/api/v1/workspace-perms/my";
        };
        readonly getCheckAcces: (workspace_id: number, user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMembers: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember: (workspace_id: number, user_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWorkspacePerms2: {
            readonly method: "GET";
            readonly path: "/api/v2/workspace-perms";
        };
        readonly listMy2: {
            readonly method: "GET";
            readonly path: "/api/v2/workspace-perms/my";
        };
        readonly getCheckAcces2: (workspace_id: number, user_id: number) => {
            method: "GET";
            path: string;
        };
        readonly listMembers2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember2: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember2: (workspace_id: number, user_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
    readonly workspaces: {
        readonly listWorkspaces: {
            readonly method: "GET";
            readonly path: "/api/v1/workspaces";
        };
        readonly createWorkspace: {
            readonly method: "POST";
            readonly path: "/api/v1/workspaces";
        };
        readonly getWorkspace: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkspace: (workspace_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember: (workspace_id: number, member_user_id: number) => {
            method: "DELETE";
            path: string;
        };
        readonly listWorkspaces2: {
            readonly method: "GET";
            readonly path: "/api/v2/workspaces";
        };
        readonly createWorkspace2: {
            readonly method: "POST";
            readonly path: "/api/v2/workspaces";
        };
        readonly getWorkspace2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly updateWorkspace2: (workspace_id: number) => {
            method: "PATCH";
            path: string;
        };
        readonly listMembers2: (workspace_id: number) => {
            method: "GET";
            path: string;
        };
        readonly createMember2: (workspace_id: number) => {
            method: "POST";
            path: string;
        };
        readonly deleteMember2: (workspace_id: number, member_user_id: number) => {
            method: "DELETE";
            path: string;
        };
    };
};
export type Endpoints = typeof endpoints;
