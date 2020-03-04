import { SET_TITLE, TOTAL_ROW_TABLE } from '../action/index';

const initialState = {
    title: '',
    totalRowTable: '',
};

const handler = (currentState) => {
    const setTitle = (title) => {
        return { ...currentState, title: title }
    };
    return { setTitle };
}


export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_TITLE:
            handler(state).setTitle(payload.title);
            break;
        case TOTAL_ROW_TABLE:
            return { ...state, totalRowTable: payload };
        default:
            return state;
    }
};