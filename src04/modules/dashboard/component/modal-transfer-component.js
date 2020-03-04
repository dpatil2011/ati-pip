import { Col, Icon, Row } from 'antd';
import { AtiButton, AtiModals } from 'ati-react-web';
import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import dash from './../../../assets/images/dash-line.png';
import left from './../../../assets/images/left-cor.png';
import end from './../../../assets/images/recept-end.png';
import right from './../../../assets/images/right-cor.png';

class ModalTransferComponent extends Component {
  render() {
    // const timer =
    //   this.state.timer === null
    //     ? Date.now() + 60000 * 5
    //     : Date.now() + this.state.timer;

    return (
      <React.Fragment>
        <AtiModals
          isOpen={this.props.isOpenTransfer}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-confirm"
        >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={() => { this.props.changeModalView('close'); }} />
            </Col>
            <Col className="margin-top-0" justify="center">
              <span className="konfirmasi-style">
                <center>
                  <FormattedMessage id="label.company.queue.konfirmasi" />
                </center>
              </span>
            </Col>
            <Fragment>
              {/* {index !== 0 ? <div className="bill-divider"></div> : <Fragment></Fragment>} */}
              <Row
                type="flex"
                justify="space-between"
                className="bill-row-divider"
              >
                <div className="bill-confirm-body">
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
                  <Col style={{ marginTop: '30px' }}>
                    <span className="text-tambah">Transfer</span>
                  </Col>

                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginTop: '30px', marginBottom: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.asal" />
                      </span>
                    </Col>
                    <Col style={{ marginTop: '30px', marginBottom: '10px' }}>
                      <span className="text-bold">9128129241</span>
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
                        <FormattedMessage id="label.company.queue.nominal" />
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
                        <FormattedMessage id="label.company.queue.biayan" />
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
                    <Col style={{ marginBottom: '8px', marginTop: '10px' }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.company.queue.total" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: '8px', marginTop: '10px' }}>
                      <span className="text-total">RP 50,000</span>
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
            <center>
              <AtiButton
                id="btnKerjakan"
                style={{
                  marginTop: '50px',
                  width: '185px',
                  height: '60px',
                  borderRadius: '7px',
                  borderWidth: 1,
                  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                  backgroundColor: '#28a2ab',
                }}
                name="Kerjakan"
                height="52px"
                color="danger"
                text={<FormattedMessage id="label.button.benar" />}
                events={{
                  onClick: () => {
                    this.props.changeModalView('pin1');
                  },
                }}
              />
            </center>
          </Row>
        </AtiModals>
      </React.Fragment>
    );
  }
}

export default ModalTransferComponent;
