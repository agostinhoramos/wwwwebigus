import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { BaseLayout } from '@/layouts/baseLayout'
import Link from 'next/link'

import Card from '@/components/product/Card'

const websites = [
  {
    id: 1,
    productName: 'Commit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/commit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/commit/preview-01.png',
        alt: 'Commit preview 01',
      },
      {
        src: '/upload/external/website/commit/preview-02.png',
        alt: 'Commit preview 02',
      },
      {
        src: '/upload/external/website/commit/preview-03.png',
        alt: 'Commit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'django-python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 2,
    productName: 'Pocket',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/pocket',
    downloads: 92,
    image: [
      {
        src: '/upload/external/website/pocket/preview-01.png',
        alt: 'Commit preview 01',
      },
      {
        src: '/upload/external/website/pocket/preview-02.png',
        alt: 'Commit preview 02',
      },
      {
        src: '/upload/external/website/pocket/preview-03.png',
        alt: 'Commit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 3,
    productName: 'Protocol',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/protocol',
    downloads: 134,
    image: [
      {
        src: '/upload/external/website/protocol/preview-01.png',
        alt: 'Protocol preview 01',
      },
      {
        src: '/upload/external/website/protocol/preview-02.png',
        alt: 'Protocol preview 02',
      },
      {
        src: '/upload/external/website/protocol/preview-03.png',
        alt: 'Protocol preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 4,
    productName: 'Salient',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/salient',
    downloads: 2,
    image: [
      {
        src: '/upload/external/website/salient/preview-01.png',
        alt: 'Salient preview 01',
      },
      {
        src: '/upload/external/website/salient/preview-02.png',
        alt: 'Salient preview 02',
      },
      {
        src: '/upload/external/website/salient/preview-03.png',
        alt: 'Salient preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 5,
    productName: 'Spotlight',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/spotlight',
    downloads: 1,
    image: [
      {
        src: '/upload/external/website/spotlight/preview-01.png',
        alt: 'Spotlight preview 01',
      },
      {
        src: '/upload/external/website/spotlight/preview-02.png',
        alt: 'Spotlight preview 02',
      },
      {
        src: '/upload/external/website/spotlight/preview-03.png',
        alt: 'Spotlight preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 6,
    productName: 'Syntax',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/syntax',
    downloads: 439,
    image: [
      {
        src: '/upload/external/website/syntax/preview-01.png',
        alt: 'Syntax preview 01',
      },
      {
        src: '/upload/external/website/syntax/preview-02.png',
        alt: 'Syntax preview 02',
      },
      {
        src: '/upload/external/website/syntax/preview-03.png',
        alt: 'Syntax preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
  {
    id: 7,
    productName: 'Transmit',
    productDesc:
      "In case you haven't heard, building in public is the way all the coolest makers do marketing these days. The coolest of the cool do it with Commit, our beautiful one-page changelog template.",
    href: '/website/3789261456732/transmit',
    downloads: 325,
    image: [
      {
        src: '/upload/external/website/transmit/preview-01.png',
        alt: 'Transmit preview 01',
      },
      {
        src: '/upload/external/website/transmit/preview-02.png',
        alt: 'Transmit preview 02',
      },
      {
        src: '/upload/external/website/transmit/preview-03.png',
        alt: 'Transmit preview 03',
      },
    ],
    technologies: [
      {
        id: 'nextjs',
        src: 'nextjs.png',
        alt: 'NextJS',
      },
      {
        id: 'tailwindcss',
        src: 'tailwindcss.png',
        alt: 'Tailwindcss',
      },
      {
        id: 'python',
        src: 'python.png',
        alt: 'Python',
      },
    ],
  },
]

const plugins = [
    {
        id: 1,
        productName: 'OpenCart Point of Sale System POS',
        productDesc:
          "OpenCart Point of Sale System allows you to keep track of sales and inventory with a physical system on the store and an application to manage your invoicing, billing & inventory.",
        href: '/plugin/openchart-point-of-sale-system-pos',
        downloads: 443,
        image: [
          {
            src: '/upload/external/plugin/officalpartner.jpg',
            alt: 'OpenCart POS preview 01',
          }
        ],
        technologies: [
          {
            id: 'nextjs',
            src: 'nextjs.png',
            alt: 'NextJS',
          },
          {
            id: 'tailwindcss',
            src: 'tailwindcss.png',
            alt: 'Tailwindcss',
          },
          {
            id: 'python',
            src: 'python.png',
            alt: 'Python',
          },
        ],
    },
    {
        id: 2,
        productName: 'Form Builder Pro - Multi Form Creator',
        productDesc:
          "Quickly and easily, create any type of form you want. By using form builder create the form with any type of fields you want, make them require if necessary and set the custom error message for required fields.",
        href: '/plugin/form-builder-pro-multi-form-creator',
        downloads: 215,
        image: [
          {
            src: '/upload/external/plugin/ci_oc_partner.jpg',
            alt: 'OpenCart POS preview 01',
          }
        ],
        technologies: [
          {
            id: 'nextjs',
            src: 'nextjs.png',
            alt: 'NextJS',
          },
          {
            id: 'tailwindcss',
            src: 'tailwindcss.png',
            alt: 'Tailwindcss',
          },
          {
            id: 'python',
            src: 'python.png',
            alt: 'Python',
          },
        ],
    },
    {
        id: 3,
        productName: 'AJAX Quick Checkout PRO',
        productDesc:
          "We have been the best selling extension for over 3 years with the competition far behind. With hundreds of compatible modules, you can be sure you are getting the best checkout possible.",
        href: '/plugin/ajax-quick-checkout-pro',
        downloads: 215,
        image: [
          {
            src: '/upload/external/plugin/5a0aed22d6979-resize-710x380.jpg',
            alt: 'AJAX Quick Checkout PR',
          }
        ],
        technologies: [
          {
            id: 'nextjs',
            src: 'nextjs.png',
            alt: 'NextJS',
          },
          {
            id: 'tailwindcss',
            src: 'tailwindcss.png',
            alt: 'Tailwindcss',
          },
          {
            id: 'python',
            src: 'python.png',
            alt: 'Python',
          },
        ],
    }
]

const SectionTab = ({ title, desc, link }) => {
  return (
    <>
      <h2 className="mt-8 font-semibold text-primary-950">{title}</h2>
      <p className="mt-4 max-w-3xl space-y-6 ">{desc}</p>
      <div className="mt-4">
        <Link
          className="text-base font-semibold text-secondary-950 hover:text-secondary-700"
          href={link}
        >
          {`Explore all ${title.toLowerCase()}`} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </>
  )
}

export default function Home() {

  useEffect(() => {
    console.log('Ready to show')
  }, [])

  return (
    <>
      <Head>
        <title>WebiGus</title>
        <meta name="description" content="Webigus Access" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <div
          className="mx-auto max-w-2xl px-4 pb-3.5 sm:px-6 lg:max-w-full lg:px-8"
          aria-labelledby="order-history-heading"
        >
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
            <SectionTab
              title="Websites"
              desc="Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content."
              link="/websites"
            />
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              {websites?.map((order, index) => (
                <Card
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

            {websites.length > 10 ? (
              <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[8%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
            ) : (
              ''
            )}
          </div>

          {websites.length > 10 ? (
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
              <a
                className="pointer-events-auto inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                href="/websites"
              >
                <span>
                  Show more...<span className="sr-only">, Application UI</span>
                </span>
              </a>
            </div>
          ) : (
            ''
          )}
        </div>

        {plugins?.length > 0 ? (
        <div
          className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-full lg:px-8"
          aria-labelledby="order-history-heading"
        >
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
            <SectionTab
              title="Plugins"
              desc="Explore our plugin designed for you Website"
              link="/plugins"
            />
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              {plugins?.map((order, index) => (
                <Card
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

            {plugins?.length > 10 ? (
              <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t from-white to-white/25 sm:h-[33.3%]"></div>
            ) : (
              ''
            )}
          </div>

          {plugins?.length > 10 ? (
            <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
              <a
                className="pointer-events-auto inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
                href="/plugins"
              >
                <span>
                  Show more...<span className="sr-only">, Application UI</span>
                </span>
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
        ):''}

      

      </BaseLayout>
    </>
  )
}