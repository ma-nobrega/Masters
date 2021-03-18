import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'info' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8fffa;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;

  position: relative;
  padding: 1.6rem 3rem 1.6rem 1.6rem;
  border-radius: 0.8rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 0.8rem;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 0.4rem 1.2rem 0 0;
  }
  > div {
    flex: 1;
    > p {
      margin-top: 4px;
      font-size: 1.4rem;
      opacity: 0.8;
      line-height: 2rem;
    }
  }
  button {
    position: absolute;
    right: 1.2rem;
    top: 1.9rem;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;
      > svg {
        margin-top: 0;
      }
    `}
`;
