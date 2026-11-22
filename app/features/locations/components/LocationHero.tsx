import {
    FiCalendar,
    FiMapPin,
    FiPhone,
  } from 'react-icons/fi'
  
  import { Button } from '@/components/common/Button'
  import { Container } from '@/components/common/Container'
  
  export interface LocationHeroProps {
    eyebrow?: string
    title: string
    description: string
    image: string
    imageAlt?: string
    phone: string
  }
  
  export function LocationHero({
    eyebrow,
    title,
    description,
    image,
    imageAlt = '',
    phone,
  }: LocationHeroProps) {
    return (
      <section className='relative min-h-600px overflow-hidden'>
        <img
          src={image}
          alt={imageAlt}
          className='absolute inset-0 h-full w-full object-cover'
        />
  
        <div className='absolute inset-0 bg-linear-to-r from-meadow-950/35 via-meadow-950/40 to-transparent' />
  
        <Container className='relative flex min-h-600px justify-center items-center py-20'>
          <div className='max-w-2xl text-white'>
            {eyebrow && (
              <p className='text-sm font-semibold uppercase tracking-[0.22em] text-gold-400'>
                {eyebrow}
              </p>
            )}
  
            <h1 className='mt-4 font-serif text-5xl font-semibold leading-[1.05] md:text-6xl'>
              {title}
            </h1>
  
            <p className='mt-6 max-w-xl text-lg leading-8 text-white/85'>
              {description}
            </p>
  
            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Button
                to='/contact'
                className='gap-2'
              >
                <FiCalendar />
                Schedule a Tour
              </Button>
  
              <a
                href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                className='inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10'
              >
                <FiPhone />
                {phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    )
  }