import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { BaseLayout } from '@/layouts/baseLayout'

import { WebsiteHero as Hero } from '@/components/Hero'
import { WebsiteDetail } from '@/components/sections/WebsitesSection'

const Website = () => {
  const router = useRouter()
  const { slug } = router.query
  const [websiteId, setWebsiteId] = useState(null)

  const heroData = {
    name: websiteId,
  }

  useEffect(() => {
    if (slug !== undefined) {
      setWebsiteId(slug[0])
    }
  }, [slug])

  return (
    <>
      <Head>
        <title>WebiGus | Websites</title>
        <meta name="description" content="Webigus Access" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BaseLayout>
        <Hero data={heroData} />
        <WebsiteDetail />
      </BaseLayout>
    </>
  )
}

export default Website
