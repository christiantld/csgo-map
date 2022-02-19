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
        canonical="https://roadtomajor.chrxtn.com.br/"
        openGraph={{
          url: 'https://roadtomajor.chrxtn.com.br/',
          title: 'Road to CS:GO Major',
          description:
            'A simple map showing the major CS:GO maps and their locations.',
          images: [
            {
              url: 'https://roadtomajor.chrxtn.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size="32" aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
