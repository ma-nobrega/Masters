import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--color-primary);
  color: var(--color-text-in-primary);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;
`;

export const Content = styled.div`
  width: 90vw;
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    width: 10rem;
    display: none;
  }
  > div {
    display: flex;
    align-items: center;
    flex: 1;
    svg {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      &:hover {
        color: ${lighten(0.1, '#98cdf5')};
      }
    }
  }
  @media (min-width: 1100px) {
    max-width: 1100px;
    padding: 0 3.2rem;
    > a {
      display: flex;
    }
    > div {
      margin-left: 1.6rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  strong {
    margin-left: 1.6rem;
  }
  @media (min-width: 1100px) {
    padding: 0 6.4rem;
  }
`;
