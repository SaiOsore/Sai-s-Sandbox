import React from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router/router';

import { GlobalStyle } from './theme/global';
import Header from './components/header/Header';
import Container from './components/layouts/Container';
import Folders from './components/folder/Folders';

const App = () => {
  const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      <Header />
      <Container>
        <Folders />
        <GlobalStyle />
        { routeResult }
      </Container>
    </div>
  );
}

export default App;