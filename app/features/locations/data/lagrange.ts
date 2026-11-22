import type { LocationData } from '../types'
import laGrangeImg from '@/src/images/contactPage/Lagrange_front.png'
import hero from '@/src/images/locations/naperville/banner.png'
import bedroom from '@/src/images/locations/laGrange/room.jpg'
import community from '@/src/images/locations/laGrange/community.jpg'
import livingSpace from '@/src/images/locations/laGrange/livingSpace.jpg'
import staff from '@/src/images/locations/laGrange/staff.jpeg'



export const lagrange: LocationData = {
  slug: 'lagrange',
  name: 'Meadowbrook LaGrange',
  city: 'LaGrange',
  eyebrow: 'Meadowbrook LaGrange',
  title: 'Premier Post-Hospital Rehabilitation.',
  description: 'Short-term rehabilitation, therapy, and personalized care in a comfortable, thoughtfully designed environment.',
  heroImage: hero,
  heroImageAlt: 'Meadowbrook LaGrange',
  contact: {
    address: '339 S. 9th Ave.',
    city: 'LaGrange',
    state: 'IL',
    zip: '60525',
    phone: '(708) 354-4660',
    fax: '(708) 354-0590',
  },
  intro: {
    eyebrow: 'Welcome to LaGrange',
    title: 'A supportive environment for recovery.',
    paragraphs: [
      'Meadowbrook LaGrange provides short-term post-hospital rehabilitation and therapy with a focus on independence, comfort, and quality of life.',
      'Our healthcare professionals work together to support each patient’s physical, emotional, and social needs throughout their recovery.',
    ],
    image: laGrangeImg,
    imageAlt: 'Exterior of Meadowbrook LaGrange',
  },
  specialties: {
    eyebrow: 'Areas of Specialty',
    title: 'Advanced rehabilitation and care.',
    description: 'Specialized clinical programs and rehabilitation services support patients throughout their recovery journey.',
    items: [
      { title: 'State-of-the-Art Rehabilitation Gym',  },
      { title: 'Pulmonary Rehab & Recovery', },
      { title: 'Wound Management', },
      { title: 'Cardiac Care & Recovery', },
      { title: 'Orthopedic Rehabilitation', },
      { title: 'In-House Hemo & Peritoneal Dialysis', },
      { title: 'Long-Term Care', },
    ],
  },

  gallery: [
    { src: bedroom,
      alt: 'Rehabilitation gym at Meadowbrook LaGrange',
    },
    { src: community,
      alt: 'Patient room at Meadowbrook LaGrange',
    },
    // { src: livingSpace,
    //   alt: 'Community space at Meadowbrook LaGrange',
    // },
    { src: staff,
      alt: 'Community space at Meadowbrook LaGrange',
    },
  ],

  video: {
    title: 'Tour Meadowbrook LaGrange',
    description: 'Take a look inside our rehabilitation and recovery environment.',
    src: '/videos/lagrange-tour.mp4',
    poster: laGrangeImg,
  },
}