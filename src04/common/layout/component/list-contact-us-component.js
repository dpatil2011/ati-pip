import React from 'react';
import { Row, Col } from 'antd';
import './list-contact-us-style.css';

class ListContactUsComponent extends React.Component {
    render() {
        const { text, url } = this.props;
        const icon = require(`../../../assets/images/${this.props.icon}.png`);
        return (
            <React.Fragment>
                <a href={url} target="_blank">
                    <Row type="flex" align="middle" className="list-contact-us-background pd-5">
                        <Col span={16} offset={2}>
                            <div className="contact-text">{text}</div>
                        </Col>
                        <Col span={6}>
                            <img src={icon}/>
                        </Col>
                    </Row>
                </a>
            </React.Fragment>
        );
    }
}

export default ListContactUsComponent;