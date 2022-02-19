import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2000;
  top: var(--medium);
  right: var(--medium);
  color: var(--accent-color);
  cursor: pointer;

  svg {
    transition: color 0.2s ease-in-out;
  }

  &:hover {
    svg: {
      color: var(--highlight-color);
    }
  }
`