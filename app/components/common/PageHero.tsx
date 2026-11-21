import { Container } from './Container'
import img from '../../src/images/BANNER.jpg'
import { SectionHeading } from './SectionHeading'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description: string
}) {
  return (
    <section 
    
      className='relative overflow-hidden py-20 sm:py-24'
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url("${img}")`, backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='absolute inset-0' />
      <div>{/* <img src={img} /> */}</div>
      <Container  className='flex justify-center '>
        <div className='max-w-3xl'>
          {eyebrow ? (
            <p className='mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gold-500'>
              {eyebrow}
            </p>
          ) : null}
          <h1 className='page-title text-5xl font-semibold leading-[1.05] text-white! sm:text-6xl'>
            {title}
          </h1>
          <p className='mt-6 text-lg leading-8 text-ivory!'>
            {description}
          </p>
        </div>
      </Container>
    </section>
  )
}
