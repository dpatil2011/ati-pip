import { Col, Icon, Row } from 'antd';
import { AtiButton, AtiModals } from 'ati-react-web';
import React, { Component } from 'react';
import ReactCodeInput from 'react-code-input';
import { FormattedMessage } from 'react-intl';

class ModalPinComponent extends Component {
  render() {
    // const timer =
    //   this.state.timer === null
    //     ? Date.now() + 60000 * 5
    //     : Date.now() + this.state.timer;

    return (
      <React.Fragment>
        <AtiModals
          isOpen={this.props.isOpenPin}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-pin"
        >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={() => {this.props.changeModalView('close'); }} />
            </Col>
            <Col className="margin-top-2" justify="center">
              <span className="pin-style">
                <center>
                  <FormattedMessage id="label.company.queue.pin" />
                </center>
              </span>
            </Col>
            <center>
              <Col
                style={{
                  marginTop: '16px',
                }}
              >
                <span className="min-style">
                  Minta pelanggan untuk memasukkan
                </span>
              </Col>
              <Col>
                <span className="min-style">6-digit PIN Transaksinya</span>
              </Col>
            </center>
          </Row>
          <div style={{ marginTop: '40px' }}>
            <center>
              <Row>
                <Col>
                  <ReactCodeInput
                    id="otpInput"
                    type="text"
                    fields={6}
                    onChange={{}}
                    inputStyle={{
                      fontFamily: 'monospace',
                      borderRadius: '7px',
                      border: '1px solid white',
                      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px',
                      marginLeft: '10px',
                      paddingLeft: '13px',
                      width: '46px',
                      height: '45px',
                      fontSize: '32px',
                      boxSizing: 'border-box',
                      color: '#ffffff',
                      backgroundColor: '#28a2ab',
                    }}
                  />
                </Col>
              </Row>
              <br />
              {/* <Row>
              <Col>
                <div
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'Avenir Next LT Pro Regular',
                  }}
                >
                  <Countdown
                    id="countdown"
                    date={timer}
                    renderer={this.renderer}
                    onTick={(e) => {
                      this.setState({ timer: e.total });
                    }}
                  />
                </div>
              </Col>
            </Row> */}

              <AtiButton
                id="btnKirim"
                style={{
                  marginTop: '40px',
                  width: '140px',
                  height: '60px',
                  borderRadius: '7px',
                  borderWidth: 1,
                  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                  backgroundColor: '#ffffff',
                }}
                text={
                  <span className="pocket-btn-center">
                    <FormattedMessage id="label.button.kirim" />
                  </span>
                }
                events={{
                  onClick: () => {
                    this.props.changeModalView('success');
                  },
                }}
              />
            </center>
          </div>
        </AtiModals>
      </React.Fragment>
    );
  }
}

export default ModalPinComponent;
