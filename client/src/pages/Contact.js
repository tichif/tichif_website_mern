import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const contactState = useSelector((state) => state.contact);
  const { loading, success, error } = contactState;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      firstName !== '' ||
      lastName !== '' ||
      emailInput !== '' ||
      message !== ''
    ) {
      dispatch(
        contact({
          name: `${firstName} ${lastName}`,
          email: emailInput,
          subject: subject || 'Un message de votre site',
          message,
        })
      );
      setFirstName('');
      setLastName('');
      setEmailInput('');
      setSubject('');
      setMessage('');
    }
  };

  return (
    <Fragment>
      <Meta title={t('contact.title')} />
      <section>
        <div className='title'>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.text')}</p>
        </div>
        <div className='contact'>
          {loading ? (
            <Spinner />
          ) : (
            <div className='contact-form'>
              <form onSubmit={submitHandler}>
                <div className='row'>
                  <div className='input50'>
                    <input
                      type='text'
                      placeholder={t('contact.firstname')}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className='input50'>
                    <input
                      type='text'
                      placeholder={t('contact.lastname')}
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
                      placeholder={t('contact.subject')}
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
                {error && (
                  <div className='row'>
                    <div className='input100'>
                      <Alert type='error' message={error[0].msg} />
                    </div>
                  </div>
                )}
                {success && (
                  <div className='row'>
                    <div className='input100'>
                      <Alert
                        type='success'
                        message="Merci de m'avoir contacté !!!"
                      />
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
          <div className='contact-info'>
            <div className='info-box'>
              <img src={address} alt='Address' className='contact-icon' />
              <div className='details'>
                <h4>{t('contact.address')}</h4>
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
                <h4>{t('contact.phone')}</h4>
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
