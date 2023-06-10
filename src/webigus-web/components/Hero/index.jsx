const Hero = () => {
  return (
    <>
      <div className="relative isolate h-screen px-6 pt-14 lg:px-8">
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

        <div className="flex flex-row max-w-full pt-16">
          <div className="xl:basis-1/3">
            <div className="">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Alto Desempenho para Voar ainda{' '}
                <span className="underline decoration-secondary-950">
                  Mais Rápido
                </span>{' '}
                ✈️
              </h1>

              <div className="mt-4 flex flex-wrap">
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

              <p className="mt-3 text-lg text-gray-600">
                {
                  'A sua parceira confiável para soluções profissionais de websites que impulsionam o seu negócio para o sucesso online. Criamos e desenvolvemos websites personalizados e de alta qualidade, utilizando as tecnologias mais recentes do mercado.'
                }
              </p>

              <div className="mt-4 hidden sm:mt-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Migrating an existing website?{' '}
                  <a href="#" className="font-semibold text-secondary-950">
                    <span className="absolute inset-0" aria-hidden="true" />
                    We can help <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="basis-2/3 hidden xl:block">
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:pl-0">
              
            <div className="ml-auto w-72 flex-none space-y-8 sm:ml-0 lg:order-last xl:order-none">
            <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>

              
            <div className="mr-auto w-72 flex-none space-y-8 sm:mr-0">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>

            <div className="ml-auto w-72 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                    alt=""
                    className="h-48 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
            </div>

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

export default Hero
