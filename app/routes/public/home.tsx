import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { NewsCard } from '@/components/cards/NewsCard'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { locations } from '@/data/mock/locations'
import { newsPosts } from '@/data/mock/news'
import { services } from '@/data/mock/services'
import hero from 'app/src/images/landingPage/homeHero.webp'

export function meta() {
  return [
    { title: 'Meadowbrook Rehabilitation' },
    {
      name: 'description',
      content:
        'Compassionate rehabilitation, skilled nursing, and long-term care.',
    },
  ]
}

export default function HomePage() {
  return (
    <>
      <section className='relative overflow-hidden bg-ivory py-20 sm:py-28'>
        <Container className='grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]'>
          <div>
            <p className='mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-600'>
              Rehabilitation · Skilled Nursing · Long-Term Care
            </p>
            <h1 className='page-title text-5xl font-semibold leading-[1.02] sm:text-7xl'>
              Compassionate Care.
              <br />
              Exceptional Recovery.
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-8 text-neutral-600'>
              Personalized rehabilitation, skilled nursing, therapy, and
              comprehensive support for recovery, comfort, and overall
              well-being.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <Button to='/services' variant='primary'>Explore Our Services</Button>
              <Button to='/contact' variant='secondary' className='gap-2'>
                <FiCalendar /> Schedule a Visit
              </Button>
            </div>
            <div className='mt-8 flex flex-wrap gap-4 text-sm text-neutral-600'>
              <FiMapPin className='text-gold-600' /> Naperville · LaGrange ·
              Bolingbrook
            </div>
          </div>
          <div className='soft-card overflow-hidden rounded-2rem bg-linear-to-br from-sage-100 via-white to-ivory'>
              <img src={hero} />
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container>
          <SectionHeading
            eyebrow='Our Services'
            title='Comprehensive Care for Every Step of the Journey'
            description='A flexible service structure ready to connect to Supabase-managed content later.'
            centered
          />
          <div className='mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-sage-50 py-20'>
        <Container>
          <SectionHeading
            eyebrow='Our Locations'
            title='Care close to home'
            description='Location content is currently mocked and can later be managed through the admin dashboard.'
          />
          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            {locations.map((location) => (
              <div
                key={location.slug}
                className='soft-card rounded-2xl bg-white p-6'
              >
                <p className='font-serif text-2xl font-semibold text-meadow-950'>
                  {location.city}
                </p>
                <p className='mt-2 text-sm text-neutral-600'>
                  {location.address}
                </p>
                <Button
                  to={`/locations/${location.slug}`}
                  variant='ghost'
                  className='mt-4 px-0'
                >
                  View Location →
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='py-20'>
        <Container>
          <SectionHeading
            eyebrow='News & Announcements'
            title="What's Happening at Meadowbrook"
          />
          <div className='mt-10 grid gap-5 lg:grid-cols-3'>
            {newsPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-meadow-900 py-16 text-white'>
        <Container className='flex flex-col items-start justify-between gap-6 md:flex-row md:items-center'>
          <div>
            <p className='font-serif text-4xl font-semibold'>
              See Meadowbrook for Yourself
            </p>
            <p className='mt-3 max-w-2xl text-sm leading-6 text-white/70'>
              Tour a community, meet the team, and get answers to your
              questions.
            </p>
          </div>
          <Button
            to='/contact'
            variant='secondary'            
          >
            Schedule a Tour
          </Button>
        </Container>
      </section>
    </>
  )
}
