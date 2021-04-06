import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import Matter from '../../components/Matter';
import { Container, Main, MainContent, NewSubject } from './styles';
import api from '../../services/api';

interface Matter {
  id: number;
  subject: string;
  cost: number;
}

const Dashboard: React.FC = () => {
  const [matters, setMatters] = useState<Matter[]>([]);

  useEffect(() => {
    api.get('/classes').then(response => {
      setMatters(response.data);
    });
  }, []);
  return (
    <Container>
      <Header />
      <PageHeader
        to="/schedules"
        title="Cadastre suas matérias"
        description="Matérias criadas aqui seram vistas pelos alunos"
      />
      <Main id="page-landing-main" className="container">
        <Link to="form-give-classes">
          <NewSubject>
            <FiPlus />
          </NewSubject>
        </Link>
        <MainContent>
          {matters.map(matter => (
            <Matter
              subject={matter.subject}
              cost={matter.cost}
              key={matter.id}
            />
          ))}
          {/* <Matter matter="sociologia" cost={20} key={1} /> */}
          {/* <Matter matter="sociologia" cost={20} key={1} /> */}
        </MainContent>
      </Main>
    </Container>
  );
};

export default Dashboard;
