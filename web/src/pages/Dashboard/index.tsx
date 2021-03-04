import React, { useEffect, useState } from 'react';

import { BsBook, BsLaptop, BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import landing from '../../assets/landing.svg';

import {
  Container,
  Content,
  LogoContainer,
  LandingImage,
  ButtonContainer,
  Connections,
} from './styles';

const Dashboard: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    // conectar api
  }, [totalConnections]);

  return (
    <Container>
      <Content id="page-landing-content" className="container">
        <LogoContainer className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>
        <LandingImage
          src={landing}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <ButtonContainer>
          <Link to="/study" className="study">
            <BsBook />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <BsLaptop />
            Dar aulas
          </Link>
        </ButtonContainer>
        <Connections className="total-connections">
          Total de {totalConnections} conexões já realizadas <BsHeartFill />
        </Connections>
      </Content>
    </Container>
  );
};

export default Dashboard;
