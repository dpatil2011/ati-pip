import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import CardDetail from '../../../../common/general-component/card-detail/component/card-detail';
import FilterButton from '../../../../common/general-component/filter-button/component/filter-button';
import ListCashComponent from '../../../../common/general-component/list-cash/component/list-cash-component';
import LoadingContainer from '../../../../common/general-component/loading-container/component/LoadingContainer';
import RoundedButton from '../../../../common/general-component/rounded-button/component/rounded-button';
import ContentPage from '../../../../common/layout/component/content-page';

class WidgetCashHistoryComponent extends Component {
  render() {
    const {
      lblHeader,
      data,
      openDepositModal,
      openWithdrawModal,
    } = this.props;

    const icon = require ('../../../../assets/images/logo-drawal-1.png');
    const filter = require ('../../../../assets/images/logo-filter-1.png');
    const backgroundImage = require ('./../../../../assets/images/background-cash-1.png');
    return (
      <ContentPage>
        <LoadingContainer loading={false}>
          <Row
            type="flex"
            justify="center"
            align="middle"
            className="cash-balance-header"
          >
            <Col>
              <span className="text-value">
                <h4><FormattedMessage id={lblHeader} /></h4>
              </span>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            className="cash-balance-header"
          >
            <Col>
              <CardDetail
                width={310}
                icon="logo-cash-1"
                balance="50,000,000,000"
                backgroundImage={backgroundImage}
                balanceType="label.cash.account"
                action={openDepositModal}
              />
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            className="cash-balance-header"
          >
            <Col>
              <RoundedButton
                text={<FormattedMessage id="label.withdraw.drawer.balance" />}
                icon={icon}
                onClick={() => {
                  openWithdrawModal();
                }}
              />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col className="history-cash-filter-button list-transaction-margin">
              <Row className="filter-button-padding">
                <Col span={12} className="desc-mt-15">
                  <p className="filter-desc-text">Riwayat Uang Kas</p>
                </Col>
                <Col span={12} className="btn-filter-position">
                  <FilterButton
                    className="desc-text"
                    text="Filter"
                    icon={filter}
                    onClick={() => {}}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="list-transaction-margin">
            <Col>
              <ListCashComponent
                data={data}
                pagination
                pageSize={5}
                totalRow={5}
              />
            </Col>
          </Row>
        </LoadingContainer>

      </ContentPage>
    );
  }
}
export default WidgetCashHistoryComponent;
