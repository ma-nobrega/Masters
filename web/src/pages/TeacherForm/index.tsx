import React from 'react';
import { FiBook, FiDollarSign, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Container, Main, Footer, ScheduleItem } from './styles';
import Header from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/icons/warning.svg';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-form" className="container">
      <Header
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />
      <Main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input icon={FiUser} label="Nome completo" name="name" />
          <Input icon={FiUser} label="Avatar" name="avatar" />
          <Input icon={FaWhatsapp} label="Whatsapp" name="whatsapp" />
          <TextArea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
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
          <Input
            icon={FiDollarSign}
            label="Custo da sua hora por aula"
            name="cost"
          />
        </fieldset>
        <fieldset>
          <legend>
            Horários disponiveis
            <button type="button">+ Novo horário</button>
          </legend>
          <ScheduleItem>
            <Select
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
        </fieldset>
        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </Footer>
      </Main>
    </Container>
  );
};

export default TeacherList;
