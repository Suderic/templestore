# Templestore — Deployment & Operations Handover

This document contains operational procedures for production deployment, hosting environments, and the **Phase 2 & Phase 3 Backend Handover Integration Stubs**.

---

## 1. Hosting & Deployment Options

### 1.1 Vercel Deployment (Recommended)
1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Build Command: `next build` (Next.js with Turbopack handles this automatically).
6. Output Directory: `.next`.
7. Configure Environment Variables (if using custom domains).

### 1.2 Self-Hosted Node.js Server
To host on an Ubuntu/Debian, Windows Server, or AWS EC2 instance:
```bash
# 1. Install dependencies
npm ci

# 2. Compile production build
npm run build

# 3. Start production server on port 3000
npm start
```

For persistent process management with PM2:
```bash
npm install -g pm2
pm2 start npm --name "templestore" -- start
pm2 save
```

### 1.3 Docker Deployment
```dockerfile
# Dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 2. Environment Variables (`.env.example`)

```bash
# Application Configuration
NEXT_PUBLIC_APP_NAME="Templestore"
NEXT_PUBLIC_APP_URL="https://templestore.dev"

# Simulated Gateway Flags
NEXT_PUBLIC_ENABLE_SIMULATED_CHECKOUT="true"
NEXT_PUBLIC_ENABLE_QR_SIMULATOR="true"

# Phase 2 Real Payment Gateway Keys (Optional)
# STRIPE_SECRET_KEY="sk_live_..."
# STRIPE_WEBHOOK_SECRET="whsec_..."
# NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."

# Phase 2 Database Connection (Optional)
# DATABASE_URL="postgresql://user:password@localhost:5432/templestore"
```

---

## 3. Phase 2 Backend Handover Integration Stubs

The codebase is intentionally structured so that real backend providers can be plugged in without refactoring UI components:

### 3.1 Swapping In Real Stripe Payments
- **Location**: [`src/components/templates/DirectCheckoutModal.tsx`](file:///D:/New%20project/Templestore/src/components/templates/DirectCheckoutModal.tsx)
- **Current State**: Simulates payment with a 1.2s delay and generates an order ID and license key.
- **Handover Step**:
  1. Install `@stripe/stripe-js` and `stripe`.
  2. Create an API route: `src/app/api/checkout/route.ts` that creates a Stripe `PaymentIntent`.
  3. Replace the mock `setTimeout` in `handlePay` with `stripe.confirmCardPayment(clientSecret)`.

### 3.2 Swapping In Real Database & Authentication
- **Location**: [`src/context/AuthContext.tsx`](file:///D:/New%20project/Templestore/src/context/AuthContext.tsx) and [`src/data/mockAuth.ts`](file:///D:/New%20project/Templestore/src/data/mockAuth.ts)
- **Current State**: Uses React context with in-memory persistence and dev seed users (`Alex Designer` and `Sarah Developer`).
- **Handover Step**:
  1. Integrate NextAuth.js (Auth.js) or Supabase Auth.
  2. In `AuthContext.tsx`, replace `loginAsSeedUser` with the `signIn('credentials')` or `supabase.auth.signInWithPassword()` call.
  3. Replace the in-memory `purchases` state array with an API fetch to `/api/user/purchases`.

### 3.3 Connecting Real Email Dispatch
- **Location**: [`src/components/demo/alder-ash/AlderAshBookingModal.tsx`](file:///D:/New%20project/Templestore/src/components/demo/alder-ash/AlderAshBookingModal.tsx) and [`src/app/contact/page.tsx`](file:///D:/New%20project/Templestore/src/app/contact/page.tsx)
- **Current State**: Form submissions display instant toast alerts and confirmation cards.
- **Handover Step**:
  1. Add Resend (`npm install resend`) or SendGrid.
  2. Post form data to `/api/send-confirmation`.
  3. Send the guest their PDF trail map and reservation voucher.

---

## 4. Operational Checklist & Troubleshooting

| Issue / Scenario | Cause | Resolution |
| :--- | :--- | :--- |
| **LAN Cross-Device Testing Warning** | Accessing dev server via local IP (e.g., `192.168.1.15:3000`) | Verify `allowedDevOrigins` in `next.config.ts` includes your machine IP address. |
| **Theme Flash on Page Load** | Browser theme hydration mismatch | Ensure `suppressHydrationWarning` remains in `<html lang="en">` in `src/app/layout.tsx`. |
| **Next.js Turbopack Cache Reset** | Large file modification or asset cache mismatch | Run `rm -rf .next` (PowerShell: `Remove-Item -Recurse -Force .next`) and re-run `npm run dev`. |
