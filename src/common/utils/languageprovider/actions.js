import { CHANGE_LOCALE, NOTIFICATION_LOCALE, CHANGE_VALUE_LOCALE } from './constants';


const changeLocaleAction = () => ({
  type: CHANGE_LOCALE,
});

const notificationLocaleAction = (data) => ({
  type:NOTIFICATION_LOCALE,
  payload:data
});

const valueChangeLanguangeAction = (data) => ({
  type:CHANGE_VALUE_LOCALE,
  payload:data
})


export const notificationLocale = (data) =>(dispatch) => {
  dispatch(notificationLocaleAction(data));
};


export const changeLocale = () => (dispatch) => {
    dispatch(notificationLocaleAction(true));
    dispatch(changeLocaleAction());

};

export const valueChangeLanguange = (data) => (dispatch) => {
  dispatch(valueChangeLanguangeAction(data));
}