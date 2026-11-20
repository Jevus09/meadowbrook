import {
    FiArrowRight,
    FiCalendar,
    FiPhone,
  } from 'react-icons/fi'
  
  import { Button } from '@/components/common/Button'
  import { Container } from '@/components/common/Container'
  
  export interface ServiceCTAProps {
    eyebrow?: string
    title?: string
    description?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }
  
  export function ServiceCTA({
    eyebrow = 'Take the Next Step',
    title = 'Let us help you find the right care.',
    description = 'Our team is here to answer your questions, discuss your care options, and help you schedule a personal visit to Meadowbrook.',
    primaryLabel = 'Schedule a Tour',
    primaryTo = '/contact',
    secondaryLabel = 'Contact Us',
    secondaryTo = '/contact',
  }: ServiceCTAProps) {
    return (
      <section className='bg-stone-50 py-20 lg:py-28'>
        <Container>
          <div className='relative overflow-hidden rounded-[2rem] bg-meadow-900 px-8 py-14 text-white md:px-14 lg:px-20 lg:py-20'>
            <div className='absolute -right-24 -top-24 size-72 rounded-full border border-white/10' />
  
            <div className='absolute -bottom-32 right-28 size-72 rounded-full border border-white/10' />
  
            <div className='relative max-w-3xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
                {eyebrow}
              </p>
  
              <h2 className='mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl'>
                {title}
              </h2>
  
              <p className='mt-6 max-w-2xl text-lg leading-8 text-white/75'>
                {description}
              </p>
  
              <div className='mt-8 flex flex-wrap gap-4'>
                <Button
                  to={primaryTo}
                  variant='secondary'
                  className='gap-2'
                >
                  <FiCalendar />
  
                  {primaryLabel}
  
                  <FiArrowRight />
                </Button>
  
                <Button
                  to={secondaryTo}
                  variant='secondary'
                  className='gap-2'
                >
                  <FiPhone />
  
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }