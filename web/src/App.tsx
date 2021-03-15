import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/GlobalStyles';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </Router>
);

export default App;
