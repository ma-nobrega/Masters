import React from 'react';
import { Container, Form, Main } from './styles';
import Header from '../../components/PageHeader';

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <Form id="search-teachers" />
      </Header>
      <Main />
    </Container>
  );
};

export default TeacherList;
