import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { FiArrowRight, FiHeart,} from 'react-icons/fi'
import StoryCard from '@/components/cards/StoryCard'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { successStories, categories,} from '@/data/mock/successStories'
import { PageHero } from '@/components/common/PageHero'


export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const filteredStories = useMemo(() => {
    if (selectedCategory === 'All') {
      return successStories
    }

    return successStories.filter(
      (story) =>
        story.category === selectedCategory,
    )
  }, [selectedCategory])

  return (
    <>
      {/* Hero */}

      <PageHero
        eyebrow='Patient Experiences'
        title='Success Stories'
        description="Discover stories of recovery, independence, and meaningful progress from individuals and families whose journeys have brought them to Meadowbrook."
      />



      {/* Filters */}
      <section className='border-b border-slate-200 bg-white py-8 '>
        <Container>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between '>
            {/* <div>
              <p className='text-sm font-semibold text-meadow-950'>
                Filter by Category
              </p>

              <p className='mt-1 text-sm text-slate-500'>
                Explore stories by care or recovery
                type.
              </p>
            </div> */}

            <div className='flex flex-wrap gap-2'>
              {categories.map((category) => {
                const active =
                  selectedCategory === category

                return (
                  <button
                    key={category}
                    type='button'
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? 'bg-meadow-950 text-white'
                        : 'bg-stone-100 text-slate-700 hover:bg-meadow-100 hover:text-meadow-950'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Stories */}
      <section className='bg-stone-50 py-20 lg:py-24'>
        <Container>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
              />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className='py-16 text-center'>
              <p className='text-lg text-slate-600'>
                No stories are available in this
                category yet.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className='bg-ivory text-black lg:py-24'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-meadow-950'>
              <FiHeart className='h-6 w-6 text-ivory' />
            </div>

            <h2 className='mt-6 font-serif text-4xl font-semibold md:text-5xl'>
              Ready to start your own journey?
            </h2>

            <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70'>
              Talk with our team about rehabilitation,
              extended care, and the Meadowbrook
              location that best fits your needs.
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Button to='/contact'>
                Contact Us
              </Button>

              <Link
                to='/services'
                className='inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white/10'
              >
                Our Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}