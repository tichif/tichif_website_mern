import React from 'react';

import Navigation from './Navigation';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo' width='100px' />
      </div>
      <div className='toggle'></div>
      <Navigation />
    </header>
  );
};

export default Header;
