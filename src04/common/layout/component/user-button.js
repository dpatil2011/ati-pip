import React, { Component, Fragment } from 'react';
import Popover from 'react-popover';
import PropTypes from 'prop-types';
import './user-button.css';
import { FormattedMessage } from 'react-intl';
import logoutIcon from '../../../assets/images/logout.png';

class UserButton extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    state = {
        isOpen: false,
    }

    tooglePopover = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
        }));
    }

    menuChild = () => [
        <a className="logout-button" href="javascript::;" onClick={this.props.onClick} >
            <FormattedMessage id="label.menu.signout" />
        </a>,
    ]

    render() {
        const { name } = this.props;
        return (
            <Fragment>
                <Popover
                    isOpen={this.state.isOpen}
                    place="below"
                    preferPlace="left"
                    body={this.menuChild()}
                    onOuterAction={this.tooglePopover}
                    style={{ 
                        width: '19%'
                    }}
                    className={this.props.collapsed ? 'pop-over-logout-collapsed' : ''}
                >
                    <a className="user-button" id="user-button" onClick={this.tooglePopover}>
                        <span className="username">{name}</span>
                    </a>
                </Popover>
            </Fragment>
        );
    }
}

export default UserButton;