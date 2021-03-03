import styled, { css } from 'styled-components';

interface ContentProps {
  isFocused: boolean;
}

export const Container = styled.div`
  position: relative;
  label {
    font-size: 1.4rem;
  }
  display: flex;
  flex-direction: column;
  div {
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
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}
  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 0;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }
  svg {
    margin: 0 1.6rem;
    height: 2.4rem;
    width: 2.4rem;
  }
  svg,
  select {
    margin: 0 0.8rem;
  }
`;
