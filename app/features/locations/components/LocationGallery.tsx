import { Container } from '@/components/common/Container'
import type { LocationGalleryImage } from '../types'

export interface LocationGalleryProps {
  images: LocationGalleryImage[]
  locationName: string
}

export function LocationGallery({
  images,
  locationName,
}: LocationGalleryProps) {
  if (!images.length) {
    return null
  }

  return (
    <section className='bg-meadow-950 py-20 text-white lg:py-28'>
      <Container>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
            Inside Meadowbrook
          </p>

          <h2 className='mt-3 font-serif text-4xl font-semibold md:text-5xl'>
            Explore {locationName}
          </h2>

          <p className='mt-5 text-lg leading-8 text-white/70'>
            Take a closer look at our rehabilitation, living,
            dining, and community spaces.
          </p>
        </div>

        <div className='mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12'>
          {images.slice(0, 4).map((image, index) => (
            <div
              key={image.src}
              className={
                index === 0
                  ? 'overflow-hidden rounded-3xl md:col-span-2 lg:col-span-7 lg:row-span-2'
                  : 'overflow-hidden rounded-3xl lg:col-span-5'
              }
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-full min-h-260px w-full object-cover transition duration-500 hover:scale-[1.02]'
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}