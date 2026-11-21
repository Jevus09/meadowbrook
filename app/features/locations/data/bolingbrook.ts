import type { LocationData } from '../types'
import bollingbrookImg from '@/src/images/contactPage/Bolingbrook_front.png'

export const bolingbrook: LocationData = {
  slug: 'bolingbrook',
  name: 'Meadowbrook Bolingbrook',
  city: 'Bolingbrook',
  eyebrow: 'Meadowbrook Bolingbrook',
  title: 'Personalized Care. Exceptional Recovery.',
  description: 'Post-hospital rehabilitation and extended care centered around the needs of each patient and resident.',
  heroImage: '/images/locations/bolingbrook/hero.jpg',
  heroImageAlt: 'Meadowbrook Bolingbrook',
  contact: {
    address: '431 W. Remington Blvd.',
    city: 'Bolingbrook',
    state: 'IL',
    zip: '60440',
    phone: '(630) 759-1112',
    fax: '(630) 759-6925',
  },
  intro: {
    eyebrow: 'Welcome to Bolingbrook',
    title: 'Personal attention throughout your care.',

    paragraphs: [
      'Meadowbrook Bolingbrook combines clinical programs, rehabilitation, and personalized support in an environment designed around each patient and resident.',
      'Whether joining us for short-term rehabilitation or an extended stay, our team works to make the transition comfortable while supporting each individual’s goals.',
    ],
    image:bollingbrookImg,
    imageAlt:'Exterior of Meadowbrook Bolingbrook',
  },

  specialties: {
    eyebrow: 'Areas of Specialty',
    title: 'Comprehensive care and rehabilitation.',
    description: 'Our Bolingbrook location offers specialized programs supporting recovery, rehabilitation, and extended care.',
    items: [
      { title: 'Private & Semi-Private Recovery Rooms', },
      { title: 'State-of-the-Art Rehabilitation Gym', },
      { title: 'Pulmonary Rehab & Recovery', },
      { title: 'Wound Management', },
      { title: 'Cardiac Care & Recovery', },
      { title: 'Orthopedic Rehabilitation', },
      { title: 'Long-Term Care', },
      { title: 'Secured Memory Care', },
    ],
  },

  gallery: [
    { src: '/images/locations/bolingbrook/rehab-gym.jpg',
      alt: 'Rehabilitation gym at Meadowbrook Bolingbrook',
    },
    { src: '/images/locations/bolingbrook/room.jpg',
      alt: 'Patient room at Meadowbrook Bolingbrook',
    },
    { src: '/images/locations/bolingbrook/community.jpg',
      alt: 'Community space at Meadowbrook Bolingbrook',
    },
  ],
}