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
