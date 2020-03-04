import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createBrowserHistory } from 'history';
import * as v from 'voca';
import { push, go } from 'connected-react-router';
import { submit, reset, change, clearFields, clearSubmitErrors } from 'redux-form';
import { AtiMessage } from 'ati-react-web';
import Notification from './../../../common/general-component/notification/notification';
import NotificationError from './../../../common/general-component/notification/notification-error';
import LanguageProvider from './../../../common/utils/languageprovider/index';
import { DEFAULT_LOCALE } from './../../../common/utils/languageprovider/constants';
import messages from './../../appMessage.properties';
import menu from './../../appMenu.properties';
import { SET_USER, SELECT_MENU } from './../../layout/store/layout-action-type';
import { TOTAL_ROW_TABLE } from '../action/index';
import { MESSAGE, SUCCESS } from './../../utils/app-message-constants';

const baseUrl = process.env.PUBLIC_URL;

const dispatchMenu = (payload) => {
    return {
        type: SELECT_MENU,
        payload,
    };
};

export const navigate = (key, additionalLink = '', query = null) => {
    return (dispatch) => {
        const history = createBrowserHistory();
        if (menu[key]) {
            if (history.location.pathname !== menu[key].link || (!v.isEmpty(additionalLink) || query !== null)) {
                dispatch(dispatchMenu({
                    menuKey: key,
                    openedMenuKey: menu[key].open ? [menu[key].open] : [],
                }));
                if (!v.isEmpty(additionalLink)) {
                    dispatch(push(`${baseUrl}${menu[key].link}/${additionalLink}`));
                } else {
                    dispatch(push(`${baseUrl}${menu[key].link}`));
                }
            } else {
                dispatch(go(0));
            }
        }
    };
};

// Relations with notifMessage for translator
export const languageProvider = (message, param = {}, locale = DEFAULT_LOCALE) => (
    <LanguageProvider locale={locale} key={locale}>
        <FormattedMessage id={message} values={param} />
    </LanguageProvider>
);

export const notificationError = (code, responeCode, language, param = {}) => {
    if ((!v.isEmpty(messages[code])) && !v.isEmpty(messages[code][responeCode])) {
        const { message } = messages[code][responeCode];
        NotificationError({ title: languageProvider(message, param, language) });
    } else if (responeCode === 9999 || responeCode === '9999') {
        const { message } = messages[1000][9999];
        NotificationError({ title: languageProvider(message, param, language) });
    } else if (responeCode === 9991 || responeCode === '9991') {
        const { message } = messages[1000][9991];
        NotificationError({ title: languageProvider(message, param, language) });
    } else {
        const { message } = messages[1000][0];
        NotificationError({ title: languageProvider(message, param, language) });
    }
};

export const notificationSucccess = (code, responeCode, language, param = {}) => {
    if ((!v.isEmpty(messages[code])) && !v.isEmpty(messages[code][responeCode])) {
        const { message } = messages[code][responeCode];
        Notification({ title: languageProvider(message, param, language) });
    } else {
        notificationError(1000, responeCode, language);
    }
};

export const showError = (key, additionalMessage) => (dispatch) => {
    const additional = Object.assign({ prefix: '', suffix: '' }, additionalMessage);
    const combine = additional.prefix + (messages[key] === undefined ? key : messages[key]) + additional.suffix;
    const message = languageProvider(combine);
    AtiMessage({ type: 'error', message, duration: 6 });
};

/**
 * Need refactoring code for better using translator
 * @param menuCode - param for modul want to get message
 * @param response - param for passing response code and detail from backend
 * @param key - param for passing attribute in message like (add, update, delete, etc)
 * @param param - param for passing data want to include in message, example param0 for index 0, param1 for index 1
 * @param isNotService - param for trigger method is using for service or otherwise
 */
