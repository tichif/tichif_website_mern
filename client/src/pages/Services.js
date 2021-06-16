import React, { Fragment } from 'react';

import './Services.css';
import Meta from '../components/Meta';

const Services = () => {
  return (
    <Fragment>
      <Meta title='Services' />
      <section>
        <div className='title'>
          <h1>Les services que j'offre</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            sint, quasi doloremque molestiae nemo ad, doloribus cupiditate natus
            reiciendis perspiciatis facere debitis rerum distinctio voluptas?
          </p>
        </div>
        <div className='services'>
          <div className='service'>
            <div className='icon'>
              <i className='fas fa-code'></i>
            </div>
            <h2>Développement</h2>
            <p>
              Création de votre site ou application web en utilisant les
              dernières technologies telles que React, Express, Docker,
              Kubernetes.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-server'></i>
            </div>
            <h2>Hébergement</h2>
            <p>
              Déploiement de votre site ou application web grace aux plateformes
              d'hébergement Digital Ocean, Heroku, Netlify.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-chart-line'></i>
            </div>
            <h2>SEO</h2>
            <p>
              Renforcement de votre présence sur le web grace aux méthodes de
              référencement et d'optimisation.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-file-signature'></i>
            </div>
            <h2>Consultation</h2>
            <p>
              Etude d'opportunité pour la réalisation de site ou d'application
              web.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-book'></i>
            </div>
            <h2>Formation</h2>
            <p>Formation continue en ligne et en présentielle.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
