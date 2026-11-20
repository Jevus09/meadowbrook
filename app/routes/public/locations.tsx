import { locations } from '@/data/mock/locations'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/common/Button'

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
          <div className='mt-10 grid gap-5 md:grid-cols-3'>
            {locations.map((location) => (
              <div
                key={location.slug}
                className='soft-card rounded-2xl bg-white p-6'
              >
                <p className='font-serif text-2xl font-semibold text-meadow-950'>
                  {location.city}
                </p>
                <p className='mt-2 text-sm text-neutral-600'>
                  {location.address}
                </p>
                <Button
                  to={`/locations/${location.slug}`}
                  variant='ghost'
                  className='mt-4 px-0'
                >
                  View Location →
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
