import { Link } from 'react-router'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiUser,
} from 'react-icons/fi'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'

import { successStories } from '@/data/mock/successStories'

import type { Route } from './+types/success-story-details'

export function loader({
  params,
}: Route.LoaderArgs) {
  const storyId = Number.parseInt(
    params.id ?? '',
    10,
  )

  if (Number.isNaN(storyId)) {
    throw new Response('Story not found', {
      status: 404,
    })
  }

  const story = successStories.find(
    (story) => story.id === storyId,
  )

  if (!story) {
    throw new Response('Story not found', {
      status: 404,
    })
  }

  return {
    story,
  }
}

export default function SuccessStoryDetail({
  loaderData,
}: Route.ComponentProps) {
  const { story } = loaderData

  return (
    <>
      {/* Back Navigation */}
      <section className='border-b border-slate-200 bg-white'>
        <Container>
          <div className='py-5'>
            <Link
              to='/success-stories'
              className='inline-flex items-center gap-2 text-sm font-semibold text-meadow-800 transition hover:text-meadow-600'
            >
              <FiArrowLeft />
              Back to Success Stories
            </Link>
          </div>
        </Container>
      </section>

      {/* Story Header */}
      <section className='bg-white py-14 lg:py-20'>
        <Container>
          <div className='mx-auto max-w-4xl'>
            <span className='inline-flex rounded-full bg-meadow-50 px-4 py-1.5 text-sm font-semibold text-meadow-800'>
              {story.category}
            </span>

            <h1 className='mt-5 font-serif text-4xl font-semibold leading-tight text-meadow-950 sm:text-5xl lg:text-6xl'>
              {story.title}
            </h1>

            <div className='mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500'>
              <div className='flex items-center gap-2'>
                <FiUser />
                <span>{story.author}</span>
              </div>

              <div className='flex items-center gap-2'>
                <FiCalendar />
                <span>{story.date}</span>
              </div>

              <div className='flex items-center gap-2'>
                <FiClock />
                <span>{story.readTime}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className='bg-white'>
        <Container>
          <div className='mx-auto max-w-6xl overflow-hidden rounded-3xl'>
            <img
              src={story.image}
              alt={story.title}
              className='aspect-16/8 w-full object-cover'
            />
          </div>
        </Container>
      </section>

      {/* Story Content */}
      <section className='bg-white py-16 lg:py-24'>
        <Container>
          <article className='mx-auto max-w-3xl'>
            <p className='font-serif text-2xl leading-10 text-meadow-950'>
              {story.excerpt}
            </p>

            <div className='my-10 h-px bg-slate-200' />

            <div className='space-y-6 text-lg leading-8 text-slate-700'>
              {story.content
                .split('\n\n')
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
            </div>
          </article>
        </Container>
      </section>

      {/* CTA */}
      <section className='bg-meadow-950 py-20 text-white'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Your Journey
            </p>

            <h2 className='mt-4 font-serif text-4xl font-semibold md:text-5xl'>
              Inspired by this story?
            </h2>

            <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70'>
              Every recovery journey is different.
              Talk with our team to learn how
              Meadowbrook can support you or someone
              you love.
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Button to='/contact'>
                Contact Us
              </Button>

              <Link
                to='/services'
                className='inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10'
              >
                Explore Our Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}