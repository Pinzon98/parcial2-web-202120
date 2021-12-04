import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  return(
    <div className = 'i18n-selector'>
      <button onClick = {() => setLanguage(LOCALES.SPANISH)}>Spanish</button>
      <button onClick = {() => setLanguage(LOCALES.ENGLISH)}>English</button>
    </div>
  );
};
