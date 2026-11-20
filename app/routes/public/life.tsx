import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { SectionHeading } from '@/components/common/SectionHeading'


export function meta() {
  return [{ title: 'Life at Meadowbrook | Meadowbrook Rehabilitation' }]
}
export default function LifePage() {
  return (
    <>
      <PageHero
        eyebrow='Life at Meadowbrook'
        title='Comfort, Connection, Community'
        description='Recovery is more than therapy. Meadowbrook is designed around welcoming spaces, meaningful activities, dining, wellness, and daily connection.'
      />
      
      <section className='py-20'>
        
        <Container>
          
          <SectionHeading
            title='Everyday Life Enriched'
            description='Each module can later pull its copy and photography from Supabase.'
            centered
          />
          <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {['Dining', 'Activities', 'Wellness', 'Amenities'].map((x) => (
              <div key={x} className='soft-card rounded-2xl bg-white p-6'>
                <div className='aspect-4/3 rounded-xl bg-sage-100' />
                <h3 className='mt-5 font-serif text-2xl text-meadow-950'>
                  {x}
                </h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
