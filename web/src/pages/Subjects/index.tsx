import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Matter from '../../components/Matter';
import { Container, Main, MainContent, NewSubject } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main id="page-landing-main" className="container">
        <Link to="form-give-classes">
          <NewSubject>
            <FiPlus />
          </NewSubject>
        </Link>
        <MainContent>
          <Matter subject="sociologia" cost={20} key={1} />
          <Matter subject="sociologia" cost={20} key={1} />
          <Matter subject="sociologia" cost={20} key={1} />
        </MainContent>
      </Main>
    </Container>
  );
};

export default Dashboard;
