import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import PageTitle from '../../../common/layout/component/page-title';
import { AtiField, AtiForm } from 'ati-reduxform-web';
import { AtiTextbox, AtiTextPassword, AtiFieldError, AtiButton, AtiCheckbox, AtiGridItem, AtiGrid } from 'ati-react-web';
import { FormattedMessage } from 'react-intl';
import AccountBalanceComponent from './widget/widget-account-balance-component';
import TransactionHistoryComponent from './widget/widget-transaction-history-component';
import CashHistoryComponent from './widget/widget-cash-history-component';

class AccountHistoryComponent extends Component {
    static defaultProps = {
        layouts:
        {
            lg: [
                {
                    i: '1', x: 0, y: 0, w: 24, h: 2, static: true,
                },
                {
                    i: '2', x: 32, y: 0, w: 12, static: true,
                },
                {
                    i: '3', x: 0, y: 2.1, w: 24, h: 12, static: true,
                },
            ],
            md: [
                {
                    i: '1', x: 0, y: 0, w: 24, h: 2, static: true,
                },
                {
                    i: '2', x: 32, y: 0, w: 12, static: true,
                },
                {
                    i: '3', x: 0, y: 2.1, w: 24, static: true,
                },
            ],
            sm: [
                {
                    i: '1', x: 0, y: 0, w: 28, h: 2, static: true,
                },
                {
                    i: '2', x: 0, y: 2, w: 28, static: true,
                },
                {
                    i: '3', x: 0, y: 17, w: 28, h: 6, static: true,
                },
            ],
        },
    }

    render() {
        const {
            layouts, account, columns, list, refresh, detailData, onDeposit, initialData, listUangKas, visible,
            onValueChange, actionButtonSubmit, buttonFlag, historyTransaction, datasource, onChangeDateTo, onSearch,
            onUpdateStatus, closeModal, visibleModal, cashBalance, transactionType, dateOfTransaction, dateOfTransactionTo, onChangeDate, loadingHistory, loadingHistoryCash,
        } = this.props;
        return (
            <div style={{ minHeight: '360px' }}>
            <di>
                <Row>
                    <Col>
                    <PageTitle
                                link="dashboard"
                                text="label.breadcrumb.riwayat"
                                subtitle="label.breadcrumb.riwayat"
                                header="Riwayat Rekening"
                    />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AtiGrid
                         cols={
                                    {
                                        lg: 43, md: 36, sm: 28, xs: 16, xxs: 10,
                                    }
                                }
                                isRessizable
                                isDraggable={false}
                                layouts={layouts}
                                rowHeight={40}
                                preventCollision
                        >
                        <AtiGridItem key="1">
                            <AccountBalanceComponent />
                        </AtiGridItem>
                        <AtiGridItem key="2">
                            <CashHistoryComponent
                                {...this.props}
                                        loading={loadingHistoryCash}
                                        initialData={initialData}
                                        actionButtonSubmit={actionButtonSubmit}
                                        onValueChange={onValueChange}
                                        cashBalance={cashBalance}
                                        lblHeader="label.cash.account"
                                        data={listUangKas}
                            />
                        </AtiGridItem>
                        <AtiGridItem key="3">
                           <TransactionHistoryComponent
                                loading={loadingHistory}
                                datasource={datasource}
                                list={list}
                                columns={columns}
                                onDeposit={onDeposit}
                                onUpdateStatus={onUpdateStatus}
                                historyTransaction={historyTransaction}
                                transactionType={transactionType}
                                dateOfTransaction={dateOfTransaction}
                                onChangeDate={onChangeDate}
                                dateOfTransactionTo={dateOfTransactionTo}
                                onChangeDateTo={onChangeDateTo}
                                onSearch={onSearch}
                                buttonFlag={buttonFlag}
                                detailData={detailData}
                                visibleModal={visibleModal}
                                closeModal={closeModal}
                           />
                        </AtiGridItem>
                        </AtiGrid>
                    </Col>
                </Row>
            </di>
           
            </div>
        );
    }
}
export default AccountHistoryComponent;
