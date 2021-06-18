import React from 'react';

import './Alert.css';

const Alert = ({ type, message }) => (
  <p className={`alert ${type}`}>{message}</p>
);

export default Alert;
