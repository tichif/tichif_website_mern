import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Work from './pages/Work';

const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-F24PLQ7GX6');

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
