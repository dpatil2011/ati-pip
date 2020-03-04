import { CHANGE_LOCALE, DEFAULT_LOCALE, NOTIFICATION_LOCALE, CHANGE_VALUE_LOCALE} from './constants';

const initialState = {
  language: DEFAULT_LOCALE,
  checked_english: false,
  checked_indonesian: true,
  isChangeLocale: false,
  placeholder: '',
};

const handler = (currentState) => {
  const language = {
    changelanguage: () => ({
      ...currentState,
      checked_english: !currentState.checked_english,
      checked_indonesian: !currentState.checked_indonesian,
    }),
    notificationlocale: data => ({
      ...currentState,
      isChangeLocale: data,
    }),
    setLanguage: data => ({
      ...currentState,
      language: data,
      placeholder: data === 'id' ? 'Pilih satu' : 'Choose one',
    }),
  };
  return {
    ...language,
  };
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCALE:
      return handler(state).changelanguage();
    case NOTIFICATION_LOCALE:
      return handler(state).notificationlocale(payload);
    case CHANGE_VALUE_LOCALE:
      return handler(state).setLanguage(payload);
    default:
      return state;
  }
};