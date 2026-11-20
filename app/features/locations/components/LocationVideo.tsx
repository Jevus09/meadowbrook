import { Container } from '@/components/common/Container'

export interface LocationVideoProps {
  title: string
  description?: string
  src: string
  poster?: string
}

export function LocationVideo({
  title,
  description,
  src,
  poster,
}: LocationVideoProps) {
  return (
    <section className='bg-white py-20 lg:py-28'>
      <Container>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
            Virtual Tour
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

        <div className='mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-black shadow-xl'>
          <video
            controls
            poster={poster}
            className='aspect-video w-full'
          >
            <source src={src} />
            Your browser does not support the video element.
          </video>
        </div>
      </Container>
    </section>
  )
}