import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'

import gallery1 from '../../src/images/gallery/gallery1.png'
import gallery2 from '../../src/images/gallery/gallery2.jpg'
import gallery3 from '../../src/images/gallery/gallery3.jpg'
import gallery4 from '../../src/images/gallery/gallery4.png'
import gallery5 from '../../src/images/gallery/gallery5.png'
import gallery6 from '../../src/images/gallery/gallery6.jpg'

export function meta() {
  return [
    {
      title: 'Gallery | Meadowbrook Rehabilitation',
    },
  ]
}

const images = [
  {
    src: gallery1,
    alt: 'Meadowbrook rehabilitation space',
  },
  {
    src: gallery2,
    alt: 'Resident community area',
  },
  {
    src: gallery3,
    alt: 'Meadowbrook dining area',
  },
  {
    src: gallery4,
    alt: 'Rehabilitation therapy space',
  },
  {
    src: gallery5,
    alt: 'Meadowbrook resident room',
  },
  {
    src: gallery6,
    alt: 'Outdoor community space',
  },
]

export default function GalleryPage() {
  return (
    <>
      <section className='bg-sage-50 py-20'>
        <Container>
          <SectionHeading
            eyebrow='Gallery'
            title='Moments at Meadowbrook'
            description='A closer look at rehabilitation, resident life, dining, amenities, community events, and welcoming spaces.'
          />

          <div className='mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {images.map((image, i) => (
              <div
                key={image.src}
                className={`overflow-hidden rounded-2xl ${
                  i % 5 === 0
                    ? 'row-span-2 min-h-96'
                    : 'min-h-44'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className='h-120 w-auto object-cover transition duration-500 hover:scale-105'
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}