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
import left from '../../../assets/images/left.png';
import right from '../../../assets/images/right.png';
import end from '../../../assets/images/end.png';
import print from '../../../assets/images/print.png';


  import successIcon from '../../../assets/images/logo-success-transaction.png';

const data = [{
    lblContent: 'dcbndj',
    content: 'jzjb',
},
];
class SuccessfulModal extends Component {
    renderComponent = () => data.map((item, index) => (
                <Fragment>
                    {index !== 0 ? <div className="bill-divider" /> : <Fragment />}
                    <Row type="flex" justify="space-between" className="bill-row-divider">
                        <Col>
                            <span className="text-style">
                                <FormattedMessage id={item.lblContent} />
                            </span>
                        </Col>
                        <Col>
                            <span className="text-bold text-style">
                                {item.content}
                            </span>
                        </Col>
                    </Row>
                </Fragment>
            ))

    render() {
        const {
            isOpen, closeModal, dataSource, lblHeader, lblTittle,
            lblFooter, contentFooter, openPin,
        } = this.props;
        return (
            <Fragment>
               <AtiModals
          isOpen={this.state.isChange2}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-pin"
               >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={() => {}} />
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
                        <FormattedMessage id="label.company.queue.tipe" />
                      </span>
                    </Col>
                    <Col style={{ marginTop: '30px', marginBottom: '10px' }}>
                      <span className="text-bold">Transfer</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.tanggal" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">28 Aug 2018</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.kode" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">1213123232312</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.asal" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">9128121712</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.tujuan" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">8100021000</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.transfer" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">Rp 50,000</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.admin" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">Rp 0</span>
                    </Col>
                  </Row>
                  <div className="bill-divider-footer" />
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.pesan" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '10px' }}>
                      <span className="text-bold">-</span>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
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
                    <Col style={{ marginBottom: '1px', marginTop: '15px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.Total" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '1px', marginTop: '15px' }}>
                      <span className="text-total">RP 5,200</span>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
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
                <FormattedMessage id="label.button.Cetak" />
              </span>
            </Col>
          </div>
               </AtiModals>
            </Fragment>
        );
    }
}
export default SuccessfulModal;
