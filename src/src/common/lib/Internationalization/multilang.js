import I18n, { setLocale } from 'ati-react-native-redux-i18n';

export const multilang = (message) => {
    return I18n.t(message);
};

export const changeLocale = (localeCode) => {
    return setLocale(localeCode);
};


export const addLanguage = (language) => {
    I18n.fallbacks = true;
    I18n.translations = { ...I18n.translations, ...language };
};