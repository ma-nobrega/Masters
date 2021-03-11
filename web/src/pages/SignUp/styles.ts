import { darken } from 'polished';
import styled from 'styled-components';

import BackgroundImage from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  > img {
    height: 10rem;
  }

  form {
    margin: 0.8rem 0;
    width: 34rem;
    text-align: center;
    h1 {
      margin-bottom: 1.6rem;
    }
    > div {
      margin-bottom: 1.2rem;
      text-align: start;
    }
    button {
      background-color: var(--color-primary);
      width: 100%;
      height: 5.6rem;
      border: 0;
      border-radius: 0.4rem;
      color: var(--color-button-text);
      font: 700 1.6rem Archivo;
      transition: color 0.2s;
      &:hover {
        background-color: ${darken(0.1, '#2a94f4')};
      }
    }
  }
  > a {
    color: var(--color-primary);
    display: block;
    margin-top: 0.8rem;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${darken(0.1, '#2a94f4')};
    }
    > svg {
      margin-right: 1.6rem;
    }
  }
  @media (min-width: 1000px) {
    max-height: 80rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
