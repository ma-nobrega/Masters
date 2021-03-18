import React from 'react';
import backIcon from '../../assets/icons/back.svg';

import { Container, Back, HeaderContent } from './styles';

interface Props {
  title: string;
  description?: string;
  to: string;
}

const PageHeader: React.FC<Props> = ({ to, title, description, children }) => {
  return (
    <Container>
      <HeaderContent className="header-content">
        <Back to={to}>
          <img src={backIcon} alt="Voltar" />
        </Back>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Container>
  );
};

export default PageHeader;
