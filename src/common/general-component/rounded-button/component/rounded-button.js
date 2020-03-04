import React from 'react';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';

class RoundedButton extends React.Component {
    render() {
        const {
            onClick, icon, text, id, className, style,
        } = this.props;
        return (
            <React.Fragment>
                <AtiButton
                    {...this.props}
                    id={id}
                    events={{
                        onClick,
                    }}
                    className={`rounded-button ${className}`}
                    text={
                        <span>
                            <img src={icon}
                                style={{ marginRight: "5px" }}
                            /> {text}
                        </span>
                    }
                    style={style}
                />
            </React.Fragment>
        );
    }
}

export default RoundedButton;