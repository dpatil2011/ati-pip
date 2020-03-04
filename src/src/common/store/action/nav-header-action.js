import * as navHeaderActionType from './nav-header-action-type';
// define your action creator here
export const hideHeader = () => ({
        type: navHeaderActionType.HIDE_HEADER,
    });

export const showHeader = () => ({
        type: navHeaderActionType.SHOW_HEADER,
    });