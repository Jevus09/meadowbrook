import {
    FiMapPin,
    FiPhone,
    FiPrinter,
  } from 'react-icons/fi'
  
  import { Container } from '@/components/common/Container'
  import type { LocationContact } from '../types'
  
  export interface LocationContactBarProps {
    contact: LocationContact
  }
  
  export function LocationContactBar({
    contact,
  }: LocationContactBarProps) {
    const fullAddress =
      `${contact.address}, ${contact.city}, ${contact.state} ${contact.zip}`
  
    return (
      <section className='border-b border-black/5 bg-white'>
        <Container>
          <div className='grid divide-y divide-black/5 md:grid-cols-3 md:divide-x md:divide-y-0'>
            <div className='flex justify-center items-center gap-4 py-7 md:px-6 md:first:pl-0'>
              <div className='grid size-11 shrink-0 place-items-center rounded-xl bg-meadow-50 text-meadow-800'>
                <FiMapPin />
              </div>
  
              <div>
                <p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
                  Address
                </p>
  
                <p className='mt-1 font-medium text-meadow-950'>
                  {contact.address}
                  <br />
                  {contact.city}, {contact.state} {contact.zip}
                </p>
  
                <p className='sr-only'>
                  {fullAddress}
                </p>
              </div>
            </div>
  
            <div className='flex justify-center items-center gap-4 py-7 md:px-6'>
              <div className='grid size-11 shrink-0 place-items-center rounded-xl bg-meadow-50 text-meadow-800'>
                <FiPhone />
              </div>
  
              <div>
                <p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
                  Phone
                </p>
  
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className='mt-1 block font-medium text-meadow-950 hover:text-meadow-700'
                >
                  {contact.phone}
                </a>
              </div>
            </div>
  
            {contact.fax && (
              <div className='flex justify-center items-center gap-4 py-7 md:px-6'>
                <div className='grid size-11 shrink-0 place-items-center rounded-xl bg-meadow-50 text-meadow-800'>
                  <FiPrinter />
                </div>
  
                <div>
                  <p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
                    Fax
                  </p>
  
                  <p className='mt-1 font-medium text-meadow-950'>
                    {contact.fax}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    )
  }