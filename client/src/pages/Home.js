import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import './Home.css';
import homeP from '../images/home.jpg';
import Meta from '../components/Meta';

const Home = ({ history }) => {
  const [t] = useTranslation();

  const clickHandler = () => {
    const language = localStorage.getItem('i18nextLng')
      ? localStorage.getItem('i18nextLng')
      : 'en';

    if (language === 'en') {
      window.location.href =
        // 'http://127.0.0.1:5000/api/v1/images/cv_english.jpg';
        'http://www.tichif.com/api/v1/images/cv_english.jpg';
    } else if (language === 'fr') {
      window.location.href =
        // 'http://127.0.0.1:5000/api/v1/images/cv_french.jpg';
        'http://www.tichif.com/api/v1/images/cv_french.jpg';
    }
  };
  return (
    <Fragment>
      <Meta title={t('home.title')} />
      <section className='home'>
        <img src={homeP} alt='tichif' className='home-image' />
        <div className='home-content'>
          <h3>Dalzon Charles-Hébert</h3>
          <small>Fullstack web developer</small>
          <p>{t('home.desc')}</p>
          <button className='btn' onClick={clickHandler}>
            <i className='fas fa-download'></i> {t('home.button')}
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
