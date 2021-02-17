import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--color-text-in-primary);
`;

export const Content = styled.div`
  @media (min-width: 1100px) {
    &#page-landing-content {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;

      grid-template-areas:
        'logo hero hero'
        'buttons buttons total';
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  > img {
    height: 10rem;
  }
  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;
    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
    > img {
      height: 100%;
    }
  }
`;

export const LandingImage = styled.img`
  width: 100%;
  max-height: 30rem;
  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    transition: background-color 0.2s;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    &:first-child {
      margin-right: 1.6rem;
    }
    > svg {
      width: 4rem;
      margin-right: 1.6rem;
    }
  }
  .study {
    background-color: var(--color-primary);
    &:hover {
      background-color: ${darken(0.2, '#2a94f4')};
    }
  }

  .give-classes {
    border: solid var(--color-primary) 2px;
    color: var(--color-primary);
    &:hover {
      border-color: ${darken(0.2, '#2a94f4')};
      color: ${darken(0.1, '#2a94f4')};
    }
  }
  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
    a {
      font-size: 2.4rem;
    }
  }
`;

export const Connections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-left: 0.8rem;
    color: var(--color-secondary);
  }
  @media (min-width: 1100px) {
    grid-area: total;
    justify-content: end;
  }
`;
