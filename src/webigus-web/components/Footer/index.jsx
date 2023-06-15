import Link from 'next/link'
import { Logo } from '@/components/Logo'

import { Container } from '@/components/Container'
import { Newsletter } from '@/components/Newsletter'

import { navigation, copyrightStatement } from '@/staticdata'

const bgStyle = {
  transition: 'background .3s ease,box-shadow .3s ease',
  boxShadow: 'inset 0 1px 0 #eaeaea',
  transform: 'translateZ(0)',
  WebkitBackdropFilter: 'saturate(180%) blur(5px)',
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

export function FooterWithNewsletter() {
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
          <Newsletter />
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