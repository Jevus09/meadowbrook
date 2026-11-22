import type { LocationData } from '../types'
//import napervilleVid from '../../../src/videos/MB_Naperville-1080.mp4'


import napervilleimg from '@/src/images/locations/naperville/image-20.jpeg'
import bedroom from '@/src/images/locations/naperville/bedroom.jpg'
import community from '@/src/images/locations/naperville/community.jpg'
import icecream from '@/src/images/locations/naperville/icecream.jpg'
import hero from '@/src/images/locations/naperville/banner.png'




export const naperville: LocationData = {
  slug: 'naperville',
  name: 'Meadowbrook Naperville',
  city: 'Naperville',
  eyebrow: 'Meadowbrook Naperville',
  title: 'Exceptional Care. Close to Home.',
  description: 'Personalized post-hospital rehabilitation and extended care in the heart of Naperville.',
  heroImage: hero,
  heroImageAlt: 'Meadowbrook Naperville',
  contact: {
    address: '720 Raymond Dr.',
    city: 'Naperville',
    state: 'IL',
    zip: '60563',
    phone: '(630) 355-0220',
    fax: '(630) 305-6496',
  },
  intro: {
    eyebrow: 'Welcome to Naperville',
    title: 'Care designed around you.',
    paragraphs: [ 'Located in the heart of Naperville, Meadowbrook provides personalized rehabilitation and care in a comfortable, supportive environment.',
                  'Our approach combines clinical programs, rehabilitation, and personal attention to help make every patient and resident’s experience as comfortable and successful as possible.',
    ],
    image: napervilleimg,
    imageAlt: 'Exterior of Meadowbrook Naperville',
  },

  specialties: {
    eyebrow: 'Areas of Specialty',
    title: 'Specialized care, all in one place.',
    description: 'Our Naperville location provides rehabilitation and specialized care programs designed around a wide range of recovery and long-term needs.',
    items: [
      {title: 'Private & Semi-Private Recovery Rooms',},
      {title: 'State-of-the-Art Rehabilitation Gym',},
      {title: 'Pulmonary Rehab & Recovery',},
      {title: 'Wound Management',},
      {title: 'Cardiac Care & Recovery',},
      {title: 'Orthopedic Rehabilitation', },
      {title: 'In-House Hemo & Peritoneal Dialysis',},
      {title: 'Long-Term Care',},
      {title: 'Secured Memory Care', },
    ],
  },

  gallery: [
    { src: bedroom,
      alt: 'Rehabilitation gym at Meadowbrook Naperville',
    },
    { src: community,
      alt: 'Patient room at Meadowbrook Naperville',
    },
    { src: icecream,
      alt: 'Dining area at Meadowbrook Naperville',
    },
  ],

  video: {
    title: 'Tour Meadowbrook Naperville',
    description: 'Explore our rehabilitation spaces, accommodations, and community.',
    src: "",
    poster: napervilleimg,
  },
}