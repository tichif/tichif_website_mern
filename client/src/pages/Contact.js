import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Contact.css';
import Meta from '../components/Meta';
// import address from '../images/address.png';
// import email from '../images/email.png';
// import telephone from '../images/call.png';
import Spinner from '../components/Spinner';
import Alert from '../components/Alert';
import { contact } from '../actions/contactAction';
import useGATracker from '../hooks/useGATracker';
import contactSchema from '../validations/yupContactValidation';
import contactDefaultValue from '../validations/contactDefaultValue';

const Contact = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useGATracker();

  const contactState = useSelector((state) => state.contact);
  const { loading, success, error } = contactState;

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
              <Formik
                initialValues={contactDefaultValue}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  dispatch(
                    contact({
                      name: `${values.firstName} ${values.lastName}`,
                      email: values.email,
                      subject: values.subject || 'Un message de votre site',
                      message: values.message,
                    })
                  );
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {(props) => (
                  <Form>
                    <div className='row'>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='firstName'
                          placeholder={t('contact.firstname')}
                        />
                        <ErrorMessage
                          name='firstName'
                          component='div'
                          className='error'
                        />
                      </div>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='lastName'
                          placeholder={t('contact.lastname')}
                        />
                        <ErrorMessage
                          name='lastName'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input50'>
                        <Field type='email' name='email' placeholder='Email' />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='error'
                        />
                      </div>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='subject'
                          placeholder={t('contact.subject')}
                        />
                        <ErrorMessage
                          name='subject'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input100'>
                        <Field
                          name='message'
                          component='textarea'
                          placeholder='Message'
                        />
                        <ErrorMessage
                          name='message'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input100'>
                        <button type='submit'>{t('contact.button')}</button>
                      </div>
                    </div>
                    {error && (
                      <div className='row'>
                        <div className='input100'>
                          <Alert type='error' message={error[0].msg} />
                          <Alert type='error' message={error} />
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
                  </Form>
                )}
              </Formik>
            </div>
          )}
          <div className='contact-info'>
            <div className='info-box'>
              <img
                src='/images/address.png'
                alt='Address'
                className='contact-icon'
              />
              <div className='details'>
                <h4>{t('contact.address')}</h4>
                <p>35, rue Chavannes Prol. Pétion-Ville, Haïti</p>
              </div>
            </div>
            <div className='info-box'>
              <img
                src='/images/email.png'
                alt='Email'
                className='contact-icon'
              />
              <div className='details'>
                <h4>Email</h4>
                <a href='mailto:contactme@tichif.com'>
                  contactme@tichif.com
                </a>{' '}
                <br />
                <a href='mailto:charleshebertdalzon@gmail.com'>
                  charleshebertdalzon@gmail.com
                </a>
              </div>
            </div>
            <div className='info-box'>
              <img src='/images/call.png' alt='Call' className='contact-icon' />
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
