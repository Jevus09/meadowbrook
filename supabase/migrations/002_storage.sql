-- Optional storage setup for administrator-managed public website media.
-- Do not upload medical records or protected health information.

insert into storage.buckets (id, name, public)
values
  ('site-media', 'site-media', true),
  ('gallery', 'gallery', true)
on conflict (id) do nothing;

create policy "Public can view site media"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'site-media');

create policy "Editors manage site media"
on storage.objects for all
to authenticated
using (bucket_id = 'site-media' and public.has_content_role())
with check (bucket_id = 'site-media' and public.has_content_role());

create policy "Public can view gallery media"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'gallery');

create policy "Editors manage gallery media"
on storage.objects for all
to authenticated
using (bucket_id = 'gallery' and public.has_content_role())
with check (bucket_id = 'gallery' and public.has_content_role());
