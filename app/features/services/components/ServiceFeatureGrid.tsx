import type { IconType } from 'react-icons'
import {
  FiHeart,
  FiHome,
  FiShield,
  FiSmile,
  FiStar,
  FiUsers,
} from 'react-icons/fi'

import { Container } from '@/components/common/Container'

export type ServiceFeatureIcon =
  | 'heart'
  | 'home'
  | 'shield'
  | 'smile'
  | 'star'
  | 'users'

export interface ServiceFeature {
  title: string
  description: string
  icon?: ServiceFeatureIcon
}

export interface ServiceFeatureGridProps {
  features: ServiceFeature[]
  eyebrow?: string
  title: string
  description?: string
}

const featureIcons: Record<ServiceFeatureIcon, IconType> = {
  heart: FiHeart,
  home: FiHome,
  shield: FiShield,
  smile: FiSmile,
  star: FiStar,
  users: FiUsers,
}

export function ServiceFeatureGrid({
  features,
  eyebrow,
  title,
  description,
}: ServiceFeatureGridProps) {
  return (
    <section className='bg-stone-50 py-20 lg:py-28'>
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          {eyebrow && (
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
              {eyebrow}
            </p>
          )}

          <h2 className='mt-3 font-serif text-4xl font-semibold text-meadow-950 md:text-5xl'>
            {title}
          </h2>

          {description && (
            <p className='mt-5 text-lg leading-8 text-slate-600'>
              {description}
            </p>
          )}
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => {
            const Icon = feature.icon
              ? featureIcons[feature.icon]
              : FiHeart

            return (
              <article
                key={feature.title}
                className='rounded-3xl border border-black/5 bg-white p-8 shadow-sm'
              >
                <div className='grid size-12 place-items-center rounded-2xl bg-meadow-50 text-xl text-meadow-800'>
                  <Icon />
                </div>

                <h3 className='mt-5 font-serif text-2xl font-semibold text-meadow-950'>
                  {feature.title}
                </h3>

                <p className='mt-3 leading-7 text-slate-600'>
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}