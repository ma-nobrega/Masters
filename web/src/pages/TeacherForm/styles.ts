import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  &#page-teacher-form {
    width: 100vw;
    height: 100vh;
    .header-content {
      margin-bottom: 6.4rem;
    }
    @media (min-width: 700px) {
      max-width: 100vw;
      .header-content {
        margin-bottom: 0;
      }
    }
  }
`;

export const Main = styled.div`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto -3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;
  border: 1px solid var(--color-line-in-white);

  label {
    color: var(--color-text-complement);
  }

  fieldset {
    border: 0;
    padding: 0 2.4rem;
    & + fieldset {
      margin-top: 6.4rem;
    }
    legend {
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
    }
    div + div {
      margin-top: 2.4rem;
    }
    @media (min-width: 700px) {
      padding: 0 6.4rem;
    }
  }
`;

export const Footer = styled.div`
  padding: 4rem 2.4rem;
  background: var(--color-line-in-white);
  margin-top: 6.4rem;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: var(--color-text-complement);
    img {
      margin-right: 2rem;
    }
  }
  button {
    width: 100%;
    height: 5.6rem;
    background-color: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
    &:hover {
      background: ${darken(0.1, '#1772af')};
    }
  }
  @media (min-width: 700px) {
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      justify-content: space-between;
    }
    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
