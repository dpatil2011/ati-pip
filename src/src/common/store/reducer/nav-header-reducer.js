import * as navHeaderActionType from '../action/nav-header-action-type';

const initialState = {
    isShown: true,
};
/**
 * Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.
 * reducer (object) An object whose values correspond to different reducing functions that need to be combined into one
 * @param {*} state
 * @param {*} action
 */
const reducer = (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        //  example of create a reducer
        case navHeaderActionType.HIDE_HEADER:
            return { ...state, isShown: false };
        case navHeaderActionType.SHOW_HEADER:
            return { ...state, isShown: true };
        default:
            return state;
    }
};

export default reducer;