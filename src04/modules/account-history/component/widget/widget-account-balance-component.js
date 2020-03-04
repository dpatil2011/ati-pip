import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { AtiField, AtiForm } from 'ati-reduxform-web';
import {
  AtiTextbox,
  AtiTextPassword,
  AtiFieldError,
  AtiButton,
  AtiCheckbox,
} from 'ati-react-web';
import { FormattedMessage } from 'react-intl';
import RefreshButton
  from '../../../../common/general-component/refresh-button/component/refresh-button';
import ContentPage from '../../../../common/layout/component/content-page';
import LoadingContainer
  from '../../../../common/general-component/loading-container/component/LoadingContainer';

class WidgetAccountBalanceComponent extends Component {
  state = {
    balance: "Rp 210,000,000",
  };
  render() {
    const icon = require('../../../../assets/images/omzetIcon.png');
    return (
      <ContentPage>
        <LoadingContainer loading={false}>
          <Row gutter={24} className="account-balance-padding">
            <Col span={3}>
              <img src={icon} alt="balance" className="history-icon-size" />
            </Col>
            <Col span={18}>
              <Row>
                <Col span={24}>
                  <FormattedMessage id="label.riwayat.saldo.akun.text" />
                </Col>
                <Col span={24}>
                  <h3 className="history-account-currency">
                    <span className="history-account-value">
                      {this.state.balance}
                    </span>
                  </h3>
                </Col>
              </Row>
            </Col>
            <Col span={3}>
              <RefreshButton
                // action={startReload}
                className="refresh-button-black"
                marginTop="15px"
              />
            </Col>

          </Row>
        </LoadingContainer>
      </ContentPage>
    );
  }
}
export default WidgetAccountBalanceComponent;
