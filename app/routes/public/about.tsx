import { Link } from 'react-router'
import {
  FiActivity,
  FiArrowRight,
  FiCheck,
  FiCoffee,
  FiHeart,
  FiHome,
  FiMapPin,
  FiScissors,
  FiSun,
  FiUsers,
} from 'react-icons/fi'

import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import bolingbrookImg from '../../src/images/contactPage/Bolingbrook_front.png'
import NapervilleImg from '../../src/images/contactPage/Naperville_front.png'
import laGrangeImg from '../../src/images/contactPage/Lagrange_front.png'
//import  naperville  from '@/features/locations/data/naperville'
import hero from  '../../src/images/about/hero.png'
import story from  '../../src/images/about/story.jpg'
import personCentered from '../../src/images/about/person-centered.jpg'
import banner from '../../src/images/about/BANNER.jpg'



const values = [
  {
    icon: FiHeart,
    title: 'Person-Centered Care',
    description:
      'Every individual brings their own goals, preferences, routines, and circumstances. Our approach begins by understanding the person behind the care plan.',
  },
  {
    icon: FiUsers,
    title: 'Families as Partners',
    description:
      'Families are an important part of the care experience. We encourage open communication and collaboration throughout each individual’s stay.',
  },
  {
    icon: FiActivity,
    title: 'Focused on Independence',
    description:
      'Whether recovering after a hospital stay or receiving extended care, our goal is to support the highest level of physical and mental independence possible.',
  },
  {
    icon: FiHome,
    title: 'Comfort That Feels Familiar',
    description:
      'Clinical care is only part of the experience. We create welcoming environments where patients and residents can feel comfortable, secure, and at home.',
  },
]

const amenities = [
  {
    icon: FiCoffee,
    title: 'Dining & Café',
    description:
      'Restaurant-style dining, café spaces, snacks, and comfortable places to visit with family and friends.',
  },
  {
    icon: FiScissors,
    title: 'Salon & Spa Services',
    description:
      'Personal care and salon services add another level of comfort and normalcy during a stay.',
  },
  {
    icon: FiSun,
    title: 'Outdoor Spaces',
    description:
      'Landscaped patios and walking areas provide spaces to relax, visit, and enjoy time outdoors.',
  },
  {
    icon: FiHome,
    title: 'Comfortable Surroundings',
    description:
      'Thoughtfully designed spaces help create an environment centered on healing, comfort, and everyday living.',
  },
]

