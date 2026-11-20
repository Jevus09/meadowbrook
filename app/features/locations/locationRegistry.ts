import { naperville } from './data/naperville'
import { lagrange } from './data/lagrange'
import { bolingbrook } from './data/bolingbrook'

export const locationRegistry = {
  naperville,
  lagrange,
  bolingbrook,
} as const

export type LocationSlug =
  keyof typeof locationRegistry