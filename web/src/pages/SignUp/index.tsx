import React, { useCallback, useRef } from 'react';
import { FiHome, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './styles';
import getValidationErrors from '../../utils/getValidationErros';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
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
    <Container>
      <Background />
      <Content>
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
          />
          <button type="submit">Cadastrar</button>
        </Form>
        <Link to="/">
          <FiHome />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
