import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`
export const Container = styled.section`
  max-width: var(--container);
  margin: auto;
`
export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
  color: var(--accent-color);
`
export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`
export const Gallery = styled.div`
  display: grid;
  grid-gap: var(--medium);

  img {
    background: #eee;
    background-image: linear-gradient(
      to right,
      #eee 0%,
      #ccc 20%,
      #eee 40%,
      #eee 100%
    );
    background-size: 80rem 14rem;
    animation: placeHolderShimmer 1s linear infinite forwards;

    @keyframes placeHolderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  }
`
