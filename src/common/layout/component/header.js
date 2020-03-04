import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Layout } from 'antd'
import './layout.css';
import iconCollapse from './../../../assets/images/icon-menu.png';
import iconNotif from './../../../assets/images/notification.png';
import iconContactUs from './../../../assets/images/contact-us.png';

const { Header } = Layout;
class LayoutHeader extends Component {
    static propTypes = {
        toogle: PropTypes.func,
        toogleDrawer: PropTypes.func
    }

    static defaultProps = {
        toogle: () => { },
        toogleDrawer: () => { }
    }

    render() {
        return (
            <Fragment>
                <Header style={{ background: '#f4f5f8', padding: '0 30px 0 24px' }}>
                    <img src={iconCollapse} className="trigger image-icon" onClick={this.props.toogleCollapse} />
                    <div className="float-right">
                    <img src={iconContactUs} className="trigger image-icon-drawer" onClick={this.props.toogleDrawerCollapse} />
                    <img src={iconNotif} className="trigger image-icon-drawer" onClick={this.props.toogleDrawerCollapse} />
                    </div>
                    <div className="float-right">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="float-right" style={{ marginTop: '3px', fontSize: '13px' }}>
                        {moment(new Date()).format("DD MMM YYYY")}
                    </div>
                </Header>
            </Fragment>
        )
    }
}

export default LayoutHeader;