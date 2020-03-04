import React, { Component } from 'react';
import { AtiButton } from 'ati-react-web';

class ButtonAddStrip extends Component {
    render() {
        const { text, events, className, style } = this.props;
        return (
            <AtiButton
                id="btnAdd"
                type="dashed"
                text={ text || 'Add'}
                events={
                    {
                        ...events,
                    }
                }
                className={className || 'button-add-table-form-dash'}
                style={style}
            />
        );
    }
}

export default ButtonAddStrip;