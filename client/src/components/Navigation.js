import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='navigation'>
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
              <img src='./images/github.png' alt='github' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/TichifJS'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='./images/twitter.png' alt='twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/tichif.js'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src='./images/instagram.png' alt='instagram' />
            </a>
          </li>
        </ul>
        <ul className='lang-icon'>
          <li>
            <img src='./images/french.png' alt='french' />
          </li>
          <li>
            <img src='./images/usa.png' alt='french' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
