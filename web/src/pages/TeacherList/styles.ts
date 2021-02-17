import styled from 'styled-components';

export const Container = styled.div`
  &#page-teacher-list {
    width: 100vw;
    height: 100vh;
    @media (min-width: 700px) {
      max-width: 100%;
    }
  }
`;

export const Form = styled.form`
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
      grid-template-columns: repeat(3, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
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
