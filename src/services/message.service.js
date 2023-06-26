/**
 * message.service
 * author : adm
 */

import messages from '../messages';


const GLOBAL_MESSAGE_KEY = "global";
export const i18nConfig = {
  defaultLocale: "fr",
  messages,
};

export const language = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let lang = urlParams.get("lang");
  if (messages[lang] === undefined) {
    lang = navigator.language.split(/[-_]/)[0];
  }
  return lang;
};

export const langJson = function () {
  return getTexts(language());
};

export const getTexts = function (lang) {
  const messageLocalized = i18nConfig.messages[lang];
  const messageGlobal = i18nConfig.messages[GLOBAL_MESSAGE_KEY];
  const messageMerged = {
    ...messageLocalized,
    ...messageGlobal,
  };

  return messageMerged;
};
