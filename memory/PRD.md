# QASoftLabs — Product Requirements

## Original Problem Statement
Build a world-class modern enterprise SaaS-style website for an independent QA Automation & Functional Testing consulting brand named QASoftLabs. Premium global QA automation consultancy feel — clean light theme, emerald green accents, glassmorphism, modern SaaS aesthetics. React + Tailwind + Framer Motion + shadcn/ui + Lucide.

## Architecture
- **Frontend**: React 19 + Tailwind + Framer Motion + sonner toasts. Single-page composition in `pages/Landing.jsx` with section components in `components/site/*`.
- **Backend**: FastAPI + Motor (MongoDB). All routes prefixed with `/api`. Collections: `contact_submissions`, `consultations`.

## User Personas
- Engineering Managers / CTOs evaluating QA automation partners
- Product leads needing release-confidence consulting
- Founders shipping enterprise software (BFSI, logistics, e-commerce)

## Core Requirements (static)
- Premium light-theme marketing site (no dark base, emerald accents)
- Sticky glass navbar with 7 anchor links + Book Consultation CTA
- Hero with animated dashboard mock
- 10 service cards
- Architecture pillars: Targets, Levels, Objectives, Execution
- 10 framework engineering cards
- 6 industry verticals
- 4 portfolio case studies with metrics
- Contact form posting to /api/contact
- Consultation modal posting to /api/consultation
- Premium footer

## Implemented (2026-12)
- Backend: GET /api/, GET /api/health, POST/GET /api/contact, POST/GET /api/consultation
- Frontend: Navbar, Hero, Services, Architecture, Frameworks, Industries, Portfolio, Contact, Footer, ConsultationDialog
- Outfit + DM Sans + JetBrains Mono fonts
- Framer Motion scroll-reveal animations
- Mobile-responsive nav with toggle
- Sonner toasts for form feedback
- Testing agent: 100% backend (10/10 pytest), 100% frontend flows

## Prioritized Backlog
### P1
- Email notifications on contact / consultation submission (Resend integration)
- Real client logos / testimonials section
- Admin view to manage submissions

### P2
- Blog / Insights section
- Case study detail pages with deep-link routing
- Multi-language (i18n)
- SEO meta tags + OpenGraph
- Analytics (PostHog / Plausible)

## Next Tasks
1. Collect real contact details (email, WhatsApp, LinkedIn) from client
2. Optional: integrate Resend for email notifications
3. Optional: replace placeholder portfolio metrics with real engagements
