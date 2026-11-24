import { useMemo, useState } from 'react'
import {
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiX,
} from 'react-icons/fi'

import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { cn } from '@/lib/utils/cn'

import gallery1 from '../../src/images/gallery/gallery1.webp'
import gallery2 from '../../src/images/gallery/gallery2.webp'
import gallery3 from '../../src/images/gallery/gallery3.webp'
import gallery4 from '../../src/images/gallery/gallery4.webp'
import gallery5 from '../../src/images/gallery/gallery5.webp'
import gallery6 from '../../src/images/gallery/gallery6.jpg'
import gallery7 from '../../src/images/gallery/gallery7.webp'
import gallery8 from '../../src/images/gallery/gallery8.webp'
import gallery9 from '../../src/images/gallery/bed.webp'
import gallery10 from '../../src/images/gallery/bedroom.webp'
import gallery11 from '../../src/images/gallery/fitness.webp'

export function meta() {
  return [
    {
      title: 'Gallery | Meadowbrook Rehabilitation',
    },
  ]
}

type GalleryCategory =
  | 'Rehabilitation'
  | 'Community'
  | 'Dining'
  | 'Amenities'
  | 'Rooms'
  | 'Outdoors'

interface GalleryImage {
  src: string
  alt: string
  category: GalleryCategory
}

const images: GalleryImage[] = [
  {
    src: gallery1,
    alt: 'Meadowbrook rehabilitation space',
    category: 'Rehabilitation',
  },
  {
    src: gallery2,
    alt: 'Resident community area',
    category: 'Community',
  },
  {
    src: gallery3,
    alt: 'Meadowbrook dining area',
    category: 'Dining',
  },
  {
    src: gallery4,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery5,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },
  // {
  //   src: gallery6,
  //   alt: 'Outdoor community space',
  //   category: 'Outdoors',
  // },
  {
    src: gallery7,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery8,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },
  {
    src: gallery9,
    alt: 'Outdoor community space',
    category: 'Outdoors',
  },
  {
    src: gallery10,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery11,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },
  {
    src: gallery1,
    alt: 'Meadowbrook rehabilitation space',
    category: 'Rehabilitation',
  },
  {
    src: gallery2,
    alt: 'Resident community area',
    category: 'Community',
  },
  {
    src: gallery3,
    alt: 'Meadowbrook dining area',
    category: 'Dining',
  },
  {
    src: gallery4,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery5,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },
  // {
  //   src: gallery6,
  //   alt: 'Outdoor community space',
  //   category: 'Outdoors',
  // },
  {
    src: gallery7,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery8,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },
  {
    src: gallery9,
    alt: 'Outdoor community space',
    category: 'Outdoors',
  },
  {
    src: gallery10,
    alt: 'Rehabilitation therapy space',
    category: 'Rehabilitation',
  },
  {
    src: gallery11,
    alt: 'Meadowbrook resident room',
    category: 'Rooms',
  },

]

const categories = [
  'All',
  ...Array.from(
    new Set(images.map((image) => image.category)),
  ),
]

