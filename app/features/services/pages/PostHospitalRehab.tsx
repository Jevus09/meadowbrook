import { ServiceHero } from '../components/ServiceHero'
import { ServiceIntro } from '../components/ServiceIntro'
import { TherapyGrid } from '../components/TherapyGrid'
import { SpecialtyProgram } from '../components/SpecialtyProgram'
import { ServiceGallery } from '../components/ServiceGallery'
import { ServiceFAQ } from '../components/ServiceFAQ'
import { ServiceCTA } from '../components/ServiceCTA'

import { postHospitalRehab } from '../data/postHospitalRehab'

export function PostHospitalRehab() {
  return (
    <>
      <ServiceHero
        eyebrow='Post-Hospital Rehabilitation'
        title={postHospitalRehab.title}
        description={postHospitalRehab.description}
        image={postHospitalRehab.heroImage}
        imageAlt='Post-hospital rehabilitation at Meadowbrook'
      />

      <ServiceIntro
        {...postHospitalRehab.intro}
      />

      <TherapyGrid
        therapies={postHospitalRehab.therapies}
        description='Physical, occupational, and speech therapy work together to support each patient’s path toward greater independence.'
      />

      <SpecialtyProgram
        program={postHospitalRehab.cardiac}
      />

      <SpecialtyProgram
        program={postHospitalRehab.pulmonary}
        reverse
        className='bg-stone-50'
      />

      <SpecialtyProgram
        program={postHospitalRehab.renal}
      />

      <SpecialtyProgram
        program={postHospitalRehab.woundCare}
        reverse
        className='bg-stone-50'
      />

      <ServiceGallery
        images={postHospitalRehab.gallery}
        eyebrow='Rehabilitation at Meadowbrook'
        title='A setting designed for recovery.'
        description='Explore the spaces, therapy environments, and amenities available throughout your rehabilitation experience.'
      />

      <ServiceFAQ
        items={postHospitalRehab.faq}
      />

      <ServiceCTA
        title='Ready to begin your recovery?'
        description='Talk with our team about post-hospital rehabilitation, availability, and the Meadowbrook location that best fits your needs.'
      />
    </>
  )
}