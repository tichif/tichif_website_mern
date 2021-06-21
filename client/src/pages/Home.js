import React, { Fragment, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import './Home.css';
import homeP from '../images/home.jpg';
import Meta from '../components/Meta';

const Home = () => {
  const [t, i18n] = useTranslation();
  return (
    <Suspense fallback='loading'>
      <Fragment>
        <Meta title={t('home.title')} />
        <section className='home'>
          <img src={homeP} alt='tichif' className='home-image' />
          <div className='home-content'>
            <h3>Dalzon Charles-Hébert</h3>
            <small>Fullstack web developer</small>
            <p>{t('home.desc')}</p>
            <button className='btn'>
              <i className='fas fa-download'></i> {t('home.button')}
            </button>
          </div>
        </section>
      </Fragment>
    </Suspense>
  );
};

export default Home;
