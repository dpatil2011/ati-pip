import * as actionType from './popup-action-type';
import colors from './../../../../../assets/styles/colors';

export const setVisibleAlert = (data) => {
    return {
        type: actionType.SET_VISIBLE_ALERT,
        payload: data,
    };
};

export const setButtonTextAlert = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_ALERT,
        payload: data,
    };
};

export const setEventsAlert = (data) => {
    return {
        type: actionType.SET_EVENTS_ALERT,
        payload: data,
    };
};

export const setVisibleConfirm = (data) => {
    return {
        type: actionType.SET_VISIBLE_CONFIRM,
        payload: data,
    };
};

export const setButtonTextPositive = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_POSITIVE,
        payload: data,
    };
};

export const setButtonTextNegative = (data) => {
    return {
        type: actionType.SET_BUTTON_TEXT_NEGATIVE,
        payload: data,
    };
};

export const setEventsConfirmPositive = (data) => {
    return {
        type: actionType.SET_EVENTS_CONFIRM_POSITIVE,
        payload: data,
    };
};

export const setEventsConfirmNegative = (data) => {
    return {
        type: actionType.SET_EVENTS_CONFIRM_NEGATIVE,
        payload: data,
    };
};

export const setVisibleProgress = (data) => {
    return {
        type: actionType.SET_VISIBLE_PROGRESS,
        payload: data,
    };
};

export const setTitle = (data) => {
    return {
        type: actionType.SET_TITLE,
        payload: data,
    };
};

export const setMessage = (data) => {
    return {
        type: actionType.SET_MESSAGE,
        payload: data,
    };
};

export const setMessageParam = (data) => {
    return {
        type: actionType.SET_MESSAGE_PARAM,
        payload: data,
    };
};

export const setVisibleToast = (data) => {
    return {
        type: actionType.SET_VISIBLE_TOAST,
        payload: data,
    };
};

export const showAlert = (message = '', messageParam = {}, title = '', buttonText = '', events = () => {}) => {
    return (dispatch) => {
        dispatch(setMessageParam(messageParam));
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setButtonTextAlert(buttonText));
        dispatch(setEventsAlert(events));
        dispatch(setVisibleAlert(true));
    };
};

export const showConfirmDialog = (message = '', messageParam = {}, title = '', buttonTextPositive = '', buttonTextNegative = '', onClickPositiveButton = () => {}, onClickNegativeButton = () => {}) => {
    return (dispatch) => {
        dispatch(setMessageParam(messageParam));
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setButtonTextPositive(buttonTextPositive));
        dispatch(setButtonTextNegative(buttonTextNegative));
        dispatch(setEventsConfirmPositive(onClickPositiveButton));
        dispatch(setEventsConfirmNegative(onClickNegativeButton));
        dispatch(setVisibleConfirm(true));
    };
};

export const showProgressDialog = (message = '', title = '') => {
    return (dispatch) => {
        dispatch(setMessage(message));
        dispatch(setTitle(title));
        dispatch(setVisibleProgress(true));
    };
};

export const dismissToast = () => {
    return (dispatch) => {
        dispatch(setMessage(''));
        dispatch(setVisibleToast(false));
    };
};

export const showToast = (message = '', timeout = 7000) => {
    return (dispatch) => {
        dispatch(setMessage(message));
        dispatch(setVisibleToast(true));
        setTimeout(() => { dispatch(setVisibleToast(false)); dispatch(setMessage('')); }, timeout);
    };
};

export const dismissAlert = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setMessageParam({}));
        dispatch(setVisibleAlert(false));
    };
};

export const dismissConfirmDialog = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setMessageParam({}));
        dispatch(setVisibleConfirm(false));
    };
};

export const dismissProgressDialog = () => {
    return (dispatch) => {
        dispatch(setTitle(''));
        dispatch(setMessage(''));
        dispatch(setVisibleProgress(false));
    };
};

export const setStatusBar = (data) => {
    return {
        type: actionType.SET_STATUS_BAR_COLOR,
        payload: data,
    };
};

export const setStatusBarColor = (data) => {
    return (dispatch) => {
        dispatch(setStatusBar(data));
    };
};

export const changeStatusBarToDefault = (statusBarColor, StatusBar) => {
    return (dispatch) => {
        StatusBar.setBackgroundColor(statusBarColor, true);
        if (statusBarColor === colors.ACCENT) {
            StatusBar.setBarStyle('light-content', true);
        } else {
            StatusBar.setBarStyle('dark-content', true);
        }
        dispatch(setStatusBar(statusBarColor));
    };
};