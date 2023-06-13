import { SectionTab } from './components/Tabs'
import { PluginCard } from '@/components/product/Card'

const PluginsSection = ({ plugins }) => {
    return (
        <>
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
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 lg:grid-cols-3 xl:grid-cols-4">
                {plugins?.map((order, index) => (
                    <PluginCard
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
        </>
    )
}

export { PluginsSection }