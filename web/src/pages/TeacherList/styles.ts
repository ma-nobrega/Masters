import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 2.8rem;
    &:hover {
      background: ${darken(0.1, '#1772af')};
    }
  }
  form {
    &#search-teachers {
      margin-top: 3.2rem;
      label {
        color: var(--color-title-in-primary);
      }
      > div + div {
        margin-top: 1.4rem;
        @media (min-width: 700px) {
          margin-top: 0;
        }
      }
      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
      }
    }
  }
  &#page-teacher-list {
    width: 100vw;
    height: 100vh;
    @media (min-width: 700px) {
      max-width: 100%;
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
