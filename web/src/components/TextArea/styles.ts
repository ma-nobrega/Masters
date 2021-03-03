import styled, { css } from 'styled-components';

interface TextAreaProps {
  isFocused: boolean;
}

export const Container = styled.div`
  position: relative;
  label {
    font-size: 1.4rem;
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
    props.isFocused &&
    css`
      border-color: var(--color-primary);
    `}
`;
