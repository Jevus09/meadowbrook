import { locations } from '@/data/mock/locations'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/common/Button'
import { LocationCards } from '@/components/cards/LocationCard'

export default function location() {
  return (
    <>
      <section className='bg-sage-50 py-20'>
        <Container>
          <SectionHeading
            eyebrow='Our Locations'
            title='Care close to home'
            description='Location content is currently mocked and can later be managed through the admin dashboard.'
          />
        <LocationCards />
        </Container>
      </section>
    </>
  )
}
