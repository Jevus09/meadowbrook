import { LocationHero } from './components/LocationHero'
import { LocationContactBar } from './components/LocationContactBar'
import { LocationIntro } from './components/LocationIntro'
import { LocationSpecialties } from './components/LocationSpecialties'
import { LocationGallery } from './components/LocationGallery'
import { LocationVideo } from './components/LocationVideo'
import { LocationCTA } from './components/LocationCTA'

import type { LocationData } from './types'

export interface LocationPageProps {
  location: LocationData
}

export function LocationPage({
  location,
}: LocationPageProps) {
  return (
    <>
      <LocationHero
        eyebrow={location.eyebrow}
        title={location.title}
        description={location.description}
        image={location.heroImage}
        imageAlt={location.heroImageAlt}
        phone={location.contact.phone}
      />

      <LocationContactBar
        contact={location.contact}
      />

      <LocationIntro
        {...location.intro}
      />

      <LocationSpecialties
        {...location.specialties}
      />

      {location.gallery && (
        <LocationGallery
          images={location.gallery}
          locationName={location.name}
        />
      )}

      {location.video && (
        <LocationVideo
          {...location.video}
        />
      )}

      <LocationCTA
        locationName={location.name}
        phone={location.contact.phone}
      />
    </>
  )
}