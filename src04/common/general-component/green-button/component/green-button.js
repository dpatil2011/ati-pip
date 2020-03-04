/**
 * @author hosea.simanjuntak
 */
import React from 'react';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';

class GreenButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AtiButton
                    {...this.props}
                    events={{
                        onClick: this.props.onClick,
                    }}
                    className={`green-button ${this.props.className}`}
                    text={this.props.text}
                    icon={this.props.icon}
                    block
                    id={this.props.id}
                />
            </React.Fragment>
        );
    }
}

export default GreenButton;