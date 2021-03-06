import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContentProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  position: relative;
  label {
    font-size: 1.4rem;
  }
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 0.8rem;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--color-error);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

  select {
    width: 100%;
    height: 5.6rem;
    outline: 0;
    border: 0;
    font: 1.6rem Archivo;
    margin: 0 0.8rem;
    border-radius: 0.8rem;
    padding: 0 1.6rem;
    background: var(--color-input-background);
  }
  > svg {
    margin-left: 0.8rem;
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-error);
  svg {
    margin-right: 0.8rem;
    height: 2.4rem;
    width: 2.4rem;
  }
  span {
    background: var(--color-error);
    color: var(--color-button-text);
    &::before {
      border-color: var(--color-error) transparent;
    }
  }
`;
