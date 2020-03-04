import React, { Component, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import { AtiField, AtiForm } from 'ati-reduxform-web';
import {
  AtiTextbox,
  AtiTextPassword,
  AtiFieldError,
  AtiButton,
  AtiCheckbox,
  AtiModals,
} from 'ati-react-web';
// import ReactToPrint from "react-to-print";
import { FormattedMessage } from 'react-intl';

import dash from '../../../../assets/images/dash.png';
import left from '../../../../assets/images/left.png';
import right from '../../../../assets/images/right.png';
import end from '../../../../assets/images/end.png';
import print from '../../../../assets/images/print.png';
import '../../styles/Dash.css';

  import successIcon from '../../../../assets/images/logo-success-transaction.png';

const data = [{
    lblContent: 'dcbndj',
    content: 'jzjb',
},
];
class SuccessfulModal extends Component {
    componentDidMount() {
        const { visibleModal } = this.props;
    }
    render() {
        

        const {
            isOpen, closeModal, dataSource, lblHeader, lblTittle,
            lblFooter, contentFooter, openPin, detailData, visibleModal,
        } = this.props;
        return (
            <Fragment>
               <AtiModals
          isOpen={visibleModal}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-pin"
               >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon 
              type="close" 
              className="closeImage" 
              style={{fontSize: 14 }}
              onClick={closeModal} />
            </Col>
            <Col className="margin-top-10" justify="center">
              <span className="pin-style">
                <FormattedMessage id="label.company.queue.bukti" />
              </span>
            </Col>

            <Fragment>
              <Row
                type="flex"
                justify="space-between"
                className="bill-row-divider"
              >
                <div className="bill-success-body">
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col>
                      <img src={left} height="20px" width="15px" />
                    </Col>
                    <Col>
                      <img src={right} height="20px" width="15px" />
                    </Col>
                  </Row>

                  <Col style={{ marginLeft: '170px' }}>
                    <img src={successIcon} height="54px" width="45px" />
                  </Col>
                  <Col style={{ marginTop: '8px' }}>
                    <span className="text-Berhasil">Transaksi Berhasil</span>
                  </Col>

                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginTop: '30px', marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.tipe1" />
                      </span>
                    </Col>
                    <Col style={{ marginTop: '30px', marginBottom: '10px' }}>
                      <span className="text-bold-m">Setor Tunai</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }} />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.tanggal1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold-m">{detailData.date}</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }}/>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.kode1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold-m">1213123232312</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }}/>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.asal1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold-m">9128121712</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }}/>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.tujuan1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold-m">{'Rp ' }{ detailData.amount}</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }}/>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.transfer1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold-m">Rp 0</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" style={{ marginLeft: '25px', marginRight: '25px' }} />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.admin1" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '20px' }}>
                      <span className="text-bold-m">{'-'}</span>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                    style={{
                        marginTop: '10px',
                        marginBottom: '27px',
                    }}
                  >
                    <Col>
                      <img src={dash} height="13px" width="400px" />
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '1px', marginTop: '0px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.Total" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '1px', marginTop: '0px' }}>
                      <span className="text-total">{'Rp '}{detailData.amount}</span>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                    style={{ marginTop: '15px' }}
                  >
                    <Col>
                      <img src={end} height="13px" width="400px" />
                    </Col>
                  </Row>
                </div>
              </Row>
            </Fragment>
          </Row>
          <div className="button-view">
            <Col style={{ marginLeft: '56px', paddingTop: '13px' }}>
              <img src={print} height="27px" width="28px" />
              <span className="Cetak-style">
                <FormattedMessage id="label.button.Cetak1" />
              </span>
            </Col>
          </div>
               </AtiModals>
            </Fragment>
        );
    }
}
export default SuccessfulModal;
