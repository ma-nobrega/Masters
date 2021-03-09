import styled, { css } from 'styled-components';

interface TextAreaProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  label {
    font-size: 1.4rem;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 1.5rem;
    color: var(--color-error);
    font-size: 1rem;
    svg {
      margin-left: 0.8rem;
    }
  }
`;

export const Textarea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 16rem;
  min-height: 8rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  resize: vertical;
  padding: 1.2rem 1.2rem;
  font: 1.6rem Archivo;
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
`;
