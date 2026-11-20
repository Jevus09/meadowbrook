import type { CareTypeData } from '../components/CareTypeSection'
import type { ServiceFAQItem } from '../components/ServiceFAQ'
import type { ServiceGalleryImage } from '../components/ServiceGallery'
import introImg from '../../../src/images/services/extended-care/intro.jpg'
import longTermImg from '../../../src/images/services/extended-care/long-term-care.jpg'
import memoryImg from '../../../src/images/services/extended-care/memory-care.jpeg'
import respiteImg from '../../../src/images/services/extended-care/respite-care.jpeg'

import activity from '../../../src/images/services/extended-care/activity.jpg'
import community from '../../../src/images/services/extended-care/community.jpg'
import dining from '../../../src/images/services/extended-care/dining.jpg'
import hero from '../../../src/images/services/extended-care/hero.jpg'






const longTermCare: CareTypeData = {
  eyebrow: 'Long-Term Care',

  title: 'Comfort, support, and personalized care.',

  description:
    'Our long-term care program provides ongoing nursing support in a comfortable and welcoming environment. Each resident receives an individualized care plan designed around their health, comfort, preferences, and daily needs.',

  image: longTermImg,

  imageAlt: 'Resident enjoying time with a Meadowbrook caregiver',

  features: [
    '24-hour nursing support',
    'Individualized care planning',
    'Medication management',
    'Assistance with daily activities',
    'Social and recreational programming',
    'Comfortable resident accommodations',
  ],

  ctaLabel: 'Learn About Long-Term Care',

  ctaTo: '/contact',
}

const memoryCare: CareTypeData = {
  eyebrow: 'Memory Care',

  title: 'Supportive care with dignity and understanding.',

  description:
    'Memory care provides compassionate support for individuals living with memory loss, Alzheimer’s disease, or other forms of dementia. Our approach emphasizes safety, familiarity, meaningful engagement, and each resident’s individual needs.',

  image: memoryImg,

  imageAlt: 'Caregiver spending time with a resident',

  features: [
    'Supportive and secure environment',
    'Individualized care plans',
    'Structured daily routines',
    'Meaningful activities and engagement',
    'Assistance with daily living',
    'Compassionate, resident-centered support',
  ],

  ctaLabel: 'Learn About Memory Care',

  ctaTo: '/contact',
}

const respiteCare: CareTypeData = {
  eyebrow: 'Respite Care',

  title: 'Short-term care when families need support.',

  description:
    'Respite care offers short-term stays for individuals who need temporary professional support. It can provide caregivers with time away while giving their loved one access to Meadowbrook’s care, services, activities, and community.',

  image: respiteImg,

  imageAlt: 'Resident relaxing in a comfortable Meadowbrook community space',

  features: [
    'Short-term stays',
    'Professional nursing support',
    'Assistance with daily activities',
    'Meals and accommodations',
    'Social and recreational activities',
    'Support for family caregivers',
  ],

  ctaLabel: 'Ask About Respite Care',

  ctaTo: '/contact',
}

const gallery: ServiceGalleryImage[] = [
  {
    src: community,
    alt: 'Residents enjoying a Meadowbrook community space',
  },
  {
    src: activity,
    alt: 'Resident activity at Meadowbrook',
  },
  {
    src: dining,
    alt: 'Dining and community area at Meadowbrook',
  },
]

const faq: ServiceFAQItem[] = [
  {
    question: 'What is the difference between long-term care and respite care?',

    answer:
      'Long-term care is designed for residents who need ongoing support, while respite care is intended for shorter stays when temporary care is needed.',
  },
  {
    question: 'Who may benefit from memory care?',

    answer:
      'Memory care may be appropriate for individuals experiencing Alzheimer’s disease, dementia, or other forms of memory loss who benefit from additional structure, support, and supervision.',
  },
  {
    question: 'How long can someone stay for respite care?',

    answer:
      'The appropriate length of a respite stay depends on individual circumstances and availability. Our team can discuss current options and help determine whether respite care is appropriate.',
  },
  {
    question: 'Can we tour Meadowbrook before choosing a care option?',

    answer:
      'Yes. We encourage families to visit, meet our team, explore the community, and ask questions before making a care decision.',
  },
]

export const extendedCare = {
  title: 'Compassionate Care for Every Stage of Life.',

  description:
    'Long-term, memory, and respite care designed to provide comfort, dignity, support, and peace of mind for residents and their families.',

  heroImage: hero,

  intro: {
    eyebrow: 'Extended Care Services',

    title: 'Care centered around the individual.',

    paragraphs: [
      'Choosing care for yourself or someone you love is an important decision. Meadowbrook provides supportive care options designed around each resident’s individual needs, preferences, and circumstances.',

      'Whether someone needs ongoing long-term support, specialized memory care, or a temporary respite stay, our team works closely with residents and families to create a welcoming and personalized experience.',
    ],

    image: introImg,

    imageAlt: 'Meadowbrook resident and caregiver spending time together',
  },

  longTermCare,

  memoryCare,

  respiteCare,

  gallery,

  faq,
}
