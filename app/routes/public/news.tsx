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
