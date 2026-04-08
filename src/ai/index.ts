/**
 * EmpireO AI SDK — shared client for all products.
 *
 * Usage:
 *   import { createAIClient } from "@empire/sdk/ai";
 *   const ai = createAIClient({ product: "empireo" }); // or "eoe" or "recruitment"
 *   const courses = await ai.courses.search("Computer Science in UK");
 *   const jobs = await ai.jobs.search("React developer London");
 */

export type Product = "empireo" | "eoe" | "recruitment";

export interface AIClientConfig {
  baseUrl?: string;
  product: Product;
  userId?: string;
}

export interface CourseSearchParams {
  query: string;
  country?: string;
  field_of_study?: string;
  budget_max?: number;
  limit?: number;
}

export interface JobSearchParams {
  query: string;
  skills?: string[];
  location?: string;
  salary_min?: number;
  remote_ok?: boolean;
  limit?: number;
}

export interface ResumeGenerateParams {
  personal_info: Record<string, string>;
  experience: Record<string, string>[];
  education: Record<string, string>[];
  skills: string[];
  template?: string;
}

export interface ChatParams {
  message: string;
  session_id?: string;
  context?: Record<string, unknown>;
}

// Product-specific feature flags
const PRODUCT_FEATURES: Record<Product, string[]> = {
  empireo: ["courses", "jobs", "resume", "chat", "interview", "scholarships", "visa", "career"],
  eoe: ["courses", "chat", "scholarships", "visa", "career"],
  recruitment: ["jobs", "resume", "chat", "interview", "career"],
};

class AICoursesClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async search(params: CourseSearchParams | string) {
    const body = typeof params === "string" ? { query: params, limit: 20 } : params;
    return this._post("/ai/courses/search", body);
  }

  async match(studentProfile: Record<string, unknown>) {
    return this._post("/ai/courses/match", { student_profile: studentProfile, query: "match", limit: 20 });
  }

  async suggest(query: string) {
    return this._get(`/ai/courses/suggest?query=${encodeURIComponent(query)}`);
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  private async _get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.json();
  }
}

class AIJobsClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async search(params: JobSearchParams | string) {
    const body = typeof params === "string" ? { query: params, limit: 20 } : params;
    return this._post("/ai/jobs/search", body);
  }

  async autoApply(jobId: string, candidateProfile: Record<string, unknown>) {
    return this._post("/ai/jobs/auto-apply", { job_id: jobId, candidate_profile: candidateProfile });
  }

  async insights(jobId: string) {
    return this._get(`/ai/jobs/insights/${jobId}`);
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  private async _get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.json();
  }
}

class AIResumeClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async generate(params: ResumeGenerateParams) {
    return this._post("/ai/resume/generate", params);
  }

  async optimize(resumeId: string, jobDescription: string) {
    return this._post("/ai/resume/optimize", { resume_id: resumeId, job_description: jobDescription });
  }

  async exportPdf(resumeId: string): Promise<Blob> {
    const res = await fetch(`${this.baseUrl}/ai/resume/export/${resumeId}/pdf`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.blob();
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }
}

class AIChatClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async send(params: ChatParams) {
    return this._post("/ai/chat/message", { ...params, user_id: this.userId });
  }

  stream(params: ChatParams): EventSource | null {
    if (typeof EventSource === "undefined") return null;
    // For streaming, use fetch with ReadableStream (see AIChat component)
    return null;
  }

  async history(sessionId: string, limit = 50) {
    return this._get(`/ai/chat/history/${sessionId}?limit=${limit}`);
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  private async _get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.json();
  }
}

class AIInterviewClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async generateQuestions(company: string, role: string, level = "mid") {
    return this._post("/ai/interview/questions", { company, role, experience_level: level });
  }

  async evaluate(question: string, answer: string, role: string, company: string) {
    return this._post("/ai/interview/evaluate", { question, answer, role, company });
  }

  async companyPrep(company: string, role: string) {
    return this._get(`/ai/interview/prep/${encodeURIComponent(company)}?role=${encodeURIComponent(role)}`);
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  private async _get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.json();
  }
}

class AIScholarshipClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async search(params: Record<string, unknown>) {
    return this._post("/ai/scholarships/search", params);
  }

  async draftApplication(scholarshipName: string, profile: Record<string, unknown>) {
    return this._post("/ai/scholarships/apply/draft", { scholarship_name: scholarshipName, student_profile: profile });
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }
}

class AIVisaClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async guide(nationality: string, destination: string, purpose = "study") {
    return this._post("/ai/visa/guide", { nationality, destination, purpose });
  }

  async reviewDocuments(docs: string[], visaType: string, destination: string) {
    return this._post("/ai/visa/review-documents", { documents_submitted: docs, visa_type: visaType, destination });
  }

  async timeline(nationality: string, destination: string, courseStart: string) {
    return this._post("/ai/visa/timeline", { nationality, destination, course_start: courseStart });
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }
}

class AICareerClient {
  constructor(private baseUrl: string, private product: Product, private userId: string) {}

  async plan(params: Record<string, unknown>) {
    return this._post("/ai/career/plan", params);
  }

  async salary(role: string, location?: string, experienceYears = 0) {
    return this._get(`/ai/career/salary/${encodeURIComponent(role)}?location=${location || ""}&experience_years=${experienceYears}`);
  }

  private async _post(path: string, body: unknown) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Product": this.product, "X-User-ID": this.userId },
      body: JSON.stringify(body),
    });
    return res.json();
  }

  private async _get(path: string) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      headers: { "X-Product": this.product, "X-User-ID": this.userId },
    });
    return res.json();
  }
}

/** Main AI client — use createAIClient() to instantiate */
export class EmpireAIClient {
  readonly courses: AICoursesClient;
  readonly jobs: AIJobsClient;
  readonly resume: AIResumeClient;
  readonly chat: AIChatClient;
  readonly interview: AIInterviewClient;
  readonly scholarships: AIScholarshipClient;
  readonly visa: AIVisaClient;
  readonly career: AICareerClient;
  readonly features: string[];

  constructor(config: AIClientConfig) {
    const baseUrl = config.baseUrl || process.env.NEXT_PUBLIC_AI_ENGINE_URL || "https://ai.empireo.ai/api/v1";
    const userId = config.userId || "anonymous";
    const product = config.product;

    this.features = PRODUCT_FEATURES[product];
    this.courses = new AICoursesClient(baseUrl, product, userId);
    this.jobs = new AIJobsClient(baseUrl, product, userId);
    this.resume = new AIResumeClient(baseUrl, product, userId);
    this.chat = new AIChatClient(baseUrl, product, userId);
    this.interview = new AIInterviewClient(baseUrl, product, userId);
    this.scholarships = new AIScholarshipClient(baseUrl, product, userId);
    this.visa = new AIVisaClient(baseUrl, product, userId);
    this.career = new AICareerClient(baseUrl, product, userId);
  }

  /** Check if a feature is available for this product */
  hasFeature(feature: string): boolean {
    return this.features.includes(feature);
  }
}

/** Create an AI client for a specific product */
export function createAIClient(config: AIClientConfig): EmpireAIClient {
  return new EmpireAIClient(config);
}
