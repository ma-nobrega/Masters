import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Logo from '../../assets/logo.svg';
import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Proffy" />
        <form>
          <h1>Faça seu logon</h1>
          <Input placeholder="Digite seu email" label="E-mail" name="email" />
          <Input
            type="password"
            placeholder="Digite sua senha"
            label="Senha"
            name="senha"
          />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
