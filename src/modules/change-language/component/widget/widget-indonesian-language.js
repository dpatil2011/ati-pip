import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { AtiSwitch } from 'ati-react-web';
import indonesianIcon from '../../../../assets/images/Indonesian.png';
import ContentPage from './../../../../common/layout/component/content-page';

class WidgetIndonesianLanguage extends Component {
    render() {
        const {
            switchStatusIndonesian, checkedIndonesian,
        } = this.props;
        return (
            <Fragment>
                <ContentPage>
                    <br />
                    <Row type="flex" align="middle" justify="start">
                        <Col span={4} className="language-icon">
                            <img alt="logo" src={indonesianIcon} />
                        </Col>
                        <Col span={12}>
                            <span> Bahasa Indonesia </span>
                        </Col>
                        <Col span={3}>
                            <AtiSwitch
                                id="Indonesian"
                                unCheckedText="off"
                                checkedText="on"
                                events={{ onChange: switchStatusIndonesian }}
                                checked={checkedIndonesian}
                            />
                        </Col>
                    </Row>
                    <br />
                </ContentPage>
            </Fragment>
        );
    }
}

export default WidgetIndonesianLanguage;