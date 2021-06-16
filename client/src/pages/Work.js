import React, { Fragment } from 'react';

import './Work.css';
import Meta from '../components/Meta';
import tkboutique from '../images/tkboutique.png';
import mariage1 from '../images/mariage.png';
import mariage2 from '../images/mariage2.png';
import emaily from '../images/emaily.png';
import contactKeeper from '../images/contact-keeper.png';
import githubFinder from '../images/github-finder.png';

const Work = () => {
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
    {
      name: 'Github Finder',
      image: githubFinder,
      link: 'https://githubfinder57895.netlify.app/',
    },
  ];
  return (
    <Fragment>
      <Meta title='Portfolio' />
      <section>
        <div className='title'>
          <h1>Certains de mes meilleurs travaux</h1>
          <p>
            En utilisant les meilleures technologies possibles, ma priorité est
            de satisfaire complètement mes clients en abordant chaque projet
            avec professionalisme, dévouement. cliquez sur le projet en question
            pour avoir une idée globale sur celui-ci.{' '}
          </p>
        </div>

        <div className='portfolio'>
          {works.map((item, i) => (
            <div className='item' key={i}>
              <img src={item.image} alt={item.name} />
              <div className='action'>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                  Visiter
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
