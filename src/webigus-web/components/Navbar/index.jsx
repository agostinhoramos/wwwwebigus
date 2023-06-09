import { Fragment } from 'react'
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'

import brandLogo from '@/img/brand/logo-full.png'
import brandLogoType from '@/img/brand/logo.png'

export default function Navbar() {

  const navStyle = {
    transition: "background .3s ease,box-shadow .3s ease",
    boxShadow: "inset 0 -1px 0 0 #eaeaea",
    transform: "translateZ(0)",
    webkitBackdropFilter: "saturate(180%) blur(5px)",
    backdropFilter: "saturate(180%) blur(5px)",
    background: "hsla(0,0%,100%,.6)"
  }

  return (
    <Disclosure as="nav" style={navStyle} className="fixed top-0 left-0 right-0 z-40">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={brandLogoType}
                    alt="Webigus Logo"
                  />
                  <Image
                    className="hidden h-10 w-auto lg:block"
                    src={brandLogo}
                    alt="Webigus Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}