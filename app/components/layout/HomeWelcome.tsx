import { FiAward, FiCheckCircle } from 'react-icons/fi'

import { Container } from '@/components/common/Container'

//import jointCommission from '../../src/images/accreditations/joint-commission.png'
import usNews from '../../src/images/landingPage/Meadowbrook.png'
import newsweek from '../../src/images/landingPage/award.png'

export function HomeWelcome() {
    return (
        <section className='bg-meadow-50 py-20 lg:py-28'>
            <Container>
                <div className='grid items-start gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20'>
                    {/* Content */}
                    <div>
                        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-meadow-700'>
                            Welcome to Meadowbrook
                        </p>

                        <h2 className='mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-meadow-950 md:text-5xl'>
                            Compassionate care with comfort,
                            dignity, and recovery at the center.
                        </h2>

                        <div className='mt-7 max-w-3xl space-y-5 text-lg leading-8 text-slate-600'>
                            <p>
                                Whether joining Meadowbrook for
                                short-term post-hospital
                                rehabilitation or choosing one of
                                our communities for extended care,
                                every patient and resident is
                                welcomed like family.
                            </p>

                            <p>
                                Our teams combine clinical care,
                                rehabilitation, and thoughtful
                                amenities in an environment
                                designed to promote healing,
                                comfort, and confidence.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div className='mt-10 rounded-3xl border border-ivory bg-ivory p-7 shadow-sm sm:p-8'>
                            <div className='flex items-start gap-4'>
                                {/* <div className='flex size-11 shrink-0 items-center justify-center rounded-2xl bg-meadow-100 text-meadow-800'>
                                    <FiCheckCircle className='size-5' />
                                </div> */}

                                <div>
                                    <p className='flex item-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-meadow-700'>
                                    <FiCheckCircle className='flex size-5 shrink-0 items-center justify-center rounded-2xl bg-meadow-100 text-meadow-800' />   Our Philosophy
                                    </p>

                                    <p className='mt-3 text-lg leading-8 text-slate-700'>
                                        Human dignity and personal
                                        pride do not diminish with
                                        illness, injury, or age. Our
                                        goal is to provide a
                                        supportive and comfortable
                                        environment where each
                                        individual is encouraged to
                                        regain or maintain their
                                        highest possible level of
                                        physical and mental
                                        functioning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accreditation / Awards */}
                    <div className='lg:pt-3'>
                        <div className='rounded-[2rem] bg-ivory border border-ivory shadow-sm text-black sm:p-8'>
                            <div className='flex items-center justify-center w-full p-2'>
                                <div className='flex pt-4 md:size-20 items-center justify-center text-gold-600 '>
                                    <FiAward className='size-12' />
                                </div>

                                <div className='flex-col flex ' >
                                    <p className='text-sm font-semibold uppercase tracking-[0.16em] text-meadow-900'>
                                        Recognized Care
                                    </p>


                                    <p className='text-lg  md:text-2xl font-semibold'>
                                        Accreditation & Recognition
                                    </p>

                                </div>
                            </div>

                            {/* Joint Commission */}
                            <div className=' rounded-2xl pt-3 text-center'>
                                <img
                                    src={newsweek}
                                    alt='The Joint Commission accreditation'
                                    className='mx-auto max-h-32 '
                                />

                                <p className='mt-4 text-sm font-semibold leading-6 text-black'>
                                    Joint Commission accredited in
                                    Rehabilitation and Advanced Care
                                </p>
                            </div>

                            {/* Awards */}
                            {/* <div className='mt-4 grid grid-cols-2 gap-4'> */}
                            <div className=' rounded-2xl text-center'>
                                {/* <div className='flex min-h-44 items-center justify-center rounded-2xl bg-white p-5'>
                  <img
                    src={usNews}
                    alt='U.S. News Best Nursing Homes recognition'
                    className='max-h-32 w-auto object-contain'
                  />
                </div> */}

                                <div className='flex min-h-44 items-center justify-center rounded-2xl'>
                                    <img
                                        src={usNews}
                                        alt='Newsweek Best Nursing Homes recognition'
                                        className=' w-auto object-contain'
                                    />
                                </div>
                            </div>

                            {/* <p className='mt-5 text-center text-xs leading-5 text-white/50'>
                Recognition and accreditation may
                vary by location and year.
              </p> */}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}