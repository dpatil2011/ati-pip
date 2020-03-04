import React from 'react';
import { Row, Col } from 'antd';
import v from 'voca';
import BlueButton from 'common/general-component/blue-button/component/blue-button';
import PageTitle from 'common/layout/component/pageTitle';
import BackButton from 'common/general-component/back-button/component/back-button';
import { navigate } from 'common/store/action/general-action';

class PageHeader extends React.Component {
    render() {
       if (this.props.addButtonClick) {
            return (
                <React.Fragment>
                    <Row type="flex" justify="start" style={{ marginTop:'5vh',paddingBottom: '2%' }}>
                        <Col span={12} ><PageTitle text={this.props.title} textModul={this.props.modulName} /></Col>
                        {
                            v.isEmpty(this.props.buttonText) ? '' :
                            <Col span={12} style={{ textAlign: 'right' }}>
                                <BlueButton
                                    id={this.props.buttonId}
                                    className="button-add"
                                    text={this.props.buttonText}
                                    icon={this.props.buttonIcon}
                                    onClick={this.props.addButtonClick}
                                    style={this.props.buttonStyle}
                                />
                            </Col>
                        }
                    </Row>
                </React.Fragment>
            );
       }

       return (
            <React.Fragment>
                    <Row type="flex" justify="start" style={{ marginTop:'5vh',paddingBottom: '2%' }}>
                    {this.props.onBackButtonClick &&
                    <Col span={1} style={{ marginRight: '25px' }}>
                        <BackButton
                            id={this.props.backButtonId}
                            onClick={this.props.onBackButtonClick}
                        />
                    </Col>
                    }
                    <Col span={12} ><PageTitle text={this.props.title} textModul={this.props.modulName} /></Col>
                    {
                        v.isEmpty(this.props.buttonText) ? '' :
                        <Col span={3} offset={10}>
                            <BlueButton
                                id={this.props.buttonId}
                                text={this.props.buttonText}
                                icon={this.props.buttonIcon}
                            />
                        </Col>
                    }
                </Row>
            </React.Fragment>
        );
    }
}

export default PageHeader;