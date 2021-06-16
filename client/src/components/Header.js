import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from './Navigation';
import logo from '../images/logo.png';
import './Header.css';
import { toggleNavigation } from '../actions/navigationAction';

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const navigation = useSelector((state) => state.navigation);
  const { active } = navigation;

  const clickHandler = () => {
    setToggled(!toggled);
    dispatch(toggleNavigation(!toggled));
  };

  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='logo' width='100px' />
      </div>
      <div
        className={`toggle${active ? ' active' : ''}`}
        onClick={clickHandler}
      ></div>
      <Navigation />
    </header>
  );
};

export default Header;
