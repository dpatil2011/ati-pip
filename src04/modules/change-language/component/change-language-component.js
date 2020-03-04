import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import PageTitle from './../../../common/layout/component/page-title';
import WidgetIndonesianLanguage from './widget/widget-indonesian-language';
import WidgetEnglishLanguage from './widget/widget-english-language';
import './../../../assets/css/change-language.css';

class ChangeLanguage extends Component {
    render() {
        const {
            changeLocale, checked_english, checked_indonesian,
        } = this.props;
        return (
            <Fragment>
                <Row>
                    <Col>
                        <PageTitle
                            link="change-language"
                            text="label.breadcrumb.settings"
                            subtitle="label.breadcrumb.changelanguage"
                            header={<FormattedMessage id="label.menu.change.language" />}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <WidgetEnglishLanguage
                            checkedEnglish={checked_english}
                            switchStatusEnglish={changeLocale}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <WidgetIndonesianLanguage
                            checkedIndonesian={checked_indonesian}
                            switchStatusIndonesian={changeLocale}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default ChangeLanguage;