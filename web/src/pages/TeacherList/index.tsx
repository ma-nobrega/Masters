import React from 'react';
import { Container, Form, Main } from './styles';
import Header from '../../components/PageHeader';
import Input from '../../components/Input';

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <Form id="search-teachers">
          <Input label="Matéria" name="subject" />
          <Input label="Dia da semana" name="week" />
          <Input type="date" label="Hora" name="time" />
        </Form>
      </Header>
      <Main />
    </Container>
  );
};

export default TeacherList;
