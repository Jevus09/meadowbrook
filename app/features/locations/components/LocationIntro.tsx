import { Container } from '@/components/common/Container'

export interface LocationIntroProps {
  eyebrow?: string
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

export function LocationIntro({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
}: LocationIntroProps) {
  return (
    <section className='bg-white py-20 lg:py-28'>
      <Container>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
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

          <div className='overflow-hidden rounded-3xl'>
            <img
              src={image}
              alt={imageAlt}
              className='aspect-4/3 h-full w-full object-cover'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}