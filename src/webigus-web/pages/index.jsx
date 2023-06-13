import Head from 'next/head'

import { useEffect } from 'react'
import { BaseLayout } from '@/layouts/baseLayout'
import { Hero } from '@/components/Hero'
import { Incentives } from '@/components/Incentives'
import { Reviews } from '@/components/Reviews'
import { Faqs } from '@/components/Faqs'

import { WebsitesSection } from '@/components/sections/WebsitesSection'
import { PluginsSection } from '../components/sections/PluginsSection'

// Data
import { websites } from '@/staticdata/products/websites'
import { plugins } from '@/staticdata/products/plugins'

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
        <Hero />

        {websites?.length > 0 ? (
          <>
            <WebsitesSection websites={websites} />
          </>
        ) : null}

        {plugins?.length > 0 ? (
          <>
            <PluginsSection plugins={plugins} />
          </>
        ) : null}

        <Incentives />
        <Reviews />
        <Faqs />
      </BaseLayout>
    </>
  )
}
