import { Fragment } from 'react'
import Image from 'next/image'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'
import { Logo, LogoMark } from '@/components/Logo'

import brandLogo from '@/img/brand/logo-full.png'
import brandLogoType from '@/img/brand/logo.png'

import { names } from '@/staticdata'

export function Header() {
  const navStyle = {
    transition: 'background .3s ease,box-shadow .3s ease',
    boxShadow: 'inset 0 -1px 0 0 #eaeaea',
    transform: 'translateZ(0)',
    WebkitBackdropFilter: 'saturate(180%) blur(5px)',
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
                <a className="text-sm py-1 px-2 rounded-xl bg-white font-medium text-gray-700 bg-opacity-70" href="/websites">{names.websites}</a>
                <a className="text-sm ml-8 py-1 px-2 rounded-xl font-medium text-gray-700" href="/plugins">
                  { names.plugins }
                </a>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <a
                  className="-my-2.5 inline-flex justify-center rounded bg-white px-4 py-1.5 text-xs font-semibold text-slate-900"
                  href="/login"
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