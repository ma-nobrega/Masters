import React, { useCallback, useRef } from 'react';
import { FiHome, FiLock, FiMail, FiSmartphone, FiUser } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, AnimationContainer, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErros';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';

interface SignUpFormData {
  name: string;
  smartphone: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          smartphone: Yup.string().required('Celular obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No mínimo 6 digitos'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await api.post('/users', data);
        history.push('/');
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você ja pode fazer seu logon no Masters',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="Proffy" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input
              icon={FiUser}
              placeholder="Digite seu nome"
              label="Nome"
              name="name"
            />
            <Input
              icon={FiSmartphone}
              placeholder="Digite seu celular"
              label="Celular"
              name="smartphone"
            />
            <Input
              icon={FiMail}
              placeholder="Digite seu email"
              label="E-mail"
              name="email"
            />
            <Input
              icon={FiLock}
              placeholder="Digite sua senha"
              label="Senha"
              name="password"
              type="password"
            />
            <button type="submit">Cadastrar</button>
          </Form>
          <Link to="/">
            <FiHome />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
