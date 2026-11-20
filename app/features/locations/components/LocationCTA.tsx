import {
    FiCalendar,
    FiPhone,
  } from 'react-icons/fi'
  
  import { Button } from '@/components/common/Button'
  import { Container } from '@/components/common/Container'
  
  export interface LocationCTAProps {
    locationName: string
    phone: string
  }
  
  export function LocationCTA({
    locationName,
    phone,
  }: LocationCTAProps) {
    return (
      <section className='bg-stone-50 py-20 lg:py-28'>
        <Container>
          <div className='relative overflow-hidden rounded-2rem bg-meadow-900 px-8 py-14 text-white md:px-14 lg:px-20 lg:py-20'>
            <div className='absolute -right-24 -top-24 size-72 rounded-full border border-white/10' />
  
            <div className='relative max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
                Visit Meadowbrook
              </p>
  
              <h2 className='mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl'>
                Experience {locationName} for yourself.
              </h2>
  
              <p className='mt-6 max-w-2xl text-lg leading-8 text-white/75'>
                Meet our team, explore our community, and learn
                more about the care and rehabilitation options
                available at {locationName}.
              </p>
  
              <div className='mt-8 flex flex-wrap gap-4'>
                <Button
                  to='/contact'
                  className='gap-2'
                >
                  <FiCalendar />
                  Schedule a Tour
                </Button>
  
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                  className='inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold transition hover:bg-white/10'
                >
                  <FiPhone />
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }