import React from 'react';
import { FiCalendar, FiDollarSign } from 'react-icons/fi';

import { Container, Subject, Cost } from './styles';

interface MatterProps {
  subject: string;
  cost: number;
  // days?: {
  //   day?: number;
  // }[];
}

const Matter: React.FC<MatterProps> = ({ subject, cost }) => {
  return (
    <Container>
      <main>
        <Subject>
          <strong>{subject}</strong>
        </Subject>
        <Cost>
          <FiDollarSign />
          {cost}
        </Cost>
      </main>
      <footer>
        {/* {days.map(day => day.day).join(', ')} */}
        <FiCalendar />
      </footer>
    </Container>
  );
};

export default Matter;
