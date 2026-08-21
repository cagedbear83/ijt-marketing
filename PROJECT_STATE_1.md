# Illinois Job Tracker — Project State
**Owner:** Kyle Gagen — KMG123 Enterprises LLC  
**Last Updated:** August 11, 2026  
**Version:** 1.1

---

## Quick Reference

| Item | Value |
|---|---|
| Main App URL | https://illinoisjobtracker.app |
| Marketing Site URL | https://www.illinoisjobtracker.com |
| Main App Repo | github.com/cagedbear83/job-tracker |
| Marketing Repo | github.com/cagedbear83/ijt-marketing |
| Backend Host | DigitalOcean App Platform |
| Backend URL | https://illinois-ui-tracker-8wiwq.ondigitalocean.app |
| Database | MongoDB Atlas — cluster: illinois-tracker, db: ides_tracker_db |
| Frontend Host (app) | Vercel — cagedbear83/job-tracker |
| Frontend Host (marketing) | Vercel — cagedbear83/ijt-marketing |
| Domain Registrar | IONOS (illinoisjobtracker.app), name.com (illinoisjobtracker.com) |
| Email | Mailgun — mail.illinoisjobtracker.app |
| SMS | Twilio — +1 (833) 610-0453 (toll-free, verification pending) |
| AI | Google Gemini 2.0 Flash |
| Secrets Manager | Doppler |
| Support Email | support@illinoisjobtracker.app |

---

## Stack

### Backend
| Technology | Detail |
|---|---|
| Language | Python 3.11 |
| Framework | FastAPI |
| Database driver | Motor (async MongoDB) |
| Auth | JWT + bcrypt, single-active-session enforcement |
| Email | Mailgun REST API |
| SMS | Twilio |
| AI | Google Gemini 2.0 Flash |
| PDF | pypdf — fills real ADJ034F form |
| Scheduler | APScheduler (AsyncIO) |
| Payments | Stripe |
| Deployment | DigitalOcean App Platform via Dockerfile |

### Frontend (Main App)
| Technology | Detail |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Icons | Phosphor Icons |
| Routing | React Router v6 |
| API client | Axios with JWT interceptor |
| Notifications | Sonner (toasts) |
| Error tracking | Sentry (no-op unless REACT_APP_SENTRY_DSN set) |
| Deployment | Vercel |

### Marketing Site
| Technology | Detail |
|---|---|
| Framework | Next.js 14 App Router |
| Styling | Tailwind CSS v3 |
| Fonts | Chivo (headings), IBM Plex Sans (body) |
| Theme | next-themes (system dark/light) |
| Design tokens | Illinois Blue #0033A0, Sharp corners |
| Deployment | Vercel |

---

## ✅ Completed

### Infrastructure
- [x] React/Vite frontend deployed to Vercel (illinoisjobtracker.app)
- [x] FastAPI backend deployed to DigitalOcean via Dockerfile
- [x] MongoDB Atlas M0 free tier — cluster illinois-tracker
- [x] Mailgun email — domain mail.illinoisjobtracker.app, SPF/DKIM/DMARC configured
- [x] Doppler secrets management integrated with DigitalOcean, Vercel, GitHub Actions
- [x] Sentry error tracking wired (no-op without DSN)
- [x] CORS configured for app domains
- [x] Security headers middleware (X-Content-Type-Options, X-Frame-Options, etc.)
- [x] Rate limiting via SlowAPI (login, register, forgot password, reminder test)
- [x] `.gitignore` — excludes .env, .tmp.driveupload/, node_modules, .DS_Store

### Authentication & Security
- [x] NIST SP 800-63B-aligned password policy (12-char min, max 64, common password blocklist)
- [x] Account lockout — 5 failed attempts → 15-minute lockout
- [x] Single-active-session enforcement via session_id/sid JWT claim
- [x] Email verification on registration
- [x] Password reset flow with token expiry
- [x] bcrypt password hashing
- [x] JWT auth with configurable secret

