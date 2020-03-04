import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import { AtiField, AtiForm } from "ati-reduxform-web";
import { AtiModals, AtiTextbox, AtiFieldError, AtiButton } from "ati-react-web";
import { FormattedMessage } from "react-intl";
import { InputGroupText } from "reactstrap";
import "../style/style.css";
import * as validation from "../../../common/utils/validation";
import close1 from "./../../../assets/images/icon-close.png";

class SendCashFormWidget extends Component {
  render() {
    const {
      cashModal,
      closeModal,
      initialData,
      actionButtonSubmit,
      onValueChange,
      onSubmit,
      amount,
      description
    } = this.props;
    const formId = "deposit-cash-form";
    return (
      <Fragment>
        <AtiModals
          isOpen={false}
          headerClassName="pocket-modal-header"
          className="pocket-modal-container"
          contentClassName="pocket-modal-content"
          backdrop="static"
          size="md"
          zIndex="1001"
          events={{
            toggle: closeModal
          }}
        >
          <Row style={{ marginTop: "-20px" }}>
            <Col span={24} align="right">
              <img
                src={close1}
                height="13px"
                width="13px"
                onClick={() => {
                  alert();
                }}
              />
            </Col>
          </Row>
          <Row className="modal-history-margin" style={{ marginTop: "20px" }}>
            <Col>
              <span className="text-value">
                <h4>
                  <FormattedMessage id="label.sendcash" />
                </h4>
              </span>
            </Col>
          </Row>
          <Row className="modal-history-margin">
            <Col>
              <p>
                <FormattedMessage id="label.sendcash.desc" />
              </p>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle" className="name">
            <Col>
              <text className="name-text">joel - 987654321</text>
            </Col>
          </Row>

          <br />
          <AtiForm
            formId={"formId"}
            initialValues={initialData}
            onSubmit={onSubmit}
            keepDirtyOnReinitialize
          >
            <Row className="modal-history-margin" style={{ height: "25px" }}>
              <Col>
                <p>
                  <FormattedMessage id="label.amount" />
                </p>
              </Col>
            </Row>
            <Row
              className="modal-history-margin"
              style={{
                borderLeftWidth: "1px",
                borderStyle: "solid",
                borderColor: "#d6d6d6",
                borderRadius: 5,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRightWidth: 0
              }}
            >
              <Col>
                <AtiField
                  name="amount"
                  validate={[
                    validation.required,
                    validation.numberRequired,
                    validation.zeroAmount
                  ]}
                >
                  <AtiTextbox
                    style={{}}
                    id="amount"
                    name="amount"
                    type="text"
                    className="asd"
                    addonPlacement="left"
                    addon={
                      <InputGroupText className="left-addon-text">
                        Rp
                      </InputGroupText>
                    }
                  />
                  <AtiFieldError />
                </AtiField>
              </Col>
            </Row>
            <br />
            <Row className="modal-history-margin">
              <Col>
                <AtiField name="description">
                  <AtiTextbox
                    id="description"
                    name="description"
                    type="text"
                    className="pocketbank-form"
                    label={<FormattedMessage id="label.description.en" />}
                    placeholder=""
                    value={description}
                    events={{ onChange: onValueChange }}
                  />
                </AtiField>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center" align="middle">
              <Col>
                <AtiButton
                  id="submit"
                  text={<FormattedMessage id="label.button.send" />}
                  className="sending-button"
                  events={{
                    onClick: () => {}
                  }}
                />
              </Col>
            </Row>
          </AtiForm>
        </AtiModals>
      </Fragment>
    );
  }
}

export default SendCashFormWidget;
