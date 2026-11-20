import { Container } from '@/components/common/Container'

export interface ServiceIntroProps {
  eyebrow?: string
  title: string
  paragraphs: string[]
  image?: string
  imageAlt?: string
}

export function ServiceIntro({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt = '',
}: ServiceIntroProps) {
  return (
    <section className='bg-white py-20 lg:py-28'>
      <Container>
        <div
          className={
            image
              ? 'grid items-center gap-12 lg:grid-cols-2 lg:gap-20'
              : 'mx-auto max-w-4xl'
          }
        >
          {image && (
            <div className='overflow-hidden rounded-3xl'>
              <img
                src={image}
                alt={imageAlt}
                className='aspect-[4/3] h-full w-full object-cover'
              />
            </div>
          )}

          <div>
            {eyebrow && (
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                {eyebrow}
              </p>
            )}

            <h2 className='mt-3 font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
              {title}
            </h2>

            <div className='mt-6 space-y-5'>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className='text-lg leading-8 text-slate-600'
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}