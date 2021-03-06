import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

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
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
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
      <Content>
        <img src={Logo} alt="Proffy" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input
            placeholder="Digite seu email"
            label="E-mail"
            name="email"
            icon={FiMail}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            name="password"
          />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
