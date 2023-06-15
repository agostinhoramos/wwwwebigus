import { Fragment, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useViewportScroll } from 'framer-motion'
import { Container } from '../Container'

import classNames from 'classnames'
import { Logo, LogoMark } from '@/components/Logo'
import SmartButton from '@/components/elementary/SmartButton'

import { names, system } from '@/staticdata'

export function Header({ defaultScroll }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false)
  const defaultScrollThreshold = defaultScroll?defaultScroll:1200

  const router = useRouter()

  const List = ({ text, href }) => {
    const selected = router.pathname === href ? true : false
    return (
      <Link
        className={classNames(
          'mr-3 border-slate-700 bg-opacity-70 px-2 py-1 text-slate-900',
          selected ? 'border-b-2' : 'hover:border-b-2 hover:border-transparent'
        )}
        href={href}
      >
        {text}
      </Link>
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if(currentScrollPos > defaultScrollThreshold){
        if (prevScrollPos < currentScrollPos) {
          setShowNavbar(true); // Scrolling up
        }else{
          setShowNavbar(false); // Scrolling down
        }
      } else {
        setShowNavbar(false); // Scrolling down
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const Nav = ({ className, ...props }) => {
    return (
      <>
        <div className={classNames("mx-auto uppercase px-2 sm:px-6 lg:px-8", className)} {...props} >
          <div className="relative flex h-16 justify-between">
            <div className="flex flex-shrink-0 items-center">
              <div className="block h-10 w-auto lg:hidden">
                <LogoMark className="h-10 w-auto" />
              </div>

              <div className="hidden h-10 w-auto lg:block">
                <Logo className="h-10 w-auto" href="/" />
              </div>
            </div>
            <div className="hidden flex-grow items-center justify-center text-xs font-semibold xl:flex">
              <List text={names.websites} href="/websites" />
              <List text={names.plugins} href="/plugins" />
            </div>
            <div className="flex flex-shrink-0 items-center">
              <SmartButton
                text={system.login}
                href="/login"
                className={
                  'border bg-transparent text-xs  uppercase text-slate-900'
                }
              />
            </div>
          </div>
        </div>
      </>
    )
  }


  let navStyle = {
    boxShadow: 'inset 0 -1px 0 0 #eaeaea',
    WebkitBackdropFilter: 'saturate(180%) blur(5px)',
    backdropFilter: 'saturate(180%) blur(5px)',
    background: 'hsla(0,0%,100%,.8)',
  }

  return (
    <>
      <Container className={"max-w-[88rem]"} >
        <Nav  className={`relative border rounded-full mt-5 mx-5 z-40 ${showNavbar ? "invisible":"" }`} />
      </Container>
      <div
        style={{
          boxShadow: 'inset 0 -1px 0 0 #eaeaea',
          WebkitBackdropFilter: 'saturate(180%) blur(5px)',
          backdropFilter: 'saturate(180%) blur(5px)',
          background: 'hsla(0,0%,100%,1)',
        }}
        className={classNames(
          "transition-all top-0 bg-red-500 h-5 duration-300 ease-in-out fixed max-w-7xl z-40 mx-auto hidden sm:block sm:left-0 sm:right-0",
          `opacity-${showNavbar ? 100 : 0} ${showNavbar ? 'translate-y-0':'-translate-y-full'}`
        )}
        ></div>
      <motion.nav
        style={navStyle}
        className={classNames(
          "transition-all border rounded-full top-1 sm:top-4 duration-300 ease-in-out fixed max-w-[85rem] z-40 mx-auto left-2 right-2 sm:left-0 sm:right-0",
          `opacity-${showNavbar ? 100 : 0} ${showNavbar ? 'translate-y-0':'-translate-y-full'}`
        )}
      >
        <Nav />
      </motion.nav>
    </>
  )
}
