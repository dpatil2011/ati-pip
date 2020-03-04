import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AtiBreadcrumb, AtiBreadcrumbItem } from 'ati-react-web';
import { FormattedMessage } from 'react-intl';

class Breadcrumb extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        link: PropTypes.string,
    }

    render() {
        const { link, text, subtitle } = this.props;
        return (
            <Fragment>
                <AtiBreadcrumb className="breadcrumb-page">
                    <AtiBreadcrumbItem href={link}>
                        <span className="label-breadcrumb"><FormattedMessage id={text} /></span>
                    </AtiBreadcrumbItem>
                    <AtiBreadcrumbItem>
                        <span className="label-breadcrumb"><FormattedMessage id={subtitle} /></span>
                    </AtiBreadcrumbItem>
                </AtiBreadcrumb>
            </Fragment>
        );
    }
}

export default Breadcrumb;