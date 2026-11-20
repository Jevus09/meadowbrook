# Meadowbrook Rehabilitation Starter

Modern React + TypeScript starter for the Meadowbrook Rehabilitation redesign.

## Stack

- React 19
- React Router Framework Mode
- TypeScript
- Tailwind CSS v4
- React Icons
- Supabase (database, auth, storage)
- Netlify

## Requirements

- Node.js 22.22+
- npm

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The frontend works before Supabase is configured. Backend-dependent features can be connected incrementally.

## Supabase

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add the project URL and publishable/anon key.
4. Run `supabase/migrations/001_initial_schema.sql` in the Supabase SQL Editor.
5. Create the recommended storage buckets described in `supabase/README.md`.
6. Manually promote the first trusted account to `admin` after signing up.

## Project organization

- `app/components/common` — reusable UI primitives
- `app/components/layout` — public/admin page shells
- `app/components/cards` — card UI
- `app/components/admin` — admin-only UI
- `app/config` — navigation/site configuration
- `app/data/mock` — temporary mock content
- `app/lib` — external clients and utilities
- `app/routes/public` — public-facing pages
- `app/routes/admin` — CMS/admin pages
- `app/types` — shared TypeScript models
- `supabase` — schema and backend setup

## Important healthcare note

The included inquiry model is intended for general contact/tour requests only. Do not use this starter to collect medical records, diagnoses, clinical notes, or other protected health information without a properly reviewed HIPAA-compliant architecture and agreements.
