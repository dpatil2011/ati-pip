import { Col, Row } from "antd";
import React from "react";
import { FormattedMessage } from "react-intl";
import community from "../../../assets/images/community.png";
import ContentPage from "../../../common/layout/component/content-page";
import Icon from "./../../../assets/images/community-icon.png";
import Bg from "./../../../assets/images/tile-bg.png";

class SystemInfoWidget extends React.Component {
  render() {
    const { systemInfoDetail } = this.props;
    return (
      <React.Fragment>
        <Row
          style={{
            width: "783px",
            backgroundColor: "#2a2e43",
            borderRadius: 10
          }}
          className="background"
        >
          <Col span={20}>
            <Row className="instruction">
              <FormattedMessage id="label.instruction.community" />
            </Row>
            <Row className="position">
              <FormattedMessage id="label.position" />
            </Row>
            <Row className="position" style={{paddingBottom:"13px"}}>
              <FormattedMessage id="label.member" />
            </Row>
          </Col>
          <Col span={2} style={{ justifyContent: "center" }}>
            <div
              style={{
                paddingTop: "6px",
                width: "120px",
                height: "120px",
                overflow: "hidden"
              }}
            >
              <img style={{ width: "100%", height: "100%" }} src={Icon} />
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default SystemInfoWidget;
