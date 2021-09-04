import React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';

const HomePage = loadable(() => import('./pages/HomePage'));
const AboutPage = loadable(() => import('./pages/AboutPage'));

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
