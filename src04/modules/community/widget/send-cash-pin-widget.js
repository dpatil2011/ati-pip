import React, { Component } from "react";
import { AtiModals, AtiButton } from "ati-react-web";
import { Row, Col, Icon } from "antd";
import ReactCodeInput from "react-code-input";
import { FormattedMessage } from "react-intl";
import "./../style/Dash.css";

class SendCashPinWidget extends Component {
  render() {
    const { closeAll, pin, openSucess } = this.props;
    return (
      <React.Fragment>
        <AtiModals
          isOpen={pin}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-pin"
        >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={closeAll} />
            </Col>
            <center>
              <Col className="margin-top-2">
                <span className="pin">
                  <FormattedMessage id="label.pin" />
                </span>
              </Col>
              <Col
                style={{
                  marginTop: "16px"
                }}
              >
                <span className="min-style">
                  Ask an Associate Agent to enter
                </span>
              </Col>
              <Col>
                <span className="min-style">6-Digit Transaction PIN</span>
              </Col>
            </center>
          </Row>
          <div style={{ marginTop: "40px", marginLeft: "43px" }}>
            <Row>
              <Col>
                <ReactCodeInput
                  id="otpInput"
                  type="number"
                  fields={6}
                  onChange={{}}
                  inputStyle={{
                    fontFamily: "monospace",
                    borderRadius: "7px",
                    border: "1px solid white",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                    marginLeft: "10px",
                    paddingLeft: "13px",
                    width: "46px",
                    height: "45px",
                    fontSize: "32px",
                    boxSizing: "border-box",
                    color: "#ffffff",
                    backgroundColor: "#28a2ab"
                  }}
                />
              </Col>
            </Row>
            <br />

            <AtiButton
              id="btnKirim"
              style={{
                marginTop: "40px",
                width: "140px",
                height: "60px",
                borderRadius: "7px",
                borderWidth: 1,
                marginLeft: "100px",
                boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                backgroundColor: "#ffffff"
              }}
              text={
                <span className="pocket-btn-center">
                  <FormattedMessage id="label.button.send" />
                </span>
              }
              events={{
                onClick: () => {
                  openSucess();
                }
              }}
            />
          </div>
        </AtiModals>
      </React.Fragment>
    );
  }
}

export default SendCashPinWidget;
