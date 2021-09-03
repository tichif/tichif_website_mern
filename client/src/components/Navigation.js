import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Navigation.css';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import french from '../images/french.png';
import usa from '../images/usa.png';
import { toggleNavigation } from '../actions/navigationAction';

const Navigation = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const navigation = useSelector((state) => state.navigation);
  const { active } = navigation;

  const clickHandler = () => {
    dispatch(toggleNavigation(false));
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    clickHandler();
  };

  return (
    <Suspense fallback='loading'>
      <div className={`navigation${active ? ' active' : ''}`}>
        <ul>
          <li>
            <Link to='/' onClick={clickHandler}>
              {t('navigation.1')}
            </Link>
          </li>
          <li>
            <Link to='/services' onClick={clickHandler}>
              {t('navigation.2')}
            </Link>
          </li>
          <li>
            <Link to='/works' onClick={clickHandler}>
              {t('navigation.3')}
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={clickHandler}>
              {t('navigation.4')}
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
            <li>
              <a
                href='https://www.youtube.com/channel/UCjYdzbmiEptw8aVKpNVOqjA'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={youtube} alt='youtube' />
              </a>
            </li>
          </ul>
          <ul className='lang-icon'>
            <li>
              <img
                src={french}
                alt='french'
                onClick={() => changeLanguage('fr')}
              />
            </li>
            <li>
              <img
                src={usa}
                alt='french'
                onClick={() => changeLanguage('en')}
              />
            </li>
          </ul>
        </div>
      </div>
    </Suspense>
  );
};

export default Navigation;
