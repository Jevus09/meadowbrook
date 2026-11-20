import { LocationPage } from '@/features/locations/LocationPage'
import {
  locationRegistry,
  type LocationSlug,
} from '@/features/locations/locationRegistry'

import type { Route } from './+types/location-detail'

export function loader({
  params,
}: Route.LoaderArgs) {
  const slug = params.slug

  if (
    !slug ||
    !(slug in locationRegistry)
  ) {
    throw new Response('Location not found', {
      status: 404,
    })
  }

  return {
    slug: slug as LocationSlug,
  }
}

export default function LocationDetail({
  loaderData,
}: Route.ComponentProps) {
  const location =
    locationRegistry[loaderData.slug]

  return (
    <LocationPage location={location} />
  )
}