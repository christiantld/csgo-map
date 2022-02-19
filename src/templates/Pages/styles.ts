import styled from 'styled-components'

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: var(--container);
  margin: 0 auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
  color: var(--accent-color);
`

export const Description = styled.div`
  p {
    color: var(--accent-color);
    line-height: var(--medium);
  }
`
