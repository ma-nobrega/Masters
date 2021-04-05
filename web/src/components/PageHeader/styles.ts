import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  width: 100%;
  @media (min-width: 700px) {
    height: 24rem;
  }
`;

export const Back = styled(Link)`
  position: absolute;
  top: 30%;
  left: -8rem;
  > img {
    height: 3.2rem;
  }
  > a {
    height: 3.2rem;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;
  strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }
  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

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

  @media (min-width: 700px) {
    flex: 1;
    max-width: 740px;
    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    strong {
      max-width: 350px;
    }
  }
`;
