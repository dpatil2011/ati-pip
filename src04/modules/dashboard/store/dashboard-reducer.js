import * as actionType from './dashboard-action-type';
import { dateFormat } from '../../../common/utils/date-util';

const initialState = {
    possition: '',
};

const handler = (currentState) => {

    return {
    };
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case actionType.SET_POSSITION:
            return handler(state).startAuthentication();
        default:
            return state;
    }
};