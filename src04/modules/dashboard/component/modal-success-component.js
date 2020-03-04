import { Col, Icon, Row } from 'antd';
import { AtiModals } from 'ati-react-web';
import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import dash from './../../../assets/images/dash-line-blue.png';
import end from './../../../assets/images/end-blue.png';
import left from './../../../assets/images/left-blue.png';
import print from './../../../assets/images/print.png';
import right from './../../../assets/images/right-blue.png';
import success from './../../../assets/images/success-icon.png';

class ModalSucessComponent extends Component {
  render() {
    // const timer =
    //   this.state.timer === null
    //     ? Date.now() + 60000 * 5
    //     : Date.now() + this.state.timer;

    return (
      <React.Fragment>
        <AtiModals
          isOpen={this.props.isOpenSuccess}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-pin"
        >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={() => {this.props.changeModalView('close'); }} />
            </Col>
            <Col className="margin-top-10" justify="center">
              <center>
                <span className="pin-style">
                  <FormattedMessage id="label.company.queue.bukti" />
                </span>
              </center>
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
                    <img src={success} height="54px" width="45px" />
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
                  <center>
                    <div className="bill-divider-footer" />
                  </center>
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
      </React.Fragment>
    );
  }
}

export default ModalSucessComponent;
