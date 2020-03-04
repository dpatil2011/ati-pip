import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {
  AtiTextbox,
  AtiTextPassword,
  AtiFieldError,
  AtiButton,
  AtiCheckbox,
  AtiDropdown,
} from 'ati-react-web';
import withPocketRemoteService
  from '../../common/services/wrapper/with-pocket-remote-service';
import {navigate} from '../../common/store/action/general-action';
import * as dashboardAction
  from '../../modules/dashboard/store/dashboard-action';
import * as TransactionDetailAction
  from '../../modules/account-history/store/account-history-action';
import DashboardComponent
  from '../../modules/dashboard/component/dashboard-component';
import RiwayatComponent
  from '../../modules/account-history/component/account-history-component';
import '../../modules/account-history/styles/style.css';
import MAPPER from '../../modules/account-history/mapper/history-mapper';
import {
  openDepositModal,
  closeDepositModal,
  openConfirmDepositModal,
  closeConfirmDepositModal,
  openPINDepositModal,
  closePINDepositModal,
  openReceiptDepositModal,
  closeReceiptDepositModal,
  onAddDeposit,
} from '../../modules/account-history/store/account-history-action';

import * as moment from 'moment';

let data = {};
let visible = false;
class AccountHistoryPage extends Component {
  state = {
    visible: true,
    transaction: 'Semua Data',
    dateOfTransaction: 'DD MMM YYYY',
    dateOfTransactionTo: 'DD MMM YYYY',
    buttonFlag: false,
    transactionDetails: [],
    visibleModal: false,
  };

  componentDidMount () {
    this.props.getTransactionDetailList ().then (response => {
      this.props.setTransactionDetailAgent (response);
      this.setState ({
        transactionDetails: response,
      });
    });

    this.props.getTransactionType ().then (response => {
      this.props.setTransactionType (response);
    });

    this.props.getTransactionCash ().then (response => {
      this.props.setCashList (response);
    });
  }
  //   onDeposit = record => {
  //     alert (JSON.stringify (record));
  //     this.props.openConfirmDepositModal ();
  //     data= record;
  //     visibl= true;
  //     console.log ('record:' + record);

  //     // const { pocketRemoteService, name, dateNow } = this.props;
  //     // return (datas) => {
  //     //     const params = MAPPER.reqConfirmDeposit(datas, dateNow, name);
  //     //     this.props.closeDepositModal();
  //     //     this.props.onAddDeposit(pocketRemoteService, params);
  //     //     this.props.openConfirmDepositModal();
  //     // };
  //   };
  onUpdateStatus = e => {
    if (e.key === 'Semua Data') {
      this.setState ({
        transaction: e.key,
        transactionDetails: this.props.transactionDetail,
      });
    } else {
      this.setState ({
        transaction: e.key,
        transactionDetails: this.props.transactionDetail.filter (item => {
          return item.type.match (e.key);
        }),
      });
    }
  };
  onChangeDate = date => {
    this.setState ({
      dateOfTransaction: date,
    });
  };
  onChangeDateTo = date => {
    this.setState ({
      dateOfTransactionTo: date,
    });
  };
  onSearch = () => {
    const a = [];
    const from = moment(this.state.dateOfTransaction).format('YYYY/MM/DD');
    const to = moment(this.state.dateOfTransactionTo).format('YYYY/MM/DD');

    this.state.transactionDetails.map (item => {
      const date = moment (item.date).format ('YYYY/MM/DD');
      if (from <= date && to >= date) {
        a.push (item);
      }
    });
    this.setState({
      buttonFlag: !this.state.buttonFlag,
      transactionDetails: this.state.buttonFlag === true
        ? this.props.transactionDetail
        : a,
      transaction: this.state.buttonFlag === true
        ? 'Semua Data'
        : this.state.transaction,
      dateOfTransaction: this.state.buttonFlag === true
        ? 'DD MMM YYYY'
        : this.state.dateOfTransaction,
        dateOfTransactionTo: this.state.buttonFlag === true
        ? 'DD MMM YYYY'
        : this.state.dateOfTransactionTo,
    });
  };

  createColumns = () => {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        fixed: false,
        render: text => this.renderTextStyle (text),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.type.transaction" />
          </span>
        ),
        dataIndex: 'type',
        key: 'type',
        fixed: false,
        render: text => this.renderTextStyle (text),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.nominal" />
          </span>
        ),
        dataIndex: 'amount',
        key: 'amount',
        fixed: false,
        render: (text, record) => (
          <span className={record.type == 'Bank Transfer' ? 'red' : 'green'}>
            {' '}{record.amount}{' '}
          </span>
        ),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.date" />
          </span>
        ),
        dataIndex: 'date',
        key: 'date',
        fixed: false,
        render: text =>
          this.renderTextStyle (moment (text).format ('DD MMM YYYY')),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.status" />
          </span>
        ),
        dataIndex: 'status',
        key: 'status',
        fixed: false,
        render: (text, record) => this.renderStyle (text),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.description" />
          </span>
        ),
        dataIndex: 'description',
        key: 'description',
        fixed: false,
        render: text => this.renderTextStyle (text),
      },
      {
        title: (
          <span className="history-table-text">
            <FormattedMessage id="label.action" />
          </span>
        ),
        dataIndex: 'action',
        key: 'action',
        fixed: false,
        render: (text, record) => this.renderAction (record),
      },
    ];
    return columns;
  };

  renderTextStyle = record => (
    <span className="history-body-text">
      {record}
    </span>
  );
  renderAction = record => {
    return (
      <span>
        <a
          style={{
            textDecoration: 'underline',
            fontSize: '12px',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: 'normal',
            textAlign: 'center',
            color: '#000000',
          }}
          id="details"
          onClick={ () => {
            data= record;
            visible= true;
            this.props.setDetailData(record);
            this.props.setVisibleModal(true);
            console.log(JSON.stringify (record));
          }}
        >
          <FormattedMessage id="label.history.transaction.detail" />
        </a>
      </span>
    );
  };
  closeModal = () => {
      this.props.setVisibleModal(false);
  }
  renderStyle = text => (
    <span className={`active-background ${text}`}>
      {text}
    </span>
  );
  render () {
    return (
      <RiwayatComponent
        initialData={this.props}
        description={this.state.description}
        datasource={this.props.transactionType}
        list={this.state.transactionDetails}
        listUangKas={this.props.cashList}
        columns={this.createColumns ()}
        transactionType={this.state.transaction}
        dateOfTransaction={this.state.dateOfTransaction}
        dateOfTransactionTo={this.state.dateOfTransactionTo}
        onChangeDate={this.onChangeDate}
        onChangeDateTo={this.onChangeDateTo}
        onSearch={this.onSearch}
        onUpdateStatus={this.onUpdateStatus}
        onDeposit={this.onDeposit}
        buttonFlag={this.state.buttonFlag}
        visibleModal={this.props.visibleModal}
        detailData={this.props.detailData}
        closeModal={this.closeModal.bind(this)}
        // historyTransaction={this.props.historyTransaction}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.dashboard,
  ...state.layout,
  ...state.history,
  ...state.accountHistory,
});

const mapActionToProps = () => ({
  navigate,
  ...dashboardAction,
  ...TransactionDetailAction,
});

const mapDispatchToProps = (dispatch => ({
  navigate,
})) ();

const page = connect (mapStateToProps, mapActionToProps ()) (
  AccountHistoryPage
);
export default withPocketRemoteService (page);
