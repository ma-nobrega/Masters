import React from 'react';
import { FiHome } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="Proffy" />
        <form>
          <h1>Faça seu cadastro</h1>
          <Input placeholder="Digite seu nome" label="Nome" name="name" />
          <Input placeholder="Digite seu email" label="E-mail" name="email" />
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            name="senha"
          />
          <button type="submit">Cadastrar</button>
        </form>
        <Link to="/">
          <FiHome />
          Voltart para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignIn;
