import React from 'react';
import 'antd/dist/antd.css';
import { Icon, Popover } from 'antd';
import { AtiButton } from 'ati-react-web';
import { FormattedMessage } from 'react-intl';

export const buildChild = (dataSource) => {
    if (dataSource !== null && dataSource.length !== 0) {
        return dataSource.map((item, index) => {
            const {
                id, type, icon, name, child, menuCode, title, menuType, image
            } = item;
            return {
                key: menuCode.toUpperCase(),
                type: child === undefined || child === null || child.length === 0 ? 'item' : 'subitem',
                childComponent: (
                <span>
                    <img className="image-menu" src={image}/>
                    <span className="item-menu"><FormattedMessage id={"label.menu."+title}/></span>
                </span>
                ),
                childItems: buildChild(child === undefined || child === null ? [] : child),
            };
        });
    }
    return [];
};

export const MenuMapper = {
    buildMenu: (dataSource, onLogout) => {
        if (dataSource === null || dataSource === undefined || dataSource.length === 0) {
            return [
                {
                    key: '1',
                    type: 'item',
                    childComponent:
                        <span>
                            <Popover
                                placement="bottom"
                                content={<span>if you wait too long, please log in again. 
                                    <AtiButton
                                            id="linkButton"
                                            text={<span>Login <Icon type="right" className="link-login" /></span>}
                                            type=""
                                            className="pocket-btn-link bg-dock"
                                            style={
                                                {
                                                    display: 'block',
                                                    marginLeft: 'auto',
                                                    marginTop: '25px',
                                                    marginRight: '80px',
                                                    fontSize: '13px !important',
                                                }
                                            }
                                            events={
                                                {
                                                    onClick: () => {
                                                        // TODO uncomment when u continues dev
                                                        // onLogout();
                                                    },
                                                }
                                            }
                                    />
                                </span>}
                            >
                                <span><Icon type="loading" /><span>fetching menu ...</span></span>
                            </Popover>
                        </span>,
                    childItems: [],
                },
              ];
        }
        return dataSource.map((item, index) => {
            const {
                id, type, icon, name, child, menuCode, title, menuType, image
            } = item;
            return {
                key: menuCode.toUpperCase(),
                type: child === undefined || child === null || child.length === 0 ? 'item' : 'subitem',
                childComponent: (
                <span>
                    {/* <Icon type={icon} theme="outlined" /> */}
                    <img className="image-menu" src={image}/>
                    <span className="item-menu"><FormattedMessage id={"label.menu."+title}/></span>
                </span>
                ),
                childItems: buildChild(child === undefined || child === null ? [] : child),
            };
        });
    },
    buildSub: dataSource => dataSource.map((item) => {
            const { id, type } = item;
            if (type === 'subitem') {
                return { key: id };
            }
        }),
    prepareAuthoritation: (data) => { 
        const result = [];
        data.map((item) => {
            result.push({
                authorities: item.permissions.map(auth => (auth.permission.name.toLowerCase())),
                name: item.menuCode.toUpperCase(),
            });
            if (item.child && item.child.length > 0) {
                item.child.map((child) => {
                    result.push({
                        authorities: child.permissions.map(auth => (auth.permission.name.toLowerCase())),
                        name: child.menuCode.toUpperCase(),
                    })
                });
            }
        });
        return result;
    },
};