import { useState, useEffect } from 'react'
import { Image } from '@nextui-org/react';
import { FakeBrowser } from './component/FakeBrownser'
import SmartButton from '@/components/elementary/SmartButton'
import { BackgroundGradient } from './component/BackgroundGradient'
import { Container } from '@/components/Container'
import { name, hero, help } from '@/staticdata'

const Hero = () => {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-950 to-secondary-950 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="flex max-w-full flex-row pt-10">
          <div className="px-2 xl:basis-1/3">
            <div className="">
              <div
                dangerouslySetInnerHTML={{ __html: hero.titleHtml }}
                className="text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-left"
              />

              <div className="mt-4 w-full">
                <div className="flex flex-wrap justify-center xl:justify-start">
                  <div className="flex items-center text-sm font-medium text-slate-500">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 flex-none stroke-current text-slate-400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                      <ellipse
                        cx="16"
                        cy="16"
                        rx="13"
                        ry="5"
                        transform="rotate(60 16 16)"
                      ></ellipse>
                      <ellipse
                        rx="13"
                        ry="5"
                        transform="matrix(-.5 .86603 .86603 .5 16 16)"
                      ></ellipse>
                      <circle cx="16" cy="16" r="2"></circle>
                    </svg>
                    <span className="ml-2.5">React</span>
                  </div>
                  <div className="ml-6 flex items-center text-sm font-medium text-slate-500">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 flex-none stroke-current text-slate-400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <defs>
                        <linearGradient
                          id="next-icon-gradient-a"
                          x1="15.125"
                          y1="18.25"
                          x2="24.25"
                          y2="27.375"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".24" stopColor="currentColor"></stop>
                          <stop
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                        <linearGradient
                          id="next-icon-gradient-b"
                          x1="20.5"
                          y1="11.25"
                          x2="20.5"
                          y2="18.25"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="currentColor"></stop>
                          <stop
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
                      <path
                        d="M12 21.5V12l12.25 14.25"
                        stroke="url(#next-icon-gradient-a)"
                      ></path>
                      <path
                        d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z"
                        fill="url(#next-icon-gradient-b)"
                        strokeWidth="0"
                      ></path>
                    </svg>
                    <span className="ml-2.5">Next.js</span>
                  </div>
                </div>
              </div>

              <p className="mt-3 hidden px-16 text-center text-lg text-gray-600 sm:block xl:px-0 xl:text-left">
                {hero.desc}
              </p>

              <div className="mt-4 hidden justify-center sm:mt-8 sm:flex xl:justify-start">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  {help.doYouNeedTechnicalHelp + ' '}
                  <a href="#" className="font-semibold text-secondary-950">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {help.weCanHelp} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4 xl:justify-start">
                <SmartButton
                  text={hero.exploreAllWebsites}
                  href="/websites"
                  className="bg-slate-700 px-4 py-2 text-sm font-semibold tracking-tight text-white"
                />

                <SmartButton
                  text={hero.exploreAllPlugins}
                  href="/plugins"
                  className="bg-secondary-700 px-4 py-2 text-sm font-semibold tracking-tight text-white"
                />
              </div>
              <div className={'underline decoration-secondary-950'} />
            </div>
          </div>
          <div className="hidden basis-2/3 px-2 xl:block">
            <FakeBrowser />
          </div>
        </div>

        <div className="flex max-w-full flex-row pt-10">
          <div className="hidden w-full items-stretch xl:flex xl:h-48">
            <div className="mx-auto animate-bounce self-end">
              <svg
                fill="#EBEBEB"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
              >
                <path d="M 44.984375 6.96875 C 44.453125 6.984375 43.953125 7.203125 43.585938 7.585938 L 25 26.171875 L 6.414063 7.585938 C 6.035156 7.199219 5.519531 6.980469 4.976563 6.980469 C 4.164063 6.980469 3.433594 7.476563 3.128906 8.230469 C 2.820313 8.984375 3.003906 9.847656 3.585938 10.414063 L 25 31.828125 L 46.414063 10.414063 C 47.007813 9.84375 47.195313 8.964844 46.875 8.203125 C 46.558594 7.441406 45.808594 6.953125 44.984375 6.96875 Z M 44.984375 19.96875 C 44.453125 19.984375 43.953125 20.203125 43.585938 20.585938 L 25 39.171875 L 6.414063 20.585938 C 6.035156 20.199219 5.519531 19.980469 4.976563 19.980469 C 4.164063 19.980469 3.433594 20.476563 3.128906 21.230469 C 2.820313 21.984375 3.003906 22.847656 3.585938 23.414063 L 25 44.828125 L 46.414063 23.414063 C 47.007813 22.84375 47.195313 21.964844 46.875 21.203125 C 46.558594 20.441406 45.808594 19.953125 44.984375 19.96875 Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-950 to-secondary-950 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </>
  )
}

const WebsiteHero = ({ data }) => {
  return (
    <>
      <div className="relative isolate">
        <BackgroundGradient>
          {data ? (
            <Container>
              <div className="py-32">
                <div className="flex flex-row">
                  <div className="basis-1/3">
                    <h1 className="text-base font-semibold leading-7 text-sky-500">
                    SaaS marketing website
                    </h1>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      { data?.name }
                    </h1>
                  </div>
                  <div className="basis-2/3 ">
                  <Image 
                  showSkeleton
                  maxDelay={10000}
                  src={require("@/img/upload/website/salient/banner.png").default.src} width="1600" height="1280" className="relative z-20 -mb-36 aspect-[853/682] max-w-[853px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-16" 
                  alt="Default Image"
                  objectFit="cover"
                  />
                  </div>
                </div>
              </div>
            </Container>
          ) : (
            <Container>
              <div className="max-w-2xl py-32">
                <div>
                  <h1 className="text-base font-semibold leading-7 text-sky-500">
                    Criado por desenvolvedores experientes
                  </h1>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Modelos de websites modernos, criados com Tailwind CSS
                  </h1>
                </div>
              </div>
            </Container>
          )}
        </BackgroundGradient>
      </div>
    </>
  )
}

const PluginHero = () => {
  return (
    <>
      <div className="relative isolate">
        <BackgroundGradient>
          <Container>
            <div className="max-w-2xl py-32">
              <div>
                <h1 className="text-base font-semibold leading-7 text-secondary-500">
                  Criado por desenvolvedores experientes
                </h1>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Melhores plugins, extensões e módulos premium para o seu site
                </h1>
              </div>
            </div>
          </Container>
        </BackgroundGradient>
      </div>
    </>
  )
}

export { Hero, WebsiteHero, PluginHero }
