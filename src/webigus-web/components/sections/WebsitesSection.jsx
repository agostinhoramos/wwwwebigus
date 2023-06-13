import { SectionTab } from './components/Tabs'
import { WebsiteCard } from '@/components/product/Card'

import { section } from '@/staticdata'

const WebsitesSection = ({ websites }) => {
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

          {websites?.length > 10 ? (
            <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[9%] bg-gradient-to-t from-white to-white/25 xl:h-[12%]"></div>
          ) : (
            ''
          )}
        </div>

        {websites?.length > 10 ? (
          <div className="pointer-events-none relative z-10 -mt-5 flex justify-center">
            <a
              className="pointer-events-auto inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700"
              href="/websites?from=suggestion"
            >
              <span>
              {section.showMore} ...<span className="sr-only">, Website Section</span>
              </span>
            </a>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}

export { WebsitesSection }
