import { FiCheck } from 'react-icons/fi'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils/cn'

export interface CareTypeData {
  eyebrow?: string
  title: string
  description: string
  image: string
  imageAlt?: string
  features?: string[]
  ctaLabel?: string
  ctaTo?: string
}

export interface CareTypeSectionProps {
  care: CareTypeData
  reverse?: boolean
  className?: string
}

export function CareTypeSection({
  care,
  reverse = false,
  className,
}: CareTypeSectionProps) {
  const {
    eyebrow,
    title,
    description,
    image,
    imageAlt = '',
    features = [],
    ctaLabel,
    ctaTo = '/contact',
  } = care

  return (
    <section
      className={cn(
        'bg-white py-20 lg:py-28',
        className
      )}
    >
      <Container>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          <div
            className={cn(
              'relative',
              reverse && 'lg:order-2'
            )}
          >
            <div className='overflow-hidden rounded-3xl'>
              <img
                src={image}
                alt={imageAlt}
                className='aspect-[4/3] h-full w-full object-cover'
              />
            </div>
          </div>

          <div
            className={cn(
              reverse && 'lg:order-1'
            )}
          >
            {eyebrow && (
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                {eyebrow}
              </p>
            )}

            <h2 className='mt-3 font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
              {title}
            </h2>

            <p className='mt-6 text-lg leading-8 text-slate-600'>
              {description}
            </p>

            {features.length > 0 && (
              <ul className='mt-8 space-y-4'>
                {features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-3'
                  >
                    <span className='mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-meadow-100 text-sm text-meadow-800'>
                      <FiCheck />
                    </span>

                    <span className='leading-7 text-slate-700'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {ctaLabel && (
              <div className='mt-8'>
                <Button to={ctaTo}>
                  {ctaLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}