import Head from 'next/head'
import { useEffect } from 'react'

import { HomeLayout } from '@/layouts/homeLayout'
import { Hero } from '@/components/Hero'
import { Incentives } from '@/components/Incentives'
import { Reviews } from '@/components/Reviews'
import { Faqs } from '@/components/Faqs'

import { WebsitesSectionShort as WebsitesSection } from '@/components/sections/WebsitesSection'
import { PluginsSection } from '../components/sections/PluginsSection'

import { websites } from '@/staticdata/products/websites'
import { plugins } from '@/staticdata/products/plugins'

const Index = () => {

  return (
    <>
      <Head>
        <title>WebiGus</title>
        <meta name="description" content="Webigus Access" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
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
      </HomeLayout>
    </>
  )
}

export default Index;