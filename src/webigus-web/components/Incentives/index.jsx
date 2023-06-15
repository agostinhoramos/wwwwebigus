import { useId } from 'react'

import { services } from '@/staticdata'

export function Incentives() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-5 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-primary-950">
            {services.label}
          </h2>
          <p className="mt-2 text-lg text-gray-600">{services.desc}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {services.list.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="mx-auto h-8 w-8" />
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
