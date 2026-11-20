import { NewsCard } from '@/components/cards/NewsCard'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { newsPosts } from '@/data/mock/news'
import GalleryPage from "./gallery"



export function meta() {
  return [{ title: 'News & Events | Meadowbrook Rehabilitation' }]
}
export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow='News & Events'
        title='Stay Connected with Meadowbrook'
        description='Announcements, community stories, rehabilitation education, and upcoming events.'
      />
      <section className='py-20'>
        <Container>
          <div className='mb-8 flex flex-wrap gap-2'>
            {[
              'All',
              'Announcements',
              'Community',
              'Rehabilitation',
              'Resident Life',
            ].map((x, i) => (
              <button
                key={x}
                className={`rounded-full border px-4 py-2 text-sm ${i === 0 ? 'bg-meadow-900 text-white' : 'border-black/10 bg-white'}`}
              >
                {x}
              </button>
            ))}
          </div>
          <div className='grid gap-5 lg:grid-cols-3'>
            {newsPosts.map((p) => (
              <NewsCard key={p.id} post={p} />
            ))}
          </div>
          
        </Container>

        
      </section>
      <section className=''>

      <GalleryPage/>
      </section>

    </>
  )
}
