import React from 'react';
import {FormattedMessage} from 'react-intl';
import iconDashboard from './../../../assets/images/logo-dashboard.png';
import iconSetting from './../../../assets/images/logo-setting-active.png';
import iconRiwayat from './../../../assets/images/Group 25@3x.png';
import community from './../../../assets/images/community.png';

const MENU = [
  {
    key: 'DASHBOARD',
    type: 'item',
    childComponent: (
      <span>
        <img className="image-menu" src={iconDashboard} alt="logo" />
        <span className="item-menu">
          <FormattedMessage id="label.menu.dashboard" />
        </span>
      </span>
    ),
    childItems: [],
  },
  {
    key: 'SETTING',
    type: 'subitem',
    childComponent: (
      <span>
        <img className="image-menu" src={iconSetting} alt="logo" />
        <span className="item-menu">
          <FormattedMessage id="label.menu.setting" />
        </span>
      </span>
    ),
    childItems: [
      {
        key: 'CHANGE_LANGUAGE',
        type: 'item',
        childComponent: (
          <span>
            <span className="item-menu">
              <FormattedMessage id="label.menu.change.language" />
            </span>
          </span>
        ),
        childItems: [],
      },
    ],
  },
  {
    key: 'RIWAYAT',
    type: 'item',
    childComponent: (
      <span>
        <img className="image-menu" src={iconRiwayat} alt="logo" />
        <span className="item-menu">
          <FormattedMessage id="label.menu.Riwayat" />
        </span>
      </span>
    ),
    childItems: [],
  },
];

export default MENU;
