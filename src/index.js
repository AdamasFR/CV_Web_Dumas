import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { i18nConfig, langJson, language } from './services/message.service';


ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      locale={language}
      defaultLocale={i18nConfig.defaultLocale}
      messages={langJson()}
    >
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
