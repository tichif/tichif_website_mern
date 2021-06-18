import React, { Fragment, useState } from 'react';

import './Contact.css';
import Meta from '../components/Meta';
import address from '../images/address.png';
import email from '../images/email.png';
import telephone from '../images/call.png';
import Spinner from '../components/Spinner';
import Alert from '../components/Alert';
import { contact } from '../actions/contactAction';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Meta title='Contactez-moi' />
      <section>
        <div className='title'>
          <h1>Contactez moi</h1>
          <p>
            Ecrivez moi pour avoir plus d'informations sur les services que
            j'offre, pour prendre rendez-vous, ou tout simplement pour me dire
            bonjour <span role='img'>😉</span>
            <span role='img'>🙂</span>
            <span role='img'>🙋🏾‍♂️</span>.
          </p>
        </div>
        <div className='contact'>
          <div className='contact-form'>
            <form onSubmit={submitHandler}>
              <div className='row'>
                <div className='input50'>
                  <input
                    type='text'
                    placeholder='Prénom'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className='input50'>
                  <input
                    type='text'
                    placeholder='Nom'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input50'>
                  <input
                    type='email'
                    placeholder='Email'
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
                <div className='input50'>
                  <input
                    type='text'
                    placeholder='Sujet'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input100'>
                  <textarea
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input100'>
                  <button type='submit'>Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          <div className='contact-info'>
            <div className='info-box'>
              <img src={address} alt='Address' className='contact-icon' />
              <div className='details'>
                <h4>Adresse</h4>
                <p>35, rue Chavannes Prol. Pétion-Ville, Haïti</p>
              </div>
            </div>
            <div className='info-box'>
              <img src={email} alt='Email' className='contact-icon' />
              <div className='details'>
                <h4>Email</h4>
                <a href='mailto:contactme@tichif.dev'>
                  contactme@tichif.dev
                </a>{' '}
                <br />
                <a href='mailto:charleshebertdalzon@gmail.com'>
                  charleshebertdalzon@gmail.com
                </a>
              </div>
            </div>
            <div className='info-box'>
              <img src={telephone} alt='Call' className='contact-icon' />
              <div className='details'>
                <h4>Téléphone</h4>
                <p>(+509) 47116485 / 48803395 / 35651206</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
