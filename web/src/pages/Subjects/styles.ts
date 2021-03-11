import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-direction;
  flex-direction: column;

  color: var(--color-primary);
`;

export const Main = styled.main`
  flex: 1;
  position: relative;
  > a {
    color: var(--color-primary);
  }
  @media (min-width: 1100px) {
    &#page-landing-main {
      max-width: 1100px;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (min-width: 1100px) {
    width: 1100px;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const NewSubject = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 0;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: solid var(--color-primary) 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 12rem;
    height: 12rem;
  }
`;
