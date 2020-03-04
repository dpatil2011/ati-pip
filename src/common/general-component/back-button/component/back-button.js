/**
 * @author hosea.simanjuntak
 */
import React from 'react';
import PropTypes from 'prop-types';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';

class BackButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AtiButton
                    id={this.props.id}
                    events={{
                        onClick: this.props.onClick,
                    }}
                    className="back-button"
                    icon="close"
                    shape="circle"
                    size="large"
                />
            </React.Fragment>
        );
    }
}

export default BackButton;