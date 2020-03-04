import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { AtiModals, AtiButton, AtiTextbox, AtiDatePicker } from 'ati-react-web';
import { Col, Icon, Row } from 'antd';
import { AtiForm } from 'ati-reduxform-web';
import close1 from './../../../../assets/images/close_icon.png';
import avatar from './../../../../assets/images/logo-avatar.png';
import bell from './../../../../assets/images/bell-icon.png';
import transfer from './../../../../assets/images/transfer-icon.png';
import group from './../../../../assets/images/group-icon.png';



class WaitingQueueWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultWorkingDays: '',
      isChange: false,
    };
  }

  render() {
    const formId = 'update-company-parameter-form';
    return (
      <React.Fragment>
        <AtiModals
          isOpen={true}
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
                style={{ cursor: 'pointer' }}
                width="13px"
                onClick={() => {}}
              />
            </Col>
            <Col className="margin-top-5" span={24}>
              <span className="text-style">
                <FormattedMessage id="label.company.queue.text" />
              </span>
            </Col>
            <Col>
              <div className="avatar-style">
                <img src={avatar} className="avstyle" />
              </div>
            </Col>
            <Col className="margin-top-6" span={24}>
              <span className="text-style-aceng">
                <FormattedMessage id="label.company.queue.aceng" />
              </span>
            </Col>
            <Col className="margin-top-7" span={24}>
              <span className="text-style-tarik">
                <FormattedMessage id="label.company.queue.tarik" />
              </span>
            </Col>
            <Col className="margin-top-8">
              <span className="text-style-number">09</span>
            </Col>
            <AtiButton
              id="btnKerjakan"
              style={{
                marginTop: '20px',
                width: '300px',
                height: '52px',
                borderRadius: '62px',
                borderWidth: 1,
                marginLeft: '63px',
                boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                backgroundColor: '#28a2ab',
              }}
              name="Kerjakan"
              height="52px"
              color="danger"
              text={<FormattedMessage id="label.button.kerjakan" />}
              events={{
                onClick: () => {
                  this.setState({
                                         isChange: true,
                                         isChange1: false,
                               });
                },
              }}
            />
            <Col className="margin-left-1">
              <Row>
                <img src={bell} className="bellstyle" />
                <img src={transfer} className="transferstyle" />
              </Row>
              <Row>
                <span className="text-style-panggil">
                  <FormattedMessage id="label.company.queue.panggil" />
                </span>
                <span className="text-style-panggil1">
                  <FormattedMessage id="label.company.queue.antrian" />
                </span>
              </Row>
            </Col>
            <Col>
              <Row style={{ marginTop: '45px' }}>
                <img src={group} className="groupstyle" />
                <span className="group-style-number">9</span>
              </Row>
            </Col>
            <Col>
              <Row style={{ marginTop: '10px' }}>
                <span className="text-style-menun" onClick={() => {}}>
                  <u>
                    <FormattedMessage id="label.company.queue.text" />
                  </u>
                </span>
                <Icon
                  type="right"
                  className="arrow-modal-icon"
                  onClick={() => {}}
                />
              </Row>
            </Col>
          </Row>
        </AtiModals>
      </React.Fragment>
    );
  }
}
const styles = {
  colMargin: {
    marginLeft: '10px',
    marginRight: 0,
    marginBottom: '21px',
    marginTop: '21px',
  },
  weekInfo: { width: '15px', height: '15px' },
};
export default WaitingQueueWidget;
