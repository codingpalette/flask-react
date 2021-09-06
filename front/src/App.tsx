import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';

const HomePage = loadable(() => import('./pages/HomePage'));
const AboutPage = loadable(() => import('./pages/AboutPage'));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/join" component={JoinPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
