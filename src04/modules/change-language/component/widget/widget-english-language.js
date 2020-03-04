import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { AtiSwitch } from 'ati-react-web';
import EnglishIcon from '../../../../assets/images/England.png';
import ContentPage from './../../../../common/layout/component/content-page';

class WidgetEnglishLanguage extends Component {
    render() {
        const {
            switchStatusEnglish, checkedEnglish,
        } = this.props;
        return (
            <Fragment>
                <ContentPage>
                    <br />
                    <Row type="flex" align="middle" justify="start">
                        <Col span={4} className="language-icon">
                            <img alt="logo" src={EnglishIcon} />
                        </Col>
                        <Col span={12}>
                            <span> English </span>
                        </Col>
                        <Col span={3}>
                            <AtiSwitch
                                id="English"
                                unCheckedText="off"
                                checkedText="on"
                                events={{ onChange: switchStatusEnglish }}
                                checked={checkedEnglish}
                            />
                        </Col>
                    </Row>
                    <br />
                </ContentPage>
            </Fragment>
        );
    }
}

export default WidgetEnglishLanguage;