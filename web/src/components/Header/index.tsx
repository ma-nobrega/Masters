import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import logoWhite from '../../assets/logo-white.svg';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoWhite} alt="logo" />
        <div>
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/39496767?s=460&u=d137acee042772f04efce67179aa4374ad5e3be0&v=4"
              alt=""
            />
            <strong>Matheus Nobrega</strong>
          </Profile>
          <FaPowerOff />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
