import * as actionType from './popup-action-type';
import colors from './../../../../../assets/styles/colors';


const initialState = {
    visibleAlert: false,
    buttonTextAlert: '',
    visibleConfirm: false,
    buttonTextPositive: '',
    buttonTextNegative: '',
    visibleProgress: false,
    title: '',
    message: '',
    messageParam: {},
    visibleToast: false,
    statusBarColor: colors.ACCENT,
};

const PopupReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionType.SET_TITLE:
            return { ...state, title: payload };
        case actionType.SET_MESSAGE:
            return { ...state, message: payload };
        case actionType.SET_MESSAGE_PARAM:
            return { ...state, messageParam: payload };
        case actionType.SET_VISIBLE_ALERT:
            return { ...state, visibleAlert: payload };
        case actionType.SET_BUTTON_TEXT_ALERT:
            return { ...state, buttonTextAlert: payload };
        case actionType.SET_EVENTS_ALERT:
            return { ...state, eventsAlert: payload };
        case actionType.SET_VISIBLE_CONFIRM:
            return { ...state, visibleConfirm: payload };
        case actionType.SET_BUTTON_TEXT_POSITIVE:
            return { ...state, buttonTextPositive: payload };
        case actionType.SET_BUTTON_TEXT_NEGATIVE:
            return { ...state, buttonTextNegative: payload };
        case actionType.SET_EVENTS_CONFIRM_POSITIVE:
            return { ...state, eventsConfirmPositive: payload };
        case actionType.SET_EVENTS_CONFIRM_NEGATIVE:
            return { ...state, eventsConfirmNegative: payload };
        case actionType.SET_VISIBLE_PROGRESS:
            return { ...state, visibleProgress: payload };
        case actionType.SET_VISIBLE_TOAST:
            return { ...state, visibleToast: payload };
        case actionType.SET_VISIBLE_POPUP_ADD_FAVOURITE:
            return { ...state, visiblePopup: payload };
        case actionType.SET_STATUS_BAR_COLOR:
            return { ...state, statusBarColor: payload };
        default:
            return state;
    }
};

export default PopupReducer;