import { FiCalendar, FiMapPin } from 'react-icons/fi'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'

export interface ServiceHeroProps {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt?: string
}

export function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
}: ServiceHeroProps) {
  return (
    <section className='relative min-h-[560px] overflow-hidden'>
      <img
        src={image}
        alt={imageAlt}
        className='absolute inset-0 h-full w-full object-cover'
      />

      <div className='absolute inset-0 bg-gradient-to-r from-meadow-950/95 via-meadow-950/70 to-meadow-950/10' />

      <Container className='relative flex min-h-[560px] items-center py-20'>
        <div className='max-w-2xl text-white'>
          {eyebrow && (
            <p className='mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold-400'>
              {eyebrow}
            </p>
          )}

          <h1 className='font-serif text-5xl font-semibold leading-[1.05] md:text-6xl'>
            {title}
          </h1>

          <p className='mt-6 max-w-xl text-lg leading-8 text-white/85'>
            {description}
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <Button
            variant='secondary'
              to='/contact'
              className='gap-2'
            >
              <FiCalendar />
              Schedule a Tour
            </Button>

            <Button
              to='/locations'
              variant='secondary'
              className='gap-2'
            >
              <FiMapPin />
              Find a Location
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}