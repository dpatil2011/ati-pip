import React from 'react';
import 'common/layout/component/layout';

class DivHeader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="div-title">
                    {this.props.title}
                </p>
            </React.Fragment>
        );
    }
}

export default DivHeader;