import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Road to CS:GO Major`}
        description={place.description?.text}
        canonical="https://roadtomajor.chrxtn.com.br/"
        openGraph={{
          url: 'https://roadtomajor.chrxtn.com.br/',
          title: `${place.name} - Road to CS:GO Major`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size="32" aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          ></S.Body>

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                height={600}
                width={1000}
                quality={80}
                objectFit="cover"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
