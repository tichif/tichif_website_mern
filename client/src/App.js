import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Work from './pages/Work';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/works' component={Work} />
      </Switch>
    </Router>
  );
};

export default App;
