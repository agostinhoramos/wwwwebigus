import Link from 'next/link'
import { Logo, LogoMark } from '@/components/Logo'

import { Container } from '@/components/Container'

import { navigation, newsletter, copyrightStatement } from '@/staticdata'

const bgStyle = {
  transition: 'background .3s ease,box-shadow .3s ease',
  boxShadow: 'inset 0 1px 0 #eaeaea',
  transform: 'translateZ(0)',
  webkitBackdropFilter: 'saturate(180%) blur(5px)',
  backdropFilter: 'saturate(180%) blur(5px)',
  background: 'hsla(0,0%,100%,.8)',
}

export function SmallFooter() {
  return (
    <footer style={bgStyle}>
      <Container className="overflow-hidden px-6 py-8 sm:py-10 lg:px-8">
        <p
          dangerouslySetInnerHTML={{ __html: copyrightStatement }}
          className="text-center text-xs leading-5 text-gray-500"
        ></p>
      </Container>
    </footer>
  )
}

export function Footer() {
  return (
    <footer style={bgStyle} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-full px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <Container className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Logo className="h-10" />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  { navigation.solutions.label }
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.list.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  { navigation.company.label }
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.list.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  { navigation.legal.label }
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.list.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-16 border-t border-gray-900/10 sm:mt-20 lg:mt-24">
          <Container className="pt-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                { newsletter.title }
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                { newsletter.desc }
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                { newsletter.input.placeholder }
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:w-56 sm:text-sm sm:leading-6"
                placeholder={ newsletter.input.placeholder }
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                >
                  { newsletter.button.text }
                </button>
              </div>
            </form>
          </Container>
        </div>
        <div className="mt-8 border-t border-gray-900/10">
          <Container className="pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.list.map((item) => (
                <Link
                  target="_blank"
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  passHref
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: copyrightStatement }}
              className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0"
            ></p>
          </Container>
        </div>
      </div>
    </footer>
  )
}