const locations = [
  {
    name: 'Meadowbrook Naperville',
    city: 'Naperville, Illinois',
    image: NapervilleImg,
    to: '/locations/naperville',
  },
  {
    name: 'Meadowbrook LaGrange',
    city: 'LaGrange, Illinois',
    image: laGrangeImg,
    to: '/locations/lagrange',
  },
  {
    name: 'Meadowbrook Bolingbrook',
    city: 'Bolingbrook, Illinois',
    image: bolingbrookImg,
    to: '/locations/bolingbrook',
  },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className='relative isolate min-h-620px overflow-hidden bg-meadow-950'>
        <img
          src= {hero}
          alt='Meadowbrook Rehabilitation'
          className='absolute inset-0 h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-linear-to-r from-meadow-950/95 via-meadow-950/75 to-meadow-950/20' />

        <Container className='relative flex min-h-620px items-center py-24'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-ivory'>
              About Meadowbrook
            </p>

            <h1 className='mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl'>
              Care centered around people.
            </h1>

            <p className='mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl'>
              For more than 25 years, Meadowbrook has provided rehabilitation
              and personalized care to individuals and families throughout
              Chicagoland.
            </p>

            <div className='mt-9 flex flex-wrap gap-4'>
              <Button variant='secondary' to='/contact'>Schedule a Tour</Button>

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

      {/* Our Story */}
      <section className='bg-white py-20 lg:py-28'>
        <Container>
          <div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                Our Story
              </p>

              <h2 className='mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
                More than 25 years of care, comfort, and community.
              </h2>

              <div className='mt-7 space-y-5 text-lg leading-8 text-slate-600'>
                <p>
                  Meadowbrook has spent more than two decades caring for people
                  throughout the Chicagoland area during some of life&apos;s
                  most important transitions.
                </p>

                <p>
                  Some come to us after a hospital stay with the goal of
                  returning home. Others choose Meadowbrook for ongoing support
                  and a place they can call home. In either case, our focus
                  remains the same: provide thoughtful clinical care while
                  treating every patient and resident with dignity, respect, and
                  personal attention.
                </p>

                <p>
                  Our approach brings rehabilitation, nursing, hospitality, and
                  everyday comfort together to create an experience built around
                  the individual rather than the institution.
                </p>
              </div>
            </div>

            <div className='relative'>
              <div className='overflow-hidden rounded-2rem'>
                <img
                  src={story}
                  alt='Care at Meadowbrook Rehabilitation'
                  className='aspect-4/5 w-full object-cover'
                />
              </div>

              <div className='absolute -bottom-8 -left-4 rounded-2xl bg-meadow-950 px-7 py-6 text-white shadow-xl sm:-left-8'>
                <p className='font-serif text-4xl font-semibold'>25+</p>
                <p className='mt-1 text-sm text-white/70'>
                  Years serving Chicagoland
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className='bg-meadow-950 py-20 text-white lg:py-28'>
        <Container>
          <div className='mx-auto max-w-4xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Our Philosophy
            </p>

            <h2 className='mt-6 font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl'>
              Dignity, independence, and quality of life remain at the heart of
              everything we do.
            </h2>

            <p className='mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70'>
              Meadowbrook was built around a simple belief: illness, injury, or
              age should never diminish a person&apos;s sense of dignity or
              pride. Our responsibility is to create an environment where each
              individual is supported in reaching and maintaining their highest
              possible level of function and well-being.
            </p>
          </div>

          <div className='mt-16 grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3'>
            <div className='bg-white/0.04 p-8 text-center lg:p-10'>
              <p className='font-serif text-3xl font-semibold'>Dignity</p>
              <p className='mt-3 leading-7 text-white/65'>
                Every individual deserves to be treated with respect,
                compassion, and personal attention.
              </p>
            </div>

            <div className='bg-white/0.04 p-8 text-center lg:p-10'>
              <p className='font-serif text-3xl font-semibold'>Independence</p>
              <p className='mt-3 leading-7 text-white/65'>
                Care and rehabilitation should support each person&apos;s
                ability to remain as independent as possible.
              </p>
            </div>

            <div className='bg-white/0.04 p-8 text-center lg:p-10'>
              <p className='font-serif text-3xl font-semibold'>
                Quality of Life
              </p>
              <p className='mt-3 leading-7 text-white/65'>
                Comfort, relationships, personal routines, and emotional
                well-being are essential parts of care.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Person-Centered Care */}
      <section className='bg-stone-50 py-20 lg:py-28'>
        <Container>
          <div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
            <div className='order-2 lg:order-1'>
              <div className='overflow-hidden rounded-2rem'>
                <img
                  src={personCentered}
                  alt='Caregiver spending time with a Meadowbrook resident'
                  className='aspect-4/5 w-full object-cover'
                />
              </div>
            </div>

            <div className='order-1 lg:order-2'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                Person-Centered Care
              </p>

              <h2 className='mt-4 font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
                Care designed around the individual.
              </h2>

              <p className='mt-6 text-lg leading-8 text-slate-600'>
                No two people have exactly the same needs. Meadowbrook considers
                each patient&apos;s preferences, goals, family situation,
                lifestyle, and circumstances when developing an individualized
                plan of care.
              </p>

              <p className='mt-5 text-lg leading-8 text-slate-600'>
                Families are encouraged to participate alongside our care teams,
                helping ensure decisions reflect what matters most to the person
                receiving care.
              </p>

              <div className='mt-8 space-y-4'>
                {[
                  'Individualized care planning',
                  'Family participation and communication',
                  'Flexible daily routines whenever appropriate',
                  'Care decisions centered around personal needs and preferences',
                ].map((item) => (
                  <div key={item} className='flex items-start gap-3'>
                    <div className='mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-meadow-100 text-meadow-800'>
                      <FiCheck className='h-3.5 w-3.5' />
                    </div>

                    <p className='leading-7 text-slate-700'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Meadowbrook */}
      <section className='bg-white py-20 lg:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
              Why Meadowbrook
            </p>

            <h2 className='mt-4 font-serif text-4xl font-semibold text-meadow-950 md:text-5xl'>
              More than clinical care.
            </h2>

            <p className='mt-5 text-lg leading-8 text-slate-600'>
              The Meadowbrook experience combines personalized care, experienced
              professionals, rehabilitation expertise, and a comfortable
              environment designed around the people we serve.
            </p>
          </div>

          <div className='mt-14 grid gap-6 md:grid-cols-2'>
            {values.map((value) => {
              const Icon = value.icon

              return (
                <div
                  key={value.title}
                  className='group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-meadow-200 hover:shadow-xl lg:p-10'
                >
                  <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-meadow-50 text-meadow-800 transition group-hover:bg-meadow-950 group-hover:text-white'>
                    <Icon className='h-6 w-6' />
                  </div>

                  <h3 className='mt-7 font-serif text-2xl font-semibold text-meadow-950'>
                    {value.title}
                  </h3>

                  <p className='mt-3 leading-7 text-slate-600'>
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Experienced Team */}
      <section className='bg-ivory py-20 lg:py-28'>
        <Container>
          <div className='grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                Experienced Care Teams
              </p>

              <h2 className='mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
                Experience you can rely on. People you can get to know.
              </h2>

              <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600'>
                Meadowbrook&apos;s care model brings together nursing, therapy,
                medical leadership, social services, activities, and other
                disciplines to support the physical, emotional, and social needs
                of each individual.
              </p>

              <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
                Many Meadowbrook team members have spent years building
                relationships within our communities, helping provide
                consistency and familiarity throughout a patient&apos;s or
                resident&apos;s stay.
              </p>

              <div className='mt-8'>
                <Link
                  to='/services/post-hospital-rehabilitation'
                  className='inline-flex items-center gap-2 font-semibold text-meadow-800 transition hover:text-meadow-600'
                >
                  Explore rehabilitation services
                  <FiArrowRight />
                </Link>
              </div>
            </div>

            <div className='rounded-2rem bg-white p-8 shadow-sm sm:p-10'>
              <p className='font-serif text-6xl font-semibold text-meadow-900'>
                20+
              </p>

              <p className='mt-3 text-xl font-semibold text-meadow-950'>
                Years of service
              </p>

              <p className='mt-3 leading-7 text-slate-600'>
                The existing Meadowbrook organization highlights team members
                who have served its communities for more than two decades.
              </p>

              <div className='my-8 h-px bg-slate-200' />

              <p className='font-serif text-2xl font-semibold text-meadow-950'>
                Collaborative care
              </p>

              <p className='mt-3 leading-7 text-slate-600'>
                Nurses, therapists, medical leadership, social services, and
                activity teams work together around each individual&apos;s
                needs.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Meadowbrook Experience */}
      <section className='bg-white py-20 lg:py-28'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
              The Meadowbrook Experience
            </p>

            <h2 className='mt-4 font-serif text-4xl font-semibold text-meadow-950 md:text-5xl'>
              An environment designed for comfort and healing.
            </h2>

            <p className='mt-5 text-lg leading-8 text-slate-600'>
              Thoughtful amenities and welcoming spaces help make Meadowbrook
              feel less institutional and more like a community.
            </p>
          </div>

          <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {amenities.map((amenity) => {
              const Icon = amenity.icon

              return (
                <div
                  key={amenity.title}
                  className='rounded-3xl bg-stone-50 p-7'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-white text-meadow-800 shadow-sm'>
                    <Icon className='h-5 w-5' />
                  </div>

                  <h3 className='mt-6 font-serif text-xl font-semibold text-meadow-950'>
                    {amenity.title}
                  </h3>

                  <p className='mt-3 text-sm leading-7 text-slate-600'>
                    {amenity.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Image Break */}
      <section className='relative min-h-120 overflow-hidden'>
        <img
          src= {banner}
          alt='Life at Meadowbrook Rehabilitation'
          className='absolute inset-0 h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-meadow-950/45' />

        <Container className='relative flex min-h-120 items-end py-16'>
          <div className='max-w-xl rounded-3xl bg-white/95 p-8 backdrop-blur sm:p-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
              A Sense of Home
            </p>

            <h2 className='mt-3 font-serif text-3xl font-semibold text-meadow-950 sm:text-4xl'>
              Care should support the whole person.
            </h2>

            <p className='mt-4 leading-7 text-slate-600'>
              Recovery and long-term well-being are influenced by more than
              clinical treatment. Comfort, familiar routines, meaningful
              relationships, and a welcoming environment all matter.
            </p>

            <Link
              to='/life-at-meadowbrook'
              className='mt-6 inline-flex items-center gap-2 font-semibold text-meadow-800 transition hover:text-meadow-600'
            >
              Life at Meadowbrook
              <FiArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className='bg-stone-50 py-20 lg:py-28'>
        <Container>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div className='max-w-2xl'>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                Our Communities
              </p>

              <h2 className='mt-4 font-serif text-4xl font-semibold text-meadow-950 md:text-5xl'>
                Three Meadowbrook locations.
              </h2>

              <p className='mt-5 text-lg leading-8 text-slate-600'>
                Explore our Naperville, LaGrange, and Bolingbrook communities
                and find the Meadowbrook location that best fits your needs.
              </p>
            </div>
          </div>

          <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {locations.map((location) => (
              <Link
                key={location.name}
                to={location.to}
                className='group relative min-h-105 overflow-hidden rounded-3xl bg-meadow-950'
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className='absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-linear-to-t from-meadow-950 via-meadow-950/30 to-transparent' />

                <div className='absolute inset-x-0 bottom-0 p-7 text-white sm:p-8'>
                  <div className='flex items-center gap-2 text-sm text-white/70'>
                    <FiMapPin />
                    {location.city}
                  </div>

                  <h3 className='mt-2 font-serif text-2xl font-semibold'>
                    {location.name}
                  </h3>

                  <div className='mt-5 inline-flex items-center gap-2 text-sm font-semibold'>
                    Explore Location
                    <FiArrowRight className='transition group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className='bg-ivory py-20 lg:py-24'>
        <Container>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Experience Meadowbrook
            </p>

            <h2 className='mt-4 font-serif text-4xl font-semibold text-black md:text-5xl'>
              Come see what makes Meadowbrook feel different.
            </h2>

            <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70'>
              Meet our team, explore our communities, and learn more about the
              care and rehabilitation options available at the Meadowbrook
              location nearest you.
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Button variant='primary' to='/contact'>Schedule a Tour</Button>

              <Link
                to='/locations'
                className='inline-flex items-center gap-2 rounded-full border border-gold/25 px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white/10'
              >
                Explore Locations
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
