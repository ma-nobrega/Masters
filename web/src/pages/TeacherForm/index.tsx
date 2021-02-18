import React from 'react';
import { Container, Main, Footer } from './styles';
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
          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
          <TextArea label="Biografia" name="bio" />
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
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
          <Input label="Custo da sua hora por aula" name="cost" />
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
