# Supabase Setup

The frontend can run without Supabase. When you are ready to connect the CMS:

## Database

Run these migrations in order in the Supabase SQL Editor:

1. `migrations/001_initial_schema.sql`
2. `migrations/002_storage.sql`

## Recommended Storage Buckets

The second migration creates two public buckets: `site-media` and `gallery`, while restricting writes to trusted content administrators/editors.

Use folders inside `site-media` such as `news/`, `banners/`, and `locations/`.

Do not place medical records, clinical files, or protected health information in these buckets.

## First Administrator

1. Create the first trusted user through Supabase Auth.
2. Find that user's UUID.
3. Run:

```sql
update public.profiles
set role = 'admin'
where id = 'USER_UUID_HERE';
```

Keep public self-signup disabled unless you intentionally build an invitation workflow.
