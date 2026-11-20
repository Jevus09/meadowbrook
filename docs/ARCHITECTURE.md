# Architecture

## Goals

- Keep public marketing UI independent from the admin CMS.
- Keep reusable UI separate from route modules.
- Keep Supabase access behind `app/lib` rather than querying it everywhere.
- Allow mock content to be replaced gradually with repository/service functions.
- Use database RLS as the actual authorization boundary for admin content.

## Frontend layers

```text
app/
├── components/
│   ├── admin/      Admin-only reusable components
│   ├── cards/      Public content cards
│   ├── common/     Buttons, containers, headings, shared UI
│   └── layout/     Public and admin shells
├── config/         Navigation and static site configuration
├── data/mock/      Temporary content before Supabase is wired
├── lib/
│   ├── supabase/   Supabase browser client
│   └── utils/      Generic helpers
├── routes/
│   ├── admin/      Admin route modules
│   └── public/     Public route modules
├── styles/         Tailwind theme/global CSS
└── types/          Shared domain types
```

## Suggested next data layer

As Supabase is connected, add:

```text
app/data/
├── announcements.repository.ts
├── banners.repository.ts
├── gallery.repository.ts
├── inquiries.repository.ts
├── locations.repository.ts
└── posts.repository.ts
```

Routes/components should call these repository modules rather than using the Supabase client directly. That keeps querying, filtering, and mapping logic centralized.

## Auth model

- `/admin/login`: public login route.
- `/admin/*`: eventually protected by Supabase Auth.
- React route guards are for UX only.
- PostgreSQL Row Level Security is the authorization boundary.
- Roles: `admin`, `editor`, `viewer`.

## Content flow

```text
Admin UI
   ↓
Repository/service layer
   ↓
Supabase Postgres / Storage
   ↓
Public React Router loaders
   ↓
Public site components
```

## Deployment

```text
GitHub → Netlify → React Router server/static rendering
                   ↓
                Supabase
```

Environment variables are stored in Netlify, not committed to Git.
