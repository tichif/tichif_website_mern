import * as yup from 'yup';

const language = localStorage.getItem('i18nextLng')
  ? localStorage.getItem('i18nextLng')
  : 'en';

const contactSchema = yup.object.shape({
  firstName: yup
    .string()
    .required(
      language === 'en'
        ? 'Your first name is required.'
        : 'Ton prénom est obligatoire.'
    )
    .min(
      3,
      language === 'en'
        ? 'Your first name is incorrect.'
        : 'Ton prénom est incorrect.'
    )
    .max(
      50,
      language === 'en'
        ? 'Your first name is incorrect.'
        : 'Ton prénom est incorrect.'
    ),
  lastName: yup
    .string()
    .required(
      language === 'en'
        ? 'Your last name is required.'
        : 'Ton nom est obligatoire.'
    )
    .min(
      3,
      language === 'en'
        ? 'Your last name is incorrect.'
        : 'Ton nom est incorrect.'
    )
    .max(
      50,
      language === 'en'
        ? 'Your last name is incorrect.'
        : 'Ton nom est incorrect.'
    ),
  email: yup
    .string()
    .email(
      language === 'en'
        ? 'Your email is incorrect.'
        : 'Ton email est incorrect.'
    )
    .required(
      language === 'en'
        ? 'Your email is required'
        : 'Ton email est obligatoire.'
    )
    .max(
      50,
      language === 'en'
        ? 'Your email is incorrect.'
        : 'Ton email est obligatoire.'
    ),
  subject: yup.string(),
  message: yup
    .string()
    .required(
      language === 'en'
        ? 'Your Message is required.'
        : 'Ton message est obligatoire.'
    )
    .min(
      3,
      language === 'en'
        ? 'Your Message is incorrect.'
        : 'Ton Message est incorrect.'
    ),
});

export default contactSchema;
