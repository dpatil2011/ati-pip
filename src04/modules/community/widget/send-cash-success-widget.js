import { Col, Row, Icon } from "antd";
import { AtiButton, AtiModals } from "ati-react-web";
import React, { Component, Fragment } from "react";
import { FormattedMessage } from "react-intl";
import "../style/Dash.css";
import close1 from "./../../../assets/images/icon-close.png";
import left from "./../../../assets/images/left-blue.png";
import right from "./../../../assets/images/right-blue.png";
import dash from "./../../../assets/images/dash-blue.png";
import end from "./../../../assets/images/end-blue.png";
import print from "./../../../assets/images/print.png";
import success1 from "./../../../assets/images/success.png";

class SendCashSuccessWidget extends Component {
  render() {
    const { closeAll, success } = this.props;
    return (
      <Fragment>
        <AtiModals
          isOpen={success}
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
              <Col className="margin-top-10" justify="center">
                <span className="pin-style">
                  <FormattedMessage id="label.success" />
                </span>
              </Col>
            </center>

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
                      <img src={left} height="20px" width="22px" />
                    </Col>
                    <Col>
                      <img src={right} height="20px" width="22px" />
                    </Col>
                  </Row>
                  <center>
                    <Col>
                      <img src={success1} height="54px" width="45px" />
                    </Col>
                  </center>
                  <Col style={{ marginTop: "8px" }}>
                    <span className="text-Berhasil">
                      Cash Sent Successfully
                    </span>
                  </Col>

                  <Row
                    type="flex"
                    justify="space-between"
                    className="bill-row-divider"
                  >
                    <Col style={{ marginTop: "30px", marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.type" />
                      </span>
                    </Col>
                    <Col style={{ marginTop: "30px", marginBottom: "10px" }}>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.date.en" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.code" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
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
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.account" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "10px" }}>
                      <span className="text-bold">1128121712</span>
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
                      <span className="text-bold">Rp 100,000</span>
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
                      <span className="text-bold">Rp 1,000</span>
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
                      <span className="text-bold">Rp 0</span>
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
                    <Col style={{ marginBottom: "1px", marginTop: "15px" }}>
                      <span className="text-style1">
                        <FormattedMessage id="label.total" />
                      </span>
                    </Col>
                    <Col style={{ marginBottom: "1px", marginTop: "15px" }}>
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
            <center>
              <Col style={{ paddingTop: "13px" }}>
                <img src={print} height="27px" width="28px" />
                <span className="Cetak-style">
                  <FormattedMessage id="label.button.print" />
                </span>
              </Col>
            </center>
          </div>
        </AtiModals>
      </Fragment>
    );
  }
}

export default SendCashSuccessWidget;
