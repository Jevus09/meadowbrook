import {
  FiBell,
  FiEdit3,
  FiFileText,
  FiImage,
  FiInbox,
  FiPlus,
  FiUsers,
} from 'react-icons/fi' //FiMegaphone
import { StatCard } from '@/components/admin/StatCard'
import { Button } from '@/components/common/Button'
import { newsPosts } from '@/data/mock/news'

export default function AdminDashboardPage() {
  return (
    <div className='space-y-6'>
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        <StatCard
          label='Total Posts'
          value='42'
          icon={FiFileText}
          note='Placeholder CMS metric'
        />
        <StatCard
          label='Published Announcements'
          value='12'
          icon={FiPlus}
          note='Placeholder CMS metric'
        />
        <StatCard
          label='Pending Drafts'
          value='6'
          icon={FiEdit3}
          note='Placeholder CMS metric'
        />
        <StatCard
          label='New Tour Requests'
          value='17'
          icon={FiUsers}
          note='Placeholder CRM metric'
        />
      </div>
      <div className='grid gap-6 xl:grid-cols-[1fr_320px]'>
        <section className='soft-card rounded-2xl bg-white p-6'>
          <div className='flex items-center gap-4'>
            <div>
              <p className='font-serif text-2xl text-meadow-950'>
                Current Featured Banner
              </p>
              <p className='mt-1 text-sm text-neutral-500'>
                Manage site-wide news and promotion banners.
              </p>
            </div>
            <Button to='/admin/banners' variant='secondary' className='ml-auto'>
              Manage
            </Button>
          </div>
          <div className='mt-6 rounded-2xl bg-ivory p-6'>
            <span className='rounded-full bg-meadow-900 px-3 py-1 text-xs font-semibold text-white'>
              Live
            </span>
            <p className='mt-5 font-serif text-3xl text-meadow-950'>
              Compassionate Care. Exceptional Recovery.
            </p>
            <p className='mt-2 text-sm text-neutral-600'>
              Example featured site announcement / campaign content.
            </p>
          </div>
        </section>
        <section className='soft-card rounded-2xl bg-white p-6'>
          <p className='font-serif text-2xl text-meadow-950'>Quick Actions</p>
          <div className='mt-5 space-y-2'>
            <Button to='/admin/posts' className='w-full justify-start gap-2'>
              <FiPlus /> New Post
            </Button>
            <Button
              to='/admin/announcements'
              variant='secondary'
              className='w-full justify-start gap-2'
            >
              <FiBell /> Add Announcement
            </Button>
            <Button
              to='/admin/gallery'
              variant='secondary'
              className='w-full justify-start gap-2'
            >
              <FiImage /> Upload Photos
            </Button>
            <Button
              to='/admin/inquiries'
              variant='secondary'
              className='w-full justify-start gap-2'
            >
              <FiInbox /> View Inquiries
            </Button>
          </div>
        </section>
      </div>
      <section className='soft-card rounded-2xl bg-white p-6'>
        <div className='flex items-center'>
          <div>
            <p className='font-serif text-2xl text-meadow-950'>Recent Posts</p>
            <p className='mt-1 text-sm text-neutral-500'>
              Mock data until Supabase is connected.
            </p>
          </div>
          <Button to='/admin/posts' variant='ghost' className='ml-auto'>
            View All
          </Button>
        </div>
        <div className='mt-5 divide-y divide-black/5'>
          {newsPosts.map((p) => (
            <div className='flex items-center gap-4 py-4' key={p.id}>
              <div className='size-12 rounded-xl bg-sage-100' />
              <div className='min-w-0 flex-1'>
                <p className='truncate text-sm font-semibold text-neutral-800'>
                  {p.title}
                </p>
                <p className='mt-1 text-xs text-neutral-500'>{p.category}</p>
              </div>
              <span className='rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-meadow-900'>
                Published
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