### Main App — Core Features
- [x] Multi-claimant profile management (scoped per user)
- [x] Benefit week tracking (Sunday–Saturday periods)
- [x] Work-search contact logging
- [x] Type of Work dropdown (Full-time, Part-time, Independent Contractor, Temporary/Seasonal, Contract-to-hire)
- [x] Result dropdown (Applied, Awaiting Outcome, Interview Scheduled, Interviewing, Hired, Networking, Not Hired, Not Hiring/Did not Apply)
- [x] ADJ034F PDF generation (pypdf fills real state form — ephemeral, never stored)
- [x] CSV export (ephemeral, never stored)
- [x] Loading/error/empty/success states on WeekDetail page
- [x] Email reminders via Mailgun (Sun/Wed/Fri/Sat schedule)
- [x] SMS reminders via Twilio (toll-free pending verification)
- [x] AI screenshot import — Google Gemini 2.0 Flash
- [x] Admin panel with RBAC (PlatformRole), audit log, impersonation
- [x] Invite-only signup with 14-day single-use codes
- [x] Audit log (append-only, timestamp + user)
- [x] APScheduler cron jobs for reminders
- [x] Emergent branding fully removed
- [x] Demo credentials removed from login page

### Subscription System (Designed & Coded — Not Yet Wired)
- [x] Tier definitions — Free / Pro / Case Worker
- [x] TIER_LIMITS dict — all feature gates in one place
- [x] subscription.py — gating helpers (gate_feature, gate_metered, gate_claimant_limit)
- [x] billing.py — Stripe checkout, customer portal, webhook handler, billing status
- [x] trial.py — 14-day Pro trial, card-upfront, one-per-person (email + card fingerprint), farmer detection
- [x] account_lifecycle.py — soft delete (30-day), GDPR erasure (72-hour), purge executor
- [x] account_lifecycle_cascade.py — cascade map for all collections
- [x] caseworker_orphan.py — removal/reassignment, orphan migration, claim-account flow
- [x] useSubscription.jsx — React context/hook for tier/usage/feature checks
- [x] UpgradeModal.jsx — pricing modal with monthly/annual toggle, fires on HTTP 402
- [x] FeatureGate.jsx — wraps buttons to lock/disable when feature not on tier
- [x] DeleteAccountSection.jsx — individual-users-only, type-email-to-confirm, GDPR path
- [x] Stripe test-mode products created (3 products, 6 price IDs)
- [x] stripe.env.filled — all 6 price IDs filled, SK and webhook secret still need adding

### Pricing (Locked)
| Plan | Monthly | Annual |
|---|---|---|
| Free | $0 | $0 |
| Pro | $9.99/mo | $95.99/yr (~20% off) |
| Case Worker — 1st seat | $19.99/mo | $199.99/yr (~17% off) |
| Case Worker — additional seats | $12.99/mo | $129.99/yr (~17% off) |

