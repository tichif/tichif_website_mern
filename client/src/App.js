import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
      </Switch>
    </Router>
  );
};

export default App;
