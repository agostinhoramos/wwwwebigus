import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'
import { Logo, LogoMark } from '@/components/Logo'
import SmartButton from '@/components/elementary/SmartButton'

import { names, system } from '@/staticdata'

export function Header() {
  
  const navStyle = {
    transition: 'background .3s ease,box-shadow .3s ease',
    boxShadow: 'inset 0 -1px 0 0 #eaeaea',
    transform: 'translateZ(0)',
    WebkitBackdropFilter: 'saturate(180%) blur(5px)',
    backdropFilter: 'saturate(180%) blur(5px)',
    background: 'hsla(0,0%,100%,.7)',
  }

  const router = useRouter();

  const List = ({text, href}) => {
    const selected = router.pathname === href ? true:false
    return (
      <Link
        className={classNames("rounded-xl bg-opacity-70 px-2 py-1 mr-3", selected?"bg-slate-700 text-white":"text-slate-900 hover:text-slate-500")}
        href={href}
      >
        {text}
      </Link>
    )
  }

  return (
    
    <Disclosure
      as="nav"
      style={navStyle}
      className="fixed left-0 right-0 top-0 uppercase z-40"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-shrink-0 items-center">
                <div className="block h-10 w-auto lg:hidden">
                  <LogoMark className="h-10 w-auto" />
                </div>

                <div className="hidden h-10 w-auto lg:block">
                  <Logo className="h-10 w-auto" href="/" />
                </div>
              </div>
              <div className="hidden flex-grow items-center justify-center font-semibold xl:flex text-xs">
                <List text={names.websites} href="/websites" />
                <List text={names.plugins} href="/plugins" />
              </div>
              <div className="flex flex-shrink-0 items-center">
                <SmartButton
                  text={system.login}
                  href="/login"
                  className={'border bg-transparent text-slate-700  text-xs uppercase'}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
