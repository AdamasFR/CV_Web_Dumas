import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import messages from './messages';
import reportWebVitals from './reportWebVitals';


const GLOBAL_MESSAGE_KEY = "global";
const i18nConfig = {
  defaultLocale: 'fr',
  messages,
};

const language = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let lang = urlParams.get("lang");
  if (messages[lang] === undefined) {
    lang = navigator.language.split(/[-_]/)[0];
  }
  return lang;
}

const langJson = function () {
  const messageLocalized = i18nConfig.messages[language()];
  const messageGlobal = i18nConfig.messages[GLOBAL_MESSAGE_KEY];
  const messageMerged = {
    ...messageLocalized,
    ...messageGlobal
  };

  console.log(JSON.stringify(messageMerged))
  return messageMerged;
}

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
