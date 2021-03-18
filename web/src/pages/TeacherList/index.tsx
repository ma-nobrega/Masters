import React, { useCallback, useRef } from 'react';
import { FiBook, FiCalendar } from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Container, Main } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Header from '../../components/Header';
import getValidationErrors from '../../utils/getValidationErros';

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        subject: Yup.string().required('Materia obrigatório'),
        week: Yup.string().required('Dia da semana obrigatório'),
        time: Yup.string().required('Horário obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container id="page-teacher-list" className="container">
      <Header />
      <PageHeader to="/dashboard" title="Estes são os proffys disponíveis.">
        <Form ref={formRef} onSubmit={handleSubmit} id="search-teachers">
          <Select
            firstOption="aaa"
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
            firstOption="aaa"
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
          <button type="submit">Buscar</button>
        </Form>
      </PageHeader>
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
