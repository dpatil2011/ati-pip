/**
 * @author hosea.simanjuntak
 */
import React from 'react';
import PropTypes from 'prop-types';
import v from 'voca';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';

class LinkButton extends React.Component {
    static propTypes = {
        icon: PropTypes.string,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        icon: '',
        onClick: () => {},
    }

    render() {
        const {
            onClick, icon, text, id, className, style,
        } = this.props;
        const iconAttr = v.isEmpty(icon) ? {} : { icon };
        return (
            <React.Fragment>
                <AtiButton
                    {...this.props}
                    events={{
                        onClick,
                    }}
                    text={text}
                    id={id}
                    className={`link-button ${className}`}
                    style={style}
                    {...iconAttr}
                />
            </React.Fragment>
        );
    }
}

export default LinkButton;