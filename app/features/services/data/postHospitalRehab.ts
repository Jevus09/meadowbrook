import type { SpecialtyProgramData } from '../components/SpecialtyProgram'

import type { Therapy } from '../components/TherapyGrid'

import type { ServiceFAQItem } from '../components/ServiceFAQ'

import type { ServiceGalleryImage } from '../components/ServiceGallery'
import hero from '../../../src/images/services/rehabilitation/hero.jpg'
import intro from '../../../src/images/services/rehabilitation/intro.jpg'
import  gym  from '../../../src/images/services/rehabilitation/rehab-gym.jpg'
import therapy from'../../../src/images/services/rehabilitation/therapy.jpg'
import room from '../../../src/images/services/rehabilitation/patient-room.png'
import renalCare from '../../../src/images/services/rehabilitation/renal.jpg'
import  wound  from '../../../src/images/services/rehabilitation/wound.jpg'
import cardiacCare from'../../../src/images/services/rehabilitation/cardiac.jpg'
import pulmonaryCare from '../../../src/images/services/rehabilitation/pulmonary.jpg'

const therapies: Therapy[] = [
  {
    title: 'Physical Therapy',
    description:
      'Focused on improving strength, balance, endurance, mobility, and overall physical independence.',
    icon: 'physical',
  },
  {
    title: 'Occupational Therapy',
    description:
      'Helps patients regain the skills needed for everyday activities such as dressing, bathing, and personal care.',
    icon: 'occupational',
  },
  {
    title: 'Speech Therapy',
    description:
      'Supports communication, cognition, swallowing, speech, and other skills needed for greater independence.',
    icon: 'speech',
  },
]

const cardiac: SpecialtyProgramData = {
  eyebrow: 'Specialized Care',
  title: 'Cardiac Care',
  description:
    'Specialized rehabilitation and clinical support designed to help patients recover following cardiac events, procedures, or hospitalization.',
  image: cardiacCare,
  imageAlt: 'Healthcare professional assisting a rehabilitation patient',
  features: [
    'Congestive heart failure management',
    'Post-cardiac procedure recovery',
    'Specialty-trained clinical staff',
    'Physician-directed care',
    'On-site clinical support',
    'Physical, occupational, and speech therapy',
  ],
}

const pulmonary: SpecialtyProgramData = {
  eyebrow: 'Specialized Care',
  title: 'Pulmonary Rehabilitation & Recovery',
  description:
    'Individualized pulmonary support helps patients strengthen endurance, improve breathing, and recover following respiratory illness or hospitalization.',
  image: pulmonaryCare,
  imageAlt: 'Patient participating in a rehabilitation program',
  features: [
    'COPD management',
    'Pneumonia recovery',
    'Respiratory support',
    'Pulmonary rehabilitation',
    'Clinical monitoring',
    'Individualized therapy programs',
  ],
}

const renal: SpecialtyProgramData = {
  eyebrow: 'Specialized Care',
  title: 'Renal Management',
  description:
    'Coordinated clinical and rehabilitation support for patients managing renal conditions while recovering from hospitalization.',
  image: renalCare,
  imageAlt: 'Care team working with a rehabilitation patient',
  features: [
    'Individualized clinical monitoring',
    'Coordinated physician care',
    'Medication management',
    'Nutritional support',
    'Rehabilitation therapy',
    'Care planning and education',
  ],
}

const woundCare: SpecialtyProgramData = {
  eyebrow: 'Specialized Care',
  title: 'Wound Management',
  description:
    'Specialized wound management combines clinical expertise, ongoing monitoring, and individualized treatment plans to support healing and recovery.',
  image: wound,
  imageAlt: 'Clinical professional providing patient care',
  features: [
    'Individualized wound treatment plans',
    'Ongoing wound assessment',
    'Clinical monitoring',
    'Pressure injury management',
    'Nutritional support',
    'Interdisciplinary care planning',
  ],
}

const gallery: ServiceGalleryImage[] = [
  {
    src: gym,
    alt: 'Meadowbrook rehabilitation therapy gym',
  },
  {
    src: therapy,
    alt: 'Patient participating in rehabilitation therapy',
  },
  {
    src: room,
    alt: 'Comfortable patient accommodations at Meadowbrook',
  },
]

const faq: ServiceFAQItem[] = [
  {
    question: 'How long does post-hospital rehabilitation typically last?',
    answer:
      'The length of rehabilitation depends on each patient’s medical needs, goals, and progress. Our interdisciplinary team develops an individualized care plan for every patient.',
  },
  {
    question: 'What types of therapy are available?',
    answer:
      'Depending on individual needs, rehabilitation may include physical, occupational, and speech therapy as part of a coordinated recovery plan.',
  },
  {
    question: 'Can family members participate in the recovery process?',
    answer:
      'Family involvement can be an important part of recovery. Our team works with patients and their families throughout care planning and preparation for the next stage of recovery.',
  },
  {
    question: 'How do I learn whether Meadowbrook is right for my recovery?',
    answer:
      'Contact our team to discuss your needs, ask questions, or schedule a visit to one of our Meadowbrook locations.',
  },
]

export const postHospitalRehab = {
  title: 'Recover Stronger. Return Home Confidently.',

  description:
    'Personalized post-hospital rehabilitation combining skilled clinical care and therapy to help you regain strength, independence, and confidence.',

  heroImage: hero, //'/images/services/rehabilitation/hero.jpg',

  intro: {
    eyebrow: 'Your Recovery',

    title: 'Personalized rehabilitation designed around you.',

    paragraphs: [
      'Recovery does not look the same for everyone. Our rehabilitation program brings together skilled nursing, therapy, and clinical support around an individualized plan designed for each patient.',

      'From the day you arrive, our goal is to help you make meaningful progress toward greater independence and a safe return home.',
    ],

    image: intro,

    imageAlt: 'Therapist working with a patient during rehabilitation',
  },

  therapies,

  cardiac,

  pulmonary,

  renal,

  woundCare,

  gallery,

  faq,
}
