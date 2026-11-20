-- Meadowbrook Rehabilitation starter schema
-- General website/CMS content only. Do not store PHI in this schema.

create extension if not exists pgcrypto;

create type public.app_role as enum ('admin', 'editor', 'viewer');
create type public.publish_status as enum ('draft', 'scheduled', 'published');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.app_role not null default 'viewer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  category text,
  featured_image_url text,
  status public.publish_status not null default 'draft',
  is_featured boolean not null default false,
  published_at timestamptz,
  author_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null,
  link_text text,
  link_url text,
  is_active boolean not null default false,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.banners (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  image_url text,
  button_text text,
  button_url text,
  is_active boolean not null default false,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.gallery_albums (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  cover_image_url text,
  created_at timestamptz not null default now()
);

create table public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  album_id uuid references public.gallery_albums(id) on delete cascade,
  image_url text not null,
  alt_text text,
  caption text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  event_date timestamptz not null,
  location_name text,
  featured_image_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.locations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  address_line_1 text,
  address_line_2 text,
  city text,
  state text,
  postal_code text,
  phone text,
  email text,
  description text,
  hero_image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  preferred_location_id uuid references public.locations(id) on delete set null,
  preferred_tour_date date,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', new.email));
  return new;
end;
$$;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.has_content_role()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'editor')
  );
$$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.announcements enable row level security;
alter table public.banners enable row level security;
alter table public.gallery_albums enable row level security;
alter table public.gallery_images enable row level security;
alter table public.events enable row level security;
alter table public.locations enable row level security;
alter table public.inquiries enable row level security;

create policy "Users can read own profile" on public.profiles for select to authenticated using (id = auth.uid());
create policy "Admins can manage profiles" on public.profiles for all to authenticated using (public.is_admin()) with check (public.is_admin());

create policy "Public can read published posts" on public.posts for select to anon, authenticated using (status = 'published' and (published_at is null or published_at <= now()));
create policy "Editors manage posts" on public.posts for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can read active announcements" on public.announcements for select to anon, authenticated using (is_active and (starts_at is null or starts_at <= now()) and (ends_at is null or ends_at >= now()));
create policy "Editors manage announcements" on public.announcements for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can read active banners" on public.banners for select to anon, authenticated using (is_active and (starts_at is null or starts_at <= now()) and (ends_at is null or ends_at >= now()));
create policy "Editors manage banners" on public.banners for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can read gallery albums" on public.gallery_albums for select to anon, authenticated using (true);
create policy "Editors manage gallery albums" on public.gallery_albums for all to authenticated using (public.has_content_role()) with check (public.has_content_role());
create policy "Public can read gallery images" on public.gallery_images for select to anon, authenticated using (true);
create policy "Editors manage gallery images" on public.gallery_images for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can read published events" on public.events for select to anon, authenticated using (is_published);
create policy "Editors manage events" on public.events for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can read active locations" on public.locations for select to anon, authenticated using (is_active);
create policy "Editors manage locations" on public.locations for all to authenticated using (public.has_content_role()) with check (public.has_content_role());

create policy "Public can submit inquiries" on public.inquiries for insert to anon, authenticated with check (true);
create policy "Editors can read inquiries" on public.inquiries for select to authenticated using (public.has_content_role());
create policy "Editors can update inquiries" on public.inquiries for update to authenticated using (public.has_content_role()) with check (public.has_content_role());
