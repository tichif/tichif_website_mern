import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
  return (
    <Suspense fallback='loading'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/services'
            component={lazy(() => import('./pages/Services'))}
          />
          <Route
            exact
            path='/contact'
            component={lazy(() => import('./pages/Contact'))}
          />
          <Route
            exact
            path='/works'
            component={lazy(() => import('./pages/Work'))}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
