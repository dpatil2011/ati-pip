import { Col, Row, Icon } from "antd";
import { AtiButton, AtiModals } from "ati-react-web";
import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import "../style/Dash.css";
import close1 from "./../../../assets/images/icon-close.png";
import left from "./../../../assets/images/left-cor.png";
import right from "./../../../assets/images/right-cor.png";
import dash from "./../../../assets/images/dash-line.png";
import end from "./../../../assets/images/recept-end.png";

class SendCashConfirmationWidget extends Component {
  render() {
    const { confirmation, openPin, closeAll } = this.props;
    return (
      <Fragment>
        <AtiModals
          isOpen={confirmation}
          backdrop
          size="sm"
          zIndex="1000"
          bodyClassName="modal-confirm"
        >
          <Row className="padding-3-3-2-3">
            <Col span={25} align="right">
              <Icon type="close" className="closeImage" onClick={closeAll} />
            </Col>
            <center>
              <Col className="margin-top-0" justify="center">
                <span className="konfirmasi-style">
                  <FormattedMessage id="label.confirmation" />
                </span>
              </Col>
            </center>
            <Fragment>
              {/* {index !== 0 ? <div className="bill-divider"></div> : <Fragment></Fragment>} */}
              <Row
                type="flex"
                justify="space-between"
                className="bill-row-divider"
              >
                <div
                  className="bill-confirm-body"
                  style={{ alignSelf: "center" }}
                >
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
                  <Col style={{ marginTop: "30px" }}>
                    <span className="text-tambah">Send Cash</span>
                  </Col>

                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginTop: "30px", marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.agent" />
                      </span>
                    </Col>
                    <Col style={{ marginTop: "30px", marginBottom: "10px" }}>
                      <span className="text-bold">Agent</span>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.account" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-bold">1100021000</span>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.nominal" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-bold">Rp 50000</span>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.fee" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-bold">Rp 1000</span>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.information" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
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
                    <Col style={{ marginBottom: "8px", marginTop: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.total" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "8px", marginTop: "10px" }}>
                      <span className="text-total">Rp 50000</span>
                    </Col>
                  </Row>
                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col>
                      <img
                        src={end}
                        height="15px"
                        width="400px"
                        style={{ bottom: 0 }}
                      />
                    </Col>
                  </Row>
                </div>
              </Row>
              <div className="buttonRow">
                <center>
                  <AtiButton
                    id="btnKerjakan"
                    style={{
                      marginTop: "50px",
                      width: "185px",
                      height: "60px",
                      borderRadius: "7px",
                      borderWidth: 1,
                      boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                      backgroundColor: "#28a2ab"
                    }}
                    name="Kerjakan"
                    height="52px"
                    text={<FormattedMessage id="label.right" />}
                    events={{
                      onClick: () => {
                        openPin();
                      }
                    }}
                  />
                </center>
              </div>
            </Fragment>
          </Row>
        </AtiModals>
      </Fragment>
    );
  }
}

export default SendCashConfirmationWidget;
