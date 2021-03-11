import styled from 'styled-components';

export const Container = styled.div`
  width: 32rem;
  height: 10rem;
  border-radius: 0.8rem;
  border: solid var(--color-primary) 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1.6rem;
  margin: 1.6rem 0;
  strong {
    font-size: 2.4rem;
    & + div {
      margin: 0.6rem 0;
    }
  }
  cursor: pointer;
  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > svg {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.8rem;
    }
  }
`;

export const Subject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
`;

export const Cost = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  > svg {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.8rem;
  }
`;
