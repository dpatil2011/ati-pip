/**
* This component is part of the widget which is a base widget.
* And is used to accommodate other widgets that will be shown.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AtiSpinner } from 'ati-react-web';

class LoadingContainer extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        className: PropTypes.string,
        style: PropTypes.shape(),
        children: PropTypes.node.isRequired,
    }

    static defaultProps = {
        className: '',
        style: {},
    }

    render() {
        const {
            loading, children, className, style,
        } = this.props;
        return (
            <AtiSpinner
                spinning={loading}
            >
                <div
                    className={className}
                    style={style}
                >
                    { children }
                </div>
            </AtiSpinner>
        );
    }
}

export default LoadingContainer;