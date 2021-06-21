import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import store from './store';
import './i18n';

ReactDOM.render(
  <Suspense fallback='loading'>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
