# QASoftLabs Website — Product Requirements

## Original Problem Statement
Enhance existing QASoftLabs website (https://github.com/sanjay021085/QASoftLabs.git) to position it as a Quality Assurance, Automation Testing, Manual Testing, Consulting and Engineering Service Provider — NOT a freelancer/staffing site. Premium enterprise-grade appearance.

## Constraints
- Do not display owner photo or personal phone number publicly.
- WhatsApp number 919925123492 is allowed only in wa.me deep-links (not visible text).
- Business email: sanjay.businesstech@gmail.com (visible).
- Preserve existing branding, color scheme, animations.

## Tech Stack
- Frontend: React 19 + craco + Tailwind + framer-motion + lucide-react + sonner
- Backend: FastAPI + Motor (MongoDB) + optional Resend email
- Chatbot: rule-based (intentional — no LLM integration)

## Implemented (May 31, 2026)
- Hero: New headline "End-to-End Quality Assurance and Automation Engineering Services" + subheadline + CTAs "Book Free Consultation" / "Explore Services"
- NEW: WhyChooseUs section (Industry / Testing / Automation / Framework pillars)
- Services: 8 cards (Functional, API, UI, Database, Integration, Regression, E2E, Release Validation)
- NEW: QAConsulting section (5 consulting offerings + CTA card)
- NEW: AutomationEngineering section (UI / API / AI Assisted Test Design / Defect Analysis / Regression Analysis)
- NEW: FrameworkEngineering section (Design / Review / Enhancement / Re-Engineering + 3 framework types)
- IdealEngagements rebranded to "Flexible QA Engagement Models" (6 services + 6 engagement options + 6 benefit cards)
- Architecture: preserved
- HowIWork (Process): 8 steps
- NEW: Deliverables section (8 artefacts)
- Industries: 7 cards (Banking, Finance, Healthcare, Logistics, Manufacturing, Enterprise Applications, SaaS Platforms)
- Contact: Name + Company + Email + Requirement (select) + Message; phone removed from display
- AIAssistant rebranded to "QASoftLabs QA Copilot" with eye-inspired animated avatar (blinking + pupil movement); lead fallback form posts to /api/contact when bot does not know an answer
- Footer: phone reference removed, sectional anchor links
- Founder section REMOVED from Landing (no personal photo)
- Navbar: "Book Free Consultation" button + updated nav links

## Backend Endpoints
- GET /api/ -> service info
- GET /api/health
- POST /api/contact (name, email, company?, message)
- GET /api/contact
- POST /api/consultation (name, email, company?, phone?, preferred_date?, project_brief)
- GET /api/consultation

## Testing
- 10/10 backend pytest cases pass
- All frontend sections render in correct order
- QA Copilot eye avatar, panel, lead form all functional
- Contact form submission verified end-to-end
- Mobile (390x844) responsiveness verified
- Zero JS console errors
- Phone number verified absent from visible text

## Future / Backlog (P1/P2)
- (Optional) Replace rule-based chatbot with Emergent LLM key for more dynamic responses
- (Minor) Migrate FastAPI @app.on_event('shutdown') to lifespan context manager
- (Enhancement) Newsletter capture, downloadable case studies, dedicated /portfolio page with detailed case data
