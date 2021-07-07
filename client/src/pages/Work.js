import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import './Work.css';
import Meta from '../components/Meta';
import tkboutique from '../images/tkboutique.png';
import mariage1 from '../images/mariage.png';
import mariage2 from '../images/mariage2.png';
import emaily from '../images/emaily.png';
import contactKeeper from '../images/contact-keeper.png';

const Work = () => {
  const [t] = useTranslation();

  const works = [
    {
      name: 'TK Boutique',
      image: tkboutique,
      link: 'https://www.tkboutiquehaiti.com',
    },
    {
      name: 'Mariage',
      image: mariage1,
      link: 'https://roosendjude.com',
    },
    {
      name: 'Mariage',
      image: mariage2,
      link: 'https://roosendjude.com/weeding/index.html',
    },
    {
      name: 'Emaily',
      image: emaily,
      link: 'https://nameless-springs-02522.herokuapp.com/',
    },
    {
      name: 'Contact Keeper',
      image: contactKeeper,
      link: 'https://greve-choucroute-70628.herokuapp.com/',
    },
  ];
  return (
    <Fragment>
      <Meta title='Portfolio' />
      <section>
        <div className='title'>
          <h1>{t('work.title')}</h1>
          <p>{t('work.text')}</p>
        </div>

        <div className='portfolio'>
          {works.map((item, i) => (
            <div className='item' key={i}>
              <img src={item.image} alt={item.name} />
              <div className='action'>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  {t('work.button')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Work;
