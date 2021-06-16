import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navigation.css';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import french from '../images/french.png';
import usa from '../images/usa.png';
import { toggleNavigation } from '../actions/navigationAction';

const Navigation = () => {
  const dispatch = useDispatch();

  const navigation = useSelector((state) => state.navigation);
  const { active } = navigation;

  const clickHandler = () => {
    dispatch(toggleNavigation(false));
  };

  return (
    <div className={`navigation${active ? ' active' : ''}`}>
      <ul>
        <li>
          <Link to='/' onClick={clickHandler}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to='/services' onClick={clickHandler}>
            Services
          </Link>
        </li>
        <li>
          <Link to='/works' onClick={clickHandler}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={clickHandler}>
            Contact
          </Link>
        </li>
      </ul>
      <div className='social-bar'>
        <ul>
          <li>
            <a
              href='https://github.com/tichif'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={github} alt='github' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/TichifJS'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={twitter} alt='twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/tichif.js'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={instagram} alt='instagram' />
            </a>
          </li>
        </ul>
        <ul className='lang-icon'>
          <li>
            <img src={french} alt='french' />
          </li>
          <li>
            <img src={usa} alt='french' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
