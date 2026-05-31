# QASoftLabs

> Modern QA Automation & Functional Testing consultancy — a premium, AI-assisted marketing site built with React, Tailwind, Framer Motion, FastAPI and MongoDB.

[![Made with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Overview

QASoftLabs is the public marketing & lead-capture site for an independent QA Automation consulting brand. It is built as a **light-theme, emerald-accented, premium SaaS-style** experience with a strong focus on:

- enterprise-grade visual polish (glassmorphism, animated pipelines, mesh gradients)
- trust-building content (services, architecture, frameworks, industries, portfolio)
- intelligent micro-interactions (rotating prompts, live activity badges, cursor spotlight)
- a built-in **QA Copilot** — a smart predefined chatbot covering 16 intent categories
- contact + consultation funnels with Resend-powered email notifications

> Live preview: see screenshots below or run locally.

---

## ✨ Features

- **Premium light theme** — white background, emerald accents, mint gradients, no dark base.
- **Sticky glass navbar** with mobile drawer and smooth scroll links.
- **Animated hero** with engineering-dashboard mock, SVG pipeline, rotating intelligent prompts, floating activity pills.
- **9 service cards** (3 × 3 grid) with cursor-spotlight hover effects.
- **Functional Testing Architecture** section with 4 pillars and a rope-style connected 5-phase process.
- **Framework Engineering** grid (10 cards with code-mono tags).
- **How I Work** — 4-step timeline.
- **Studio / Founder** section with premium photo treatment and engineering metadata.
- **Industries** — image-based cards with overlay narrative.
- **Portfolio** — 4 case studies with credible (non-inflated) technical outcomes.
- **Contact form** + **Consultation modal** — both persist to MongoDB and trigger Resend emails.
- **QA Copilot AI Assistant** — floating, pulsing, with rotating prompts, smart predefined replies, and follow-up chips.
- **Fully responsive**, accessible, and built on Shadcn UI primitives + Lucide icons.

---

## Tech Stack

| Layer        | Tech |
|--------------|------|
| Frontend     | React 19, React Router 7, Tailwind CSS 3, Framer Motion 12, Shadcn UI, Lucide React, Sonner |
| Backend      | FastAPI, Motor (async MongoDB), Pydantic v2, Resend SDK |
| Database     | MongoDB |
| Tooling      | Yarn, CRACO, ESLint, Ruff, Pytest |
| Integrations | Resend (transactional email) |

---

## Folder Structure

```
QASoftLabs/
├── backend/
│   ├── server.py              # FastAPI app, all /api routes, Resend email helper
│   ├── requirements.txt       # Python dependencies
│   ├── .env.example           # Copy to .env and fill in
│   └── tests/                 # Pytest API tests
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js             # Router root
│   │   ├── App.css            # Component-specific styles
│   │   ├── index.css          # Tailwind + custom utilities + animations
│   │   ├── index.js           # ReactDOM entry
│   │   ├── pages/
│   │   │   └── Landing.jsx    # Composes all sections
│   │   ├── components/
│   │   │   ├── site/          # ALL marketing-site sections live here
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── LiveHeroOverlay.jsx
│   │   │   │   ├── IdealEngagements.jsx
│   │   │   │   ├── Services.jsx          (also exports SectionHeader)
│   │   │   │   ├── Architecture.jsx
│   │   │   │   ├── Frameworks.jsx
│   │   │   │   ├── HowIWork.jsx
│   │   │   │   ├── Founder.jsx
│   │   │   │   ├── Industries.jsx
│   │   │   │   ├── Portfolio.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── ConsultationDialog.jsx
│   │   │   │   └── AIAssistant.jsx
│   │   │   └── ui/            # Shadcn UI primitives
│   │   ├── lib/
│   │   │   └── events.js      # openConsultation() event bus
│   │   └── hooks/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── craco.config.js
│   └── .env.example
├── .gitignore
├── README.md
└── DEPLOYMENT.md
```

---

## Quick Start (Local)

### Prerequisites

- Node.js ≥ 18, Yarn 1.22
- Python ≥ 3.11
- MongoDB running locally (or a connection string to MongoDB Atlas)

### 1. Clone

```bash
git clone https://github.com/sanjay021085/QASoftLabs.git
cd QASoftLabs
```

### 2. Backend

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env
# edit .env — set MONGO_URL, DB_NAME, RESEND_API_KEY (optional)

uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Backend runs at **http://localhost:8001** with all routes prefixed `/api`.

Verify: `curl http://localhost:8001/api/`

### 3. Frontend

```bash
cd ../frontend
yarn install

cp .env.example .env
# edit .env — REACT_APP_BACKEND_URL=http://localhost:8001

yarn start
```

Frontend runs at **http://localhost:3000**.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable             | Required | Description |
|----------------------|----------|-------------|
| `MONGO_URL`          | yes      | MongoDB connection string |
| `DB_NAME`            | yes      | MongoDB database name |
| `CORS_ORIGINS`       | yes      | Comma-separated allowed origins, or `*` |
| `RESEND_API_KEY`     | no       | Resend API key. Leave empty to disable emails. |
| `SENDER_EMAIL`       | no       | From-address. Default: `onboarding@resend.dev` |
| `NOTIFICATION_EMAIL` | no       | Where to send contact/consultation notifications |

### Frontend (`frontend/.env`)

| Variable                | Required | Description |
|-------------------------|----------|-------------|
| `REACT_APP_BACKEND_URL` | yes      | Backend base URL — **no** trailing `/api` |
| `WDS_SOCKET_PORT`       | no       | Dev-server websocket port (cloud previews) |

> All real `.env` files are gitignored. Only `.env.example` files are committed.

---

## API Routes

| Method | Path                | Purpose |
|--------|---------------------|---------|
| GET    | `/api/`             | Health + service info |
| GET    | `/api/health`       | Health check with timestamp |
| POST   | `/api/contact`      | Submit contact form (fires Resend email if configured) |
| GET    | `/api/contact`      | List recent contact submissions |
| POST   | `/api/consultation` | Submit consultation request (fires Resend email if configured) |
| GET    | `/api/consultation` | List consultation requests |

---

## Customising Content

The site is intentionally simple to edit. Each section lives in `frontend/src/components/site/` as a single self-contained file. To update content, edit the top of the file — most components keep their data in a local `const` array at the top.

Examples:
- **Services list** → edit `services` array at the top of `Services.jsx`.
- **Portfolio case studies** → edit `projects` array in `Portfolio.jsx`.
- **Industries** → edit `industries` array in `Industries.jsx`.
- **QA Copilot intents** → edit `generateReply()` in `AIAssistant.jsx`.
- **Hero rotating prompts** → edit `ROTATING_HINTS` in `Hero.jsx`.

Real contact details (email, WhatsApp, GitHub) are inlined in `Contact.jsx`, `Footer.jsx`, and `AIAssistant.jsx`.

---

## Build for Production

### Frontend

```bash
cd frontend
yarn build
# output: frontend/build/
```

### Backend

The backend is a standard FastAPI app — run with any ASGI server:

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001
# or use gunicorn + uvicorn workers:
# gunicorn server:app -w 4 -k uvicorn.workers.UvicornWorker -b 0.0.0.0:8001
```

---

## Deployment

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for detailed instructions covering:

- **Vercel** (recommended for frontend)
- **Netlify** (alternative for frontend)
- **Render / Railway / Fly.io** (backend + MongoDB)
- **GitHub Pages** (frontend-only, with backend hosted elsewhere)

---

## Testing

### Backend

```bash
cd backend
pytest tests/ -v
```

### Frontend

```bash
cd frontend
yarn test
```

---

## Maintenance Tips

- **Adding a section**: create a new `.jsx` in `components/site/`, import it in `pages/Landing.jsx`.
- **Updating brand colors**: edit Tailwind classes (`emerald-*`) or the CSS variables in `index.css`.
- **Updating fonts**: change the Google Fonts import at the top of `index.css` and the `fontFamily` config in `tailwind.config.js`.
- **Disabling email notifications**: leave `RESEND_API_KEY` empty in `backend/.env`. Submissions still persist to MongoDB.

---

## License

MIT © 2026 QASoftLabs

---

## Contact

- Web — see Contact section of the site
- Email — sanjay.businesstech@gmail.com
- GitHub — [@sanjay021085](https://github.com/sanjay021085)
