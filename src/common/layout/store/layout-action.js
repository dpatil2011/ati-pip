import {
    START_GET_MENUS, FINISH_GET_MENUS, LOGOUT, CHANGE_OPENED_MENU, GET_MENUS,
    TOOGLE_COLLAPSE, TOOGLE_DRAWER,
} from './layout-action-type';
import { navigate, notifMessage } from '../../../common/store/action/general-action';
import { MenuMapper } from './../mapper/menu-mapper';
import { SSO_URL, AUTHENTICATION_KEY, AUTHORIZATION_KEY } from '../../../common/initOptions.properties';
import CONSTANTS from './../../utils/Constants';

const startGetMenus = () => ({
    type: START_GET_MENUS,
});

const finishGetMenus = payload => ({
    type: FINISH_GET_MENUS,
    payload,
});

export const getMenus = (client, username) => (dispatch) => {
    dispatch(finishGetMenus({
        menus: [],
        subs: [],
    }));
};

const dispatchMenus = menus => ({
    type: GET_MENUS,
    payload: menus,
});

const dispatchLogout = () => ({
    type: LOGOUT,
});

export const selectMenu = e => (dispatch) => {
    dispatch(navigate(e.key));
};

export const logout = (service, cookies) => (dispatch) => {
    dispatch(dispatchLogout());
    dispatch(navigate(CONSTANTS.LOGIN_MENU_KEY));
    // service.invoke(
    //     'log_out',
    //     {},
    //     {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //             'AUTHENTICATION-KEY': AUTHENTICATION_KEY,
    //             'AUTHORIZATION-KEY': AUTHORIZATION_KEY,
    //         },
    //         baseUrl: SSO_URL,
    //     },
    // ).then(
    //     (response) => {
    //         cookies.remove(CONSTANTS.COOKIE_TOKEN_KEY);
    //         cookies.remove(CONSTANTS.ORIGINAL_TOKEN_KEY);
    //     },
    //     (error) => { },
    // );
};

/*
-- LOGOUT using SSO by mas pretet --*/
export const revoke = (service, cookies) => (dispatch) => {
    dispatch(dispatchLogout());
    dispatch(navigate(CONSTANTS.LOGIN_MENU_KEY));
    service.invoke(
        'revoke',
        { accessToken: cookies.get(CONSTANTS.ORIGINAL_TOKEN_KEY) },
        {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            baseUrl: SSO_URL,
        },
    ).then(
        (response) => {
            /* cookies.set(CONSTANTS.COOKIE_TOKEN_KEY, '', { path: '/' });
            cookies.set(CONSTANTS.ORIGINAL_TOKEN_KEY, '', { path: '/' }); */
            cookies.remove(CONSTANTS.COOKIE_TOKEN_KEY);
            cookies.remove(CONSTANTS.ORIGINAL_TOKEN_KEY);
        },
        (error) => { },
    );
};

/* -- LOGOUT by ryan -- */
// export const logout = () => (dispatch) => {
//     dispatch(navigate('LOGIN'));
//     dispatch(dispatchLogout());
// };

export const backToLogin = () => (dispatch) => {
    dispatch(navigate('LOGIN'));
};

const changeOpenKeys = payload => ({
    type: CHANGE_OPENED_MENU,
    payload,
});

export const onMenuChange = (subs, reducerOpens, openKeys) => (dispatch) => {
    const latestOpenKey = openKeys.find(key => reducerOpens.indexOf(key) === -1);
    if (subs.indexOf(latestOpenKey) === -1) {
        dispatch(changeOpenKeys([latestOpenKey]));
    } else {
        dispatch(changeOpenKeys(latestOpenKey ? [latestOpenKey] : []));
    }
};


const dispatchToogle = () => ({
    type: TOOGLE_COLLAPSE,
});

export const toogleCollapse = () => (dispatch) => {
    dispatch(dispatchToogle());
};

const dispatchToogleDrawer = () => ({
    type: TOOGLE_DRAWER,
});

export const toogleDrawerCollapse = () => (dispatch) => {
    dispatch(dispatchToogleDrawer());
};