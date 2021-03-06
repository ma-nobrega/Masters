import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    width: 16rem;
    background: var(--color-primary);
    color: var(--color-text-in-primary);
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    visibility: hidden;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      border-style: solid;
      border-color: var(--color-primary) transparent;
      border-width: 6px 6px 0 6px;
      content: '';
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
