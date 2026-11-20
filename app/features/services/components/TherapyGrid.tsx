import type { IconType } from 'react-icons'
import {
  FiActivity,
  FiHeart,
  FiMessageCircle,
} from 'react-icons/fi'

import { Container } from '@/components/common/Container'

export type TherapyIcon =
  | 'physical'
  | 'occupational'
  | 'speech'

export interface Therapy {
  title: string
  description: string
  icon?: TherapyIcon
}

export interface TherapyGridProps {
  therapies: Therapy[]
  eyebrow?: string
  title?: string
  description?: string
}

const therapyIcons: Record<TherapyIcon, IconType> = {
  physical: FiActivity,
  occupational: FiHeart,
  speech: FiMessageCircle,
}

export function TherapyGrid({
  therapies,
  eyebrow = 'Therapy Services',
  title = 'A coordinated approach to recovery.',
  description,
}: TherapyGridProps) {
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

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {therapies.map((therapy) => {
            const Icon = therapy.icon
              ? therapyIcons[therapy.icon]
              : FiActivity

            return (
              <article
                key={therapy.title}
                className='rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'
              >
                <div className='grid size-14 place-items-center rounded-2xl bg-meadow-50 text-2xl text-meadow-800'>
                  <Icon />
                </div>

                <h3 className='mt-6 font-serif text-2xl font-semibold text-meadow-950'>
                  {therapy.title}
                </h3>

                <p className='mt-4 leading-7 text-slate-600'>
                  {therapy.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}