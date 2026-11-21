import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { PageHero } from '@/components/common/PageHero'
import { locations } from '@/data/mock/locations'
import { useState } from 'react'
import bolingbrookImg from '../../src/images/contactPage/Bolingbrook_front.png'
import NapervilleImg from '../../src/images/contactPage/Naperville_front.png'
import laGrangeImg from '../../src/images/contactPage/Lagrange_front.png'

export function meta() {
  return [{ title: 'Contact & Schedule a Tour | Meadowbrook Rehabilitation' }]
}
export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState<string | null>(
    'Meadowbrook%20Manor-Naperville%2C%20Raymond%20Drive%2C%20Naperville%2C%20IL%2C%20USA'
  )

  var contactLocations = [
    {
      name: 'MEADOWBROOK NAPERVILLE',
      location: '720 Raymond Drive Naperville, Illinois 60563',
      phone: '(630) 355-0220',
      fax: '(630) 305-6496',
      email: 'info@meadowbrookmanor.com',
      api: 'Meadowbrook%20Manor-Naperville%2C%20Raymond%20Drive%2C%20Naperville%2C%20IL%2C%20USA',
      background: NapervilleImg,
    },
    {
      name: 'MEADOWBROOK LAGRANGE',
      location: '339 S. 9th Avenue La Grange, Illinois 60525',
      phone: '(708) 354-4660',
      fax: '(708) 354-0590',
      email: 'info@meadowbrookmanor.com',
      api: 'Meadowbrook%20LaGrange%2C%209th%20Avenue%2C%20La%20Grange%2C%20IL%2C%20USA',
      background: laGrangeImg,
    },
    {
      name: 'MEADOWBROOK BOLINGBROOK',
      location: '431 W. Remington Blvd. Bolingbrook, Illinois 60440',
      phone: '(630) 759-1112',
      fax: '(630) 759-6925',
      email: 'info@meadowbrookmanor.com',
      api: 'Meadowbrook%20Bolingbrook%2C%20Remington%20Boulevard%2C%20Bolingbrook%2C%20IL%2C%20USA',
      background: bolingbrookImg,
    },
  ]

  
  return (
    <>
      <PageHero
        eyebrow='Get in Touch'
        title='Contact & Schedule a Tour'
        description="Ask a general question or plan a personal visit to the Meadowbrook location that's most convenient for you."
      />
      <div>
        <iframe
          className='w-full h-[70vh] md:pt-1'
          loading='lazy'
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/search?q=${activeLocation}&key=${mapsApiKey}`}
        ></iframe>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-2 md:px-12   bg-ivory'>
          {contactLocations.map((card, index) => (
            <div
              className={`
                    contact-card
                    relative flex flex-col
                    justify-center items-start
                    w-full
                    min-h-80 sm:min-h-95 lg:min-h-125
                    px-6 sm:px-8 lg:px-10
                    py-10
                    gap-3 sm:gap-4
                    text-left text-white
                    bg-cover bg-center bg-no-repeat
                    cursor-pointer
                    transition-all duration-300
                    hover:brightness-110
                  
                  `}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url("${card.background}")`,
              }}
              onClick={() => setActiveLocation(card.api)}
            >
              <h3 className='text-xl sm:text-2xl lg:text-2xl font-semibold tracking-wide mb-4'>
                {card.name}
              </h3>
              <div className='flex flex-col gap-3 text-sm sm:text-base leading-relaxed'>
                <p>{card.location}</p>
                <p>{card.phone}</p>
                <p>{card.fax}</p>
                <p className='break-all'>{card.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className='py-20'>
        <Container>
          <div className='soft-card mx-auto max-w-4xl rounded-2xl bg-white p-6 sm:p-8'>
            <div className='grid gap-5 sm:grid-cols-2'>
              <label className='text-sm font-semibold'>
                First Name
                <input className='mt-2 w-full rounded-xl border border-black/10 p-3 font-normal' />
              </label>
              <label className='text-sm font-semibold'>
                Last Name
                <input className='mt-2 w-full rounded-xl border border-black/10 p-3 font-normal' />
              </label>
              <label className='text-sm font-semibold'>
                Email
                <input
                  type='email'
                  className='mt-2 w-full rounded-xl border border-black/10 p-3 font-normal'
                />
              </label>
              <label className='text-sm font-semibold'>
                Phone
                <input className='mt-2 w-full rounded-xl border border-black/10 p-3 font-normal' />
              </label>
              <label className='text-sm font-semibold sm:col-span-2'>
                Preferred Location
                <select className='mt-2 w-full rounded-xl border border-black/10 p-3 font-normal'>
                  <option>Select a location</option>
                  {locations.map((l) => (
                    <option key={l.slug}>{l.city}</option>
                  ))}
                </select>
              </label>
              <label className='text-sm font-semibold sm:col-span-2'>
                General Message
                <textarea
                  className='mt-2 min-h-32 w-full rounded-xl border border-black/10 p-3 font-normal'
                  placeholder='Please do not include medical or sensitive health information.'
                />
              </label>
            </div>
            <p className='mt-4 text-xs leading-5 text-neutral-500'>
              For privacy, do not submit diagnoses, medical records,
              medications, or other sensitive health information through this
              form.
            </p>
            <Button type='button' className='mt-6 w-full'>
              Send Inquiry
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
