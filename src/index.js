import React from 'react';
import { IntlProvider } from 'react-intl';
import { createRoot } from 'react-dom/client';
import flatten from 'flat'
import {
  getMessagesObject,
} from "./services/utils.service";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import messages_fr from './messages/fr.json';
import messages_en from './messages/en.json';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const messages = {
  'fr': messages_fr,
  'en': messages_en,
};

const i18nConfig = {
  defaultLocale: 'fr',
  messages,
};

export const language = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let lang = urlParams.get("lang");
  if (messages[lang] === undefined) {
    return navigator.language.split(/[-_]/)[0];
  }
  if (lang === undefined) {
    return i18nConfig.defaultLocale;
  }
  return lang;
}

export const langFile = getMessagesObject();

root.render(
  <React.StrictMode>
    <IntlProvider
      locale={language()}
      defaultLocale={i18nConfig.defaultLocale}
      messages={flatten(i18nConfig.messages[language()])}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
