import { FiCheck } from 'react-icons/fi'

import { Container } from '@/components/common/Container'
import type { LocationSpecialty } from '../types'

export interface LocationSpecialtiesProps {
  eyebrow?: string
  title: string
  description?: string
  items: LocationSpecialty[]
}

export function LocationSpecialties({
  eyebrow = 'Areas of Specialty',
  title,
  description,
  items,
}: LocationSpecialtiesProps) {
  return (
    <section className='bg-stone-50 py-20 lg:py-28'>
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
            {eyebrow}
          </p>

          <h2 className='mt-3 font-serif text-4xl font-semibold text-meadow-950 md:text-5xl'>
            {title}
          </h2>

          {description && (
            <p className='mt-5 text-lg leading-8 text-slate-600'>
              {description}
            </p>
          )}
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map((item) => (
            <article
              key={item.title}
              className='rounded-2xl border border-black/5 bg-white p-6 shadow-sm'
            >
              <div className='flex items-start gap-4'>
                <div className='mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-meadow-100 text-meadow-800'>
                  <FiCheck />
                </div>

                <div>
                  <h3 className='font-serif text-xl font-semibold text-meadow-950'>
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className='mt-2 leading-7 text-slate-600'>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}