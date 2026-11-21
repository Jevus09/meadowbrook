

import { Link } from 'react-router'
import bolingbrookImg from '../../src/images/contactPage/Bolingbrook_front.png'
import NapervilleImg from '../../src/images/contactPage/Naperville_front.png'
import laGrangeImg from '../../src/images/contactPage/Lagrange_front.png'
import { FiArrowRight,  FiMapPin, } from 'react-icons/fi'


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


export function LocationCards() {
return <>
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
</>


            }