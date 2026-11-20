import { ExtendedCare } from './pages/ExtendedCare'
import { PostHospitalRehab } from './pages/PostHospitalRehab'

export const serviceRegistry = {
  'post-hospital-rehabilitation': PostHospitalRehab,
  'extended-care': ExtendedCare,
} as const

export type ServiceSlug =
  keyof typeof serviceRegistry