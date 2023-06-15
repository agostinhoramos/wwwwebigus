import Head from 'next/head'
import { useEffect } from 'react'

import { BaseLayout } from '@/layouts/baseLayout'

import { PluginHero as Hero } from '@/components/Hero'
import { PluginsSection } from '@/components/sections/PluginsSection'
import { CategoryFilter } from '@/components/CategoryFilter'

import { plugins } from '@/staticdata/products/plugins'

const Plugins = () => {
    
    useEffect(()=>{
        console.log("Hi")
    }, [])

    return (
        <>
            <Head>
                <title>WebiGus | Plugins</title>
                <meta name="description" content="Webigus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BaseLayout defaultScroll={700} >
                <Hero />

                <CategoryFilter />

                {plugins?.length > 0 ? (
                <>
                    <PluginsSection plugins={plugins} />
                </>
                ) : null}

            </BaseLayout>
        </>
    )
}

export default Plugins;