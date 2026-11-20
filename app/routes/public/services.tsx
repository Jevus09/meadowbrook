import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { services } from '@/data/mock/services'

export function meta() {
  return [{ title: 'Our Services | Meadowbrook Rehabilitation' }]
}
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow='Our Services'
        title='Comprehensive Care & Rehabilitation Services'
        description="Personalized rehabilitation, nursing, therapy, and long-term support designed around each person's goals."
      />
      <section className='py-20'>
        <Container>
          <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
