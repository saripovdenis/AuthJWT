import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router';
import routes from './constants/routes';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Router routes={routes} />
    </BrowserRouter>
  );
}

export default App;