export const notifMessage = (menuCode, response, key = '', param = [], isNotService = false) => (dispatch) => {
    let code = '';
    let codeDetail = [];
    let message = '';
    const finalParam = {};
    if (!isNotService) {
        if (response !== null && !v.isEmpty(response)) {
            code = response.responseCode;
            if (response.errorDetails !== null && !v.isEmpty(response.errorDetails)) {
                codeDetail = Object.keys(response.errorDetails);
            }
            if (!v.isEmpty(param)) {
                param.forEach((val, idx) => {
                    finalParam[`param${idx}`] = val;
                });
            }
            if (!v.isEmpty(menuCode) && !v.isEmpty(messages[menuCode])) {
                if (!v.isEmpty(code) && !v.isEmpty(messages[menuCode][code])) {
                    if (code === SUCCESS) {
                        if (!v.isEmpty(key) && !v.isEmpty(messages[menuCode][code][key])) {
                            message = languageProvider(messages[menuCode][code][key], finalParam);
                            Notification({ title: message });
                        } else {
                            finalParam.param0 = key;
                            finalParam.param1 = code;
                            finalParam.param2 = menuCode;
                            message = languageProvider(messages[1000][3][MESSAGE], finalParam);
                            NotificationError({ title: message });
                        }
                    } else if (code !== SUCCESS) {
                        if (!v.isEmpty(codeDetail)) {
                            codeDetail.forEach((val) => {
                                if (!v.isEmpty(messages[menuCode][code][val])) {
                                    message = languageProvider(messages[menuCode][code][val], finalParam);
                                    NotificationError({ title: message });
                                } else {
                                    finalParam.param0 = val;
                                    finalParam.param1 = code;
                                    finalParam.param2 = menuCode;
                                    message = languageProvider(messages[1000][3][MESSAGE], finalParam);
                                    NotificationError({ title: message });
                                }
                            });
                        } else if (v.isEmpty(codeDetail)) {
                            if (!v.isEmpty(messages[menuCode][code][MESSAGE])) {
                                message = languageProvider(messages[menuCode][code][MESSAGE], finalParam);
                                NotificationError({ title: message });
                            } else {
                                finalParam.param0 = MESSAGE;
                                finalParam.param1 = code;
                                finalParam.param2 = menuCode;
                                message = languageProvider(messages[1000][3][MESSAGE], finalParam);
                                NotificationError({ title: message });
                            }
                        }
                    }
                } else if (!v.isEmpty(messages[1000][code])) {
                    message = languageProvider(messages[1000][code][MESSAGE], finalParam);
                    NotificationError({ title: message });
                } else {
                    finalParam.param0 = code;
                    finalParam.param1 = menuCode;
                    message = languageProvider(messages[1000][2][MESSAGE], finalParam);
                    NotificationError({ title: message });
                }
            } else {
                finalParam.param0 = menuCode;
                message = languageProvider(messages[1000][1][MESSAGE], finalParam);
                NotificationError({ title: message });
            }
        } else {
            message = languageProvider(messages[1000][0][MESSAGE], finalParam);
            NotificationError({ title: message });
        }
    } else if (isNotService) {
        if (!v.isEmpty(param)) {
            param.forEach((val, idx) => {
                finalParam[`param${idx}`] = val;
            });
        }
        if ((!v.isEmpty(menuCode)) && !v.isEmpty(response)) {
            if (!v.isEmpty(key)) {
                message = languageProvider(messages[menuCode][response][key], finalParam);
                NotificationError({ title: message });
            }
        }
    }
};

export const showMessage = (key, type = 'success') => {
    const split = key.split('.');
    let message = "";
    if (split){
        if (!split[2]){
            message = messages[split[0]][split[1]]
        } else if (split[2]) {
            message = messages[split[0]][split[1]][split[2]]
        } else {
            message = messages[split[0]]
        }
    } else {
        message = "Not happend"
    }
    message = (message === undefined) ? key : languageProvider(message);
    return (dispatch) => {
        AtiMessage({ type, message: message, duration: 10 });
    };
};

const dispatchUser = (payload)=>{
    return {
        type: SET_USER,
        payload,
    };
};

export const setUser = (username, firstName) => {
    return (dispatch) => {
        dispatch(dispatchUser({
            name: firstName,
            username,
        }));
    };
};

export const actionButtonSubmit = (formId) => {
    return (dispatch) => {
        dispatch(submit(formId));
    };
};

export const sortList = (list, key) => list.sort((obj1, obj2) => obj1[key] - obj2[key]);

const dispatchTotalRowTable = (payload) => {
    return {
        type: TOTAL_ROW_TABLE,
        payload,
    };
};

export const setTotalRowTable = (rows) => {
    return (dispatch) => {
        dispatch(dispatchTotalRowTable({
            rows,
        }));
    };
};

export const resetForm = (formId) => {
    return (dispatch) => {
        dispatch(reset(formId));
    };
};

export const removeArrayForm = (formId, field, index) => {
    return (dispatch) => {
        dispatch(clearFields(formId, true, true, field));
         // dispatch(arrayRemove(formId, field, index));
        // dispatch(unregisterField(formId, field));
    };
};

export const clearFormErrors = (formId) => {
    return (dispatch) => {
        dispatch(clearSubmitErrors(formId));
    };
};

export const changeFieldValue = (formId, field, value) => {
    return (dispatch) => {
        dispatch(change(formId, field, value));
    };
};