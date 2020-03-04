import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import { AtiField, AtiForm } from 'ati-reduxform-web';
import { AtiTextbox, AtiTextPassword, AtiFieldError, AtiButton, AtiCheckbox } from 'ati-react-web';
import { FormattedMessage } from 'react-intl';
import LoginLogo from './../../../assets/images/logo-login.png';
import LoginBackground from './../../../assets/images/login-background.png';
import UserIcon from './../../../assets/images/UserIcon.svg';
import LockIcon from './../../../assets/images/LockIcon.svg';
import './../../../assets/css/login.css';
import * as validation from '../../../common/utils/validation';

class LoginComponent extends Component {
    render() {
        const {
            onValueChange, initialData, loading, onSubmit,
            actionButtonSubmit, checkedStatus, checkboxValue,
        } = this.props;
        const formId = 'login-form';
        return (
            <Fragment>
                <Row type="flex" align="middle" style={{ height: '100vh' }}>
                    <Col xs={0} sm={0} md={0} lg={12} xl={12}>
                        <div >
                            <img src={LoginBackground} className="login-background" alt="Background" />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Row type="flex" justify="center" align="middle">
                            <AtiForm
                                formId={formId}
                                className="login-form"
                                initialValues={initialData}
                                onSubmit={onSubmit()}
                                keepDirtyOnReinitialize
                            >
                                <Row type="flex" justify="center">
                                    <Col span={24}>
                                        <img src={LoginLogo} className='logo' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <h6 className="text-bold">
                                            <FormattedMessage id='label.login.logo.name' />
                                        </h6>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="center">
                                    <Col span={24}><p className="login-text"><FormattedMessage id='label.login.greeting.message' /></p></Col>
                                </Row>
                                <Row type="flex" justify="start" className="row-space">
                                    <AtiField name='username' validate={[validation.required]}>
                                        <Col span={24} className='box-textbox'>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} className='icon-textbox lock-icon'>
                                                <img src={UserIcon} className='icon-size' />
                                            </Col>
                                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                                <AtiTextbox
                                                    id="username"
                                                    name="username"
                                                    className="login-form textbox form-control"
                                                    placeholder="Username"
                                                    type="text"
                                                    value={initialData.username}
                                                    events={{ onChange: onValueChange }}
                                                />
                                            </Col>
                                        </Col>
                                        <AtiFieldError />
                                    </AtiField>
                                </Row>
                                <Row type="flex" justify="start" className="row-space">
                                    <AtiField name="password" validate={[validation.required]}>
                                        <Col span={24} className='box-textbox'>
                                            <Col xs={3} sm={3} md={3} lg={3} xl={3} className='icon-textbox lock-icon'>
                                                <img src={LockIcon} className='icon-size' />
                                            </Col>
                                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                                <AtiTextPassword
                                                    id="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    className="login-form textbox form-control"
                                                    type="text"
                                                    value={initialData.password}
                                                    events={{ onChange: onValueChange }}
                                                />
                                            </Col>
                                        </Col>
                                        <AtiFieldError />
                                    </AtiField>
                                </Row>
                                <Row className='row-checkbox'>
                                    <Col xs={24} sm={12} md={12} lg={12} xl={12} type="flex">
                                        <AtiCheckbox
                                            events={{ onChange: checkedStatus }}
                                            checked={checkboxValue}
                                        >
                                            <FormattedMessage id='label.login.saveusername' />
                                        </AtiCheckbox>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="center">
                                    <Col span={24}>
                                        <AtiButton
                                            text={<FormattedMessage id='label.login.button' />}
                                            className="login-button-page"
                                            id="submit"
                                            htmlType="button"
                                            loading={loading}
                                            events={{
                                                onClick: () => {
                                                    actionButtonSubmit(formId);
                                                },
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </AtiForm>
                        </Row>
                        <Row type="flex" justify="start" align="bottom" >
                            <Col span={24}>
                                <p className="login-text footer" >v.1.0.0.0 - 2019 © PT Anabatic Technologies</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default LoginComponent;
