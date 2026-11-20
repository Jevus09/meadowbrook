import type { Service } from "@/types/content";
import { BsHospitalFill } from "react-icons/bs";
import { GiHealthIncrease } from "react-icons/gi";
import { RiPsychotherapyFill } from "react-icons/ri";


// export const services: Service[] = [
//   { slug: "short-term-rehabilitation", title: "Short-Term Rehabilitation", description: "Focused, goal-oriented recovery after illness, injury, or surgery." },
//   { slug: "skilled-nursing", title: "Skilled Nursing Care", description: "Professional nursing support delivered with comfort and compassion." },
//   { slug: "physical-therapy", title: "Physical Therapy", description: "Personalized programs designed to restore strength, mobility, and confidence." },
//   { slug: "occupational-therapy", title: "Occupational Therapy", description: "Support for the skills and confidence needed for daily living." },
//   { slug: "speech-therapy", title: "Speech Therapy", description: "Specialized support for communication, cognition, and swallowing." },
//   { slug: "long-term-care", title: "Long-Term Care", description: "Ongoing care in a safe, welcoming, and supportive environment." },
// ];


export const services = [
  {
    slug: 'post-hospital-rehabilitation',
    title: 'Post-Hospital Rehabilitation',
    description:'Specialized rehabilitation designed to help patients recover and return home with confidence.',
    icon: BsHospitalFill

  },
  {
    slug: 'extended-care',
    title: 'Extended Care Services',
    description:
      'Compassionate care for every stage of life. Supportive, personalized care designed around the needs of each resident and their family.',
      icon: GiHealthIncrease
  },
  {
    slug: 'extended-care',
    title: 'Premier Therapy Provider',
    description:
      'Post-Hospital Rehabilitation patients will receive on site, specialized therapy offered by our contracted therapy provider, Ability Rehab.',
      icon: RiPsychotherapyFill
  },
  // {
  //   slug: 'memory-care',
  //   title: 'Memory Care',
  //   description:
  //     'A safe and supportive environment for individuals living with Alzheimer’s or dementia.',
  // },
  // {
  //   slug: 'respite-care',
  //   title: 'Respite Care',
  //   description:
  //     'Short-term care providing comfort for residents and peace of mind for caregivers.',
  //},
] as const