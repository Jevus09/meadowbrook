import { useState } from 'react'
import {
  FiCalendar,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import {
  Link,
  NavLink,
} from 'react-router'

import { publicNavigation } from '@/config/navigation'
import { Button } from '@/components/common/Button'
import { Container } from '@/components/common/Container'
import { cn } from '@/lib/utils/cn'

import logo from 'app/src/images/logo.png'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] =
    useState(false)

  return (
    <header className='sticky top-0 z-[100] w-full border-b border-black/5 bg-white/95 backdrop-blur'>
      <Container className='relative flex min-h-20 items-center gap-8'>
        {/* Logo */}
        <NavLink
          to='/'
          className='mr-auto flex items-center'
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt='Meadowbrook Rehabilitation'
            className='w-auto py-4 md:w-[300px] xl:w-[250px]'
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          className='hidden items-center gap-6 xl:flex'
          aria-label='Primary navigation'
        >
          {publicNavigation.map((item) => {
            if (
              'variant' in item &&
              item.variant === 'button'
            ) {
              return null
            }

            if (
              'external' in item &&
              item.external
            ) {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-medium text-slate-700 transition-colors hover:text-meadow-900'
                >
                  {item.label}
                </a>
              )
            }

            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'font-semibold text-meadow-900'
                      : 'text-slate-700 hover:text-meadow-900',
                  )
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden xl:block'>
          <Button
            to='/contact'
            className='gap-2'
          >
            <FiCalendar />
            Schedule a Tour
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          className='relative z-[110] grid size-11 shrink-0 cursor-pointer place-items-center rounded-xl border border-slate-200 bg-white text-meadow-950 transition hover:bg-slate-50 xl:hidden'
          aria-label={
            menuOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX className='h-6 w-6' />
          ) : (
            <FiMenu className='h-6 w-6' />
          )}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className='absolute left-0 top-full z-[105] w-full border-t border-slate-200 bg-white shadow-xl xl:hidden'>
          <Container>
            <nav
              className='flex flex-col py-4'
              aria-label='Mobile navigation'
            >
              {publicNavigation.map((item) => {
                if (
                  'variant' in item &&
                  item.variant === 'button'
                ) {
                  return null
                }

                if (
                  'external' in item &&
                  item.external
                ) {
                  return (
                    <a
                      key={item.label}
                      href={item.to}
                      target='_blank'
                      rel='noopener noreferrer'
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className='border-b border-slate-100 py-4 text-center text-base font-medium text-slate-700 transition-colors hover:text-meadow-900'
                    >
                      {item.label}
                    </a>
                  )
                }

                return (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className={({ isActive }) =>
                      cn(
                        'border-b border-slate-100 py-4 text-center text-base font-medium transition-colors',
                        isActive
                          ? 'font-semibold text-meadow-900'
                          : 'text-slate-700 hover:text-meadow-900',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              })}

              {/* Mobile CTA */}
              <Link
                to='/contact'
                onClick={() =>
                  setMenuOpen(false)
                }
                className='mt-5 inline-flex items-center justify-center gap-2 self-center rounded-full bg-meadow-900 px-6 py-3 font-semibold text-white transition hover:bg-meadow-800'
              >
                <FiCalendar />
                Schedule a Tour
              </Link>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}