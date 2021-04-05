import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface TeacherData {
  subject: string;
  week_day: string;
  time: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

export interface Class {
  id: string;
  user: User;
  subject: string;
  cost: number;
}

export interface ClassSchedule {
  id: string;
  week_day: number;
  class: Class;
}

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [classSchedule, setClassSchedule] = useState<ClassSchedule[]>([]);

  const handleSubmit = useCallback(
    async (data: TeacherData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          subject: Yup.string().required('Materia obrigatório'),
          week_day: Yup.string().required('Dia da semana obrigatório'),
          time: Yup.string().required('Horário obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get('/classes-schedules', {
          params: data,
        });
        console.log(response.data);

        setClassSchedule(response.data);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        addToast({
          type: 'error',
          title: 'Erro na busca',
          description: 'Ocorreu um erro ao fazer o filtro, cheque os campos.',
        });
      }
    },
    [addToast],
  );

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
            name="week_day"
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
        {classSchedule.map((cSchedule: ClassSchedule) => {
          return (
            <TeacherItem
              key={cSchedule.id}
              name={cSchedule.class.user.name}
              avatar="https://avatars.githubusercontent.com/u/39496767?s=460&u=d137acee042772f04efce67179aa4374ad5e3be0&v=4"
              subject={cSchedule.class.subject}
              bio={cSchedule.class.user.bio}
              cost={cSchedule.class.cost}
            />
          );
        })}
      </Main>
    </Container>
  );
};

export default TeacherList;
