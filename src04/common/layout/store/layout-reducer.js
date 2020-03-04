import {
    START_GET_MENUS, FINISH_GET_MENUS, SELECT_MENU, SET_USER, LOGOUT,
    CHANGE_OPENED_MENU, GET_MENUS, TOOGLE_COLLAPSE, TOOGLE_DRAWER,
} from './layout-action-type';

const initialState = {
    contactUs: [
        {
            text: '021800636060',
            icon: 'logo-headphone-1',
            url: '#',
        },
        {
            text: 'support@anabatic.com',
            icon: 'logo-message-1',
            url: 'mailto:support@anabatic.com?subject=HELLO WORLD',
        },
        {
            text: 'www.anabatic.com',
            icon: 'logo-monitor-1',
            url: 'https://www.anabatic.com',
        },
    ],
    socialMedia: [
        {
            icon: 'logo-facebook-1',
            url: 'https://www.facebook.com/AnabaticID',
        },
        {
            icon: 'logo-twitter-1',
            url: 'https://twitter.com/anabaticid',
        },
        {
            icon: 'logo-linkedin-1',
            url: 'https://www.linkedin.com/company/pt-anabatic-technologies',
        },
        {
            icon: 'logo-instagram-1',
            url: 'https://www.instagram.com/anabaticid',
        },
    ],
    listMenu: [],
    listSubMenu: [],
    listTask: [],
    isNotificationLoading: false,
    collapsed: false,
    drawerVisible: false,
    menuKey: [],
    openedMenuKey: [],
    name: 'USER NAME',
    username: '',
    menuLoading: false,
    isAuthenticate: false,
    // checkedAll: false,
    checkedTransaction: false,
    checkedDiscount: false,
    checkedCommunity: false,
    showFilter: false,
    currentData: [],
    show: false,
    checkedList: [],
    checkAllDelete: false,
    indeterminate: true,
    plainOptions: [
        { label: '', value: '' },
    ],
};

const handler = (currentState) => {
    const startGetMenus = () => ({ ...currentState, menuLoading: true });
    const finishGetMenus = datas => ({
        ...currentState, listMenu: datas.menus, listSubMenu: datas.subs, menuLoading: true,
    });
    const selectMenu = datas => ({
        ...currentState, menuKey: [datas.menuKey], openedMenuKey: datas.openedMenuKey,
    });
    const changeOpenedMenu = datas => ({
        ...currentState, openedMenuKey: datas,
    });
    const setUser = datas => ({
        ...currentState, name: datas.name, username: datas.username, isAuthenticate: true,
    });
    const logout = () => ({
        ...currentState, name: 'USER NAME', username: '', listMenu: [], listSubMenu: [], menuKey: [], openedMenuKey: [], isAuthenticate: false,
    });
    const getMenus = menus => ({ ...currentState, listMenu: menus });
    const toogleCollapse = () => ({ ...currentState, collapsed: !currentState.collapsed });
    const toogleDrawer = () => ({ ...currentState, drawerVisible: !currentState.drawerVisible });

    return {
        startGetMenus,
        finishGetMenus,
        selectMenu,
        setUser,
        logout,
        changeOpenedMenu,
        getMenus,
        toogleDrawer,
        toogleCollapse,
    };
};

export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case START_GET_MENUS:
            return handler(state).startGetMenus();
        case FINISH_GET_MENUS:
            return handler(state).finishGetMenus(payload);
        case SELECT_MENU:
            return handler(state).selectMenu(payload);
        case CHANGE_OPENED_MENU:
            return handler(state).changeOpenedMenu(payload);
        case SET_USER:
            return handler(state).setUser(payload);
        case LOGOUT:
            return handler(state).logout();
        case GET_MENUS:
            return handler(state).getMenus();
        case TOOGLE_COLLAPSE:
            return handler(state).toogleCollapse();
        case TOOGLE_DRAWER:
            return handler(state).toogleDrawer();
        default:
            return state;
    }
};