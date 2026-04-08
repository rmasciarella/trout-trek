# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trout Trek is a single-page e-commerce site for handcrafted fly fishing rods. It's a React SPA with file-based routing, static product data, and a demo (no-op) checkout flow that mimics Stripe's API shape without making real payments.

## Commands

- `pnpm dev` — Dev server on port 3001
- `pnpm build` — Production build (Vite)
- `pnpm test` — Run all tests (Vitest)
- `pnpm typecheck` — TypeScript check (`tsc --noEmit`)

## Architecture

**Stack:** React 19, TanStack Router (file-based), Vite, TypeScript, Tailwind CSS v4 (browser build via CDN)

**Routing:** TanStack Router with file-based routing. Route files live in `src/routes/` and auto-generate `src/routeTree.gen.ts` (don't edit manually). The Vite plugin (`TanStackRouterVite`) handles code-splitting automatically.

**Styling:** Tailwind v4 is loaded via `@tailwindcss/browser` CDN script in `index.html`, not as a build dependency. Custom theme tokens (colors, fonts) are defined in `index.html` inside `<style type="text/tailwindcss">` using `@theme {}`. All animations and global styles also live there.

**Product data:** Static array in `src/data/rods.ts`. No API or database — rod catalog is hardcoded with the `Rod` interface.

**Checkout:** `src/lib/demoCheckout.ts` produces Stripe-shaped objects (sessions, results) but never contacts Stripe. This is intentional scaffolding for a future real integration. Tests in `src/lib/demoCheckout.test.ts` validate the shape.

**Layout:** Root layout (`src/routes/__root.tsx`) wraps all pages with Nav, Footer, and ScrollRestoration. Pages: home (`/`), collection, about, rod detail (`/rod/$rodId`), checkout (`/checkout/$rodId`).

**SEO:** `src/components/Seo.tsx` handles per-page meta tags. Global OG/structured data lives in `index.html`.

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
