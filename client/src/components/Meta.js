import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title} | Tichif</title>
      <meta charSet='utf8' />
      <meta name='description' content={description} />
      <meta name='keyword' content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Tichif',
  description: 'Mon portfolio en ligne',
  keyword:
    'Dalzon, Charles-Hébert, Dalzon Charles-Hébert, Tichif, tichif.js, Haiti',
};

export default Meta;
