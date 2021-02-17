import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
  header {
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    div {
      margin-left: 2.4rem;
      strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: var(--color-text-title);
      }
      span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
      }
    }
  }
  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }
  footer {
    padding: 3.2rem 2rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p strong {
      color: var(--color-secondary);
      font-size: 1.6rem;
      display: block;
      @media (min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }
    button {
      width: 20rem;
      height: 5.6rem;
      background-color: var(--color-secondary);
      color: var(--color-button-text);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      font: 700 1.4rem Archivo;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: 0.2s;
      > svg {
        width: 2rem;
        height: 2rem;
        @media (min-width: 700px) {
          margin-right: 1.6rem;
        }
      }
      &:hover {
        background-color: ${darken(0.1, '#1772af')};
      }
      @media (min-width: 700px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;
      }
    }
  }
  @media (min-width: 700px) {
    header,
    footer {
      padding: 3.2rem;
    }
  }
`;
