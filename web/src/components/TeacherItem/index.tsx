import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { Container } from './styles';

interface Props {
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
}

const TeacherItem: React.FC<Props> = ({ avatar, bio, cost, name, subject }) => {
  return (
    <Container>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora<strong>R$ {cost}</strong>
        </p>
        <button type="button">
          <SiWhatsapp />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