const INITIAL_IMAGE_COUNT = 12

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_IMAGE_COUNT)

  const [selectedImage, setSelectedImage] =
    useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'All') {
      return images
    }

    return images.filter(
      (image) =>
        image.category === selectedCategory,
    )
  }, [selectedCategory])

  const visibleImages = filteredImages.slice(
    0,
    visibleCount,
  )

  const handleCategoryChange = (
    category: string,
  ) => {
    setSelectedCategory(category)
    setVisibleCount(INITIAL_IMAGE_COUNT)
    setSelectedImage(null)
  }

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const showPrevious = () => {
    if (selectedImage === null) return

    setSelectedImage(
      selectedImage === 0
        ? visibleImages.length - 1
        : selectedImage - 1,
    )
  }

  const showNext = () => {
    if (selectedImage === null) return

    setSelectedImage(
      selectedImage === visibleImages.length - 1
        ? 0
        : selectedImage + 1,
    )
  }

  return (
    <>
      {/* Hero */}
      <section className='bg-meadow-950 py-12 text-white'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-gold-400'>
            Explore
            </p>

            <h1 className='mt-4 font-serif text-5xl font-semibold sm:text-6xl'>
            Life at Meadowbrook
            </h1>

            <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70'>
            Browse our collection and get a closer look at the spaces, people, and experiences throughout Meadowbrook
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className='bg-stone-50 py-16 lg:py-24'>
        <Container>
          <div className='flex flex-col gap-8'>
            {/* Heading + Filters */}
            <div className='flex flex-col gap-8 border-b border-slate-200 pb-8 lg:flex-row items-center justify-center'>
              {/* <div className='max-w-xl'>
                <SectionHeading
                  eyebrow='Explore'
                  title='Life at Meadowbrook'
                  description='Browse our collection and get a closer look at the spaces, people, and experiences throughout Meadowbrook.'
                />
              </div> */}

              <div className='flex flex-wrap  gap-2'>
                {categories.map((category) => {
                  const active =
                    selectedCategory === category

                  return (
                    <button
                      key={category}
                      type='button'
                      onClick={() =>
                        handleCategoryChange(category)
                      }
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                        active
                          ? 'bg-meadow-950 text-white'
                          : 'border border-slate-200 bg-white text-slate-600 hover:border-meadow-300 hover:text-meadow-900',
                      )}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Results Count */}
            <div className='flex items-center justify-between'>
              <p className='text-sm text-slate-500'>
                {filteredImages.length}{' '}
                {filteredImages.length === 1
                  ? 'photo'
                  : 'photos'}
              </p>

              {selectedCategory !== 'All' && (
                <button
                  type='button'
                  onClick={() =>
                    handleCategoryChange('All')
                  }
                  className='text-sm font-semibold text-meadow-800 transition hover:text-meadow-600'
                >
                  Clear filter
                </button>
              )}
            </div>

            {/* Masonry Gallery */}
            <div className='columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4'>
              {visibleImages.map(
                (image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    type='button'
                    onClick={() =>
                      openImage(index)
                    }
                    className='group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-slate-200 text-left'
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading='lazy'
                      className='h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]'
                    />

                    {/* Hover Overlay */}
                    <div className='absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-black/0 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100'>
                      <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.15em] text-white/70'>
                          {image.category}
                        </p>

                        <p className='mt-1 text-sm font-medium text-white'>
                          {image.alt}
                        </p>
                      </div>

                      <div className='grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur'>
                        <FiMaximize2 />
                      </div>
                    </div>
                  </button>
                ),
              )}
            </div>

            {/* Empty State */}
            {filteredImages.length === 0 && (
              <div className='rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center'>
                <p className='font-serif text-2xl font-semibold text-meadow-950'>
                  No photos found
                </p>

                <p className='mt-2 text-slate-500'>
                  There are no photos in this
                  category yet.
                </p>
              </div>
            )}

            {/* Load More */}
            {visibleCount <
              filteredImages.length && (
              <div className='flex justify-center pt-6'>
                <button
                  type='button'
                  onClick={() =>
                    setVisibleCount(
                      (count) => count + 12,
                    )
                  }
                  className='rounded-full border border-meadow-900 bg-white px-7 py-3 text-sm font-semibold text-meadow-900 transition hover:bg-meadow-900 hover:text-white'
                >
                  Load More Photos
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className='fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 sm:p-8'
          role='dialog'
          aria-modal='true'
          aria-label='Gallery image preview'
        >
          {/* Close */}
          <button
            type='button'
            onClick={closeImage}
            className='absolute right-5 top-5 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20'
            aria-label='Close image'
          >
            <FiX />
          </button>

          {/* Previous */}
          {visibleImages.length > 1 && (
            <button
              type='button'
              onClick={showPrevious}
              className='absolute left-3 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:left-6'
              aria-label='Previous image'
            >
              <FiChevronLeft />
            </button>
          )}

          {/* Image */}
          <div className='flex max-h-[90vh] max-w-6xl flex-col items-center'>
            <img
              src={
                visibleImages[selectedImage].src
              }
              alt={
                visibleImages[selectedImage].alt
              }
              className='max-h-[80vh] max-w-full rounded-2xl object-contain'
            />

            <div className='mt-5 text-center text-white'>
              <p className='text-xs font-semibold uppercase tracking-[0.18em] text-white/50'>
                {
                  visibleImages[selectedImage]
                    .category
                }
              </p>

              <p className='mt-2 text-sm text-white/80'>
                {
                  visibleImages[selectedImage]
                    .alt
                }
              </p>

              <p className='mt-2 text-xs text-white/40'>
                {selectedImage + 1} of{' '}
                {visibleImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          {visibleImages.length > 1 && (
            <button
              type='button'
              onClick={showNext}
              className='absolute right-3 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-6'
              aria-label='Next image'
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  )
}