import Link from 'next/link'

import { SectionTab } from '../components/Tabs'
import { WebsiteCard } from '@/components/product/Card'
import { SmartButton } from '@/components/elementary/SmartButton'
import { Container } from '@/components/Container'

import { section } from '@/staticdata'

const WebsitesSection = ({ websites }) => {
  return (
    <>
      <div
        className="mx-auto max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-full lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
          <div className="mt-8 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {websites?.map((order, index) => (
              <WebsiteCard
                key={index}
                id={order.id}
                datetime={null}
                status={null}
                productName={order.productName}
                productDesc={order.productDesc}
                link={order.href}
                downloads={order.downloads}
                imageSrc={order.image[0].src}
                imageAlt={order.image[0].alt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const WebsitesSectionShort = ({ websites }) => {
  return (
    <>
      <div
        className="mx-auto max-w-2xl px-4 pb-3.5 sm:px-6 lg:max-w-full lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
          <SectionTab
            title={section.website.title}
            desc={section.website.desc}
            exploreAll={section.website.exploreAll}
            link="/websites"
          />
          <div className="mt-8 grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {websites?.map((order, index) =>
              index < 8 ? (
                <WebsiteCard
                  key={index}
                  id={order.id}
                  datetime={null}
                  status={null}
                  productName={order.productName}
                  productDesc={order.productDesc}
                  link={order.href}
                  downloads={order.downloads}
                  imageSrc={order.image[0].src}
                  imageAlt={order.image[0].alt}
                />
              ) : (
                ''
              )
            )}
          </div>

          {websites?.length > 10 ? (
            <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[9%] bg-gradient-to-t from-white to-white/25 xl:h-[12%]"></div>
          ) : (
            ''
          )}
        </div>

        {websites?.length > 10 ? (
          <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
            <Link
              className="pointer-events-auto inline-flex justify-center rounded-lg bg-slate-700 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              href="/websites?from=suggestion"
            >
              <span>
                {section.showMore} ...
                <span className="sr-only">, Website Section</span>
              </span>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import { Feature } from './components/Features'

const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  {
    name: 'Purple',
    bgColor: 'bg-purple-500',
    selectedColor: 'ring-purple-500',
  },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  {
    name: 'Yellow',
    bgColor: 'bg-yellow-500',
    selectedColor: 'ring-yellow-500',
  },
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  {
    name: 'Purple',
    bgColor: 'bg-purple-500',
    selectedColor: 'ring-purple-500',
  },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  {
    name: 'Yellow',
    bgColor: 'bg-yellow-500',
    selectedColor: 'ring-yellow-500',
  }
]

const WebsiteDetail = ({ website }) => {
  const [selectedPrimaryColor, setSelectedPrimaryColor] = useState(colors[1])
  const [selectedSecondaryColor, setSelectedSecondaryColor] = useState(
    colors[3]
  )
  return (
    <>
      <div className="relative flex flex-col mb-5">
        <div className="mb-5 py-5">
          <Container>
            <div className="flex flex-row">
              <div className="basis-1/3">
                <div className="text-2xl font-semibold leading-9 tracking-tight text-slate-900">
                  Design
                </div>
              </div>
              <div className="basis-2/3 py-2">
                <div className="flex flex-col">
                  <div className='mb-5'>
                    <RadioGroup
                      value={selectedPrimaryColor}
                      onChange={setSelectedPrimaryColor}
                    >
                      <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
                        Cor primaria
                      </RadioGroup.Label>
                      <div className="mt-4 flex items-center space-x-3">
                        {colors.map((color, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedPrimaryColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <RadioGroup
                      value={selectedSecondaryColor}
                      onChange={setSelectedSecondaryColor}
                    >
                      <RadioGroup.Label className="text-base font-semibold leading-6 text-gray-900">
                        Cor secundaria
                      </RadioGroup.Label>
                      <div className="mt-4 flex items-center space-x-3">
                        {colors.map((color, index) => (
                          <RadioGroup.Option
                            key={index}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedSecondaryColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Feature />
      </div>
    </>
  )
}

export { WebsitesSectionShort, WebsitesSection, WebsiteDetail }