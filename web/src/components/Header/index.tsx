import React from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoWhite from '../../assets/logo-white.svg';
import { useAuth } from '../../hooks/auth';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logoWhite} alt="Masters" />
        </Link>
        <div>
          <Profile>
            {user.avatar_url === null ? (
              <FiUser />
            ) : (
              <img src={user.avatar_url} alt={user.name} />
            )}
            <strong>{user.name}</strong>
          </Profile>
          <FaPowerOff onClick={signOut} />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
