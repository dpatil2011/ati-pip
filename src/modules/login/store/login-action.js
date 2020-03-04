import { submit } from 'redux-form';
import { START_AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILED, RESET_ALL_LOADING } from './login-action-type';
import { showError, setUser, navigate } from '../../../common/store/action/general-action';
import CONSTANTS from './../../../common/utils/Constants';

const startAuthentication = () => ({
    type: START_AUTHENTICATION,
});

const authenticationSuccess = () => ({
    type: AUTHENTICATION_SUCCESS,
});

const authenticationFailed = () => ({
    type: AUTHENTICATION_FAILED,
});

export const authenticate = (client, params) => (dispatch) => {
    dispatch(startAuthentication());
    client.invoke(
        'user/login',
        params,
        {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
        },
        true,
    ).then(
        (response) => {
            dispatch(authenticationSuccess());
            dispatch(setUser(
                params.username,
                params.username,
            ));
            dispatch(navigate(CONSTANTS.DASHBOARD_MENU_KEY));
        },
        (error) => {
            dispatch(showError(error.data.responseCode));
            dispatch(authenticationFailed());
        },
    );
    // dispatch(navigate(CONSTANTS.DASHBOARD_MENU_KEY));
};

export const ssoAuthenticate = (client, params, cookies, locale) => (dispatch) => {
    dispatch(startAuthentication());
    // client.invoke(
    //     'token',
    //     params,
    //     {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //         },
    //         baseUrl: SSO_URL,
    //     },
    // ).then(
    //     (response) => {
            dispatch(authenticationSuccess());
            // const { token, expiredAt } = response.data.response;
            // cookies.set(CONSTANTS.COOKIE_TOKEN_KEY, token, { path: '/' });
            // cookies.set(CONSTANTS.ORIGINAL_TOKEN_KEY, token, { path: '/' });
            // localStorage.setItem('token', token);
            dispatch(setUser(
                params.username,
                params.username,
            ));
            dispatch(navigate(CONSTANTS.DASHBOARD_MENU_KEY));
        // },
        // (error) => {
        //     if (error.data.responseCode === '01') {
        //         dispatch(authenticationFailed());
        //         dispatch(showError(error.data.message));
        //     } else {
        //         if (!v.isEmpty(error.data.data)) {
        //             dispatch(authenticationFailed());
        //             if(locale==="id"){
        //                 dispatch(showError(error.data.data.localMessage));
        //             } else {
        //                 dispatch(showError(error.data.data.message));
        //             }                    
        //         } else {
        //             dispatch(authenticationFailed())
        //             dispatch(showError('label.error.msg.internal.server.error'));
        //         }
        //     }
        // },
    // );
    // dispatch(navigate(CONSTANTS.DASHBOARD_MENU_KEY));
};

export const actionButtonSubmit = () => (dispatch) => {
    dispatch(submit('login-form'));
};

const resetallLoading = () => ({
    type: RESET_ALL_LOADING,
});

export const resetAllLoading = () => (dispatch) => {
    dispatch(resetallLoading());
};