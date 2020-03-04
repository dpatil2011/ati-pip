import React, { Component, Fragment } from 'react';

class ContentPage extends Component {
    render() {
        const { classSuffix } = this.props;
        return (
            <Fragment>
                <div className={`dashboard-item shadow ${classSuffix}`} style={this.props.style}>
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default ContentPage;