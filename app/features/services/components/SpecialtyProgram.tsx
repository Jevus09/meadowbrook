import { FiCheck } from 'react-icons/fi'

import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils/cn'

export interface SpecialtyProgramData {
  eyebrow?: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  features?: string[]
}

export interface SpecialtyProgramProps {
  program: SpecialtyProgramData
  reverse?: boolean
  className?: string
}

export function SpecialtyProgram({
  program,
  reverse = false,
  className,
}: SpecialtyProgramProps) {
  const {
    eyebrow,
    title,
    description,
    image,
    imageAlt = '',
    features = [],
  } = program

  return (
    <section
      className={cn(
        'bg-white py-16 lg:py-24',
        className
      )}
    >
      <Container>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          {image && (
            <div
              className={cn(
                'overflow-hidden rounded-3xl',
                reverse && 'lg:order-2'
              )}
            >
              <img
                src={image}
                alt={imageAlt}
                className='aspect-[4/3] h-full w-full object-cover'
              />
            </div>
          )}

          <div
            className={cn(
              !image && 'lg:col-span-2 lg:max-w-3xl',
              reverse && image && 'lg:order-1'
            )}
          >
            {eyebrow && (
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                {eyebrow}
              </p>
            )}

            <h2 className='mt-3 font-serif text-4xl font-semibold leading-tight text-meadow-950'>
              {title}
            </h2>

            {description && (
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                {description}
              </p>
            )}

            {features.length > 0 && (
              <ul className='mt-8 grid gap-4 sm:grid-cols-2'>
                {features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-3 text-slate-700'
                  >
                    <span className='mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-meadow-100 text-sm text-meadow-800'>
                      <FiCheck />
                    </span>

                    <span className='leading-6'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}