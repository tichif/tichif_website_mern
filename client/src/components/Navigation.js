import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Navigation.css';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import french from '../images/french.png';
import usa from '../images/usa.png';

const Navigation = () => {
  const dispatch = useDispatch();

  const navigation = useSelector((state) => state.navigation);
  const { active } = navigation;

  return (
    <div className={`navigation${active ? ' active' : ''}`}>
      <ul>
        <li>
          <a href='./index.html'>Accueil</a>
        </li>
        <li>
          <a href='./services.html'>Services</a>
        </li>
        <li>
          <a href='./work.html'>Portfolio</a>
        </li>
        <li>
          <a href='./contact.html'>Contact</a>
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
