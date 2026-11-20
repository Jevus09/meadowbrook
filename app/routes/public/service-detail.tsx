import { serviceRegistry } from '@/features/services/serviceRegistry'
import type { Route } from './+types/service-detail'

export function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug

  if (!slug || !(slug in serviceRegistry)) {
    throw new Response('Not Found', {
      status: 404,
    })
  }

  return { slug }
}

export default function ServiceDetail({
  loaderData,
}: Route.ComponentProps) {
  const ServicePage =
    serviceRegistry[
      loaderData.slug as keyof typeof serviceRegistry
    ]

  return <ServicePage />
}