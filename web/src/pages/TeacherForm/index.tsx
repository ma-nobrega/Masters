import React, { useCallback, useRef, useState } from 'react';
import { FiBook, FiCalendar, FiDollarSign, FiMinus } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Container, Main, Footer, ScheduleItem } from './styles';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErros';

import warningIcon from '../../assets/icons/warning.svg';
import Select from '../../components/Select';
import Header from '../../components/Header';

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
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

  function addNewScheduleItem(): void {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }

  function RemoveNewScheduleItem(index: number): void {
    scheduleItems.splice(index, 1);
    setScheduleItems([...scheduleItems]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string,
  ): void {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        };
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }

  return (
    <Container id="page-teacher-form" className="container">
      <Header />
      <PageHeader
        to="/give-classes"
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItem key={Number(index)}>
                  <Select
                    firstOption="Selecione um dia"
                    icon={FiCalendar}
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={
                      e =>
                        setScheduleItemValue(index, 'week_day', e.target.value)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                    name="week"
                    options={[
                      { value: 0, label: 'Domingo' },
                      { value: 1, label: 'Segunda-feira' },
                      { value: 2, label: 'Terça-feira' },
                      { value: 3, label: 'Quarta-feira ' },
                      { value: 4, label: 'Quinta-feira' },
                      { value: 5, label: 'Sexta-feira' },
                      { value: 6, label: 'Sabado' },
                    ]}
                  />
                  <Input
                    onChange={
                      e => setScheduleItemValue(index, 'from', e.target.value)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                    value={scheduleItem.from}
                    name="from"
                    label="Das"
                    type="time"
                  />
                  <Input
                    onChange={
                      e => setScheduleItemValue(index, 'to', e.target.value)
                      // eslint-disable-next-line react/jsx-curly-newline
                    }
                    value={scheduleItem.to}
                    name="to"
                    label="Até"
                    type="time"
                  />
                  {scheduleItems.length > 1 && (
                    <>
                      <FiMinus
                        className="remove"
                        onClick={() => RemoveNewScheduleItem(index)}
                      />
                      <div
                        className="remove-mobile"
                        aria-hidden="true"
                        onClick={() => RemoveNewScheduleItem(index)}
                      >
                        Excluir horario
                        <FiMinus />
                      </div>
                    </>
                  )}
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
