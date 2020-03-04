import { START_AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, RESET_PASSWORD_SUCCESS, RESET_ALL_LOADING } from './login-action-type';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    isDirty: false,
    openModal: false,
};

const handler = (currentState) => {
    const startAuthentication = () => ({ ...currentState, isLoading: true, isDirty: false });
    const authenticationSuccess = () => ({ ...currentState, isLoading: false, isDirty: true });
    const authenticationFailed = () => ({ ...currentState, isLoading: false, isDirty: true });
    const resetPasswordSuccess = () => ({ ...currentState, openModal: true });
    const resetAllLoading = () => ({ ...currentState, isLoading: false });

    return { startAuthentication, authenticationSuccess, authenticationFailed, resetPasswordSuccess, resetAllLoading };
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case START_AUTHENTICATION:
            return handler(state).startAuthentication();
        case AUTHENTICATION_SUCCESS:
            return handler(state).authenticationSuccess();
        case AUTHENTICATION_FAILED:
            return handler(state).authenticationFailed();
        case RESET_PASSWORD_SUCCESS:
            return handler(state).resetPasswordSuccess();
        case RESET_ALL_LOADING:
            return handler(state).resetAllLoading();
        default:
            return state;
    }
};