import { Fragment } from 'react'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'
import { Logo, LogoMark } from '@/components/Logo'

import brandLogo from '@/img/brand/logo-full.png'
import brandLogoType from '@/img/brand/logo.png'

export function Header() {
  const navStyle = {
    transition: 'background .3s ease,box-shadow .3s ease',
    boxShadow: 'inset 0 -1px 0 0 #eaeaea',
    transform: 'translateZ(0)',
    webkitBackdropFilter: 'saturate(180%) blur(5px)',
    backdropFilter: 'saturate(180%) blur(5px)',
    background: 'hsla(0,0%,100%,.9)',
  }

  return (
    <Disclosure
      as="nav"
      style={navStyle}
      className="fixed left-0 right-0 top-0 z-40"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-shrink-0 items-center">

              <div className='block h-10 w-auto lg:hidden'>
                <LogoMark className="h-10 w-auto" />
               </div>

               <div className='hidden h-10 w-auto lg:block'>
                <Logo className="h-10 w-auto" />
               </div>


              </div>
              <div className="hidden xl:flex flex-grow items-center justify-center">
                <a className="text-sm py-1 px-2 rounded-xl bg-white font-medium text-gray-700 bg-opacity-70" href="/websites">Websites</a>
                <a className="text-sm ml-8 py-1 px-2 rounded-xl font-medium text-gray-700" href="/plugins">
                  Plugins
                </a>
                <button
                  type="button"
                  className="-my-1 ml-8 flex h-8 w-8 items-center justify-center rounded-lg"
                >
                  <span className="sr-only">Search components</span>
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 fill-gray-700"
                  >
                    <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <a
                  className="-my-2.5 inline-flex justify-center rounded bg-white px-4 py-1.5 text-xs font-semibold text-slate-900"
                  href="/all-access"
                >
                  <span>Log-in</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}