import React from 'react';
import { FiBook, FiCalendar } from 'react-icons/fi';
import { Container, Form, Main } from './styles';
import Header from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <Form id="search-teachers">
          <Select
            icon={FiBook}
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Fisica', label: 'Fisica ' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Portugues', label: 'Portugues' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />
          <Select
            icon={FiCalendar}
            label="Dia da semana"
            name="week"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira ' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input type="time" label="Hora" name="time" />
        </Form>
      </Header>
      <Main>
        <TeacherItem
          name="Matheus Nobrega"
          avatar="https://avatars.githubusercontent.com/u/39496767?s=460&u=d137acee042772f04efce67179aa4374ad5e3be0&v=4"
          subject="Educação Física"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam fugit eum odit eius, aperiam illo neque iure velit eos molestiae sunt sed quas et eaque, beatae, voluptates ad porro."
          cost="80"
        />
        <TeacherItem
          name="Matheus Nobrega"
          avatar="https://avatars.githubusercontent.com/u/39496767?s=460&u=d137acee042772f04efce67179aa4374ad5e3be0&v=4"
          subject="Educação Física"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam fugit eum odit eius, aperiam illo neque iure velit eos molestiae sunt sed quas et eaque, beatae, voluptates ad porro."
          cost="80"
        />
        <TeacherItem
          name="Matheus Nobrega"
          avatar="https://avatars.githubusercontent.com/u/39496767?s=460&u=d137acee042772f04efce67179aa4374ad5e3be0&v=4"
          subject="Educação Física"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam fugit eum odit eius, aperiam illo neque iure velit eos molestiae sunt sed quas et eaque, beatae, voluptates ad porro."
          cost="80"
        />
      </Main>
    </Container>
  );
};

export default TeacherList;
