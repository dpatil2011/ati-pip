import { Col, Row } from 'antd';
import { AtiButton, AtiModals } from 'ati-react-web';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Table from '../../../common/general-component/table-history/component/table';
import close1 from './../../../assets/images/close_icon.png';

class WaitingQueueWidget extends React.Component {
  render() {
    // const formId = "update-company-parameter-form";
    const columns = [
      {
        title: 'No',
        width: '10%',
        fontFamily: 'AvenirNextLTPro-Demi',
        fontSize: '12px',
        dataIndex: 'id',
        key: 'id',
        fixed: false,
      },
      {
        title: <FormattedMessage id="label.company.queue.nama" />,
        dataIndex: 'name',
        width: '25%',
        key: 'name',
        fixed: false,
      },
      {
        title: <FormattedMessage id="label.company.queue.jenis" />,
        width: '60%',
        dataIndex: 'balance',
        key: 'balance',
        fixed: false,
      },
      {
        title: <FormattedMessage id="label.empty" />,
        dataIndex: 'description',
        width: '10%',
        key: 'description',
        fixed: false,
        render: (text, record) => (
          <AtiButton
            icon="eye"
            className="table-button"
            text="lihat"
            type="default"
          />
        ),
      },
    ];

    const data = [
      {
        id: '1',
        name: 'Daneil Andrea',
        balance: 'transfer',
      },
      {
        id: '2',
        name: 'santhosh',
        balance: 'Bayar Topup Pulsa',
      },
      {
        id: '3',
        name: 'raja',
        balance: 'transfer',
      },
      {
        id: '4',
        name: 'Daneil Andrea',
        balance: 'Bayar Topup Pulsa',
      },
      {
        id: '5',
        name: 'santhosh',
        balance: 'transfer',
      },
      {
        id: '6',
        name: 'Daneil Andrea',
        balance: 'Bayar Topup Pulsa',
      },
      {
        id: '7',
        name: 'santhosh',
        balance: 'transfer',
      },
      {
        id: '8',
        name: 'Daneil Andrea',
        balance: 'Bayar Topup Pulsa',
      },
      {
        id: '9',
        name: 'santhosh',
        balance: 'transfer',
      },
    ];

    return (
      <AtiModals
        isOpen={this.props.isOpenTable}
        backdrop
        size="md"
        zIndex="1000"
        wrapClassName="modal-body"
      >
        <Row className="padding-3-3-2-3">
          <Col span={19} align="right">
            <img
              src={close1}
              height="13px"
              width="13px"
              onClick={() => {
                this.props.changeModalView('pin');
              }}
            />
          </Col>
          <Col className="margin-top-11" span={24}>
            <span className="text-style">
              <FormattedMessage id="label.company.queue.text" />
            </span>
          </Col>
        </Row>
        <Col>
          <Table
            className="content-table content-table ant-pagination-prev ant-pagination-item ant-pagination-next content-table th"
            columns={columns}
            list={data}
            showHeader
            bordered
          />
        </Col>
      </AtiModals>
    );
  }
}

export default WaitingQueueWidget;
