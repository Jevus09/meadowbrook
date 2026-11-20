import { ServiceHero } from '../components/ServiceHero'
import { ServiceIntro } from '../components/ServiceIntro'
import { CareTypeSection } from '../components/CareTypeSection'
import { ServiceGallery } from '../components/ServiceGallery'
import { ServiceFAQ } from '../components/ServiceFAQ'
import { ServiceCTA } from '../components/ServiceCTA'

import { extendedCare } from '../data/extendedCare'

export function ExtendedCare() {
  return (
    <>
      <ServiceHero
        eyebrow='Extended Care Services'
        title={extendedCare.title}
        description={extendedCare.description}
        image={extendedCare.heroImage}
        imageAlt='Resident receiving compassionate care at Meadowbrook'
      />

      <ServiceIntro
        {...extendedCare.intro}
      />

      <CareTypeSection
        care={extendedCare.longTermCare}
      />

      <CareTypeSection
        care={extendedCare.memoryCare}
        reverse
        className='bg-stone-50'
      />

      <CareTypeSection
        care={extendedCare.respiteCare}
      />

      <ServiceGallery
        images={extendedCare.gallery}
        eyebrow='Life at Meadowbrook'
        title='More than care. A community.'
        description='Comfortable surroundings, engaging activities, and welcoming spaces help residents feel at home.'
      />

      <ServiceFAQ
        items={extendedCare.faq}
        title='Choosing the right care.'
        description='Understanding your options is an important first step. Our team can help you determine which type of care best fits your needs.'
      />

      <ServiceCTA
        title='Not sure which care option is right?'
        description='Our team can help you understand the differences between long-term care, memory care, and respite care and guide you toward the right next step.'
        primaryLabel='Schedule a Tour'
        secondaryLabel='Talk With Our Team'
      />
    </>
  )
}