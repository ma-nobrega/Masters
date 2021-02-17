import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-white.svg';
import backIcon from '../../assets/icons/back.svg';

import { Container, TopBar, HeaderContent } from './styles';

interface Props {
  title: string;
  description?: string;
}

const PageHeader: React.FC<Props> = ({ title, description, children }) => {
  return (
    <Container>
      <TopBar className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logo} alt="Proffy" />
      </TopBar>
      <HeaderContent className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
