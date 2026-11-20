import {
  index,
  layout,
  route,
  type RouteConfig,
} from '@react-router/dev/routes'

export default [
  layout('./components/layout/PublicLayout.tsx', [
    index('./routes/public/home.tsx'),
    route('about', './routes/public/about.tsx'),
    route('services', './routes/public/services.tsx'),
    route('services/:slug', './routes/public/service-detail.tsx'),
    route('life-at-meadowbrook', './routes/public/life.tsx'),
    route('news', './routes/public/news.tsx'),
    route('news/:slug', './routes/public/news-detail.tsx'),
    route('location', './routes/public/locations.tsx'),
    route('locations/:slug', './routes/public/location-detail.tsx'),
    route('contact', './routes/public/contact.tsx'),
    route('success-stories', './routes/public/success-stories.tsx'),
    route('success-stories/:id', './routes/public/success-story-details.tsx'),
  ]),
  route('admin/login', './routes/admin/login.tsx'),
  route('admin', './components/layout/AdminLayout.tsx', [
    index('./routes/admin/dashboard.tsx'),
    route('posts', './routes/admin/posts.tsx'),
    route('announcements', './routes/admin/announcements.tsx'),
    route('banners', './routes/admin/banners.tsx'),
    route('gallery', './routes/admin/gallery.tsx'),
    route('media', './routes/admin/media.tsx'),
    route('inquiries', './routes/admin/inquiries.tsx'),
    route('settings', './routes/admin/settings.tsx'),
  ]),
] satisfies RouteConfig
