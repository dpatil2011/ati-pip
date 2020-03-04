import React from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';
import CONSTANTS from './../../../utils/Constants';

function CardDetail({
    action, navigate, height, width, background, backgroundImage, icon, displayButton, 
    balanceType, balance, closeModal,
}) {
    if (height === undefined) { height = 158; }
    if (width === undefined) { width = 350; }
    if (icon === undefined) { icon = 'logo-cash-1'; }
    icon = require(`../../../../assets/images/${icon}.png`);
    return (
        <div
            className="dashboard-card-container"
            style={{
                background: 'no-repeat center center fixed',
                backgroundSize: 'cover',
                backgroundColor: background,
                backgroundImage: `url(${backgroundImage})`,
                height: `${height}px`,
                width: `${width}px`,
            }}
        >
            <Row gutter={24}>
                <Col lg={12} md={12} sm={2} xs={2}>
                    <img src={icon} className="icon-cash" alt="icon-cash" />
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24}>
                    <h6 className="card-desc-text">
                        <FormattedMessage id={balanceType} />
                    </h6>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={14}>
                    <p className="card-currency">
                        Rp<span className="card-amount">{balance}</span>
                    </p>
                </Col>
                <Col span={10} style={{ display: displayButton }}>
                    <AtiButton
                        id="submit"
                        text={<FormattedMessage id="label.add.cash" />}
                        className="add-cash-button"
                        events={{
                            onClick: () => {
                                if (navigate === undefined) {
                                    action();
                                } else {
                                    action();
                                    navigate(CONSTANTS.HISTORY_MENU_KEY);
                                    closeModal();
                                }
                            },
                        }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default CardDetail;