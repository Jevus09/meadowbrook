import { Container } from '@/components/common/Container'

export interface ServiceGalleryImage {
  src: string
  alt?: string
}

export interface ServiceGalleryProps {
  images: Array<string | ServiceGalleryImage>
  eyebrow?: string
  title?: string
  description?: string
}

export function ServiceGallery({
  images,
  eyebrow = 'Life at Meadowbrook',
  title = 'Care in a comfortable environment.',
  description,
}: ServiceGalleryProps) {
  if (images.length === 0) {
    return null
  }

  const normalizedImages = images.map((image) =>
    typeof image === 'string'
      ? {
          src: image,
          alt: '',
        }
      : image
  )

  const mainImage = normalizedImages[0]
  const secondaryImages = normalizedImages.slice(1, 3)

  return (
    <section className='bg-meadow-950 py-20 text-white lg:py-28'>
      <Container>
        <div className='max-w-2xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
            {eyebrow}
          </p>

          <h2 className='mt-3 font-serif text-4xl font-semibold md:text-5xl'>
            {title}
          </h2>

          {description && (
            <p className='mt-5 text-lg leading-8 text-white/70'>
              {description}
            </p>
          )}
        </div>

        <div className='mt-12 grid gap-4 lg:grid-cols-5'>
          <div className='overflow-hidden rounded-3xl lg:col-span-3'>
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className='h-full min-h-[480px] w-full object-cover transition duration-500 hover:scale-[1.02]'
            />
          </div>

          {secondaryImages.length > 0 && (
            <div className='grid gap-4 lg:col-span-2'>
              {secondaryImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className='overflow-hidden rounded-3xl'
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='h-full min-h-[230px] w-full object-cover transition duration-500 hover:scale-[1.02]'
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}