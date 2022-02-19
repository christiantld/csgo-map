import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 2000;
  top: var(--medium);
  right: var(--medium);
  color: var(--accent-color);
  cursor: pointer;

  svg {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: var(--highlight-color);
      filter: drop-shadow(0 1px 5px #040404);
    }
  }
`
