# Deployment Guide — QASoftLabs

This project is split into two deployable units:

- **Frontend** (React, static) — deploy to Vercel, Netlify, GitHub Pages, or any static host
- **Backend** (FastAPI + MongoDB) — deploy to Render, Railway, Fly.io, or any container/VM host

---

## 1. Frontend → Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. **Root Directory**: `frontend`
4. **Build Command**: `yarn build`
5. **Output Directory**: `build`
6. **Install Command**: `yarn install`
7. **Environment Variables**:
   - `REACT_APP_BACKEND_URL` = your backend URL (e.g. `https://qasoftlabs-api.onrender.com`)
8. Click **Deploy**.

Vercel will auto-redeploy on every push to `main`.

---

## 2. Frontend → Netlify

1. Sign in to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**.
2. **Base directory**: `frontend`
3. **Build command**: `yarn build`
4. **Publish directory**: `frontend/build`
5. **Environment Variables**: same as Vercel above.
6. Deploy.

Optionally add a `frontend/_redirects` file for SPA routing:
```
/*    /index.html   200
```

---

## 3. Backend → Render (recommended)

1. Go to [render.com](https://render.com) → **New** → **Web Service** → connect your GitHub repo.
2. **Root Directory**: `backend`
3. **Runtime**: Python 3.11
4. **Build Command**:
   ```
   pip install -r requirements.txt
   ```
5. **Start Command**:
   ```
   uvicorn server:app --host 0.0.0.0 --port $PORT
   ```
6. **Environment Variables** (add via the Render dashboard):
   - `MONGO_URL` — your MongoDB Atlas URI
   - `DB_NAME` — e.g. `qasoftlabs`
   - `CORS_ORIGINS` — your Vercel/Netlify URL (e.g. `https://qasoftlabs.vercel.app`)
   - `RESEND_API_KEY` — your Resend API key
   - `SENDER_EMAIL` — e.g. `notifications@yourdomain.com` (must be a verified Resend domain)
   - `NOTIFICATION_EMAIL` — where you want to receive notifications

7. Deploy.

After backend is live, update the frontend's `REACT_APP_BACKEND_URL` to point to your Render URL.

---

## 4. Backend → Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**.
2. Set **Root Directory** to `backend`.
3. Railway auto-detects Python. Set start command:
   ```
   uvicorn server:app --host 0.0.0.0 --port $PORT
   ```
4. Add the same environment variables as the Render section above.

---

## 5. MongoDB Atlas (free tier works fine)

1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com).
2. **Database Access** → create a user.
3. **Network Access** → allow `0.0.0.0/0` (or restrict to your backend's outbound IP).
4. **Connect** → copy the connection string and use it as `MONGO_URL`.

---

## 6. Resend (transactional emails)

1. Sign up at [resend.com](https://resend.com).
2. **API Keys** → create a key starting with `re_…`. Add to backend `RESEND_API_KEY`.
3. **Domains** → add your domain (e.g. `qasoftlabs.com`) and verify DNS records.
4. Update `SENDER_EMAIL` to something like `notifications@qasoftlabs.com`.
5. Without a verified domain, Resend only delivers to email addresses verified in your Resend account (great for testing notifications to your own inbox).

---

## 7. Custom Domain

### Vercel
- Project → **Settings** → **Domains** → add your domain → follow DNS instructions.

### Netlify
- Site → **Domain management** → add custom domain → follow DNS instructions.

After the frontend is on a custom domain, update `CORS_ORIGINS` on the backend.

---

## 8. Sanity Checklist Before Going Live

- [ ] `frontend/.env` has the correct `REACT_APP_BACKEND_URL`
- [ ] `backend/.env` has `CORS_ORIGINS` set to your frontend URL (not `*` in production)
- [ ] MongoDB connection works (`/api/health` returns 200)
- [ ] Contact form submission succeeds end-to-end and you receive the email
- [ ] Consultation modal submission succeeds end-to-end and you receive the email
- [ ] Real contact details (email, WhatsApp, GitHub) are correct in `Contact.jsx`, `Footer.jsx`, `AIAssistant.jsx`
- [ ] Frontend production build is minified (`yarn build`)
- [ ] All anchor links (Services / Architecture / Frameworks / Process / Industries / Portfolio / Contact) scroll correctly

---

## 9. Updating the Site

After your first deploy, the workflow is simple:

```bash
git pull
# edit content in frontend/src/components/site/
git add .
git commit -m "Update services copy"
git push origin main
```

Vercel / Netlify / Render will auto-redeploy on push.
