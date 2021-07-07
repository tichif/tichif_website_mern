import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import './Services.css';
import Meta from '../components/Meta';

const Services = () => {
  const [t] = useTranslation();
  return (
    <Fragment>
      <Meta title='Services' />
      <section>
        <div className='title'>
          <h1>{t('services.title')}</h1>
          <p>{t('services.text')}</p>
        </div>
        <div className='services'>
          <div className='service'>
            <div className='icon'>
              <i className='fas fa-code'></i>
            </div>
            <h2>{t('services.dev.title')}</h2>
            <p>{t('services.dev.text')}</p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-server'></i>
            </div>
            <h2>{t('services.hosting.title')}</h2>
            <p>{t('services.hosting.text')}</p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-chart-line'></i>
            </div>
            <h2>{t('services.seo.title')}</h2>
            <p>{t('services.seo.text')}</p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-file-signature'></i>
            </div>
            <h2>{t('services.consultation.title')}</h2>
            <p>{t('services.consultation.text')}</p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-book'></i>
            </div>
            <h2>{t('services.formation.title')}</h2>
            <p>{t('services.formation.text')}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
