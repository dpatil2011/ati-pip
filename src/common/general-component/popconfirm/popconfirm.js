import React, { Component } from 'react';
import { AtiPopConfirm } from 'ati-react-web';

class PopConfirm extends Component {
    render() {
        return (
            <AtiPopConfirm
                {...this.props}
                getPopupContainer={(trigger) => {
                    return document.getElementById('contentDiv');
                }}
            >
                {this.props.children}
            </AtiPopConfirm>
        );
    }
}

export default PopConfirm;