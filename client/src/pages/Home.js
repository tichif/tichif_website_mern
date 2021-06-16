import React, { Fragment } from 'react';

import './Home.css';
import homeP from '../images/home.jpg';
import Meta from '../components/Meta';

const Home = () => {
  return (
    <Fragment>
      <Meta title='Accueil' />
      <section className='home'>
        <img src={homeP} alt='tichif' className='home-image' />
        <div className='home-content'>
          <h3>Dalzon Charles-Hébert</h3>
          <small>Fullstack web developer</small>
          <p>
            Un développeur web à la recherche de l'opportunité d'apporter ses
            compétences et de les appliquer dans un environnement de travail qui
            l'encouragera à progresser et à acquérir de nouvelles connaissances,
            dans l'intention d'aider l'entreprise à atteindre ses objectifs.
          </p>
          <button className='btn'>
            <i className='fas fa-download'></i> Télécharger CV
          </button>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
