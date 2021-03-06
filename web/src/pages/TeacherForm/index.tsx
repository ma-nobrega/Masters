import React, { useCallback, useRef, useState } from 'react';
import {
  FiBook,
  FiCalendar,
  FiCamera,
  FiDollarSign,
  FiUser,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Container, Main, Footer, ScheduleItem } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErros';

import warningIcon from '../../assets/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import Header from '../../components/Header';

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        avatar: Yup.string().required('Avatar obrigatório'),
        whatsapp: Yup.string().required('Whatsapp obrigatório'),
        bio: Yup.string()
          .required('Biografia obrigatório')
          .min(200, 'A biografia menor que 200 caracteres'),
        subject: Yup.string().required('Materia obrigatório'),
        cost: Yup.string().required('Valor obrigatório'),
        week: Yup.string().required('Dia da semana obrigatório'),
        from: Yup.string().required('Horário obrigatório'),
        to: Yup.string().required('Horário obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  return (
    <Container id="page-teacher-form" className="container">
      <Header />
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input icon={FiUser} label="Nome completo" name="name" />
            <Input icon={FiCamera} label="Avatar" name="avatar" />
            <Input icon={FaWhatsapp} label="Whatsapp" name="whatsapp" />
            <TextArea label="Biografia" name="bio" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              firstOption="Selecione uma matéria"
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
            <Input
              icon={FiDollarSign}
              label="Custo da sua hora por aula"
              name="cost"
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponiveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map(scheduleItem => {
              return (
                <ScheduleItem key={scheduleItem.week_day}>
                  <Select
                    firstOption="Selecione um dia"
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
                  <Input name="from" label="Das" type="time" />
                  <Input name="to" label="Até" type="time" />
                </ScheduleItem>
              );
            })}
          </fieldset>
          <Footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar Cadastro</button>
          </Footer>
        </Form>
      </Main>
    </Container>
  );
};

export default TeacherList;
