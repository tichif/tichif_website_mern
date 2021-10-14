import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';

import './Work.css';
import Meta from '../components/Meta';
// import tkboutique from '../images/tkboutique.jpg';
// import mariage1 from '../images/mariage.jpg';
// import mariage2 from '../images/mariage2.jpg';
// import emaily from '../images/emaily.png';
// import contactKeeper from '../images/contact-keeper.png';
// import tandou from '../images/tandou.jpg';
import useGATracker from '../hooks/useGATracker';

const Work = () => {
  const [t] = useTranslation();

  useGATracker();

  const works = [
    {
      name: 'TK Boutique',
      image: '/images/tkboutique.jpg',
      link: 'https://www.tkboutiquehaiti.com',
    },
    {
      name: 'Mariage',
      image: '/images/mariage.jpg',
      link: 'https://roosendjude.com',
    },
    {
      name: 'Mariage',
      image: '/images/mariage2.jpg',
      link: 'https://roosendjude.com/weeding/index.html',
    },
    {
      name: 'Tandou Birthday',
      image: '/images/tandou.jpg',
      link: 'https://tandou.netlify.app/',
    },
    {
      name: 'Emaily',
      image: '/images/emaily.png',
      link: 'https://nameless-springs-02522.herokuapp.com/',
    },
    {
      name: 'Contact Keeper',
      image: '/images/contact-keeper.png',
      link: 'https://greve-choucroute-70628.herokuapp.com/',
    },
  ];

  const onClickHandler = (item) => {
    ReactGA.event({
      category: 'Button',
      action: `Click on the ${item.name} project`,
    });
  };

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
                <a
                  href={item.link}
                  target='_blank'
                  onClick={() => onClickHandler(item)}
                  rel='noopener noreferrer'
                >
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
