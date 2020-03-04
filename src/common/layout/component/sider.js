import React, { Component, Fragment } from 'react';
import { Layout, Icon } from 'antd';
import { AtiSideMenu, AtiDrawer } from 'ati-react-web';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedMessage } from 'react-intl';
import UserButton from './user-button';
import MENU from './../data/list-menu';
import CONSTANTS from '../../utils/Constants';
import image from '../../../assets/images/settingIconGrey.png';
import logoLayout from './../../../assets/images/logo-layout.png';
import logoLayoutHide from './../../../assets/images/logo-layout-hide.png';
import './layout.css';
import './sider.css';

const { Sider } = Layout;

class LayoutSider extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            openMenuKey: [],
            menuKey: 'left',
        };
    }

    componentWillMount() {
        const { openedMenuKey } = this.props;
        if (openedMenuKey.length !== 0) {
            this.setState({ openMenuKey: openedMenuKey });
        }
    }

    componentWillReceiveProps(state, prevState) {
        if (state.openedMenuKey !== prevState.openedMenuKey) {
            this.updateMenu(state.openedMenuKey);
        }
    }

    onOpenChange = (openKeys) => {
        const { openedMenuKey, listSubMenu } = this.props;
        const { openMenuKey } = this.state;
        const menu = openKeys.filter(item => item !== openMenuKey[0]);
        this.setState({ menuKey: this.state.menuKey === 'left' ? 'right' : 'left', openMenuKey: openKeys.length > 1 ? menu : openKeys });
        // this.props.onMenuChange(listSubMenu, openedMenuKey, openKeys);
    }

    updateMenu = (openMenuKey) => {
        this.setState({ menuKey: this.state.menuKey === 'left' ? 'right' : 'left', openMenuKey });
    }

    /* -- action LOGOUT using SSO by mas pretet --*/
    logout = () => {
        const { logout, cookies, pocketRemoteService } = this.props;
        cookies.remove(CONSTANTS.COOKIE_TOKEN_KEY);
        cookies.remove(CONSTANTS.ORIGINAL_TOKEN_KEY);
        if (logout) logout(pocketRemoteService, cookies);
    }

    renderComponentImage = (collapse) => {
        if (collapse) {
            return (
                <a href="#" onClick={() => { this.props.navigate(CONSTANTS.DASHBOARD_MENU_KEY); return false; }}>
                    <img src={logoLayoutHide} className="logo" />
                </a>
                
            );
        }
        return (
            <a href="#" onClick={() => { this.props.navigate(CONSTANTS.DASHBOARD_MENU_KEY); return false; }}>
                <img src={logoLayout} className="logo" />
            </a>
            
        );
    }

    render() {
        const { openMenuKey } = this.state;
        const openKeysAttr = openMenuKey.length !== 0 ? { defaultOpenKeys: openMenuKey } : {};
        return (
            <Fragment>
                <Sider
                    style={{
                        backgroundColor: '#2a2e43',
                        overflow: 'auto',
                        height: '100vh',
                    }}
                    width="18%"
                    collapsed={this.props.collapsed}
                >
                    <div id="container">
                        {this.renderComponentImage(this.props.collapsed)}
                        <UserButton name={this.props.name} onClick={this.logout} {...this.props} />
                    </div>

                    {/* <Scrollbars
                        style={{
                            height: `${(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 100)}px`,
                        }}
                    > */}
                    <AtiSideMenu
                        key={this.state.menuKey}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed
                        style={{ backgroundColor: '#2a2e43', color: '#a9a9a9' }}
                        defaultSelectedKeys={this.props.menuKey.length === 0 ? [CONSTANTS.DASHBOARD_MENU_KEY] : this.props.menuKey}
                        selectedkeys={this.props.menuKey}
                        dataSource={MENU}
                        events={{ onClick: this.props.selectMenu, onOpenChange: this.onOpenChange }}
                        {...openKeysAttr}
                    />
                    {/* </Scrollbars> */}
                </Sider>
            </Fragment>
        );
    }
}

export default LayoutSider;