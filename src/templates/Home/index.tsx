import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

import { InfoOutline } from '@styled-icons/evaicons-outline/'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Road to CS:GO Major"
        description="A simple map showing the major CS:GO maps and their locations."
        canonical="https://csgo-map.vercel.app/"
        openGraph={{
          url: 'https://csgo-map.vercel.app/',
          title: 'Road to CS:GO Major',
          description:
            'A simple map showing the major CS:GO maps and their locations.',
          images: [
            {
              url: 'https://csgo-map.vercel.app/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Road to CS:GO Major'
            }
          ],
          site_name: 'Road to CS:GO Major'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size="32" aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
