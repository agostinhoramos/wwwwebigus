import Head from 'next/head'
import { useEffect } from 'react'

import { BaseLayout } from '@/layouts/baseLayout'

import { WebsiteHero as Hero } from '@/components/Hero'
import { WebsitesSection } from '@/components/sections/WebsitesSection'
import { CategoryFilter } from '@/components/CategoryFilter'

import { websites } from '@/staticdata/products/websites'

const Websites = () => {
    
    useEffect(()=>{
        console.log("Hi")
    }, [])

    return (
        <>
            <Head>
                <title>WebiGus | Websites</title>
                <meta name="description" content="Webigus Access" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <BaseLayout defaultScroll={700} >
                <Hero />

                <CategoryFilter />

                {websites?.length > 0 ? (
                <>
                    <WebsitesSection websites={websites} />
                </>
                ) : null}

            </BaseLayout>
        </>
    )
}

export default Websites;