import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import messages_fr from './messages/fr.json';
import messages_en from './messages/en.json';

const messages = {
 'fr': messages_fr,
 'en': messages_en,
};

const i18nConfig = {
 defaultLocale: 'fr',
 messages,
};

const language = function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let lang = urlParams.get("lang");
  if(messages[lang] == undefined){
    lang = navigator.language.split(/[-_]/)[0];
  }
  return lang;
}

ReactDOM.render(
  <React.StrictMode>
      <IntlProvider
      locale={language}
      defaultLocale={i18nConfig.defaultLocale}
      messages={i18nConfig.messages[language()]}
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