### Marketing Site (illinoisjobtracker.com)
- [x] Next.js App Router project scaffolded and deployed to Vercel
- [x] Domain connected — www.illinoisjobtracker.com (308 redirect from bare domain)
- [x] Chivo + IBM Plex Sans fonts wired via next/font/google
- [x] Illinois Blue (#0033A0), sharp corners, design guidelines applied globally
- [x] Dark/light mode via next-themes (restored after accidental removal)
- [x] SiteNav — IL bordered logo, capitalized nav links, Sign In/Get Started linked to app
- [x] SiteFooter — IL bordered logo, product/company/legal columns, IDES disclaimer banner
- [x] Landing page — three tiers, 14-day trial, benefits section, all paid features shown, CTA button white on blue fixed
- [x] Features page — 10 features in 4 groups, no checkmarks, Illinois blue headings
- [x] Pricing page — three cards, monthly/annual toggle, aligned prices and buttons
- [x] FAQ page — 16 questions, accordion, Refund Policy + Privacy Policy hyperlinked
- [x] How It Works page — 4 steps, Illinois blue heading, correct wording, Start Free linked to app
- [x] About page — Illinois blue heading, Try It Free links to landing
- [x] Contact page — full form (First/Last Name, email validation, 10-digit phone, reason dropdown, message), Next.js server-side proxy to backend, two confirmation emails, reference numbers (IJT-XXX-000000)
- [x] Privacy Policy — updated for three tiers, AI ephemerality, GDPR/CCPA, Case Worker data handling
- [x] Terms of Service — updated for three tiers, trial terms, one-trial-per-person rule
- [x] Refund Policy — all sales final, cancel-manually language, seat change proration
- [x] IDES Disclaimer — Not A Government Service in Illinois blue
- [x] Unsubscribe page — branded custom page at /unsubscribe
- [x] Mailgun unsubscribe template — custom branded HTML template set in Mailgun dashboard
- [x] Mailgun unsubscribe footer — turned OFF globally (all emails are transactional, not marketing)
- [x] Mailgun click/open tracking — OFF (prevents SSL error on email links)
- [x] /api/contact route in server.py — sends two emails with reference numbers
- [x] Next.js proxy route (app/api/contact/route.ts) — eliminates CORS issue entirely
- [x] CORS updated for illinoisjobtracker.com and www.illinoisjobtracker.com
- [x] Mailgun transactional emails — unsubscribe link and tracking disabled via h:List-Unsubscribe and o:tracking headers

### Documents Produced
- [x] Subscription_Decisions_Summary.docx (v8)
- [x] Claimant_Liability_Release_DRAFT.docx (needs attorney review)
- [x] Illinois_UI_Tracker_Handoff.docx (full project handoff)
- [x] COMPLETE_FILE_HANDOFF.md (all code files bundled)

---

## 🔄 In Progress

### Stripe Integration
- [ ] Add STRIPE_SECRET_KEY to stripe.env.filled and DigitalOcean
- [ ] Add STRIPE_WEBHOOK_SECRET to stripe.env.filled and DigitalOcean
- [ ] Create Stripe webhook endpoint in dashboard (URL: https://illinois-ui-tracker-8wiwq.ondigitalocean.app/api/webhooks/stripe)
- [ ] Wire 4 billing routes into server.py (/billing/checkout, /billing/portal, /billing/status, /webhooks/stripe)
- [ ] Add subscription gate calls to existing routes (calendar, screenshot import, PDF export, claimant creation)
- [ ] Create MongoDB indexes for subscriptions + usage_counters collections
- [ ] Wire SubscriptionProvider + UpgradeModalProvider into App.js
- [ ] Add 402 interceptor to api.js
- [ ] Add TRIAL_LEDGER_SALT to env
- [ ] Test full flow in Stripe test mode with card 4242 4242 4242 4242

### Infrastructure
- [ ] Doppler — MongoDB re-setup
- [ ] Doppler — Twilio re-setup
- [ ] Twilio toll-free verification — follow up if not approved within 7 business days

---

## ⏳ Pending / Not Yet Started

### Admin Panel (Intentionally Held)
- [ ] Design conversation with Kyle first (seat management UI, reassignment flow, comping)
- [ ] Seat management UI — add/remove seats, Stripe quantity sync
- [ ] Case worker reassignment interface — auto-distribute or manual per-claimant
- [ ] Platform admin comping — test mode unlimited, production cap (number TBD when beta list exists)
- [ ] "Claim your account" deep link flow (email → auto-login → auto-generate PDF)

### Account Lifecycle Wiring
- [ ] Wire routes into server.py: /account/delete, /account/gdpr-erasure, /admin/caseworkers/{id}/remove, /claim/{token} (public)
- [ ] Add 4 scheduled jobs to APScheduler (soft-delete purge, GDPR purge, pending-claim purge, 53-week retention deletion)
- [ ] Add pending_claims + trial_ledger collections/indexes
- [ ] Add profiles.managed_by field and users.org_id + role for case-worker org structure
- [ ] Render DeleteAccountSection at bottom of profile page (individual users only)
- [ ] 53-week retention warning emails (14d, 7d, 24h) with deep-link auto-login + auto-generate PDF

### Features Not Yet Built
- [ ] AI Resume Review — gating hook exists (ai_resume_review), endpoint not built. Design: upload flow, Gemini prompt, ephemeral handling, disclaimer shown
- [ ] Calendar events feature — gated, backend not built
- [ ] Document storage — gated, S3/storage backend not built
- [ ] Advanced analytics dashboard — gated, not built
- [ ] Stripe Elements (inline card form) — replace Stripe Checkout redirect with embedded form
- [ ] Annual billing UI toggle in upgrade flow
- [ ] SAML SSO — parked as enterprise add-on, $99/mo flat, build on demand

### Legal & Compliance
- [ ] Attorney review of Claimant_Liability_Release_DRAFT.docx before use with any real claimant
- [ ] Signature-capture flow for liability release (when case worker adds a claimant)
- [ ] Add AI Resume Review section to IJT_Compliance_Requirements.md once feature is designed

### Marketing Site — Remaining
- [ ] Verify all pages live and links working end-to-end
- [ ] Test contact form emails arriving consistently after Mailgun tracking changes

### Infrastructure / Ops
- [ ] ADJ034F.pdf — place real state form at APP/backend/assets/ADJ034F.pdf (download from ides.illinois.gov)
- [ ] Google Cloud billing — attach billing to unblock Gemini free tier quota
- [ ] Inline Stripe Elements card form (replace Checkout redirect)
- [ ] Fix db.claimants → db.profiles at server.py line 431 (orphaned collection bug)
- [ ] Rate limiting on SMS sends to prevent abuse
- [ ] Split server.py into FastAPI routers (P1 — file is ~2,500 lines)

---

## Open Decisions

| Item | Status |
|---|---|
| Platform admin comp cap | Left open — revisit when beta-tester list exists |
| AI Resume Review feature build | Placeholder only — resume after Stripe is live |
| Partial seat removal behavior | When a CW is removed and remaining CWs take their claimants — auto-even-split or manual choice confirmed. Edge case: what happens to claimants if org drops from e.g. 5 seats to 3 to cut costs? Blocked — downgrade action. |
| Annual billing UI | Design confirmed, build after first paying customers |
| Layer 2 IP anomaly detection | Deferred — revisit when user base grows |

---

## Environment Variables Checklist

### Backend (.env + DigitalOcean)
| Variable | Status |
|---|---|
| MONGO_URL | ✅ Set |
| DB_NAME | ✅ Set (ides_tracker_db) |
| JWT_SECRET | ✅ Set |
| ADMIN_EMAIL | ✅ Set |
| ADMIN_PASSWORD | ✅ Set |
| MAILGUN_API_KEY | ✅ Set |
| MAILGUN_DOMAIN | ✅ Set (mail.illinoisjobtracker.app) |
| MAILGUN_FROM | ✅ Set |
| TWILIO_ACCOUNT_SID | ⚠ Re-setup needed (Doppler) |
| TWILIO_AUTH_TOKEN | ⚠ Re-setup needed (Doppler) |
| TWILIO_FROM_NUMBER | ⚠ Re-setup needed (Doppler) |
| GEMINI_API_KEY | ⚠ Needs billing attached in Google Cloud |
| FRONTEND_URL | ✅ Set (https://illinoisjobtracker.app) |
| CORS_ORIGINS | ✅ Updated (includes .com and .app domains) |
| STRIPE_SECRET_KEY | ❌ Not yet added |
| STRIPE_WEBHOOK_SECRET | ❌ Not yet added |
| STRIPE_PRICE_PRO_MONTHLY | ✅ price_1TpYJcB9Z4CA8NX58NcWqfJ4 |
| STRIPE_PRICE_PRO_ANNUAL | ✅ price_1TpYJcB9Z4CA8NX567lyzodK |
| STRIPE_PRICE_CW_FIRST_MONTHLY | ✅ price_1TpYPDB9Z4CA8NX5ZUclGUzl |
| STRIPE_PRICE_CW_FIRST_ANNUAL | ✅ price_1TpYPDB9Z4CA8NX52oyqh9hd |
| STRIPE_PRICE_CW_ADDL_MONTHLY | ✅ price_1TpYTYB9Z4CA8NX5mBgesueK |
| STRIPE_PRICE_CW_ADDL_ANNUAL | ✅ price_1TpYTYB9Z4CA8NX5ij6YSoBS |
| TRIAL_LEDGER_SALT | ❌ Not yet added |

### Frontend — Main App (Vercel)
| Variable | Status |
|---|---|
| REACT_APP_BACKEND_URL | ✅ Set |
| REACT_APP_SENTRY_DSN | ⚠ Optional — no-op if not set |

---

## Key Files Reference

### Backend (APP/backend/)
| File | Purpose |
|---|---|
| server.py | Main FastAPI app — all routes (~2,500 lines) |
| subscription.py | Tier limits, gating helpers, usage metering |
| billing.py | Stripe checkout, webhook, portal |
| trial.py | 14-day Pro trial, farmer detection |
| account_lifecycle.py | Soft delete + GDPR erasure |
| account_lifecycle_cascade.py | Cascade map — what deletes what |
| caseworker_orphan.py | Orphan migration + claim flow |
| assets/ADJ034F.pdf | ⚠ MISSING — must be placed manually |
| requirements.txt | Python dependencies |
| Dockerfile | DigitalOcean container definition |

### Frontend — Main App (APP/frontend/src/)
| File | Purpose |
|---|---|
| pages/WeekDetail.jsx | Benefit week + contacts, loading/error states |
| hooks/useSubscription.jsx | Tier/usage/feature checks |
| components/UpgradeModal.jsx | Pricing modal, fires on 402 |
| components/FeatureGate.jsx | Locks gated buttons |
| components/DeleteAccountSection.jsx | Delete account UI |
| context/AuthContext.jsx | Auth state, sessionStorage |
| lib/api.js | Axios client + JWT interceptor |

### Marketing Site (ijt-marketing/)
| File | Purpose |
|---|---|
| lib/site.ts | All copy, pricing, nav, FAQs — edit here |
| app/layout.tsx | Root layout — SiteNav + SiteFooter, Chivo + IBM Plex Sans fonts |
| app/globals.css | Design token CSS variables (light + dark mode) |
| tailwind.config.js | font-heading, font-body, Illinois Blue color tokens |
| components/site-nav.tsx | Top navigation, IL bordered logo, theme toggle |
| components/site-footer.tsx | Footer, IDES disclaimer banner |
| components/ui-bits.tsx | Button (primary/outline/white), Check, Section, PageHeader |
| app/pricing/page.tsx | Three-tier pricing with monthly/annual toggle |
| app/contact/page.tsx | Contact form — posts to Next.js proxy |
| app/api/contact/route.ts | Next.js server-side proxy → FastAPI backend (eliminates CORS) |
| app/unsubscribe/page.tsx | Branded unsubscribe confirmation page |

---

## Known Bugs

| Bug | Severity | Status |
|---|---|---|
| db.claimants → db.profiles at server.py line 431 | P1 | Open — fix before production claimants |
| ADJ034F.pdf missing from assets/ | P0 | Must be placed manually (download from ides.illinois.gov) |
| Gemini AI hitting quota immediately | P1 | Blocked on Google Cloud billing |
| Twilio toll-free not verified | P2 | Submitted — follow up if >7 days |
| Git divergence between PC and Mac | Recurring | Always pull before pushing. Set git config --global pull.rebase true on both machines |

---

## How To Update This File

After completing any item:
1. Move it from **Pending** or **In Progress** to **Completed** with a `[x]`
2. Update **Last Updated** date at the top
3. Add any new open items or bugs discovered
4. Commit: `git commit -m "Update PROJECT_STATE.md"`

This file lives at the root of the `job-tracker` repo. Push it after every session.

