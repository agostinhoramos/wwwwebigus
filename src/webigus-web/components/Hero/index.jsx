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
      <BackgroundGradient>
        <Container>
          <div className="max-w-2xl pt-20 pb-32">
            <div>
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
        </Container>
      </BackgroundGradient>
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
                      {data?.name}
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
