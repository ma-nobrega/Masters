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

  input {
    width: 100%;
    height: 5.6rem;
    outline: 0;
    border: 0;
    font: 1.6rem Archivo;
    margin: 0 0.8rem;
    padding: 0 0.8rem;
  }
  svg {
    margin: 0 1.6rem;
    height: 2.4rem;
    width: 2.4rem;
  }
  svg,
  input {
    margin: 0 0.8rem;
  }
`;
