import React, { useCallback, useState } from 'react';
import { FiClock, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DayPicker, { DayModifiers } from 'react-day-picker';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import { useAuth } from '../../hooks/auth';

import 'react-day-picker/lib/style.css';

import {
  Container,
  Main,
  Management,
  ScheduleContainer,
  Schedule,
  NextApoitment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Schedules: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);
  const { user } = useAuth();
  return (
    <Container>
      <Header />
      <PageHeader
        title="Horarios Agendados"
        description="Abaixo são seus horarios agendados para o atendimento."
        to="/dashboard"
      />
      <Main>
        <Management>
          <p>
            <span>Hoje</span>
            <span>Dia 15</span>
            <span>Quinta-feira</span>
          </p>
          <Link to="/give-classes">
            <FiEdit />
            <strong>Gerenciar suas materias</strong>
          </Link>
        </Management>
        <ScheduleContainer>
          <Schedule>
            <NextApoitment>
              <strong>Atendimento a seguir</strong>
              <div>
                <img
                  src="https://i.redd.it/6urokz1hvlt21.jpg"
                  alt="Michael Scott"
                />
                <strong>Michael Scott</strong>
                <span>
                  <FiClock />
                  08:00
                </span>
              </div>
            </NextApoitment>

            <Section>
              <strong>Manhã</strong>
              <Appointment>
                <span>
                  <FiClock />
                  09:00
                </span>
                <div>
                  <img
                    src="https://pbs.twimg.com/profile_images/1335095835/500full_400x400.jpg"
                    alt="Howard Wolowitz"
                  />
                  <strong>Howard Wolowitz</strong>
                </div>
              </Appointment>
              <Appointment>
                <span>
                  <FiClock />
                  10:00
                </span>
                <div>
                  <img
                    src="https://64.media.tumblr.com/e1dd53db60f378e9f569e126d8b9e72b/tumblr_phiqxd6p661wiwetno7_400.png"
                    alt="Chandler Bing"
                  />
                  <strong>Chandler Bing</strong>
                </div>
              </Appointment>
            </Section>
            <Section>
              <strong>Tarde</strong>
              <Appointment>
                <span>
                  <FiClock />
                  13:00
                </span>
                <div>
                  <img
                    src="https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/person/737386/c04cab82627c6910b31c54b1357b2d73/579x579-Q90_c04cab82627c6910b31c54b1357b2d73.jpg"
                    alt="Phill Dunphy"
                  />
                  <strong>Phill Dunphy</strong>
                </div>
              </Appointment>
              <Appointment>
                <span>
                  <FiClock />
                  14:00
                </span>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Barney Stinson"
                  />
                  <strong>Barney Stinson</strong>
                </div>
              </Appointment>
            </Section>
          </Schedule>
          <Calendar>
            <DayPicker
              weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
              fromMonth={new Date()}
              modifiers={{
                available: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
              }}
              selectedDays={selectedDate}
              onDayClick={handleDateChange}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
            />
          </Calendar>
        </ScheduleContainer>
      </Main>
    </Container>
  );
};

export default Schedules;
