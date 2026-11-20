import { FiPlus } from 'react-icons/fi'

import { Container } from '@/components/common/Container'

export interface ServiceFAQItem {
  question: string
  answer: string
}

export interface ServiceFAQProps {
  items: ServiceFAQItem[]
  eyebrow?: string
  title?: string
  description?: string
}

export function ServiceFAQ({
  items,
  eyebrow = 'Frequently Asked Questions',
  title = 'Questions about care?',
  description = 'We understand that choosing the right care is an important decision. Here are answers to some common questions.',
}: ServiceFAQProps) {
  if (items.length === 0) {
    return null
  }

  return (
    <section className='bg-white py-20 lg:py-28'>
      <Container>
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
              {eyebrow}
            </p>

            <h2 className='mt-3 font-serif text-4xl font-semibold text-meadow-950'>
              {title}
            </h2>

            {description && (
              <p className='mt-5 text-lg leading-8 text-slate-600'>
                {description}
              </p>
            )}
          </div>

          <div className='space-y-3'>
            {items.map((item) => (
              <details
                key={item.question}
                className='group rounded-2xl border border-black/10 bg-white'
              >
                <summary className='flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-semibold text-meadow-950'>
                  <span>{item.question}</span>

                  <FiPlus className='shrink-0 text-xl transition-transform duration-200 group-open:rotate-45' />
                </summary>

                <div className='px-6 pb-6'>
                  <p className='leading-7 text-slate-600'>
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}