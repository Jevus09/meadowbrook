import {
  FiArrowUpRight,
  FiCalendar,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import { Link } from 'react-router'

import { Container } from '@/components/common/Container'

import logo from 'app/src/images/logo.png'

const quickLinks = [
  {
    label: 'About Us',
    to: '/about',
  },
  {
    label: 'Life at Meadowbrook',
    to: '/life-at-meadowbrook',
  },
  {
    label: 'Success Stories',
    to: '/success-stories',
  },
  {
    label: 'News & Events',
    to: '/news',
  },
  {
    label: 'Gallery',
    to: '/gallery',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]

const services = [
  {
    label: 'Post-Hospital Rehabilitation',
    to: '/services/post-hospital-rehabilitation',
  },
  {
    label: 'Extended Care Services',
    to: '/services/extended-care',
  },
]

const locations = [
  {
    name: 'Naperville',
    address: '720 Raymond Dr.',
    city: 'Naperville, IL 60563',
    phone: '(630) 355-0220',
    to: '/locations/naperville',
  },
  {
    name: 'LaGrange',
    address: '339 S. 9th Ave.',
    city: 'LaGrange, IL 60525',
    phone: '(708) 354-4660',
    to: '/locations/lagrange',
  },
  {
    name: 'Bolingbrook',
    address: '431 W. Remington Blvd.',
    city: 'Bolingbrook, IL 60440',
    phone: '(630) 759-1112',
    to: '/locations/bolingbrook',
  },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-meadow-950 text-white'>
      {/* Main Footer */}
      <Container >
        <div className='grid gap-12 text-center py-20 sm:py-20  lg:grid-cols-[1.2fr_0.75fr_0.85fr_1.5fr] lg:gap-10'>
          {/* Brand */}
          <div className='flex flex-col items-center'>
            <Link
              to='/'
              className='inline-block rounded-2xl bg-white p-4'
            >
              <img
                src={logo}
                alt='Meadowbrook Rehabilitation'
                className='w-[210px]'
              />
            </Link>

            <p className='mt-6 max-w-sm text-sm leading-7 text-white/65'>
              Rehabilitation and personalized care
              centered around comfort, dignity,
              independence, and quality of life.
            </p>

            <Link
              to='/contact'
              className='mt-7 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-meadow-950 transition hover:bg-gold-300'
            >
              <FiCalendar />
              Schedule a Tour
            </Link>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Explore
            </p>

            <nav className='mt-5 flex flex-col items-center gap-3'>
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className='text-sm text-white/65 transition hover:text-white'
                >
                  {item.label}
                </Link>
              ))}

              <a
                href='https://www.indeed.com/cmp/Meadowbrook-Manor-1'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-sm text-white/65 transition hover:text-white'
              >
                Join the Team
                <FiArrowUpRight className='size-3.5' />
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className='flex flex-col items-center'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Our Services
            </p>

            <nav className='mt-5 flex flex-col items-center gap-4'>
              {services.map((service) => (
                <Link
                  key={service.label}
                  to={service.to}
                  className='text-sm leading-6 text-white/65 transition hover:text-white'
                >
                  {service.label}
                </Link>
              ))}
            </nav>

            <Link
              to='/services'
              className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-gold-400'
            >
              View all services
              <FiArrowUpRight className='size-4' />
            </Link>
          </div>

          {/* Locations */}
          <div className='flex flex-col items-center' >
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-gold-400'>
              Our Locations
            </p>

            <div className='mt-5 grid gap-5 place-items-center  sm:grid-cols-3 lg:grid-cols-2'>
              {locations.map((location) => (
                <div
                  key={location.name}
                  className='border-b border-white/10 pb-5 flex flex-col '
                >
                  <Link
                    to={location.to}
                    className='group inline-flex items-center gap-2 font-serif text-lg font-semibold text-white transition hover:text-gold-400'
                  >
                    {location.name}

                    <FiArrowUpRight className='size-4 opacity-50 transition group-hover:opacity-100' />
                  </Link>

                  {/* <div className='mt-2 flex items-start gap-2 text-sm leading-6 text-white/55'>
                    <FiMapPin className='mt-1 size-4 shrink-0' />

                    <div>
                      <p>{location.address}</p>
                      <p>{location.city}</p>
                    </div>
                  </div> */}

                  <a
                    href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
                    className='mt-2 inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white'
                  >
                    <FiPhone className='size-4' />
                    {location.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className='border-t border-white/10'>
        <Container>
          <div className='flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between'>
            <p>
              © {currentYear} Meadowbrook
              Rehabilitation. All rights reserved.
            </p>

            <div className='flex flex-wrap gap-x-5 gap-y-2'>
              <Link
                to='/privacy'
                className='transition hover:text-white'
              >
                Privacy Policy
              </Link>

              <Link
                to='/accessibility'
                className='transition hover:text-white'
              >
                Accessibility
              </Link>

              <Link
                to='/contact'
                className='transition hover:text-white'
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}