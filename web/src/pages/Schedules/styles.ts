import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-direction;
  flex-direction: column;
`;

export const Main = styled.main`
  margin-top: 4rem;
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
`;

export const Management = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    margin-top: 8px;
    color: var(--color-primary);
    display: flex;
    align-items: center;
    font-weight: 600;
    span {
      display: flex;
      align-items: center;
    }
    span + span::before {
      content: '';
      width: 2px;
      height: 1.2rem;
      background: var(--color-primary);
      margin: 0 8px;
    }
  }
  > a {
    color: var(--color-text-base);
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      margin-right: 0.8rem;
      color: var(--color-primary);
    }
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 6.4rem;
  h1 {
    font-size: 3.2rem;
  }
`;

export const NextApoitment = styled.div`
  margin-top: 4rem;
  > strong {
    font-size: 2rem;
    font-weight: 400;
  }
  > div {
    border: 1px solid var(--color-line-in-white);
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    position: relative;
    &::before {
      position: absolute;
      height: 80%;
      width: 1px;
      left: 0;
      top: 10%;
      content: '';
      background: var(--color-primary);
    }
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    strong {
      font-size: 2.4rem;
      margin-left: 2.4rem;
    }
    span {
      margin-left: auto;
      display: flex;
      align-items: center;
      svg {
        color: var(--color-primary);
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 4rem;
  > strong {
    font-size: 2rem;
    line-height: 2.6em;
    border-bottom: 1px solid var(--color-line-in-white);
    display: block;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
  }
  & + section {
    margin-bottom: 4rem;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;
  & + div {
    margin-top: 1.6rem;
  }
  > span {
    margin-left: auto;
    display: flex;
    align-items: center;
    svg {
      color: var(--color-primary);
      margin-right: 0.8rem;
    }
  }
  > div {
    flex: 1;
    border: 1px solid var(--color-line-in-white);
    display: flex;
    align-items: center;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    margin-left: 2.4rem;
    img {
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }
    strong {
      margin-left: 2.4rem;
      font-size: 1.6rem;
    }
  }
`;

export const Calendar = styled.aside`
  width: 36rem;
  margin-top: 4rem;

  .DayPicker {
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 0.8rem;
    margin: 1.6rem;
  }
  .DayPicker-Day {
    width: 3.2rem;
    height: 3.2rem;
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    border-radius: 0.8rem;
    color: var(--color-text-base);
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: var(--color-primary);
    color: var(--color-title-in-primary);
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--disabled {
    color: var(--color-text-base) !important;
    background: transparent !important;
  }
  .DayPicker-Day--selected {
    background: var(--color-primary) !important;
    border-radius: 0.8rem;
    color: var(--color-title-in-primary) !important;
  }
`;
