import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
//@ts-ignore
import en from './en.json';
//@ts-ignore
import ar from './ar.json';

const translations = { en, ar };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations)
) || { languageTag: 'en' };
i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;